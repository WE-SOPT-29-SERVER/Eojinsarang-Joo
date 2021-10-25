const team = {
    members: [
    {name: "주어진사랑", address: "서울", age: 23, hobby: "유투브"},
    {name: "조재호", address: "남양주", age: 24, hobby: "서핑"},
    {name: "변주현", address: "서울", age:22, hobby: "서버개발"},
    {name: "조찬우", address: "성남", age:24, hobby: "농구"},
    {name: "구건모", address: "인천", age:23, hobby: "독서"},
    ],
    printMembers: function(){
        this.members.forEach(member =>{
            console.log("이름: "+member.name);
            console.log("사는 곳: "+member.address);
            console.log("나이: "+member.age);
            console.log("취미: "+member.hobby);
        })
    }
}

team.printMembers();