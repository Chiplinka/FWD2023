<script lang="ts">
  interface comicInterface {
    day: string;
    month: string;
    year: string;
    alt: string;
    img: string;
    title: string;
  }

  const myEmail: string = "s.pasynkov@innopolis.university";
  const iuLink: string = "https://fwd.innopolis.app/api/hw2";
  const comicLink: string = "https://getxkcd.vercel.app/api/comic";

  async function getComciId(): Promise<number> {
    const urlGetId: URL = new URL(iuLink);
    const queryParams: URLSearchParams = new URLSearchParams({
      email: myEmail,
    });
    urlGetId.search = new URLSearchParams(queryParams).toString();

    const response: Response = await fetch(urlGetId);
    return await response.json();
  }

  async function getComic() {
    const comicId: number = await getComciId();

    const urlGetComic: URL = new URL(comicLink);
    urlGetComic.search = new URLSearchParams({
      num: comicId.toString(),
    }).toString();

    const comic: Response = await fetch(urlGetComic);
    return comic.json();
  }
  const comicImage: Promise<comicInterface> = getComic();
</script>

<div>
  {#await comicImage}
    <p>Loading...</p>
  {:then comicImage}
    <h2>{comicImage.title}</h2>
    <p>Date: {comicImage.day}.{comicImage.month}.{comicImage.year}</p>
    <img src={comicImage.img} alt={comicImage.alt} title={comicImage.title} />
  {/await}
</div>

<style>
  img {
    width: 100%;
    max-width: 50%;
  }
</style>
