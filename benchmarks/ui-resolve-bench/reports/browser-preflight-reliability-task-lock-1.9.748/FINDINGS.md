# Isolated-browser Reliability task lock — 1.9.748

The failed microscopy task is not replayed. This set carries forward only manuscript and geology, which were frozen before provider exposure in 1.9.747, and adds one fresh herbarium sheet-return task.

All three tasks start at 75/85 with only responsive and accessibility red. The new herbarium baseline was measured locally without provider/model exposure. Task, state, design, and evidence gates are green.

The provider-free browser preflight uses a dedicated local headless Chrome with no user profile, no login state, and no cloud browser. Browser-harness reports one active named `omd1748` connection. A new plan must declare `browser_execution_contract`; this makes the controller reject an absent endpoint, name, socket, or active connection before spending a model call.

No selected task has been exposed to a model. Execution remains forbidden until these bytes and the new preflight contract are separately committed and admitted.
