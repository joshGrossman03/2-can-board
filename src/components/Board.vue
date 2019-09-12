<template>
    <div>
        
    <div
    v-bind:id="id"
    class="board"
    @dragover.prevent
    @drop.prevent="drop"
    >
        <slot />
    </div>
    </div>
</template>

<script>
export default {
    name:'Board',
    props:['id'],
    methods: {
        drop: e => {
            const card_id = e.dataTransfer.getData('card_id');

            const card = document.getElementById(card_id);

            card.style.display = "block";

            e.target.appendChild(card);
        }
    }
}

</script>



