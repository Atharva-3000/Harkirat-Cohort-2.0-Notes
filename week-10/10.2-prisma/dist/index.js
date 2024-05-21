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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// async function insertUser(username: string, password: string, firstName: string, lastName: string) {
//   const res = await prisma.user.create({
//     data:{
//         email:username,
//         password,
//         firstName,
//         lastName
//     },
//     // select is used to return only the id of the created user or any other field
//     select:{
//         id:true,
//         password:true,
//     },
//   })
//   console.log(res);
// }
// insertUser("test@1.gmail.com","123456","test1","test1");
// interface UpdateParams {
//     firstName: string;
//     lastName: string;
// }
// async function updateUser(username: string, {
//     firstName,
//     lastName
// }: UpdateParams) {
//     const res = await prisma.user.update({
//         where:{email:username,},
//         data:{
//             firstName,
//             lastName
//         }
//     })
//     console.log(res);
// }
// updateUser("test@1.gmail.com",{firstName:"test2",lastName:"test2"});
function getUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.findFirst({
            where: {
                email: username
            },
            select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true
            }
        });
        console.log(res);
    });
}
getUser("test@1.gmail.com");
