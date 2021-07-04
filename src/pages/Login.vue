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
            Sign In!
          </div>
        </div>
      </q-banner>
    </div>
    <q-form @submit.prevent="auth">
      <div class="superponer q-mx-sm">
        <div class="row q-mt-sm q-mx-sm">
          <div class="col">
            <q-card class="my-card">
              <q-card-section>
                <div class="text-center ">
                  <q-input
                    color="primary"
                    class="q-mt-sm"
                    v-model="login.email"
                    type="email"
                    label="E-mail"
                    :rules="[(val) => !!val || 'Field is required']"
                  >
                    <template v-slot:append>
                      <q-icon name="email" />
                    </template>
                  </q-input>
                  <q-input
                    color="primary"
                    class="q-mt-sm q-mb-xl"
                    v-model="login.password"
                    :type="isPwd ? 'password' : 'text'"
                    label="Password"
                    :rules="[
                      (val) => !!val || 'Field is required',
                      (val) =>
                        val.length >= 6 || 'Please use miniun 6 character',
                    ]"
                  >
                    <template v-slot:append>
                      <q-icon name="visibility" @click="isPwd = !isPwd" />
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
              size="lg"
              color="info"
              label="Sign In"
              rounded
              no-caps
              class="full-width"
              type="submit"
            />
          </div>
        </div>

        <div class="row text-h11 text-center q-mt-md text-grey-6">
          <div class="col">
            Don't have an account?
            <q-item
              class="col text-weight-bolder text-grey-6"
              to="/register"
              style="display:inline;"
              >Create Now</q-item
            >
          </div>
        </div>
      </div>
    </q-form>
  </div>
</template>

<script>
import BackendService from "src/BackendService";
import afterLogin from "./afterLogin.js";
export default {
  name: "PageIndex",
  data() {
    return {
      login: { email: "", password: "" },
      isPwd: true,
      re: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    };
  },
  methods: {
    async auth() {
      try {
        await BackendService.login(this.login.email, this.login.password);
        afterLogin(this);
      } catch (e) {
        //
      }
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
