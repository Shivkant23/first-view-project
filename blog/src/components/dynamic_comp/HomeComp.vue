<template>
    <div>
        <h1>Home Component</h1>
        <h2>Dynamic Components</h2>
        <button @click="tab = 'Dart'">Load Dart</button>
        <button @click="tab = 'Java'">Load Java</button>
        <button @click="tab = 'Php'">Load Php</button>
    </div>
    <component :is="tab + 'Comp'"></component>
</template>
<script>
import JavaComp from './JavaComp.vue';
import PhpComp from './PhpComp.vue';
import DartComp from './DartComp.vue';
export default {
    name: 'HomeComp',
    data() {
        return {
            tab: 'java'
        }
    },
    components: {
        JavaComp,
        PhpComp,
        DartComp
    }
}
</script>
<style></style>