const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    if (req.url === '/') {
    res.writeHead(302, {'Location': '/home'});
    res.end();
  }

  else if (req.url === '/home') {
    fs.readFile('./public/home.html', (err, data) => {
      if (err) throw err;
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    });
  }

  else if (req.url === '/who') {
    fs.readFile('./public/who.html', (err, data) => {
      if (err) throw err;
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    });
  }

  else if (req.url === '/where') {
    fs.readFile('./public/where.html', (err, data) => {
      if (err) throw err;
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    });
  }

  else if (req.url === '/what') {
    fs.readFile('./public/what.html', (err, data) => {
      if (err) throw err;
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    });
  }

  else if (req.url === '/contact') {
    fs.readFile('./public/contact.html', (err, data) => {
      if (err) throw err;
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    });
  }

  else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.write('404 Not Found');
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000');
});
