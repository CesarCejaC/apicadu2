const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000
const regimenRoutes = require('./src/routes/regimen.routes')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//root page
app.get('/', (req, res) => {
    res.send('This is the root page')
    console.log('root page')
})

//regimen roots
app.use('/api/regimen', regimenRoutes)

//listening port
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
