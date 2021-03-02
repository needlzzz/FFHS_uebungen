const users = [
  { name: "Joe Bloggs", username: "jbloggs", email: "joe.bloggs@mail.com" },
  { name: "Marc Kaelin", username: "marcdk", email: "marc.kaelin@mail.com" },
];

let cbDiv = document.getElementById("cbdiv");
let div1 = document.createElement("div");
cbDiv.appendChild(div1);

// this function writes the users into the DIV
function injectUsers() {
  setTimeout(() => {
    let output = "";
    users.forEach((user) => {
      output += `<li>Name: ${user.name}, Username: ${user.username}, E-Mail: ${user.email}</li> \n <br> `;
    });
    div1.innerHTML = output;
  }, 2000);
}

function pushUser(newUser) {
  users.push(newUser);
  let decision = false;
}

const promisePush = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (1 == 1) {
      resolve("resolved!");
    }
  }, 1500);
});

promisePush.then(
  pushUser({ name: "marc k", username: "marckkk", email: "marc@marc.ch" })
);
promisePush.then(injectUsers);
