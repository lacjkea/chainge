let allData = ''; //storing JSON data as global variable
let pageToShow = '';

window.addEventListener('DOMContentLoaded', fetchData);

function fetchData() {
  fetch("http://umarkx.com/WP/wp-json/wp/v2/chainge?_embed")
    .then(initial => initial.json())
    .then(handleData);
}

function handleData(data) {
  buildNav(data);
  allData = data;
  getURLparams();
  //trigger click event
  console.log(data);
}

function getURLparams() {
  const params = new URLSearchParams(window.location.search);
  console.log("URLSearchParams " + window.location);
  //const chaingeFromURL = params.get("chainge");
  pageToShow = params.get("chainge");
  document.querySelector('body').id = pageToShow; //lacj: delete the classes from the ebody element?
  //alert(pageToShow);
  //console.log(chaingeFromURL);
  console.log(pageToShow)
}

function buildNav(data) {
  //console.log(data);
  data.forEach(showPages => {
    //console.log(showPages.title);

    const template = document.querySelector("#navTemplate").content;
    const clone = template.cloneNode(true);

    clone.querySelector("li a").textContent = showPages._embedded["wp:term"][0][0].name;

    const a = clone.querySelector("a");
    a.href = "index.html?chainge=" + showPages._embedded["wp:term"][1][0].name;
    //a.addEventListener('click', removeDefault);
    a.addEventListener('click', addContent);
    document.querySelector("nav ul").appendChild(clone);
  })
}

function addContent(e) {
  console.log(e);

  //don't reload the page when nav a link is clicked
  e.preventDefault();
  //modified from https://stackoverflow.com/questions/3338642/updating-address-bar-with-new-url-without-hash-or-reloading-the-page
  //let newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?chainge=';

  //change the URL in the address bar without reloading the page
  let newurl = e.target.href;

  //put the URL in the address bar
  window.history.pushState({
    path: newurl
  }, '', newurl);

  getURLparams();
  //console.log(allData);

  //alert(pageToShow);
  const dataToDisplay = allData.filter(elem => {
    return elem._embedded["wp:term"][1][0].name == pageToShow;
  });
  console.log('datastuff');
  //  console.log(dataToDisplay[0].title);
  console.log(dataToDisplay[0]);


  const title = document.querySelector('.title');
  title.innerHTML = dataToDisplay[0].title.rendered;
  //const heroImg = document.querySelector('#hero-image');
  //heroImg = setAttribute("src", dataToDisplay.heroimg.guid);

};



//  data.forEach(showRest => {
//    console.log(data);
//
//    const templateMain = document.querySelector("#mainTemplate").content;
//    const cloneMain = templateMain.cloneNode(true);
//
//    console.log("1" + showRest._embedded["wp:term"][1][0].name);
//    console.log("2" + chaingeFromURL);
//
//    if (showRest._embedded["wp:term"][1][0].name == chaingeFromURL) {
//
//      cloneMain.querySelector(".title").innerHTML = showRest.title.rendered;
//      cloneMain.querySelector("#hero-image").setAttribute("src", showRest.heroimg.guid);
//
//    }
//
//
//    document.querySelector("main").appendChild(cloneMain);

//})

//}



/*fetch("http://umarkx.com/WP/wp-json/wp/v2/chainge?_embed")
    .then(initial => initial.json())
    .then(databack);


function databack(restData) {


}*/
