const fs = require("fs");

const requestHandler = (req,res) => {
    const url = req.url;
    const method = req.method;
    if (url === "/") {
        res.setHeader("Conteny-Type","text/html");
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('</html>');
        res.write('<body><h1><center>Welcome I,m Siva .This is my assignment-1</h1></center><center><form action="/username" method="POST"><input type="text" name="User-Name"></br><button type="submit">Submit</button></form></center></body>'); 
        return res.end();    
    }
    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === "/username" && method === "POST"){
        const body = [];
        req.on("data", (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            let user = parsedBody.split("=")[1];
            console.log(user);
            fs.writeFileSync('dataStore.txt', user, () => {
                res.statusCode = 305;
                res.setHeader('Location', '/');
                res.end();
            });
            
        });
    }
    res.setHeader("Conteny-Type","text/html");
    res.write('<html>')
    res.write('<body><center><h1>Thank you!</h1><h2>Your are successfully submitted.</h2></center></body>')
    res.write('</html>')
    res.end();
};
module.exports = requestHandler;