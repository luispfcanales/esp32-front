<script>
  import {User,Loading,NavbarUser} from './store/store.js'
  import svelteLogo from './assets/svelte.svg'
  import Monitoring from './lib/Monitoring.svelte';
  import PageLogin from './lib/PageLogin.svelte';
  import Loader from './lib/Loader.svelte';

  import Graphic from './lib/Graphic.svelte';
  import HeaderMonitor from './lib/HeaderMonitor.svelte';
  import UserBar from './lib/UserBar.svelte';
  

  let widthMain;
</script>

<svelte:head>
    <link rel="icon" type="image/svg+xml" href="{svelteLogo}" />
</svelte:head>

<main  bind:clientWidth={widthMain}>
  {#if $User == null }
    <Graphic/>
    <PageLogin/>
    <Graphic/>
    {#if $Loading}
      <Loader  size={widthMain}/>
    {/if}
  {:else}
    <div class="content-monitoring">
      <HeaderMonitor/>
      <Monitoring MonitorZise={9}/>
      {#if $NavbarUser}
        <UserBar/>
      {/if}
    </div>
  {/if}
</main>


<style>
  :root{
    --color-background:#6a9fb5;
    --color-back-btn:#08667e;
  }
  *{
    margin:0;
    padding:0;
    background-color:var(--color-background);
  }
  main{
    position: relative;
    margin:0;
    padding:0;
    width:inherit;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    overflow:hidden;
  }
  .content-monitoring{
    height:400px;
  }
</style>
