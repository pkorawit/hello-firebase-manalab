<template>
  <q-page class="q-ma-md q-gutter-sm">
    <h1 class="text-h4">Sign In - เข้าสู่ระบบ</h1>
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
      <q-btn
        @click="signIn"
        color="primary"
        no-caps
        size="lg"
        class="full-width"
        label="Sign Me In"
      />
    </div>
  </q-page>
</template>
<script>
import { signInWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
      isPwd: true,
    };
  },
  methods: {
    signIn() {
      signInWithEmailAndPassword(this.$auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("🚀 ~ .then ~ user", user)
          this.$router.push("/app");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("🚀 ~ signIn ~ errorMessage", errorMessage)
          this.$q.notify(`${errorCode} - ${errorMessage}`);
        });
    },
  },
};
</script>

<style>
</style>
