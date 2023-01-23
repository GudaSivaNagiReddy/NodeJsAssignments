const express = require('express');

const app = express();

app.use('/add-product', (req, res, next) => {
    res.send('<form action="/user" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form>');
    
});
app.use('/user',(req, res, next) => {
    console.log(req.body);
    res.redirect('/')
});
app.use('/', (req, res, next) => {
    console.log('/ middleware');
    res.send('<p>The Middleware that handles just /</p>');
    return res.end();
});


app.listen(3008);