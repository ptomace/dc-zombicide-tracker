const boxes=document.querySelectorAll("input");
const bar=document.getElementById("bar");

function update(){

let total=boxes.length;
let checked=0;

boxes.forEach(box=>{
if(box.checked) checked++;
});

let percent=Math.round((checked/total)*100);

bar.style.width=percent+"%";
bar.innerText=percent+"%";

}

boxes.forEach(box=>{

let saved=localStorage.getItem(box.id);

if(saved==="true"){
box.checked=true;
}

box.addEventListener("change",()=>{
localStorage.setItem(box.id,box.checked);
update();
});

});

update();

if("serviceWorker" in navigator){
navigator.serviceWorker.register("service-worker.js");
}
