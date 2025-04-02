# 🧪 Exercise 3: Use Azure Functions to Fetch Data from Your Minimal API

In this exercise, you’ll create a simple **Azure Function** that fetches data from your deployed Minimal API. This is a great intro to **serverless APIs** and shows how Azure Functions can be used to build lightweight integrations in the cloud.

---

### 🎯 Learning Objectives

- Create a .NET Azure Function
- Use `HttpClient` to fetch data from an external API
- Read configuration using environment variables
- Return results in a clean JSON response

---

### 🛠 Prerequisites

Make sure you have:

- Your Minimal API deployed to Azure App Service  
- [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download)
- [Azure Functions Core Tools](https://learn.microsoft.com/en-us/azure/azure-functions/functions-run-local)
- Visual Studio Code with Azure Functions and C# extensions
- Azure CLI + signed in (`az login`)

---

### 📁 Folder Structure

```bash
PokeDexFunctions/
├── local.settings.json
├── host.json
├── PokeDexFunctions.csproj
└── Function1.cs
```

---

### 🚀 Step-by-Step

#### 1. Create the Azure Functions App

```bash
func init PokeDexFunctions --worker-runtime dotnet --target-framework net8.0
cd PokeDexFunctions
func new --name Function1 --template "HTTP trigger" --authlevel "Anonymous"
```

---

#### 2. Replace the Code in `Function1.cs`

```csharp
namespace PokeDexFunctions
{
    public class Function1
    {
        private static readonly HttpClient httpClient = new();

        [Function("GetPokemons")]
        public async Task<HttpResponseData> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get")] HttpRequestData req,
            FunctionContext context)
        {
            var apiUrl = Environment.GetEnvironmentVariable("PokemonApiUrl");
            var response = await httpClient.GetAsync($"{apiUrl}/pokemons");

            var result = req.CreateResponse(response.StatusCode);
            result.Headers.Add("Content-Type", "application/json");
            await result.WriteStringAsync(await response.Content.ReadAsStringAsync());

            return result;
        }
    }
}
```

---

#### 3. Update `local.settings.json`

```json
{
  "IsEncrypted": false,
  "Values": {
    "FUNCTIONS_WORKER_RUNTIME": "dotnet",
    "PokemonApiUrl": "https://<your-minimal-api>.azurewebsites.net"
  }
}
```

📝 Replace `<your-minimal-api>` with the actual name of your deployed App Service.

---

#### 4. Run the Function Locally

```bash
func start
```

Now visit:
```
http://localhost:7071/api/GetPokemons
```

You should see the Pokémon data returned from your deployed API 🎉

---

### ✅ What You’ve Learned

- How to fetch external API data from Azure Functions
- How to pass config via environment variables
- A clean starting point for integrating Minimal APIs and serverless functions

---

### 🚀 Bonus

Try adding:
- A POST function to add a new Pokémon
- Error handling for failed requests
- Deployment to Azure via VS Code or CLI
