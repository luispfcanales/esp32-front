<script>
  import {fly} from "svelte/transition";
  import FusionCharts from 'fusioncharts';
  import Charts from 'fusioncharts/fusioncharts.charts';

  import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
  import SvelteFC, { fcRoot } from 'svelte-fusioncharts';

  import { onMount } from 'svelte';

  export let MonitorZise=7;

  let loadinfo = [{label:"12:22:22",value:"39"}];
  fcRoot(FusionCharts, Charts, FusionTheme);
  let chartConfig = {
    type: 'spline',
    renderAt: 'chart-container',
    dataSource:{
      "chart":{
        caption:"Monitoring real time",
        subCaption:"ESP32 - sensor",
        xAxisName:"Datetime",
        yAxisName:"Temperature",
        showValues: "1",
        theme:"fusion"
      },
      data:loadinfo,
    }
  };

  $:{
    if(loadinfo){
      chartConfig.dataSource.data = loadinfo
    }
  }

  onMount(()=>{
    const source = new EventSource(`https://esp32-api.onrender.com/listen-event?id=${Math.random()}`)
    source.addEventListener('open',()=>{
      console.log("connected")
    })
    source.addEventListener('arduino',(e)=>{
      let obj = JSON.parse(e.data)
      addDataToSSE(obj)
    })
  })
  //function addDataToSSE(obj){
  function addDataToSSE({datetime,temperature}){
    loadinfo = [...loadinfo,{"label":`${datetime}`,"value":`${temperature}`}]
    if(loadinfo.length < MonitorZise){
      return
    }
    loadinfo.shift()
  }
</script>

<div transition:fly="{{y:200,duration:1000}}" id="chart-container" >
  <SvelteFC {...chartConfig} />
</div>
<style>
  div{
    max-width: 400px;
    overflow:hidden;
    box-shadow:5px 5px 16px rgba(0,0,0,.45);
  }
</style>
