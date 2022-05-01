let searchImage = async (query ) => {

    let url = `https://api.unsplash.com/search/photos/?query=${query}&per_page=50&client_id=-xAOlKX_G-GIEGgJCi1hGVsuX06gNlirvMWsry7b0k8`

    try {
        let res = await fetch(url);
        let data = await res.json();    
        return (data);
    } catch (err) {
        console.log(err);
    }
};

let append = (data, container) => {
    data.forEach( ( {alt_description, urls : {small} } ) => {

        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = small;
        // let name = document.createElement("h3");
        // name.innerText = alt_description;

        div.append(img);
        container.append(div);
    })
}

export {searchImage, append};
