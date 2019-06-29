<template>
  <div class="Skills">
      <i class="fas fa-flask" id="icon"></i>
    <Skill v-for="skill in skills" v-bind:key="skill.name" v-bind:skill="skill" />
  </div>
</template>

<script>
import Skill from "@/components/Skill.vue";

export default {
  name: "Skills",
  components: {
    Skill
  },
  props: {
    skills: Array
  }
};
</script>
<style>
</style>

