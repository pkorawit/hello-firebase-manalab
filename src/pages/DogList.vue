<template>
  <q-page class="q-ma-md">
    <h1 class="text-h4">Dogs List</h1>
    <h1 class="text-h5">Welcome, {{ userName }} </h1>
  </q-page>
</template>

<script>
import { collection, getDocs } from "firebase/firestore";

export default {
  name: "PageIndex",

  async mounted() {

    const user = this.$auth.currentUser;
    this.userName = user.email;


    const querySnapshot = await getDocs(collection(this.$db, "Dogs"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  },

  data(){
    return {
      userName : ""
    }
  }
};
</script>
