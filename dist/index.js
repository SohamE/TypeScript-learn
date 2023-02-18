"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
;
let user1;
axios_1.default.get("https://jsonplaceholder.typicode.com/users/1").then((res) => {
    const { id, name, email, address: { city, zipcode } } = res.data;
    // console.log(city);
    subset({ id, name, email, address: { city, zipcode } });
}).catch((e) => {
    console.log(`Error - ${e}`);
});
const subset = ({ id, name, email, address: { city, zipcode } }) => {
    console.log(name);
};
