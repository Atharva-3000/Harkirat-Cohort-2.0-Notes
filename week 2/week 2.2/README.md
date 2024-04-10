//  Node.js is used for backend.
// We can do the following using node
// Create CLIs
// Create a video player
// create a game
// ⚠️⚠️ create an HTTP Server: things which let backend and frontend commmunicate, authentication, exposes to the internet,
// it is some code that follows the http protocol and is able to communicate with clients


// things client needs to worry about
// 1. Protocol
// 2. Address/URL
// 3. Route
// 4. Headers - Body Query - Params
// 5. Method: GET, POST, PUT, DELETE


// ⭕⭕Interview question: what happens when you search google and press enter:
// Step: 1 Browser parses the URL
//  Step: 2 Does a DNS lookup (converts url to ip)
//  Step: 3 Establishes a connection to the IP(handshake)

// HTTP Protocol: Things that happen on your server after receiving the request.

// 1. You get the inputs(route, body and headers).
// 2. You do some logic on the input, calculate the output
// 3. You return the output body, headers and stat

Status code
200: Success
404: not found
403: authentication issues
500: internal server error