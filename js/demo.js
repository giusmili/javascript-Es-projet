let contents = `Vous etes sur ${navigator.language}`;
//window.alert(contents)/* affichage BOM navigateir */
/* console navigateur */
console.log(contents);
console.info(contents);
console.error();

const btn = document.querySelector("button");

const links = ["https://www.wikipedia.org"];

btn.addEventListener("click", () => {
   window.open(links[0]); /* location.href="" */
});