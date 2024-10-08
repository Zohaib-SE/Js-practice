// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Zohaib"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Zohaib",
            lastname: "Ali",
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}
const obj3 = {5: "a" , 6: "b"}

// const obj4 = { obj1, obj2}

// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);


const users = [
    {
        email:"Z@gmail.com",
        id: 1,
    },
    {
        email:"Z@gmail.com",
        id: 1,
    },
    {
        email:"Z@gmail.com",
        id: 1,
    },
]

// console.log(users[1].email)
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));

//DE-STRUCTURING


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Zohaib",
}

// course.courseInstructor

const {courseInstructor: instructor} = course // de-structuring of object

console.log(instructor);
// Expected result: Zohaib

// {
//     "name": "Zohaib",
//     "coursename": "js in hindi",
//     "price": "free"
// } // Json

[
    {},
    {},
    {},
]
