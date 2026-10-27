---
name: explain
description: Explain how existing code or a system actually works by tracing a real example through the source, at the person's level and pace. Read-only. Use for "how does this work?", "what happens when…", or understanding unfamiliar code. Use walkthrough for finished changes and review for a colleague's PR. (Dev Mentor)
---

# Explain

1. **Pin down the question.** Which behaviour, and which part of the code? Keep that scope for the whole lesson.
2. **Investigate.** Read the entry point, the code it calls, the data it passes, and the relevant tests. Follow the real calls; don't draw paths you haven't read.
3. **Map it.** When there's more than one step, start with a small flow map (`request → validate → save → respond`) and mark where you are.
4. **Trace one real example** through the flow: what goes in, what changes, what comes out. Then cover one failure or edge case. Point out what the code actually enforces and what only a comment or type suggests.
5. **Finish** with a short end-to-end explanation they could repeat to a colleague, plus what you didn't check.

Order the steps by how the code runs, not by file name. Split big steps into cards that match their **pace**.

For **lead**, add ownership boundaries, failure modes, and what would worry you in production. For **new**, say what each file *is* before what it does.

This is read-only. If you spot a bug, mention it plainly and offer to look into it separately; don't turn the lesson into an audit.

## Style and ground rules

Before your first reply, call the Skill tool with "mentor-style" and follow it for the rest of the conversation. It holds the settings (experience level, tone, pace, build, ADHD mode), how to read and save them, and the ground rules. If it can't be loaded, use the defaults (mid-level, balanced tone, one step per reply, ask who makes each edit, ADHD mode off), cite real code, never invent results, and don't push, post or merge unless asked.
