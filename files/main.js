const myEmail = "s.pasynkov@innopolis.university"

async function renderComic() {
    let urlForId = new URL("https://fwd.innopolis.app/api/hw2");
    const paramsEmail = new URLSearchParams({ email: myEmail })

    urlForId.search = paramsEmail.toString();
    let comicId = await fetch(urlForId).then(response => response.json());
    
    console.log(comicId);

    let url = new URL("https://getxkcd.vercel.app/api/comic");
    const paramsNum = new URLSearchParams({ num: comicId })
    
    url.search = new URLSearchParams(paramsNum).toString();
    let comic = await fetch(url).then(response => response.json());
    console.log(comic);

    document.getElementById("titleComic").textContent = comic.title;
    document.getElementById("dateComic").textContent = new Date(comic.year, comic.month, comic.day).toLocaleDateString();
    document.getElementById("imgComic").src = comic.img;
    document.getElementById("imgComic").alt = comic.alt;
    document.getElementById("imgComic").hidden = false;
}