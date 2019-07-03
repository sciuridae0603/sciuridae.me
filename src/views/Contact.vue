<template>
  <div class="home">
    <Group v-bind:group="data.contact" />
  </div>
</template>

<script>
import Group from "@/components/Group.vue";

export default {
  name: "Contact",
  props: {
    data: Object
  },
  components: {
    Group
  }
};
</script>
<style>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

