// Tuples are unique to Typescript. Not present in Js.
// tuples fixed in length and type
// a array with 1st is number and 2nd string/fixed length arrays

const color: [number, number, number] = [255, 0, 255];

// [200, "OK"];
// [404, "Not Found"]

type HTTPResponse = [number, string];

const success: HTTPResponse = [200, "OK"];
// const success: HTTPResponse = ["OK", 200]; X-Error-X as order not followed.
const error: HTTPResponse = [404, "Not Found"];
// Ts cannot track if we use array methods like push and pop
// error.push(123);
// error.pop(); x3

// Enums are unique to Typescript. Not present in Js.
// Allows us to set named constants
// if we dont assign value each item gets defaulted from 0
// we can assign number,string for each item.
enum OrderStatus {
    PENDING = 111,
    SHIPPED = 222,
    DELIVERED = 333,
    RETURNED = 444
}

const ItemStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
    return status === OrderStatus.DELIVERED;
}