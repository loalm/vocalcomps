const express = require('express');
const firebase_controller = require('./firebase_controller.js')
const app = new express();
const port = 8080

app.use(express.static('public', {
    extensions: ['html', 'htm']}))

const myData = firebase_controller.data()

app.listen(port, async function() {
    myData.then((data) => {
        console.log(`Example app listening on port ${port}! Here is my data: ${data}`)
    })
})
