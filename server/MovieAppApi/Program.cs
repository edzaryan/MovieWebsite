
using Microsoft.Extensions.DependencyInjection;
using MovieAppApi.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

// builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationSchema).AddJwtBearer();
builder.Services.AddSingleton<IRepository, InMemoryRepository>();
builder.Services.AddCors(options =>
{
    var frontendURL = builder.Configuration.GetValue<string>("frontend_url");
    options.AddDefaultPolicy(policy =>
    {
        policy
            .WithOrigins(frontendURL)
            .AllowAnyMethod()
            .AllowAnyHeader();
    });
});

var app = builder.Build();

app.UseHttpsRedirection();
app.UseRouting();
app.UseCors();
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();

