<template>
    <h2>
        Child Component
    </h2>
    <h3>
        {{ name }}</h3>
    <h3>
        {{ user }}</h3>
    <button @click="getInfo()">
        Button</button>
    <ul>
        <li v-for="item in users" :key="item.name">
            <UserComponent :data="item" />
        </li>
    </ul>
    <UserComponent :data="users" />
</template>
<script>
import UserComponent from './UserComponent.vue';
export default {
    name: 'ChildComponent',
    props: {
        name: String,
        user: Object,
        getInfo: Function
    },
    components: {
        UserComponent
    },
    data() {
        return {
            props: {
                name: String,
                user: Object
            },
            users: [
                {
                    name: 'SRS',
                    age: 25
                },
                {
                    name: 'Shivkant',
                    age: 26
                },
                {
                    name: 'Kumar',
                    age: 27
                }
            ]
        }
    },
    // methods: {
    //     // getInfo() {
    //     //     return this.name;
    //     // },
    //     // changeName() {
    //     //     this.name = 'Shivkant Kumar';
    //     // },
    //     // changeUser() {
    //     //     this.user.name = 'Shivkant Kumar';
    //     // }
    // }
}
</script>
<style></style>