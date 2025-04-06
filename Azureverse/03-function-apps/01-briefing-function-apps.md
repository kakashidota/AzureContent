# Briefing 01: Overview, Setup & Portal Deployment

## Objective:

Understand what Azure Functions are, how they work, and what tools and setups you'll need before your first mission.

## Covered in this briefing:

- What Azure Functions are and their role in serverless computing
- Difference between in-process and isolated process models
- Why Azure Functions require a storage account and what it does
- How to create an Azure Function App in the portal
- Brief demo of the Code + Test blade (and why it may be missing)
- Importance of function app configuration (plan, runtime stack, OS)
- Preview of what’s ahead: local development using VS, VS Code, and Rider

## 🧠 Quick Answers from the Field

- **What is an Azure Function?**  
  A tiny bit of code that runs in the cloud without you managing infrastructure. Write it, deploy it, forget the
  servers.

- **In-process vs Isolated?**  
  In-process = tight coupling with Azure runtime, faster but older.  
  Isolated = runs separately, modern, more flexible. Use this. Be future-proof.

- **Why the Storage Account?**  
  It’s your function's tactical HQ — stores logs, checkpoints, trigger info, and other operational goodness.

- **Creating in the portal?**  
  Easy UI walkthrough. You pick the runtime, stack, region — Azure spins up your function in a few clicks.

- **What's "Code + Test" and why is it missing?**  
  It only shows up for in-process + Windows-based function apps. If you're using isolated or Linux, it vanishes like a
  stealth drone.

- **What config actually matters?**  
  Your function plan (Consumption, Premium), runtime version, and OS determine cost, scale, and capabilities. Choose
  wisely, Cadet.

- **What comes next?**  
  Pick your dev weapon: Visual Studio, VS Code, or Rider. Then build and deploy like a pro in the next missions.

This is your function field manual. Read it. Watch it. Then suit up.

---

Next up:

- [🎥 Briefing: Overview, Setup & Portal Deployment](https://youtu.be/0pIChjWsIJo)
- [📄 Mission 01: Build Your First Function (Visual Studio)](01-mission-build-your-first-function.md)
