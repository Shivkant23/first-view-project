<template lang="">
    <div>
        <h1 :class="applyStyle">Class Binding Component</h1>
        <h2 :class="{green:colorful, err:true}">CSS Binding</h2>
        <button @click="colorful=!colorful">Apply style</button>
    </div>
</template>
<script>
export default {
    name: 'ClassBindingComp',
    data() {
        return {
            colorful: true
        }
    },
    computed: {
        applyStyle() {
            return {
                green: this.colorful,
                err: true,
                other: true
            }
        }
    }
}
</script>
<style scoped>
h1 {
    color: orange
}

.green {
    background-color: green;
    width: 200px;
    padding: 10px;
    align-content: center;
}

.err {
    color: red
}
</style>