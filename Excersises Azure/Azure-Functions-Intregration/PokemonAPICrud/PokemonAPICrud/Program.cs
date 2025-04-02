
using PokemonAPICrud.Models;

namespace PokemonAPICrud
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddAuthorization();

            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();


            //Mockdatabase
            var pokemons = new List<Pokemon>
            {
                new Pokemon { Id = 1, Name = "Pikachu", Type = "Electric"},
                new Pokemon { Id = 2, Name = "Charizard", Type = "Fire" },
                new Pokemon { Id = 3, Name = "Diglet", Type = "Earth" }
            };

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();

            // GET ALL POKEMONS
            app.MapGet("/pokemons", () =>
            {
                return pokemons;
            });



            // GET BY ID
            app.MapGet("/pokemons/{id}", (int id) =>
            {
                var pokemon = pokemons.FirstOrDefault(p => p.Id == id);

                if (pokemon == null)
                {
                    return Results.NotFound();
                }

                return Results.Ok(pokemon);

            });


            // CREATE POKEMON
            app.MapPost("/pokemons", (Pokemon newPokemon) =>
            {
                newPokemon.Id = pokemons.Max(p => p.Id) + 1;
                pokemons.Add(newPokemon);

                return Results.Created($"/pokemons/{newPokemon.Id}",newPokemon);
            });

            // Update pokemon
            app.MapPut("/pokemons/{id}", (int id, Pokemon updatePokemon) =>
            {
                var existingPokemon = pokemons.FirstOrDefault(p => p.Id == id);

                if(existingPokemon == null)
                {
                    return Results.NotFound();
                }

                existingPokemon.Name = updatePokemon.Name;
                existingPokemon.Type = updatePokemon.Type;

                return Results.Ok(existingPokemon);
            });



            // DELETE POKEMON
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
        }
    }
}
