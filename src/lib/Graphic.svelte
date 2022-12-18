<script>
import { LinkedChart} from "svelte-tiny-linked-charts"
import {fly} from 'svelte/transition';
import {onInterval} from '../utils/utils.js';

let labels = [0,1,23,3,4,5,6,7,8,9,1]
let values = [3,2,6,2,7,5,12,30,23,15,11]

let min = 2;
let max = 34;
function generateValue(){
  let value = Math.floor(Math.random()*(max-min+1)+min);
  let label = Math.random()*10;
  values = [...values,value]
  labels = [...labels,label]
  if(values.length > 12 ){
    values.shift()
    labels.shift()
  }
}

onInterval(generateValue,500)


</script>

<div transition:fly="{{y:200,duration:1000}}">
<LinkedChart 
  {labels}
  {values}
  height={50}
  width={200}
  gap={1}
  transition={500}
  fill={"#295891"}
  showValue={true}
  barMinWidth={18}
  align=left
  valueAppend={"°C"}
  type="ba"
/>
</div>

<style>
</style>
