<template>
  <v-app>
    <v-app-bar app color="deep-black accent-4" dark>
      <img
        src="https://cdn.shopify.com/s/files/1/0090/2692/8718/files/StoreLogo_180x.png?v=1605261280"
        class="logo mr-5 a"
      />
      <v-toolbar-title
        >JOM Streetwear</v-toolbar-title
      >

      <v-spacer></v-spacer>
      <v-switch v-model="$vuetify.theme.dark"></v-switch>
      <v-menu>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title>
              <center>
                <img
                  src="https://cdn.shopify.com/s/files/1/0090/2692/8718/files/StoreLogo_180x.png?v=1605261280"
                  class="logo"
                /></center
            ></v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>

          <v-list-item @click="register">
            <v-list-item-title class="black--text"
              >สมัครสมาชิก</v-list-item-title
            >
          </v-list-item>

          <v-list-item @click="login">
            <v-list-item-title class="black--text"
              >Login</v-list-item-title
            >
          </v-list-item>

          <v-list-item @click="signout">
            <v-list-item-title class="red--text">ออกจากระบบ</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} —
          <strong>Copyright © 2021, JOM Streetwear.</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "App",

  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user == null) this.$router.replace("/signin");
      else this.$router.replace("/");
    });
  },

  methods: {
    signout() {
      firebase.auth().signOut();
    },
    register() {
      this.$router.replace("/Register");
    },
    login() {
      this.$router.replace("/Signin");
    },
  },
};
</script>

<style lang="scss" scoped>
.v-application {
  font-family: "Kanit";
}
.logo {
  width: 40px;
}
.a {
  cursor: pointer;
}
</style>