using Microsoft.EntityFrameworkCore;

namespace api.Components;

[PrimaryKey("Name")]
public record Component {
    public required string Name { get; set; }
}

