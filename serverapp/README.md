Created by Krzysztof Taborowski

## Requirements

Install dotnet core from here https://dotnet.microsoft.com/download

## Start server

To run server application:
* Go to serverapp folder.
* Run command `dotnet build`
* Run command `dotnet run`

## API

### URL
http://localhost:8888/api/Phaistos

### GET
`/api/Phaistos` 
Disc string value, two sites.
`{
    "siteA": "site A string value",
    "siteB": "site B string value"
}`

---
`/api/Phaistos/{nr}` 
Get syllabe numer `{nr}`.
`{
    "Id": 5,"Syllabe": "value"
}`

---

### POST
`/api/Phaistos` 
Set sybol syllabe.
`{
    "Id": 5,"Syllabe": "value"
}`

---

