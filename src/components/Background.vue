<template>
  <div class="Background" >
  </div>
</template>

<script>
export default {
  name: "Background",
  components: {},
  props: {
    url: String
  },
  computed: {
  }
};
</script>

<style>
.Background {
    
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  transform: scale(1.5);
  background-image: url('../assets/background.png');
  z-index: -100;

  background-size: cover;
  background-position: fixed;
  background-position-y: -100px;

}
</style>

