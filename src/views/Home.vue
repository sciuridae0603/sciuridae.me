<template>
  <div class="home">
    <div id="avatar">
      <img id="avatarImg" src="//gravatar.com/avatar/60ce6b00bae88e0ff15c9480a9ce92f5?s=500" />
      <div id="avatarBorder" />
    </div>
    <div id="name">Sciuridae Li</div>
    <div id="description">只是一個普通人，常常玩弄軟體及硬體</div>

    <Skills v-bind:skills="data.skills" />
  </div>
</template>

<script>
import Skills from "@/components/Skills.vue";

export default {
  name: "home",
  props: {
    data: Object
  },
  components: {
    Skills
  }
};
</script>
<style>
.home {
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

