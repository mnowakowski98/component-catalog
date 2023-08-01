var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapGet("/components", () =>
{
    var components = new List<Component>
    {
        new Component() { Name = "Derp" },
        new Component() { Name = "Derp2" },
        new Component() { Name = "Derp3" }
    };
    return components;
})
.WithName("GetWeatherForecast")
.WithOpenApi();

app.Run();

record Component {
    public required string Name { get; set; }

}
