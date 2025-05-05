function showsidebar(){
    const side = document.getElementById("sidebar");
    side.style.display = "flex"
}
function hidesidebar(){
    const side = document.getElementById("sidebar");
    side.style.display = "none"
};


const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove",function(e){
 const posX = e.clientX;
 const posY = e.clientY;

 cursorDot.style.left = `${posX}px`;
 cursorDot.style.top = `${posY}px`;

//  cursorOutline.style.left = `${posX}px`;
//  cursorOutline.style.top = `${posY}px`;

cursorOutline.animate({
    left:`${posX}px`,
    top : `${posY}px`
},{duration:500 , fill: "forwards"});

});


const top = document.getElementById("to-top")
window.addEventListener("scroll", () =>{
if(window.pageYOffset > 80){
    top.classList.add("active")
}else{
    top.classList.remove("active")
}
});

function project(){
    const btnProject = document.getElementById("intro-book-btn0");
    const btnExp = documen.getElementById("intro-book-btn01");
    const btnskill = documen.getElementById("intro-book-btn02");
    const projectRow = document.getElementById("project-row");
    const expRow = document.getElementById("exp-row");
    const mySkillRow = document.getElementById("skills-row");


    expRow.style.display = "none"
    mySkillRow.style.display = "none"
    projectRow.style.display = "flex"


};
function Exp(){
    const btnProject = document.getElementById("intro-book-btn0");
    const btnExp = documen.getElementById("intro-book-btn01");
    const btnskill = documen.getElementById("intro-book-btn02");
    const projectcard1 = document.getElementById("card-project02");
    const projectcard = document.getElementById("card-project01");
    const expRow = document.getElementById("exp-row");
    const mySkillRow = document.getElementById("skills-row");


    expRow.style.display = "flex"
    mySkillRow.style.display = "none"
    projectcard.style.display = "none"
    projectcard1.style.display = "none"


};
function mySkils(){
    const btnProject = document.getElementById("intro-book-btn0");
    const btnExp = documen.getElementById("intro-book-btn01");
    const btnskill = documen.getElementById("intro-book-btn02");
    const projectRow = document.getElementById("project-row");
    const expRow = document.getElementById("exp-row");
    const mySkillRow = document.getElementById("skills-row");


    expRow.style.display = "none"
    mySkillRow.style.display = "flex"
    projectRow.style.display = "none"


};