using Microsoft.AspNetCore.Mvc;

namespace api.Components;

[ApiController]
[Route("[controller]")]
public class ComponentController : ControllerBase
{
    private readonly IComponentService ComponentService;

    public ComponentController(IComponentService componentService) {
        ComponentService = componentService;
    }

    [HttpGet]
    public JsonResult Index() {
        return new JsonResult(ComponentService.GetComponents());
    }

    [HttpPost]
    public void Index(string Name) {
        ComponentService.AddComponent(new Component() { Name = Name });
    }
}
