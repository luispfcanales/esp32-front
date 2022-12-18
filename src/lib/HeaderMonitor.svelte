<script>
  import {User} from "../store/store.js";
  import Navbar from "./Navbar.svelte"

</script>

<div class="title">
  <h2>{$User.nombres+" "+$User.apellidoPaterno+" "+$User.apellidoMaterno}</h2>
</div>
<Navbar/>

<style>
  .title{
    position:absolute;
    top:2rem;
    left:2rem;
  }
</style>
