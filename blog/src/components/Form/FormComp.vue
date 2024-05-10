<template >
    <div>
        <h1>Simple form</h1>
        <form>
            <label for="email">Name:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" id="email" placeholder="Enter email id" v-model="form.email">
            <br /><br />
            <label for="password">Password:</label>&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="password" id="password" placeholder="Enter password" v-model="form.password">
            <br /><br />
            <button @click="login" type="button">Submit</button>
            <p>{{ form }}</p>
        </form>
    </div>
</template>
<script>
export default {
    name: 'FormComp',
    data() {
        return {
            name: 'Rahul',
            form: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        login() {
            if (this.form.email === '' || this.form.password === '') {
                alert("Please enter email and password");
                return;
            }
            console.warn("Login Data:- ", this.form);
        }
    }
}
</script>
<style></style>