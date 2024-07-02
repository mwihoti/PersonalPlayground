## Greetings api 

####  GET /api/hello?visitor_name=Mark

`{
  "client_ip": "127.0.0.1",
  "location": "Kenya",
  "greeting": "Hello, Mark, the temperature is 12 degrees Celcius in Kenya"
}
`
#### GET https://hnghello-3ew80mpgh-mwihotis-projects.vercel.app/api/hello
`
{"client_ip":"102.219.208.44","location":"Kenya","greeting":"Hello, Guest!, the temperature is 12 degrees Celsius in Kenya"}
`

####  GET https://hnghello-3ew80mpgh-mwihotis-projects.vercel.app/api/hello?visitor_name=Mark
`
{"client_ip":"102.219.208.44","location":"Kenya","greeting":"Hello, Mark!, the temperature is 12 degrees Celsius in Kenya"}
`