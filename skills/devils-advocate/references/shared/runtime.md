# Adapting to the current assistant

The host runs these instructions using its existing model, tools, authentication, and permissions. Skill installation does not add tools, model access, a process, or a sandbox. Apply capabilities exposed in this session rather than inferring them from the editor's name.

| Needed capability | Use what the session exposes |
| --- | --- |
| Load another workflow | Native skill invocation, or read the linked Markdown entry and relevant references. Resolve links relative to the file containing them. |
| Inspect evidence | Available file, search, diff, test-result, and repository tools. Label gaps when files or execution are unavailable. |
| Track a lesson | Keep its checkpoint in the conversation. Use the session contract for requested save/resume. |
| Watch PR comments and CI | Use mentor's watch mode with the host's actual scheduler and repository tools, or a bounded live-session loop. Confirm the target and running mechanism before claiming a watch; report unavailable persistence. |
| Ask a question | The host's question tool or ordinary chat; never invent a tool name. |
| Delegate | Discover the actual spawn, message/resume, wait, model-selection, and cancellation interfaces. Use supported arguments only. |
| Export | Use the shared export mechanism and the integrations the current user has connected. |

For a delegated task, specify the goal, bounded evidence, expected output, allowed actions, and return condition. Apply host-enforced read-only/tool restrictions when available. A prompt saying “read-only” is only behavioural guidance; disclose that limit. Give workers separate result locations or keep their results in messages. Do not let parallel workers edit shared lesson state.

Ordinary investigation can use optional workers when authorised and helpful, or run in the current conversation. A requested three-model debate must use the devil's-advocate execution contract: three sessions on one model do not qualify. A plugin manifest cannot expand the host's selectable models. Do not translate an unavailable model into “inherit” or silently change providers.

Prefer native delegation. An existing approved external-model tool or CLI is an option only when it can select the required models, preserve separate conversations, return results, and honour the permitted scope. Discover its current interface; this pack does not install a runner or manage credentials. Surface the evidence destination and ordinary model usage costs before starting such a route. Honour existing authorisation rather than asking repeatedly.

If a required capability is absent, retain the current position and explain the specific missing capability. Offer a portable brief for another host or user-run sessions. Do not call simulated perspectives an independent debate. Basic teaching can continue with the model and evidence available.
