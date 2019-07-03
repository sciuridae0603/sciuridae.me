<template>
  <div class="Works">
    <Group v-bind:group="data.works" />
  </div>
</template>

<script>
import Group from "@/components/Group.vue";

export default {
  name: "Works",
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

