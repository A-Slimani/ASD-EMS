const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
app.use(express.static(path.join('asd-ems-frontend', 'build')));
app.use('*', express.static(path.join('asd-ems-frontend', 'build')))

app.get('*', (request, response) => {
	response.sendFile(path.join('./asd-ems-frontend', 'build', 'index.html'))
})

app.listen(port, () => console.log(`Server is running on port ${port}!`));
