<template>
  <div class="Home">
    <div id="avatar">
      <img id="avatarImg" src="//gravatar.com/avatar/60ce6b00bae88e0ff15c9480a9ce92f5?s=500" />
      <div id="avatarBorder" />
    </div>
    <div id="name">Sciuridae Li</div>
    <div id="description">只是一個普通人，常常玩弄軟體及硬體還有<span v-on:click="emitClick('bike')" >騎車</span></div>

    <Group v-bind:group="data.skills" />
  </div>
</template>

<script>
import Group from "@/components/Group.vue";

export default {
  name: "Home",
  props: {
    data: Object
  },
  components: {
    Group
  },
  methods: {
    emitClick(name){
      this.$emit("click",name);
    }
  }
};
</script>
<style>
.Home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#name {
  margin-top: 10px;
  color: white;
  font-size: 6vh;
}
#description {
  color: white;
  font-size: 16px;
  margin-bottom: 15em;
}
#avatar {
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  width: 40vh;
  height: 40vh;
  position: relative;
}
#avatarImg {
  border-radius: 50%;
  width: 40vh;

  position: absolute;
  top: 5px;
  left: 5px;
}
#avatarBorder {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  border-radius: 50%;
  border: 5px dashed white;

  animation: Border 9999999999s infinite;
}
@keyframes Border {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(399999999999deg);
  }
}
</style>

