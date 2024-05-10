<template>
    <div>
        <h1>Child Component</h1>
        <h2>Child component to Parent component data pass</h2>
        <button @click="getUser(name)">Send Data to Parent</button>
    </div>
</template>
<script>
export default {
    name: 'ChildComp',
    data() {
        return {
            name: 'Rahul'
        }
    },
    props: {
        getUser: Function
    },
}
</script>
<style lang="">
    
</style>