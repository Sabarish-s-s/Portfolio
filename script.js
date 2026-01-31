// Typing Effect
const text=["Design Engineer","Additive Manufacturing Enthusiast","Prototyping Specialist"];
let i=0,j=0;
const typing=document.getElementById("typing");

function type(){
if(j<text[i].length){
typing.textContent+=text[i][j++];
setTimeout(type,100);
}else setTimeout(erase,1500);
}

function erase(){
if(j>0){
typing.textContent=text[i].substring(0,--j);
setTimeout(erase,60);
}else{
i=(i+1)%text.length;
setTimeout(type,400);
}
}
type();

// Modal
function openModal(title,desc){
document.getElementById("modal").style.display="flex";
document.getElementById("mTitle").innerText=title;
document.getElementById("mDesc").innerText=desc;
}

function closeModal(){
document.getElementById("modal").style.display="none";
}
