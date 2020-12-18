fetch("http://umarkx.com/WP/wp-json/wp/v2/chainge?_embed")
    .then(initial => initial.json())
    .then(callback);

function callback(data) {
    data.forEach(showPages => {
        console.log(data);

        const template = document.querySelector("#navTemplate").content;
        const clone = template.cloneNode(true);

        clone.querySelector("li").textContent = showPages._embedded["wp:term"][0][0].name;

        clone.querySelector("a").href = "index.html?chainge=" + showPages._embedded["wp:term"][1][0].name;


        document.querySelector("nav").appendChild(clone);


    })


    data.forEach(showRest => {
        console.log(data);

        const templateMain = document.querySelector("#mainTemplate").content;
        const cloneMain = templateMain.cloneNode(true);

        if (showRest._embedded["wp:term"][1][0].name == chaingeFromURL) {

            cloneMain.querySelector(".title").innerHTML = showRest.title.rendered;
            cloneMain.querySelector("#hero-image").setAttribute("src", showRest.heroimg.guid);

        }


        document.querySelector("main").appendChild(cloneMain);



    })

}


const params = new URLSearchParams(window.location.search);
console.log("URLSearchParams " + window.location);
const chaingeFromURL = params.get("chainge");
console.log(chaingeFromURL);



/*fetch("http://umarkx.com/WP/wp-json/wp/v2/chainge?_embed")
    .then(initial => initial.json())
    .then(databack);


function databack(restData) {


}*/
