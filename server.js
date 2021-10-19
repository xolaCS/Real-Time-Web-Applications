let http = require('http');

const NODE_PORT = 8080; 

const homePage = '<h1 style="color:red">You are at the home page</h1>'; 

http.createServer(
    function( req, res ) {
        console.log("Server running at port: " + NODE_PORT)
        res.writeHead(200, {'Content-Type': 'text/plain'} ); 
        let response; 
        if (req.url === "/"){
            response = homePage;
        } else if (req.url === "/about"){
            response = "You are on the about page";
        } else {
            response = "404 Page not found" ;
        }; 
        res.write(response); 
        res.end(); 
    }
).listen(NODE_PORT); 

// interface SearchResult {
//     heading: string;
//     body: string;
// }

// interface SearchResponse {
//     searchKey : String; 
//     results : Array<SearchResult>; 
// }