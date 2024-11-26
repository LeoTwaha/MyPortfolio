const aB = document.getElementById("aB");
const aboutMe = document.getElementById("aboutMe");
const closeAboutMe = document.getElementById("cAb");
const p = document.getElementById("P");
const projects = document.getElementById("projects");
const cProjects = document.getElementById("cProjects");
const c = document.getElementById("C");
const contact = document.getElementById("contactD");
const clsContact = document.getElementById("clsContact");
const aBtn = document.getElementById("aBtn");
const pBtn = document.getElementById("pBtn");
const cBtn = document.getElementById("cBtn");
const QsVid = document.getElementById("QSvid");
const sVid = document.getElementById("Svid");
const oBCVid = document.getElementById("OBCvid");
let display = document.getElementById("display");
let slides = display.querySelectorAll(".slide");
let index = 0;
let transitionDelay = 2000;
for (let slide of slides) {
    slide.style.transition = `all ${transitionDelay/1000}s linear`;
  }
  function showSlide(slideNumber) {
    slides.forEach((slide, i) => {
      slide.style.display = i == slideNumber ? "block" : "none";
    });
    // next index
    index++;
    // go back to 0 if at the end of slides
    if (index >= slides.length) {
      index = 0;
    }
  }
  
  // transition to next slide every x seconds
  setInterval (() => showSlide(index), transitionDelay);
QsVid.addEventListener("mouseenter", ()=>{
    QsVid.play();
});
QsVid.addEventListener("mouseleave", ()=>{
    QsVid.currentTime = 0; 
    QsVid.play();
    QsVid.pause();
});
sVid.addEventListener("mouseenter", ()=>{
    sVid.play();
});
sVid.addEventListener("mouseleave", ()=>{
    sVid.currentTime = 0; 
    sVid.play();
    sVid.pause();
});
oBCVid.addEventListener("mouseenter", ()=>{
    oBCVid.play();
});
oBCVid.addEventListener("mouseleave", ()=>{
    oBCVid.currentTime = 0; 
    oBCVid.pause();
});
aB.addEventListener("click", () => {
    aboutMe.showModal();
});
aBtn.addEventListener("click", () => {
    aboutMe.showModal();
});
closeAboutMe.addEventListener("click", () => {
    aboutMe.close();
});
p.addEventListener("click", () => {
    projects.showModal();
});
pBtn.addEventListener("click", () => {
    projects.showModal();
});
cProjects.addEventListener("click", () => {
    projects.close();
});
c.addEventListener("click", () => {
 contact.showModal();
});
cBtn.addEventListener("click", () => {
 contact.showModal();
});
clsContact.addEventListener("click", () => {
    contact.close();
});