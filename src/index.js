
import {searchImage, append} from "./fetch.js"

let container = document.querySelector("#container");

let search = async (e) => {
    if ( e.key === "Enter" )
    {
        let query = document.querySelector("#query").value;
        console.log(query);
        let data = await searchImage(query);
        container.innerHTML = null;
        append(data.results , container);
    }
}
document.getElementById("query").addEventListener("keydown", search);

//Applying Fetch functionality to the categories section  
let categories = document.querySelector("#categories").children;

async function csearch() {
    console.log(this.id)
    let data = await searchImage(this.id);
    container.innerHTML = null;
    append(data.results , container);
}

//this is added as a function method
for ( let el of categories ) {
    el.addEventListener("click", csearch)
}


//Applying Fetch functionality to the Sort section  
async function sort () {
    let sort = document.querySelector("#sort").value;
    let data = await searchImage(sort);
    container.innerHTML = null;
    append(data.results , container);
}
document.querySelector("#sort").addEventListener("click", sort);


//Applying Fetch functionality to the Filter section  
async function filter () {
    let filter = document.querySelector("#filter").value;
    let data = await searchImage(filter);
    container.innerHTML = null;
    append(data.results , container);
}
document.querySelector("#filter").addEventListener("click", filter);