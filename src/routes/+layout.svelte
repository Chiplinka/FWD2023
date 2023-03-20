<script lang="ts">
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";
  import { base } from "$app/paths";
  import "../styles.css";
</script>

<Header />
<nav>
  <a href="{base}/">Home page</a>
  <a href="{base}/comic">Comic page</a>
</nav>
<slot />
<Footer />
