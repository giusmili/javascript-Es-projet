# Cours Javascript - ES6+ 🚀

> La css
```css
header{

    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
header ul{
    display: flex;
    justify-content: space-around;
    gap: 1rem;
}
header ul li a{
    display: block;
    text-align: center;
}
header ul li{
    width: 15rem;
    background-color: #ccc;
    line-height: 3rem;
    padding: 1rem;
    border-radius: .4rem;
}
main{
    min-height:  100svh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
}
article{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 40rem;
    background-color: #222;
    color: #fff;
    
}
article h2, :is(p){
    padding: 2rem;
    text-align: justify;
    
}
article h2{
    background-color: #42414d;
    font-weight: normal;
}
footer *{
    text-align: center;
}
```
## Evenemment JS
```js
 const buttons = document.querySelectorAll("button");

        const links = [
            "https://www.google.com",
            "https://www.wikipedia.com",
            "https://www.lemonde.fr"
        ];

        buttons.forEach((button, index) => {
        
            console.log(button);

            button.addEventListener("click", () => {
                if (index < links.length) {
                    window.location.href = links[index];
                } else {
                    window.alert("No link associated with this button");
                }
            });
        });

```