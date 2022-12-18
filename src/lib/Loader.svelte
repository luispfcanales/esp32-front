<script>
import { fade } from 'svelte/transition';
import Fa from 'svelte-fa/src/fa.svelte'
import { faCog } from '@fortawesome/free-solid-svg-icons'
export let size;
</script>

<div transition:fade style={`width:${size}px`}>
<Fa icon={faCog} size="6x" spin color="#f5f5f5"/>
</div>

<style>
  div{
    position:absolute;
    height:inherit;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:rgba(0,0,0,.46);
  }
</style>
