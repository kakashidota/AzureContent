# 🧪 Exercise 1: Build a Minimal .NET API for Pokémon (CRUD)

In this hands-on exercise, you'll build a Minimal API using **.NET 8** that performs basic **CRUD operations** (Create, Read, Update, Delete) on a list of Pokémon stored in memory. This sets the foundation for deploying to Azure and connecting with Azure Functions in later exercises.

---

### 🎯 Learning Objectives

- Set up a minimal API using .NET 8 and C#
- Work with an in-memory list as a fake database
- Create simple, readable CRUD endpoints
- Prepare your API for deployment to Azure in the next step

---

### 🛠 Prerequisites

Make sure you have the following installed:

- [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download)
- [Visual Studio Code](https://code.visualstudio.com/)
- C# extension for VS Code
- REST client like [Thunder Client](https://www.thunderclient.com/) or Postman

---

### 📁 Folder Structure

```bash
PokemonApi/
├── Program.cs
└── Models/
    └── Pokemon.cs
```

---

### 🚀 Step-by-Step Instructions

#### 1. Create the project

```bash
dotnet new web -n PokemonApi
cd PokemonApi
```

#### 2. Create the Pokémon model

In a new folder called `Models`, add a file `Pokemon.cs`:

```csharp
namespace PokemonApi.Models;

public class Pokemon
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public string Type { get; set; } = "";
}
```

#### 3. Add the Minimal API code

Replace the content of `Program.cs` with the following:

```csharp
using PokemonApi.Models;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

var pokemons = new List<Pokemon>
{
    new Pokemon { Id = 1, Name = "Pikachu", Type = "Electric" },
    new Pokemon { Id = 2, Name = "Charmander", Type = "Fire" }
};

app.MapGet("/pokemons", () =>
{
    return pokemons;
});

app.MapGet("/pokemons/{id}", (int id) =>
{
    var pokemon = pokemons.FirstOrDefault(p => p.Id == id);

    if (pokemon == null)
    {
        return Results.NotFound();
    }

    return Results.Ok(pokemon);
});

app.MapPost("/pokemons", (Pokemon newPokemon) =>
{
    newPokemon.Id = pokemons.Max(p => p.Id) + 1;
    pokemons.Add(newPokemon);

    return Results.Created($"/pokemons/{newPokemon.Id}", newPokemon);
});

app.MapPut("/pokemons/{id}", (int id, Pokemon updatedPokemon) =>
{
    var existingPokemon = pokemons.FirstOrDefault(p => p.Id == id);

    if (existingPokemon == null)
    {
        return Results.NotFound();
    }

    existingPokemon.Name = updatedPokemon.Name;
    existingPokemon.Type = updatedPokemon.Type;

    return Results.Ok(existingPokemon);
});

app.MapDelete("/pokemons/{id}", (int id) =>
{
    var pokemonToDelete = pokemons.FirstOrDefault(p => p.Id == id);

    if (pokemonToDelete == null)
    {
        return Results.NotFound();
    }

    pokemons.Remove(pokemonToDelete);
    return Results.NoContent();
});

app.Run();
```

---

### 🧪 Test Your API

You can test your API using Thunder Client, curl, or Postman.

| Method | Endpoint           | Description         |
|--------|--------------------|---------------------|
| GET    | `/pokemons`        | Get all Pokémon     |
| GET    | `/pokemons/{id}`   | Get one by ID       |
| POST   | `/pokemons`        | Add a new Pokémon   |
| PUT    | `/pokemons/{id}`   | Update a Pokémon    |
| DELETE | `/pokemons/{id}`   | Delete a Pokémon    |

#### 📝 Example JSON for POST/PUT:

```json
{
  "name": "Bulbasaur",
  "type": "Grass"
}
```

---

### ✅ Next Step

In the next exercise, you’ll deploy this API to **Azure App Service** directly from **Visual Studio Code**, and then use **Azure Functions** to fetch data from it.

➡️ [Go to Exercise 2 →](#) _(link it once ready)_
