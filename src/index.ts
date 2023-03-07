import { comicInterface } from "./interfaces";


const myEmail: string = "s.pasynkov@innopolis.university"
const iuLink: string = "https://fwd.innopolis.app/api/hw2"
const comicLink: string = "https://getxkcd.vercel.app/api/comic"


async function getComciId(): Promise<number> {
  const urlGetId: URL = new URL(iuLink);
  const queryParams: URLSearchParams = new URLSearchParams({ email: myEmail })
  urlGetId.search = new URLSearchParams(queryParams).toString();

  const response: Response = await fetch(urlGetId)
  return await response.json()
}

async function renderComic() {
  const comicId: number = await getComciId();

  const urlGetComic: URL = new URL(comicLink);
  urlGetComic.search = new URLSearchParams({ num: comicId.toString() }).toString();

  const comic: comicInterface = await fetch(urlGetComic).then(response => response.json());

  const title: HTMLHeadingElement = document.getElementById("titleComic") as HTMLHeadingElement;
  const image: HTMLImageElement = document.getElementById("imgComic") as HTMLImageElement;
  const date: HTMLParagraphElement = document.getElementById("dateComic") as HTMLParagraphElement;

  const dateComic: Date = new Date(comic.year, comic.month - 1, comic.day);
  title.textContent = comic.title;
  image.src = comic.img;
  image.alt = comic.alt;
  image.hidden = false;
  date.textContent = dateComic.toLocaleDateString();
}

renderComic();