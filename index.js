import express from 'express'

const app = express()
const PORT = process.env.PORT || 8080

app.get('/', (req, res) => {
    return res.json({
        massage: "Hello from the server v3 deploy with health check"
    })
})

app.get("/health", (req, res) => {
  return res.json({
    status: 200,
    message: "OK",
  });
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})