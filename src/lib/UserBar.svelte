<script>
  import {fade,fly} from "svelte/transition";
</script>

<div in:fly="{{y:400,duration:1500}}" out:fade>
  <p>side list</p>
</div>

<style>
  div{
    position:absolute;
    height:calc(100vh - 3rem);
    top:1.5rem;
    right:2rem;
    width:320px;
    border-radius:10px;
    box-shadow:2px 3px 10px rgba(0,0,0,.35);
    transition:.3s;
  }
  div:hover{
    box-shadow:2px 3px 15px rgba(0,0,0,.4);
  }
</style>

