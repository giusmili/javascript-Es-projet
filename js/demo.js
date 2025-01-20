let contents = `Vous etes sur ${navigator.language}`;
window.alert(contents); /* affichage BOM navigateir */
/* console navigateur */
console.log(contents);
console.info(contents);
console.error(contents);
const parent= document.querySelector("button");
console.log(parent);
parent.addEventListener("click", () => {
    console.log("ok");
});