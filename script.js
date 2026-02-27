function showPage(pageNumber, addHistory=true){

document.querySelectorAll(".page")
.forEach(function(page){
page.classList.remove("active");
});

document
.getElementById("page"+pageNumber)
.classList.add("active");

if(addHistory){
history.pushState(
{page:pageNumber},
"",
"#page"+pageNumber
);
}

}

function nextPage(pageNumber){
showPage(pageNumber,true);
}

window.onpopstate=function(event){

if(event.state){
showPage(event.state.page,false);
}

};

window.onload=function(){

let hash=window.location.hash;

if(hash){
let pageNumber=hash.replace("#page","");
showPage(pageNumber,false);
}else{
showPage(1,false);
}

};