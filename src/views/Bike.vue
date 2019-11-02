<template>
  <div class="Bike">
    <Group v-bind:group="data.bike.bike" />
    <Group v-bind:group="data.bike.equipment" />
  </div>
</template>

<script>
import Group from "@/components/Group.vue";

export default {
  name: "Bike",
  props: {
    data: Object
  },
  components: {
    Group
  }
};
</script>
<style>
.Works {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

