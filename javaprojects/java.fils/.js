// // let arry = ["krishna","kuppman","new value","rao"]

// // console.log(arry)

// // arry.splice(4,0,"added value1","added value2")
// // console.log(arry)

// // arry.slice(2,4)

// // let user = [
// //    // Example array for splice and slice demo
// // let arry = ["krishna", "kuppman", "new value", "rao"];
// // console.log("Original Array:", arry);

// // Using splice to insert values at index 4
// // arry.splice(4, 0, "added value1", "added value2");
// // console.log("After Splice:", arry);

// // // Using slice to get elements from index 2 to 4 (4 excluded)
// // let slicedArray = arry.slice(2, 4);
// // console.log("Sliced Array:", slicedArray);

// // User data
// let users = [
//   {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: { city: "Gwenborough" },
//     phone: "1-770-736-8031 x56442",
//     website: "hildegard.org"
//   },
//   {
//     id: 2,
//     name: "Ervin Howell",
//     username: "Antonette",
//     email: "Shanna@melissa.tv",
//     address: { city: "Wisokyburgh" },
//     phone: "010-692-6593 x09125",
//     website: "anastasia.net"
//   },
//   {
//     id: 3,
//     name: "Clementine Bauch",
//     username: "Samantha",
//     email: "Nathan@yesenia.net",
//     address: { city: "McKenziehaven" },
//     phone: "1-463-123-4447",
//     website: "ramiro.info"
//   }
//   // ... you can keep adding more objects if needed
// ];

// // Print each user's name
// users.map((user) => {
//   console.log(user.name);
// });

// let data = fetch("https://jsonplaceholder.typicode.com/users/")
//     .then((response) => response.json())
//     .then((json) => console.log(json));

    
    
// async function Fetching() {
//   let data = await fetch("https://jsonplaceholder.typicode.com/users/");
//   let users = await data.json();

//   users.forEach(function (user) {
//     let ptag = document.createElement("p");
//     ptag.innerText = `${user.name}, ${user.email}`;
//     document.querySelector("#container").appendChild(ptag);
//   });
// }

// Fetching();

let num = 5;
for (let i = 0; i < num; i++) {
  console.log(" ".repeat(num - i - 1) + "*".repeat(2 * i + 1));
}
