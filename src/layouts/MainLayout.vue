<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <!-- <q-toolbar-title>Travel trip</q-toolbar-title> -->
        <q-toolbar-title>
          <q-img
            alt="Quasar logo"
            src="~assets/logo.png"
            style="width: 200px;"
          />
          
        </q-toolbar-title>
        <div id="idioma" v-show="gTrans"></div>
        <q-btn flat @click="googleTranslateElementInit" :class="{'text-orange':gTrans}" round dense icon="translate" />
        <q-btn flat @click="drawer = !drawer" :class="{'text-orange':drawer}" round dense icon="menu" />
        
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" show-if-above :width="200" :breakpoint="400">
      <q-scroll-area
        style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd"
      >
        <q-list padding>
          <q-item clickable v-ripple to="/result" v-if="user.id">
            <q-item-section avatar>
              <q-icon name="inbox" />
            </q-item-section>
            
            <q-item-section >
              mis reservas 
            </q-item-section>
          </q-item>

          <!-- <q-item active clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="star" />
            </q-item-section>

            <q-item-section>
              Star
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="send" />
            </q-item-section>

            <q-item-section>
              Send
            </q-item-section>
          </q-item> -->

          <q-item clickable v-ripple @click="logout" v-show="user.id">
            <q-item-section avatar>
              <q-icon name="account_circle" />
            </q-item-section>
            <q-item-section>
              logout
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="login" v-show="!user.id">
            <q-item-section avatar>
              <q-icon name="account_circle" />
            </q-item-section>
            <q-item-section>
              login
            </q-item-section>
          </q-item>
          <q-separator color="info" inset class="q-mb-sm" />
          <q-item clickable v-ripple to="/nosotros">
            <q-item-section avatar>
              <q-icon name="apartment" />
            </q-item-section>

            <q-item-section>
              Nosotros
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="~assets/material.png"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <div class="text-weight-bold">{{ user.username }}</div>
          <div>{{ user.email }}</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container class="bg-grey-2">
      <router-view />
    </q-page-container>

    <q-footer class="bg-white text-primary">
      <q-toolbar class="justify-center">
        <q-tabs indicator-color="blue-9" switch-indicator>
          <q-route-tab
            v-for="item in links1"
            :key="item.text"
            :name="item.icon"
            :icon="item.icon"
            :label="item.text"
            :to="item.url"
            exact
          />
        </q-tabs>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>
<script
      type="text/javascript"
      src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    ></script>
<script>

import EssentialLink from "components/EssentialLink.vue";
import BackendService from "src/BackendService";

const linksData = [];

export default {
  name: "MainLayout",
  components: { EssentialLink},
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    return {
      leftDrawerOpen: false,
      drawer: false,
      gTrans: false,
      essentialLinks: linksData,
      links1: [
        { icon: "home", text: "Home", url: "/home" },
        { icon: "luggage", text: "Tours", url: "/tours" },
        { icon: "search", text: "Explore", url: "/travels" },
        { icon: "account_box", text: "Profile", url: "/auth" },
      ],
    };
  },
  methods: {
    logout() {
      BackendService.logout();
    },
    googleTranslateElementInit() {
        new google.translate.TranslateElement(
          { pageLanguage: 'es',
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
          includedLanguages: 'de,en,es,fr,it,ru',
          gaTrack: true,
          gaId: 'UA-XXXXXXXX-X' },
          'idioma'
    )
    this.gTrans=!this.gTrans;

  }
  },

};
</script>
<style>
  body{
    top: 0 !important;
  }
  .goog-te-banner-frame{
    display: none;
  }
</style>
