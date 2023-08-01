FROM mcr.microsoft.com/dotnet/sdk AS build
ENV PATH="${PATH}:/root/.dotnet/tools"
WORKDIR /source
COPY . .
RUN dotnet tool install --global dotnet-ef
RUN dotnet ef migrations add InitialCreate
RUN dotnet ef database update
RUN dotnet publish -c release -o /app

FROM mcr.microsoft.com/dotnet/aspnet
WORKDIR /app
COPY --from=build /app ./

EXPOSE 80 443

ENTRYPOINT [ "dotnet", "api.dll"]