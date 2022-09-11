<template>
  <q-page class="q-ma-md">
    <h1 class="text-h4">Post List</h1>
    <h1 class="text-h5">Welcome, {{ userName }}</h1>
    <div class="q-gutter-sm">
      <q-card class="my-card" v-for="(post, index) in posts" :key="index">
        <img :src="post.photoUrl" />

        <q-card-section>
          <div class="text-h6">{{ post.comment }}</div>
          <div class="text-subtitle2">by {{ post.user }}</div>
        </q-card-section>
      </q-card>
    </div>
    <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
        <q-card-section class="text-center">
          <img :src="newPost.photoUrl" width="300px" @click="pickFile"/>
          <input
            type="file"
            id="postImage"
            name="postImage"
            accept="image/png, image/jpeg"
            hidden
            ref="postImage"
          />
        </q-card-section>

        <q-card-section>
          <div class="text-h6">New Post</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          User
          <q-input dense v-model="newPost.user" @keyup.enter="prompt = false" />
        </q-card-section>

        <q-card-section class="q-pt-none">
          Comment
          <q-input
            dense
            v-model="newPost.comment"
            autofocus
            @keyup.enter="prompt = false"
          />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Add New Post" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn @click="addNewPost" fab icon="add" color="primary" />
    </q-page-sticky>
  </q-page>
</template>

<script>
import { collection, getDocs } from "firebase/firestore";
import { ref } from "firebase/storage";
export default {
  name: "PageIndex",

  async mounted() {
    const user = this.$auth.currentUser;
    this.userName = user.email;

    const querySnapshot = await getDocs(collection(this.$db, "posts"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      this.posts.push(doc.data());
    });
  },

  data() {
    return {
      userName: "",
      posts: [],
      prompt: false,
      newPost: {
        comment: "",
        user: "",
        photoUrl: "images/noimg.png",
      },
    };
  },
  methods: {
    addNewPost() {
      this.newPost.user = this.userName;
      this.prompt = true;
    },
    pickFile(){
        this.$refs.postImage.click();
    },
    uploadPhoto(){
        const fileName = `${Date.now()}.png`
        const newFileRef = ref(this.$storage, fileName);

    }
  },
};
</script>
