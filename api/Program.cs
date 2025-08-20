namespace FCamara.CommissionCalculator
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Controllers + Swagger
            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            // CORS (nomeado) — permita a origem do CRA (http e https)
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("DevCors", policy =>
                    policy.WithOrigins("http://localhost:3000", "https://localhost:3000")
                          .AllowAnyHeader()
                          .AllowAnyMethod());
            });

            var app = builder.Build();

            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseCors("DevCors");
            app.UseAuthorization();
            app.MapControllers();

            app.Run();
        }
    }
}
