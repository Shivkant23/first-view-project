<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HomeComp />
  <!-- <JavaComp />
  <PhpComp />
  <DartComp /> -->
  <!-- <FormComp /> -->
  <!-- <ChildComp />
  <ParentComp /> -->
  <!-- <ClassBindingComp /> -->
  <!-- <HtmlBindingComponent /> -->
  <!-- <HelloWorld msg="This is my first code" /> -->
  <!-- <MyFirstComponent comp_name="This is my first code MyFirstComponent " /> -->
</template>

<script>
import HomeComp from './components/dynamic_comp/HomeComp.vue';
// import JavaComp from './components/dynamic_comp/JavaComp.vue';
// import PhpComp from './components/dynamic_comp/PhpComp.vue';
// import DartComp from './components/dynamic_comp/DartComp.vue';
// import FormComp from './components/Form/FormComp.vue';
// import ChildComp from './components/comp_to_comp/ChildComp.vue';
// import ParentComp from './components/comp_to_comp/ParentComp.vue';
// import ClassBindingComp from './components/ClassBindingComp.vue';
// import HtmlBindingComponent from './components/HtmlBindingComponent.vue';
// import ChildComponent from './components/ChildComponent.vue';
// import HelloWorld from './components/HelloWorld.vue'
// import MyFirstComponent from './components/MyFirstComponent.vue'

export default {
  name: 'App',
  components: {
    HomeComp
    // JavaComp,
    // PhpComp,
    // DartComp
    // FormComp
    // ParentComp,
    // ChildComp
    // ClassBindingComp
    // HtmlBindingComponent
    // HelloWorld,
    // MyFirstComponent
    // ChildComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  padding-left: 80px;
}
</style>
