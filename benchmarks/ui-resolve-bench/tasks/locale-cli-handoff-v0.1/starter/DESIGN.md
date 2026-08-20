# Northstar setup DESIGN.md

## Product and source contract

Northstar is a local UI workflow for coding agents. This task covers only the
installation handoff. The complete known facts are:

- install command: `npx northstar-ui@1.4 setup --agent claude-code`
- the local package contains 12 checked reference packs;
- the local package contains 3 workflows;
- setup writes `DESIGN.md` inside the current project;
- setup does not require an API key.

Do not invent customer counts, rankings, speed or productivity outcomes,
security guarantees, integrations, cloud sync, collaboration, paid plans, or
supported agents beyond the command above.

## Locale contract

- Canonical facts, numbers, command, file name, and behavior stay identical.
- KO, EN, JA, ZH-CN, and ZH-TW are independent product copy.
- JA uses concise product terminology and a consistent polite register.
- ZH-CN uses `AI 编程助手`, `项目`, and `代码仓库`.
- ZH-TW uses `AI 程式助理`, `專案`, and `程式碼儲存庫`.
- ZH-TW is not a character conversion of ZH-CN.
- The action label must describe copying, and its status must confirm copying.

## Visual system

- Page background: `#FAFAFA`
- Surface: `#FFFFFF`
- Primary action: `#5546FF`
- Accent: `#A89CFF`
- Ink: `#0A0A0F`
- Muted text: `#66636F`
- Border: `#E5E3EA`
- Body and display: `system-ui, sans-serif`
- Main panel radius: `14px`
- Controls: `10px`
- Minimum interactive target: `44px`

Use one tab list and one visible panel. Keep elevation flat with a quiet
hairline border. Do not add glass, gradients, decorative left accent bars,
nested cards, or ornamental badges.

## Interaction and accessibility

- Tabs expose selected state and control their matching panels.
- Only the selected panel is visible.
- Copy is a direct one-click action with a polite live-region confirmation.
- Keyboard focus is visible and distinct from selected state.
- Reduced motion removes non-essential transitions.
- Long locale labels wrap inside content, never outside the viewport.
