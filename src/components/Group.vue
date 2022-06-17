<template>
  <div class="Group">
    <div class="GroupHeader">
      <font-awesome-icon v-bind:icon="group.icon" class="GroupIcon"></font-awesome-icon>
      <div class="GroupTitle" v-text="group.title"></div>
    </div>
    <div class="GroupContent">
      <Item v-for="item in group.items" v-bind:key="item.name" v-bind:item="item" />
    </div>
  </div>
</template>

<script>
import Item from "@/components/Item.vue";

export default {
  name: "Group",
  components: {
    Item
  },
  props: {
    group: Object
  }
};
</script>
<style>
.Group {
  display: flex;
  flex-direction: column;
  align-content: center;
}
.GroupHeader {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
}
.GroupIcon {
  color: white;
  margin-top: 0.5em;
  margin-bottom: 0.2em;
  font-size: 4em;
}
.GroupTitle {
  font-size: 2em;
  color: white;
}
@media only screen and (min-width: 720px) {
  .GroupContent {
    align-self: center;
    width: 50%;
  }
}
.GroupContent {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>


