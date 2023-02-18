import axios from "axios";

interface User {
    id: number,
    name: string,
    email: string,
    address: {
        city: string;
        zipcode: string;
    };
};

let user1: User;

axios.get("https://jsonplaceholder.typicode.com/users/1").then((res) => {
    const { id, name, email, address: { city, zipcode } }: User = res.data;
    // console.log(city);
    subset({ id, name, email, address: { city, zipcode } });
}).catch((e) => {
    console.log(`Error - ${e}`);
});

const subset = ({ id, name, email, address: { city, zipcode } }: User): void => {
    console.log(name);
}

