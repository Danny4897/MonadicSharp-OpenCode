---
description: Run MonadicForge analysis on the current project
---
Run MonadicForge analysis on this C# project.
Execute: dotnet forge analyze --path ./src --format json
Show the results with:
- Green Score prominently (0-100)
- All Error findings first with file:line
- All Warning findings second
- Quick wins: top 3 fixes that would improve the score most
