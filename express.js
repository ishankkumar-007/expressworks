const express = require('express')
const app = express()
app.get('/home', (req, res) => {
    res.end('Hello World!')
})
const PORT = process.argv[2] || 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});