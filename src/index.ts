import { comicInterface } from "./interfaces";


const myEmail: string = "s.pasynkov@innopolis.university"
const iuLink: string = "https://fwd.innopolis.app/api/hw2"
const comicLink: string = "https://getxkcd.vercel.app/api/comic"


async function getComciId(): Promise<number> {
  const url = new URL(iuLink);
  const queryParams: URLSearchParams = new URLSearchParams({ email: myEmail })
  url.search = new URLSearchParams(queryParams).toString();

  const response: Response = await fetch(url)
  return await response.json()
}

async function renderComic() {
  const comicId: number = await getComciId();

  const url = new URL(comicLink);
  url.search = new URLSearchParams({ num: comicId.toString() }).toString();

  const comic: comicInterface = await fetch(url).then(response => response.json());

  const title = document.getElementById("titleComic") as HTMLHeadingElement;
  const image = document.getElementById("imgComic") as HTMLImageElement;
  const date = document.getElementById("dateComic") as HTMLParagraphElement;

  const dateComic: Date = new Date(parseInt(comic.year), parseInt(comic.month), parseInt(comic.day));
  title.textContent = comic.title;
  image.src = comic.img;
  image.alt = comic.alt;
  image.hidden = false;
  date.textContent = dateComic.toLocaleDateString();
}

renderComic();