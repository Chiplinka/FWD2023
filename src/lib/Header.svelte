<script lang="ts">
  import { base } from "$app/paths";
</script>

<div class="header">
  <img class="resize" src="img/SergeyPasynkov.jpg" alt="Me" />
  <h1>Hello, I am Sergey Pasynkov 👋</h1>
  <nav>
    <a href="{base}/">Home page</a>
    <a href="{base}/comic">Comic page</a>
  </nav>
</div>

<style>
  .resize {
    float: left;
    width: 100px;
    height: auto;
    border-radius: 50%;
    clip-path: circle();
  }
  .header {
    display: flex;
    background-color: #e1dede;
    padding: 0px 20px;
    align-items: center;
    text-align: center;
  }
  h1 {
    margin: auto auto;
  }
</style>
