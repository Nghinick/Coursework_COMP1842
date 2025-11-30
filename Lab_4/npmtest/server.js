const http = require('http'); // Import Node.js core module
const server = http.createServer(function (req, res) {  // Create web server
  if (req.url == '/') { // Check the URL of the current request
    // Set response header
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // Set response content
    res.write('<html><body><p>This is home Page. Tran Vinh Nghi</p></body></html>');
    res.end();
  } 
  else if (req.url == '/TVN') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><p>This is student Page. Tran Vinh Nghi</p></body></html>');
    res.end();
  } 
  else if (req.url == '/admin') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><p>This is admin Page. Tran Vinh Nghi</p></body></html>');
    res.end();
  } 
  else if (req.url == '/data') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({ message: "Hello World JSON. Tran Vinh Nghi" }));
    res.end();
  } 
  else {
    res.end('Invalid Request!');
  }
});

server.listen(8000); // Listen for any incoming requests
console.log('Node.js web server at port 8000 is running..');
