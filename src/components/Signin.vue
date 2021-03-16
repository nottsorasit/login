<template>
  <v-container>
    <v-row>
      <v-col>
        <div v-if="loading" class="text-center">
          <v-progress-circular
            size="50"
            color="red"
            indeterminate
          ></v-progress-circular>
          <p>กำลังดำเนินการ...</p>
        </div>

        <v-card v-else>
          <v-list>
            <v-list-item @click="signinByGoogle">
              <v-list-item-avatar>
                <v-icon color="red">mdi-google</v-icon>
              </v-list-item-avatar>
              <v-list-item-title>เข้าสู่ระบบด้วย Google</v-list-item-title>
            </v-list-item>

            <v-list-item @click="signinByFacebook">
              <v-list-item-avatar>
                <v-icon color="red">mdi-facebook</v-icon>
              </v-list-item-avatar>
              <v-list-item-title>เข้าสู่ระบบด้วย Facebook</v-list-item-title>
            </v-list-item>
          <center>
            <v-list-item>
              <v-img
                ><img
                  src="https://media.giphy.com/media/j1mSV7lTv4IIT3Q7q8/giphy.gif"
                  alt=""
                  width="350px"
              /></v-img>
            </v-list-item>
            </center>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  data() {
    return {
      loading: true,
    };
  },

  mounted() {
    firebase
      .auth()
      .getRedirectResult()
      .then((result) => {
        if (result.user == null) {
          this.loading = false;
        } else {
          this.$router.replace("/");
        }
      });
  },

  methods: {
    signinByGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider);
    },
    signinByFacebook() {
      const provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithRedirect(provider);
    },
  },
};
</script>

<style>
.h {
  width: 35rem;
}
</style>