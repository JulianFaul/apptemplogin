<template>
 <f7-page>
    <f7-navbar title="Test" ></f7-navbar>
   
    <form v-on:submit.prevent class="list form-store-data" id="demo-form">
  
        <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-title item-label">Name</div>
            <div class="item-input-wrap">
              <input autocomplete="name" name="name" type="text" placeholder="Your name" v-model="username">
              <span class="input-clear-button"></span>
            </div>
          </div>
        </li>
         <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-title item-label">E-mail</div>
            <div class="item-input-wrap">
              <input autocomplete="email" name="email" type="email" v-model="email" placeholder="Your e-mail">
              <span class="input-clear-button"></span>
            </div>
          </div>
        </li>
        <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-title item-label">Password</div>
            <div class="item-input-wrap">
              <input name="password" type="password" v-model="password" placeholder="Your password">
              <span class="input-clear-button"></span>
            </div>
          </div>
        </li>
 

      
    <div class="block">
        <button @click="signUp()" class="col button button-fill">Button</button>
    </div>
    </form>
  </f7-page>
</template>


<script>
export default {
    data(){
        return{
            username:"",
            email:"",
            password:""
        }
    },
    methods:{
        signUp(){
            this.$store.dispatch('signUserUp',{username:this.username, email:this.email, password:this.password})
        }
    },
    computed:{
        user () {
          return this.$store.getters.user
        }
    },
    watch:{
      user (value) {
        if (value !== null && value !== undefined){
          console.log(user);
        }
      }
    }


};
</script>



