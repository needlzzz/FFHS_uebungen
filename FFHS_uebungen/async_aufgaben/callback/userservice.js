const users = [
  { name: "Joe Bloggs", username: "jbloggs", email: "joe.bloggs@mail.com" },
  { name: "Marc Kaelin", username: "marcdk", email: "marc.kaelin@mail.com" },
];

let cbDiv = document.getElementById("cbdiv");
let div1 = document.createElement("div");
cbDiv.appendChild(div1);

// this function writes the users into the DIV
function getUsers() {
  setTimeout(() => {
    let output = "";
    users.forEach((user) => {
      output += `<li>Name: ${user.name}, Username: ${user.username}, E-Mail: ${user.email}</li> \n <br> `;
    });
    div1.innerHTML = output;
  }, 2000);
}

//this function adds a new user to the users-array
function addUser(newUser, callback) {
  setTimeout(() => {
    users.push(newUser);
  }, 1000);
  callback();
}

getUsers();

addUser(
  { name: "John Doe", username: "johnd", email: "john.doe@mail.com" },
  getUsers
);

console.log(users);
