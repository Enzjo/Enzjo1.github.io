const bttn_pro = document.querySelector("#bttn_pro");
const bttn_skl = document.querySelector("#bttn_skl");
const bttn_prj = document.querySelector("#bttn_prj");
const bttn_dsj = document.querySelector("#bttn_dsj");
const content_pro = document.querySelector("#content_pro");
const content_skl = document.querySelector("#content_skl");
const content_prj = document.querySelector("#content_prj");
const content_dsj = document.querySelector("#content_dsj");

bttn_pro.addEventListener("click", () => {
  content_pro.classList.toggle("active");
});

bttn_skl.addEventListener("click", () => {
  content_skl.classList.toggle("active");
});

bttn_prj.addEventListener("click", () => {
  content_prj.classList.toggle("active");
});

bttn_dsj.addEventListener("click", () => {
  content_dsj.classList.toggle("active");
});