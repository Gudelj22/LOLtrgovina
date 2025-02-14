using Backend.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

builder.Services.AddSwaggerGen();

// dodavanje db contexta
builder.Services.AddDbContext<BackendContext>(o => {
    o.UseSqlServer(builder.Configuration.GetConnectionString("LOLtrgovinaContext"));
});

var app = builder.Build();


    app.MapOpenApi();


app.UseHttpsRedirection();

app.UseAuthorization();

app.UseSwagger();
app.UseSwaggerUI(p =>
{
    p.EnableTryItOutByDefault();
    p.ConfigObject.AdditionalItems.Add("requestSnippetsEnabled", true);
});

app.MapControllers();

app.UseStaticFiles();
app.UseDefaultFiles();
app.MapFallbackToFile();

app.Run();
