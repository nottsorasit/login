<template>
  <div class="container">
    <center>
      <h1>สมัครสมาชิก</h1>
      <br />
      <v-list-item>
        <v-img
          ><img
            src="https://media.giphy.com/media/W5qrFNL7gfYovO6sxo/giphy.gif"
            alt=""
            width="350px"
        /></v-img>
      </v-list-item>
    </center>

    <div>
      <v-text-field
        :rules="[(v) => !!v || '']"
        v-model="Name"
        label="Name"
        filled
      ></v-text-field>
      <v-text-field
        :rules="[(v) => !!v || '']"
        v-model="Email"
        label="Email"
        filled
      ></v-text-field>
      <v-text-field
        :rules="[(v) => !!v || '']"
        v-model="Phone"
        label="Phone"
        type="number"
        filled
      ></v-text-field>
      <v-text-field
        :rules="[(v) => !!v || '']"
        v-model="Address"
        label="Address"
        filled
      ></v-text-field>
    </div>
    <v-card-actions>
      <v-btn
        x-large
        color="orange darken-4 white--text"
        @click="submitApply"
        :disabled="valid == true"
        >สมัคร</v-btn
      >
      <v-spacer></v-spacer>
    </v-card-actions>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      Name: null,
      Email: null,
      Phone: null,
      Address: null,
    };
  },
  methods: {
    submitApply() {
      this.$store.commit("SUBMIT_ORDER", {
        Name: this.Name,
        Email: this.Email,
        Phone: this.Phone,
        Address: this.Address,
      });

      this.$router.replace("/Apply");
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Prompt&display=swap");
* {
  font-family: "Prompt", sans-serif;
}
</style>