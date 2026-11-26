# Where chat history lives

Use the first source that works, in this order:

1. **The host's own tools.** If the session exposes a tool that lists or searches past sessions (for example a thread or session search tool), use it: it knows the current format and respects the host's permissions.
2. **A local store** from the table below, read-only.
3. **What the person gives you:** pasted chats, an exported file, or a folder of transcripts.

The paths below were checked in November 2026 and can change with any update. Before reading a store, confirm it exists and inspect its shape (`sqlite3 -readonly <db> ".tables"` and `.schema <table>`, or the keys of the first few JSON lines). If it doesn't match, say what you found and ask for an export instead of guessing.

| Assistant | Where | Shape | The person's messages |
| --- | --- | --- | --- |
| T3 Code | `~/.t3/userdata/statev2.sqlite` | SQLite. Messages in `orchestration_v2_projection_messages`; chats in `orchestration_v2_projection_threads`; project folders in `projection_projects`. | `role = 'user'` with `json_extract(payload_json, '$.createdBy')` absent or `'user'`; text in `$.text`. Skip threads whose `$.lineage.relationshipToParent` is `'subagent'`. |
| OpenCode | `~/.local/share/opencode/opencode.db` (older versions: JSON files under `~/.local/share/opencode/storage/`) | SQLite. `session` (has `directory`, `parent_id`), `message`, `part`. | Messages whose `data` has role `user`; their text is in the `part` rows. Skip sessions with a `parent_id` (subagents). |
| Claude Code | `~/.claude/projects/<folder-path-with-dashes>/<session>.jsonl` | One JSON object per line. | Lines with `"type": "user"`; text in `message.content`. Skip tool results and `queue-operation` lines. |
| Codex | `~/.codex/sessions/<yyyy>/<mm>/<dd>/rollout-*.jsonl` | One JSON object per line. | User message items; check the first lines for the field names. |
| Cursor | `~/.cursor/projects/<folder-path-with-dashes>/agent-transcripts/<id>/<id>.jsonl` | One JSON object per line, one message each. | User messages; order chats by file modification time, not by ID. |

## Filtering to one project

- **T3 Code:** match the project's folder in `projection_projects`, or a thread's `$.worktreePath`, against the project's path.
- **OpenCode:** `session.directory`.
- **Claude Code and Cursor:** the folder name is the project path with each `/` turned into `-`.
- **Codex:** the working directory recorded near the start of each file.

Worktrees of the same project have different paths: include them when the person picks "This project".

## A batch read, not a chat read

When there are dozens of chats, return only the fields you need, for example with one read-only query that pulls the person's messages for the window:

```sql
SELECT m.thread_id, m.created_at, json_extract(m.payload_json, '$.text') AS text
FROM orchestration_v2_projection_messages m
JOIN orchestration_v2_projection_threads t ON t.thread_id = m.thread_id
WHERE m.role = 'user'
  AND COALESCE(json_extract(m.payload_json, '$.createdBy'), 'user') = 'user'
  AND COALESCE(json_extract(t.payload_json, '$.lineage.relationshipToParent'), '') <> 'subagent'
  AND m.created_at >= '2026-10-27'
ORDER BY m.created_at;
```

Adapt it to the store's real schema. Send the rows to subagents or a script for grouping; only the findings come back to this conversation.
