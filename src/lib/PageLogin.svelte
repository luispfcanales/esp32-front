<script>

  import {fly} from 'svelte/transition'
  import {Loading,User} from '../store/store.js'
  import esp32 from '../assets/esp32.png';
  let dni = ""

  async function GetUser(){
    $Loading = true;
    let data = await fetch(`https://dniruc.apisperu.com/api/v1/dni/${dni}?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Imx1aXNwZmNhbmFsZXNAZ21haWwuY29tIn0.Vg8H-t3AU2FNwYPp8tBCVdjpuyl_7Q6CcLeL2Z3aR5k`)
    if(data.status !== 200){
      $Loading = false;
      return
    }
    let response = await data.json()
    $Loading = false;
    $User = response;
  }

</script>

<div transition:fly="{{y:200,duration:1000}}" class="content">
  <form>
    <div class="title">
      <h2>ESP32 - Monitoring</h2>
      <p><img src={esp32} alt="esp32"></p>
    </div>
    <div class="content-dni">
      <input bind:value={dni} type="text" placeholder="DNI">
    </div>
    <div class="content-btn">
      <input type="button" on:click|preventDefault={GetUser} value="Go!"/>
    </div>
  </form>
</div>

<style>
div{
  margin:0;
  padding:0;
}
p{
  padding:0;
  margin:0;
  width:100%;
  height:7rem;
  margin-top:1rem;
  overflow:hidden;
}
img{
  width:90%;
  height:100%;
  transform:scale(1.6);
  object-fit:contain;
  transition:.7s;
}
img:hover{
  transform:scale(1.8);
}
.title{
  color:#fff;
}
input[type="text"]{
  box-sizing:border-box;
  min-width:250px;
  height:2rem;
  border:none;
  border-radius:7px;
  padding:12px 20px;
  margin:8px 0;
  font-size:1rem;
}
input[type="text"]:focus{
  outline:none;
}
div div{
  width:100%;
  text-align:center;
}
.content-btn{
  margin-top:.4rem;
}
input[type="button"]{
  display:block;
  height:2rem;
  min-width:250px;
  font-weight:bold;
  font-size:1.2rem;
  color:#fff;
  background-color:#0586a8;
  border:none;
  border-radius:7px;
  margin:0 auto;
  box-shadow:1px 1px 10px rgba(10, 99, 122,.9);
  transition:.3s;
}

input[type="button"]:hover{
  background-color:#1592b3;
  cursor:pointer;
}
.content{
  width:330px;
  height:20rem;
  border-radius:13px;
  box-shadow:1px 1px 10px rgba(0,0,0,.5);
  background-color:#08667e;
}
form{
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
}
</style>
