let fs = require('fs');
let data = fs.readFileSync("users.json");
let userInfo = data.toString();
let userItems = userInfo.split(":")
for(letj=0;j<userItems.length;j++) {
    console.log(`Id: ${userItems[0]}, Name: ${userItems[1]}, Salary: ${userItems[2]}`);
}