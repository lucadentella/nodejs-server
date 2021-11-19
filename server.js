const http = require('http');

const hostname = '0.0.0.0';
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('Hello World, cluster: ' + process.env.CLUSTER_NAME + "\n");
  if(process.env.PRINT_HEADERS == 'true') {
	res.write("\nREQUEST HEADERS:\n");
	for(var header in req.headers)	
		res.write(header + ": " + req.headers[header] + "\n");
  }
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
