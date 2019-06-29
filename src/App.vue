<template>
  <div id="app">
    <div id="background" />
    <div id="nav">
      <div id="nav-left">
        <router-link to="/">Sciuridae Li</router-link>
      </div>
      <div id="nav-right">
        <router-link to="/works">Works</router-link>&nbsp;&nbsp;
        <router-link to="/contact">Contact</router-link>
      </div>
    </div>
    <div id="content">
      <router-view v-bind:data="data" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: {
        skills: [
          {
            name: "Python",
            percent: 80,
            description: "經常使用的程式語言",
            icon: "fab fa-python"
          }
        ]
      }
    };
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap");
body {
  font-family: "Noto Sans TC", sans-serif;
}

a {
  color: unset;
  text-decoration: none;
}

#background {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  transform: scale(1.5);

  z-index: -100;

  background: url("assets/background.png");
  background-size: cover;
  background-position: fixed;
  background-position-y: -100px;
}

#nav {
  border-radius: 5px;

  background: white;
  color: #587291;

  margin: 30px;
  padding: 10px 20px 10px 20px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  font-size: 20px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
}
#content {
  display: flex;
  justify-content: center;

  padding-top: 50px;
}
</style>
