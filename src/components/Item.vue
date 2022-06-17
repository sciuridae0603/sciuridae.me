<template>
  <a class="Item" v-bind:style="getStyle" v-bind:href="item.href">
    <img v-if="item.image" class="ItemImage" v-bind:src="item.image" />
    <font-awesome-icon v-if="item.icon" class="ItemIcon" v-bind:icon="item.icon"></font-awesome-icon>
    <div v-if="item.name" class="ItemName" v-text="item.name" />
    <div v-if="item.description" class="ItemDescription" v-text="item.description" />
  </a>
</template>

<script>
export default {
  name: "Item",
  components: {},
  props: {
    item: Object
  },
  computed: {
    getStyle:function() {
      return { width: (this.item.width )? this.item.width : "9em" };
    }
  }
};
</script>
<style>
.Item {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  padding: 1em 1.2rem;
  margin: 0.3em;

  border: 2px solid white;
  border-radius: 3px;

  transition: 0.2s;

  background:white;
}
.Item:hover {
  border: 2px solid #646E78;
}
.ItemImage {
  width: 100%;
}
.ItemIcon {
  color: #646e78;
  font-size: 5em;
}
.ItemName {
  color: #646e78;
  font-size: 1.6rem;
  margin-top:8px;
}
.ItemDescription {
  color: #646e78;
  font-size: 1em;
}
</style>

