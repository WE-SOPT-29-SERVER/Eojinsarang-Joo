const members = require("./members.js");

let YB = members.filter((member) => member.group === "YB");
let OB = members.filter((member) => member.group === "OB");

const shuffle = array => {
    for (let i=0; i<array.length;i++){
        let j = Math.floor(Math.random() * (i+1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

shuffle(YB);
shuffle(OB);

const team = new Array(7);
for(let i=0;i<7;i++) team[i] = new Array();
let i=0;
OB.forEach(ob =>{
    team[i].push(ob);
    i++;
    if(i===7) i=0;
});
YB.forEach(yb =>{
    team[i].push(yb);
    i++;
    if(i===7) i=0;
});

for(let i=0;i<7;i++){
    console.log("------Team"+(i+1)+"------");
    console.log(team[i]);
}