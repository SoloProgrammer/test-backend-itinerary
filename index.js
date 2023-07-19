const express = require('express');
const app = express()
const cors = require('cors');

const openAiRoutes = require('./routes/openAiRoutes')

const PORT = process.env.PORT || 8080

app.use(express.json())

// CORS configuration.........
const Allowed_Origins = process.env.ALLOWED_ORIGINS.split(', ');
app.use(cors({ origin: Allowed_Origins }));

app.use('/api/ai/', openAiRoutes)

app.get('/', (req, res) => {
    res.send(`Server is running on PORT ${PORT}..... <a href="https://main--remarkable-creponne-d03799.netlify.app">Click here</a> to visit FrontEnd`)
})

app.listen(PORT, (err) => {
    if (err) throw new Error("Some Error happens:", err.message)
    console.log("Server is running...")
})
