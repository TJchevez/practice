const users = ["anna", "mike", "sara", "james", "lucy"];

function findUserIndex(users, username) {
 return users.indexOf(username);
}

console.log(findUserIndex(users, "bob"));