<template>
  <div class="hello">
    <ChildComponent name="SRS" :user="user" />
    <h1>{{ msg }}</h1>
    <h1>{{ email }}</h1>
    <h1>{{ mobile = 8888 }}</h1>
    <h1>{{ mobile = 9999 }}</h1>
    <!-- <h1>{{ getName() }}</h1> -->
    <h1>{{ getInfo(1) }}</h1>
    <h1>{{ getMobile() }}</h1>
    <h1>{{ getEmail() }}</h1>
    <h3>{{ count }}</h3>
    <input type="text" v-model="count" /><br /><br />
    <button v-on:click="buttonClick('Button Clicked')" class="btn btn-primary float-left">Button</button>
    <button @click="buttonClick2('second button clicked')"
      class="btn btn-primary float-right">Button2</button><br /><br />
    <button @click="buttonCounter1()">-</button>
    <button @click="buttonCounter2()">+</button><br /><br />
  </div>
  <div>
    <h2>Fill the form</h2>
    <h3>Select languages:</h3>
    <label>Java</label>
    <input type="checkbox" value="Java" v-model="techList" /><br />
    <label>Swift</label>
    <input type="checkbox" value="Swift" v-model="techList" /><br />
    <label>Dart</label>
    <input type="checkbox" value="Dart" v-model="techList" /><br />
    <label>GoLang</label>
    <input type="checkbox" value="GoLang" v-model="techList" /><br />
    <h3>Submission: {{ techList }}</h3>
  </div>
  <br /><br />
  <div>
    <h2>Fill the form</h2>
    <h3>Profession:</h3>
    <label>Developer</label>
    <input type="radio" value="Developer" name="pro" v-model="pro" /><br />
    <label>Tester</label>
    <input type="radio" value="Tester" name="pro" v-model="pro" /><br />
    <h3>Submission: {{ pro }}</h3>
  </div>
  <br /><br />
  <div>
    <h2>If Else</h2>
    <h3>Profession:</h3>
    <p>{{ show ? 'Developer' : 'Tester' }}</p><br />
    <label>true</label>
    <input type="radio" value="Developer" name="show" v-model="show" /><br />
    <label>false</label>
    <input type="radio" value="Tester" name="show" v-model="show" /><br />

    <h3>Submission: {{ show }}</h3>
  </div>
  <div>
    <h2>For Loop</h2>
    <ul>
      <li v-for="item in techList" :key="item.name">{{ item }}</li>
    </ul>
  </div>
  <div>
    <h2>Passing data from parent to child</h2>
    <ChildComponent name="SRS" :user="user" :getInfo="getInfo" />
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  components: {
    ChildComponent
  },
  getName() {
    return this.name;
  },
  data() {
    return {
      email: 'shivkantsawarkar@gmail.com',
      mobile: '1234567890',
      count: 100,
      techList: ['ASP.NET'],
      pro: null,
      show: true,
      user: {
        name: 'Shivkant',
        email: 'shivkant123123@gmail.com'
      }
    }
  },
  methods: {
    getInfo() {
      console.warn('parent function is get called.');
    },
    getMobile() {
      return this.mobile;
    },
    getEmail() {
      return this.email;
    },
    buttonClick(msg) {
      alert(msg);
    },
    buttonClick2(msg) {
      alert(msg);
    },
    buttonCounter1() {
      this.count--;
    },
    buttonCounter2() {
      this.count++;
    },

  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
