<script>
  import {fly} from 'svelte/transition'
  export let size=30;
  export let widthMain=0;
  export let i;
</script>

<div transition:fly={{y:100,duration:5000,delay:3000}} style="width:{size}px;height:{size}px;left:{widthMain - size}px">
</div>

<style>
  div{
    top:0;
    position:absolute;
    border-radius:50%;
    background:linear-gradient(135deg,#ff4,#ff0555);
    z-index:2;
  }
</style>

