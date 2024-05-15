"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
// Async function to insert data into a table
const client = new pg_1.Client({
    connectionString: 'postgresql://Atharva-3000:PiXBH4eAM3yW@ep-small-smoke-99087033.us-east-2.aws.neon.tech/test?sslmode=require'
});
// async function insertData(){
//   try {
//     await client.connect(); // Ensure client connection is established
//     const insertQuery = "INSERT INTO users (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');";
//     const res = await client.query(insertQuery);
//     console.log('Insertion success:', res); // Output insertion result
//   } catch (err) {
//     console.error('Error during the insertion:', err);
//   } finally {
//     await client.end(); // Close the client connection
//   }
// }
// insertData(); // Call the function to insert data into the table
// async function bestWay(userName:string, email:string, password:string){
//   try {
//     await client.connect();
//     const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3);";
//     const values = [userName, email, password];
//     const res = await client.query(insertQuery, values);
//     console.log('Insertion success:', res);
//   } catch (error) {
//     console.error('Error during the insertion:', error);
//   }
//   finally{
//     await client.end();
//   }
// }
// bestWay("Atharva", "4321@gmail.com", "heelo1234");
// fetching
function getUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const selectQuery = "select * from users where email = $1";
            const values = [email];
            const res = yield client.query(selectQuery, values);
            if (res.rows.length > 0) {
                console.log("User found", res.rows[0]);
                return res.rows[0];
            }
            else {
                console.log("User with this email does not exist");
                return null;
            }
        }
        catch (error) {
            console.error('Error during the insertion:', error);
        }
        finally {
            yield client.end();
        }
    });
}
getUser('user3@example.com').catch(console.error);
