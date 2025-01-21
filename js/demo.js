let contents = `Vous etes sur ${navigator.language}`;
// window.alert(contents)/* affichage BOM navigateir */
/* console navigateur */
console.log(contents);
console.info(contents);
console.error(contents);
// bouton event

const parent = document.querySelectorAll("button");
for (let rows of parent) {
    console.log(rows);
    rows.addEventListener("click", () => {
        alert("ok");
    });
}
parent.addEventListener("click", () => {
    console.log("ok");
});

/* const btns = document.querySelectorAll("button");

        const links = [
            "https://www.google.com",
            "https://www.wikipedia.com",
            "https://www.lemonde.fr"
        ];

        btns.forEach((button, index) => {
            console.log(button);

            button.addEventListener("click", () => {
                if (index < links.length) {
                    window.location.href = links[index];
                } else {
                    window.alert("No link associated with this button");
                }
            });
        }); */