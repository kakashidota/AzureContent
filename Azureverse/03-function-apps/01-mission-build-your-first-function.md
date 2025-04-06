# Mission 01: Build Your First Function (Visual Studio)

## Objective:

Create your first Azure Function using Visual Studio and wire it up to the Chuck Norris API. This mission includes some
tactical tips for code quality and local testing.

## Loadout:

- Visual Studio with Azure Development workload
- .NET 8 SDK (or supported version)
- Chuck Norris humor module (optional but encouraged)

## Deployment Flow:

1. New project → Azure Functions (.NET Isolated)
2. Implement a GET-triggered function that calls https://api.chucknorris.io/jokes/random
3. Return just the `"value"` of the joke in the response
4. Run locally and test your endpoint
5. Check console logs to confirm you're operational

---

Next up:

- [🎥 Mission 01: Build Your First Function (Visual Studio)](https://youtu.be/0pIChjWsIJo)
- [📄 Mission 02: Deploy via Visual Studio](02-mission-deploy-via-visual-studio.md)
