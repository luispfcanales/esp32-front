<script>
  import Fa from 'svelte-fa/src/fa.svelte'
  import { faDoorOpen,faFilePdf,faUsers,faCode,faExternalLink } from '@fortawesome/free-solid-svg-icons'
  import { NavbarUser,User } from "../store/store.js"

  import Wrapper from './Wrapper.svelte';
  let color ="#ff0055";

  function ViewUsers(){
    $NavbarUser = !$NavbarUser
  }
  function Exit(){
    $User = null
  }
</script>

<div class="button">
  <Wrapper icon={faExternalLink}/>
  <Wrapper icon={faFilePdf}/>
  <Wrapper handler={ViewUsers} icon={faUsers}/>
  <Wrapper icon={faCode}/>
  <Wrapper handler={Exit} btnExit={true} icon={faDoorOpen}/>
</div>

<style>
  .button{
    bottom:1rem;
    left:2rem;
    position:absolute;
    width:calc(100vw - 4rem);
    display:flex;
    justify-content:center;
    box-sizing:border-box;
  }
</style>
