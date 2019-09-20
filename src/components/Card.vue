<template>
  <div class="card cardStyle" style="width: auto;">
    <div class="card-body">
      <slot />
    </div>
  </div>
</template>

<script>
//import { setTimeout } from 'timers';
export default {
  props: ["id", "draggable"],
  methods: {
    dragStart: e => {
      const target = e.target;
      e.dataTransfer.setData("card_id", target.id);
      setTimeout(() => {
        target.style.display = "none";
      }, 0);
    }
  }
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css");

.cardStyle {
  margin: 2px 2px 2px 2px;
}
</style>
