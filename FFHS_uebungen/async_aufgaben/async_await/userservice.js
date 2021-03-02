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

const promisePush = () => {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      //this is the trigger for the promise to resolve or reject
      if (1 == 1) {
        resolve("resolved!");
      } else {
        reject("This is an Error-message because the promise has failed.");
      }
    }, 1500);
  });
  return p;
};

//this is the async function
async function doStuff() {
  try {
    const response = await promisePush();
    console.log("Response received.");
    const pushedUser = await pushUser({
      name: "Son Goku",
      username: "songoku",
      email: "songoku@dragonball.com",
    });
    console.log("user has been pushed to array.");
    const injectToPage = await injectUsers();
    console.log("User has been written to the page.");
  } catch (error) {
    console.log(error);
  }
}

doStuff();
