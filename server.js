const http = require("http");
/**
 * Logika untuk menangani dan menanggapi request dituliskan pada fungsi ini
 *
 * @param request: objek yang berisikaninformasi terkait permintaan
 * @param response: objek yang digunakan untuk menanggapi permintaan
 */

const requestListener = (request, response) => {
  // Menampilkan pesan ke browser
  response.setHeader("Content-Type", "text/html");

  response.statusCode = 200;
  response.end(`<h1>Halo HTTP Server!</h1>`);
};

const server = http.createServer(requestListener);

const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`Server berjalanpada http://${host}:${port}`);
});
