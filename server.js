const express = require('express');
const app = new express();
const port = 8080



app.use(express.static('public', {
    extensions: ['html', 'htm']}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
