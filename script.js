// Typing Animation
const texts=["Design Engineer","Additive Manufacturing Enthusiast","Prototyping Specialist"];
let i=0,j=0;
const typing=document.getElementById("typing");

function type(){
if(j<texts[i].length){
typing.textContent+=texts[i][j++];
setTimeout(type,100);
}else setTimeout(erase,1500);
}

function erase(){
if(j>0){
typing.textContent=texts[i].substring(0,--j);
setTimeout(erase,60);
}else{
i=(i+1)%texts.length;
setTimeout(type,400);
}
}
type();

// Modal
function openModal(title, desc) {
document.getElementById("modal").style.display = "flex";
document.getElementById("mTitle").innerText = title;
document.getElementById("mDesc").innerHTML = desc.replace(/\\n/g, "<br>");
}

function closeModal(){
document.getElementById("modal").style.display="none";
}
