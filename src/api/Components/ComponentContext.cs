using Microsoft.EntityFrameworkCore;

namespace api.Components;

public class ComponentContext : DbContext
{
    public ComponentContext(DbContextOptions<ComponentContext> options) : base(options) {}

    public DbSet<Component> Components { get; set; }
}
