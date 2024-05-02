// axios vs fetch

// function main(){
//     fetch("https://sum-server.100xdevs.com/todos").then(async response =>{
//         const json = await response.json();
//         console.log(json)
//     });
// }

// async function main(){
//     const response = await fetch("https://sum-server.100xdevs.com/todos",{
//         method:"POST",
//         body:{
//             username:"Atharva",
//             password:"1234"
//         },
//         headers:{
//             "Authorization":"Bearer 123"
//         }
//     },
// );
//     const textualData = await response.text();
//     console.log(textualData);
// }
// main();

const axios = require("axios");
async function main() {
  const response = await axios({
    url: "https://httpdump.app/dumps/2435064c-c238-43be-b53e-17a2701dcaff",
    method: "POST",

    headers: {
      Authorization: "Bearer 123",
    },
    data: {
      username: "Atharva",
      password: "1234",
    },
  });
  console.log(response.data);
}
main();
