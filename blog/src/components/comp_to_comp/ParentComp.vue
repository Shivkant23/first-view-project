<template lang="">
    <div>
        <h1>Parent Component</h1>
        <h2>Child component to Parent component data pass</h2>
        <ChildComp :getUser="getUserName" />
    </div>
</template>
<script>

import ChildComp from './ChildComp.vue';

export default {
    name: 'ParentComp',
    components: {
        ChildComp
    },
    methods: {
        getUserName(name) {
            alert('Hello from Parent Component ' + name)
        }
    }
}
</script>
<style lang="">
    
</style>