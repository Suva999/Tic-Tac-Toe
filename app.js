let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGamebtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;
let win=false;
let c=0;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box,index)=>{
    box.addEventListener("click",()=>{
        if(turnO)
        {
            box.innerHTML="O";
            turnO=false;
        }
        else
        {
            box.innerHTML="X";
            turnO=true;
        }
        box.disabled=true;
        c++;
        checkWinner();
       if(c===9 && win==false)
       {
           msg.innerHTML=`Draw`;
           msgContainer.classList.remove("hide");
       }
    });
});
const disableBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerHTML="";
    }
}
const showWinner=(winner)=>{
msg.innerHTML=`Congratulations winner is ${winner}`;
msgContainer.classList.remove("hide");
disableBoxes();
}
const resetGame=()=>{
    turnO=true;
    win=false;
    c=0;
    enableBoxes();
    msgContainer.classList.add("hide");
}
const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerHTML;
        let pos2=boxes[pattern[1]].innerHTML;
        let pos3=boxes[pattern[2]].innerHTML;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
            showWinner(pos1);
            win=true;
            }
        }
    }
};
newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);