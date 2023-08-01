namespace api.Components;

public interface IComponentService
{
    public IEnumerable<Component> GetComponents();
    public void AddComponent(Component component);
}

public class ComponentService : IComponentService
{
    private readonly ComponentContext Context;

    public ComponentService(ComponentContext context) {
        Context = context;
    }

    public IEnumerable<Component> GetComponents()
    {
        return Context.Components;
    }

    public void AddComponent(Component component) {
        Context.Components.Add(component);
        Context.SaveChanges();
    }
}