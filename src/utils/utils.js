import {onDestroy} from 'svelte';

export function onInterval(callback,time){
  const interval = setInterval(callback,time);
  onDestroy(()=>{
  clearInterval(interval)
  })
}
