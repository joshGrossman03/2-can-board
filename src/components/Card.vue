<template>

        <div
    v-bind:id="id"
    class="card"
    :draggable="draggable"
    @dragstart="dragStart"
    @dragover.stop
    
    >
    <slot  />

        </div> 
            

</template>

<script>
//import { setTimeout } from 'timers';
export default {

    props:['id','draggable'],
    methods:{
        dragStart: e => {
            const target = e.target;
            e.dataTransfer.setData('card_id', target.id);
            setTimeout(()=> {
                target.style.display = "none";
            },0);
        }
    }
}
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css");
</style>
