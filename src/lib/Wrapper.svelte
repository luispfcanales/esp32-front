<script>
  import Fa from 'svelte-fa/src/fa.svelte'
  export let btnExit = false;
  export let icon
  export let handler

  let color = "#e4e4e4";

  function hover(){ 
    color = "#ffffff"
  }
  function nohover(){ 
    color="#e4e4e4"
  }
</script>

<div class:btnExit on:click={handler} class={"content"} on:mousemove={hover} on:mouseleave={nohover}>
  <Fa scale={.7} icon={icon} size="3x" {color}/>
</div>

<style>
  .content{
    box-sizing:border-box;
    margin:.4rem;
    top: 0;
    cursor: pointer;
    box-shadow:0 0 13px rgba(1,1,1,.3);
    border-radius:3px;
    transition:.3s;
  }
  .content:hover{
    box-shadow:0 0 15px rgba(255, 255, 255, 1),
      0 0 17px rgba(255, 255, 255, 1);
  }
  .btnExit{
    background-color:#c92043;
  }
  .btnExit:hover{
    background-color:#de0432;
    box-shadow:0 0 15px rgba(243, 75, 83, 0.8),
      0 0 15px rgba(243, 75, 83, 0.8);
  }
</style>
