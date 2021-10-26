const express = require('express')
const path = require('path');

const app = express()
const port = process.env.PORT || 8000
app.use(express.static(path.join("asd-ems-frontend", "build")));

app.listen(port, () => console.log(`Server is running on port ${port}!`))
