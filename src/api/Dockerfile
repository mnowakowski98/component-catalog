FROM mcr.microsoft.com/dotnet/sdk AS build
WORKDIR /source
COPY . .
RUN dotnet publish -c release -o /app

FROM mcr.microsoft.com/dotnet/aspnet
WORKDIR /app
COPY --from=build /app ./

EXPOSE 80 443

ENTRYPOINT [ "dotnet", "api.dll"]