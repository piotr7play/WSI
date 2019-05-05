Created by Krzysztof Taborowski, Jakub Sobyra

## Requirements

Install dotnet core from here https://dotnet.microsoft.com/download

## Start server with Visual Studio 

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

### GET
`api/Phaistos/convert?text` 
Convert text to audio. Return byte array with with audio.

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

