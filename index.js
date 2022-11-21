// JavaScript source code
const http = require("http");
const fs = require("fs");
var port = process.argv.slice(2)
port = parseInt(String(port).slice(7))
console.log(port);
//fs.readFile("home.html", (err, home) => {
//    console.log(home.toString());
//});
//fs.readFile("registration.html", (err, registration) => {
//    console.log(registration.toString());
//});
//fs.readFile("home.html", (err, home) => {
//    if (err) {
//        throw err;
//    }
//    http
//        .createServer((request, response) => {
//            response.writeHeader(200, { "Content-Type": "text/html" });
//            response.write(home);
//            response.end();
//        })
//        .listen(3000);
//});
let homeContent = "";
let projectContent = "";
let registrationContent = "";

fs.readFile("home.html", (err, home) => {
    if (err) {
        throw err;
    }
    homeContent = home;
});

fs.readFile("project.html", (err, project) => {
    if (err) {
        throw err;
    }
    projectContent = project;
});
fs.readFile("registration.html", (err, registration) => {
    if (err) {
        throw err;
    }
    registrationContent = registration;
});
http
    .createServer((request, response) => {
        let url = request.url;
        response.writeHeader(200, { "Content-Type": "text/html" });
        switch (url) {
            case "/project":
                response.write(projectContent);
                response.end();
                break;
            case "/registration":
                response.write(registrationContent);
                response.end();
                break;
            default:
                response.write(homeContent);
                response.end();
                break;
        }
    })
    .listen(port);

