<template>
  <q-page class="q-ma-md q-gutter-sm">
    <h1 class="text-h4">Sign Up - สมัครสมาชิก</h1>
    <div>
      <q-input outlined v-model="email" label="Email" />
    </div>
    <div>
      <q-input
        v-model="password"
        label="Password"
        outlined
        :type="isPwd ? 'password' : 'text'"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
    </div>
    <div>
      <q-input
        v-model="passwordConfirm"
        label="Confirm Password"
        outlined
        :type="isPwd ? 'password' : 'text'"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
    </div>
    <div>
      <q-btn
        @click="signUpNewUser"
        color="primary"
        no-caps
        size="lg"
        class="full-width"
        label="Sign Me Up"
      />
    </div>
  </q-page>
</template>

<script>
import { createUserWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
      passwordConfirm: "",
      isPwd: true,
    };
  },
  methods: {
    signUpNewUser() {

      if(this.email === ""){
        this.$q.notify('Email is not valid')
        return
      }

      if(this.password != this.passwordConfirm){
        this.$q.notify('Password and comfirmation is not match')
        return
      }

      createUserWithEmailAndPassword(this.$auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          this.$router.push('/app')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          this.$q.notify(`${error.code} - ${error.message}`)
        });
    },
  },
};
</script>

<style>
</style>
