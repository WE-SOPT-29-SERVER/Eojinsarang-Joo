const members = require("./members");

const getOnline = members => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const online = members.filter(m => m.location === "online");
            resolve(online);
        }, 500);
    });
};

const getOffline = members =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const offline = members.filter(m => m.location === "offline");
            resolve(offline);
        }, 500);
    });
};

const getYB = members=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const yb = members.filter(m => m.group === "YB");
            resolve(yb);
        }, 500);
    });
};

const getOB = members=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const ob = members.filter(m => m.group === "OB");
            resolve(ob);
        }, 500);
    });
};

//getOnline(members).then(getOB).then(console.log);
//getYB(members).then(getOffline).then(console.log);

const onlineOB = async (members)=>{
    const step1 = await getOnline(members);
    const step2 = await getOB(step1);
    console.log(step2);
}
const offlineYB = async (members)=>{
    const step1 = await getOffline(members);
    const step2 = await getYB(step1);
    console.log(step2);
}
onlineOB(members); offlineYB(members);