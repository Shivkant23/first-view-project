<template>
    <div class="user">


        <h3>{{ " Name: " + data.name + ", Age: " + data.age }}</h3>
    </div>
</template>
<script>
export default {
    name: 'UserComponent',
    props: {
        data: Object
    }
}
</script>
<style>
.user {
    background-color: aliceblue;
    padding: auto;
    border-bottom: 1px solid #000;
    margin-bottom: 20px;
}
</style>