console.log("es gaht");

const users = [
  { name: "Joe Bloggs", username: "jbloggs", email: "joe.bloggs@mail.com" },
  {
    name: "sandra williams",
    username: "swilliams",
    email: "sandra.williams@mail.com",
  },
];

let ul = document.createElement("ul");
let body = document.querySelector("body");

body.appendChild(ul);

/* function getUsers() {
  setTimeout(() => {
    let output = "";
    users.forEach((user) => {
      output += `<li> ${user.name}</li>`;
      console.log(user);
    });
    document.body.innerHTML = output;
  }, 1500);
} */

function addusers(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      users.push(user);
      const error = false;
      if (!error) {
        resolve("this is the resolve");
      } else {
        reject("Error!");
      }
    }, 1500);
  });
}

async function getUsers() {
  const result = await addusers();
  users.forEach((user) => {
    let output = "";
    output += `<li> ${user.name}</li>`;
    console.log(user);
  });
  document.body.innerHTML = output;
}

addusers({ name: "marc k", username: "marckkk", email: "marc@marc.ch" }).then(
  getUsers
);

getUsers({ name: "marc k", username: "marckkk", email: "marc@marc.ch" });
