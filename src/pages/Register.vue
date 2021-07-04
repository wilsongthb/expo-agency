<template>
  <div>
    <div class="column" style="height: 350px">
      <q-banner class="col bg-info">
        <div class="text-h6 text-weight-bolder text-center text-white">
          <div class="q-mb-sm">
            <img
              alt="Quasar logo"
              src="~assets/logo-vertical.png"
              style="width: 200px; height: 200px"
            />
          </div>
          <div class="text-h6 text-weight-bolder text-center text-white">
            Sign Up!
          </div>
        </div>
      </q-banner>
    </div>
    <q-form @submit="registro">
      <div class="superponer q-mx-sm">
        <div class="row q-mt-sm q-mx-sm">
          <div class="col">
            <q-card class="my-card">
              <q-card-section>
                <div class="text-center ">
                  <q-input
                    color="primary"
                    class=""
                    v-model="register.name"
                    type="text"
                    label="Full Name"
                    required
                  >
                    <template v-slot:append>
                      <q-icon name="person" />
                    </template>
                  </q-input>
                  <q-input
                    color="primary"
                    class="q-mt-sm"
                    v-model="register.email"
                    type="email"
                    label="E-mail"
                    required
                  >
                    <template v-slot:append>
                      <q-icon name="email" />
                    </template>
                  </q-input>
                  <q-input
                    color="primary"
                    class="q-mt-sm"
                    v-model="register.password"
                    :type="isPwd ? 'password' : 'text'"
                    label="Password"
                    :rules="[
                      (val) => !!val || 'Field is required',
                      (val) =>
                        val.length > 6 || 'Please use miniun 6 character',
                    ]"
                    ref="fldPasswordChange"
                  >
                    <template v-slot:append>
                      <q-icon name="visibility" @click="isPwd = !isPwd" />
                    </template>
                  </q-input>
                  <q-input
                    color="primary"
                    class=" q-mb-xl"
                    v-model="register.password2"
                    :type="isPwd2 ? 'password' : 'text'"
                    label="Confirm Password"
                    :rules="ConfirmPWD"
                  >
                    <template v-slot:append>
                      <q-icon name="visibility" @click="isPwd2 = !isPwd2" />
                    </template>
                  </q-input>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
      <div class="superponer_boton">
        <div class="row justify-center">
          <div class="col q-mx-xl">
            <q-btn
              type="submit"
              size="lg"
              color="info"
              label="Sign Up"
              rounded
              no-caps
              class="full-width"
            />
          </div>
        </div>
        <div class="row justify-center q-mt-sm">
          <div class="col q-mx-xl">
            <q-btn
              to="/home"
              size="lg"
              color="blue"
              label="Facebook"
              rounded
              no-caps
              class="full-width"
            />
          </div>
        </div>
        <div class="row justify-center q-mt-sm">
          <div class="col q-mx-xl">
            <q-btn
              to="/home"
              size="lg"
              color="red"
              label="Google"
              rounded
              no-caps
              class="full-width"
            />
          </div>
        </div>
        <div class="text-h11 q-mt-md text-center text-grey-6">
          Already have an account?
          <q-item
            class="col text-weight-bolder text-grey-6"
            to="/login"
            style="display:inline;"
            >Sign in</q-item
          >
        </div>
      </div>
    </q-form>
  </div>
</template>

<script>
import axios from "axios";
import BackendService from "src/BackendService";
import afterLogin from "./afterLogin";
export default {
  name: "PageIndex",
  data() {
    return {
      text: "",
      register: { name: "", email: "", password: "", password2: "" },
      isPwd: true,
      isPwd2: true,
    };
  },
  methods: {
    async registro() {
      await BackendService.registerUser(
        this.register.name.replaceAll(" ", ""),
        this.register.email,
        this.register.password
      );
      await BackendService.login(this.register.email, this.register.password);
      afterLogin(this);
    },
  },
  computed: {
    ConfirmPWD() {
      return [
        (v) => !!v || "Field is required",

        (v) =>
          v == this.$refs.fldPasswordChange.value || "Mots de passe différents",
      ];
    },
    Required() {
      return [(v) => !!v || "Field is required"];
    },
  },
};
</script>
<style scoped>
.superponer {
  position: relative;
  top: -50px;
}
.superponer_boton {
  position: relative;
  top: -76px;
}
</style>
