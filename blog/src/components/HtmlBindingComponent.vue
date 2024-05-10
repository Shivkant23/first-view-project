<template>
    <div>
        <h2>Html Binding</h2>
        <h3>{{ "Name: " + data.name + ", Age: " + data.age }}</h3>
        <h3 v-html="htmlContent"></h3>
        <h3 v-html="htmlContent2"></h3>
        <h2>{{ getInfo() }}</h2>
    </div>
</template>
<script>
export default {
    name: 'HtmlBindingComponent',
    data() {
        return {
            htmlContent: '<h1>Html Binding</h1>',
            htmlContent2: '<h1>Html Binding</h1></br><h2>shivkant</h2>',
            data: {
                name: 'SRS',
                age: 25
            }
        }
    },
    methods: {
        getInfo() {
            return this.data.name + ' ' + this.data.age;
        }
    }
}
</script>
<style></style>