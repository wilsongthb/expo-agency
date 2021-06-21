<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated >
        <q-toolbar>
          <q-toolbar-title>Travel trip</q-toolbar-title>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        </q-toolbar>
      </q-header>

    <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="400"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>

              <q-item-section>
                Inbox
              </q-item-section>
            </q-item>

            <q-item active clickable v-ripple>
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
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="drafts" />
              </q-item-section>

              <q-item-section>
                Drafts
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="~assets/material.png" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <div class="text-weight-bold">Razvan Stoenescu</div>
            <div>@rstoenescu</div>
          </div>
        </q-img>
      </q-drawer>

    <q-page-container class="bg-grey-2">
      <router-view />
    </q-page-container>

    <q-footer  class="bg-white text-primary">
      <q-toolbar class="justify-center">  
        <q-tabs
          indicator-color="blue-9"
          switch-indicator 
        >
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

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [];

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      drawer: false,
      essentialLinks: linksData,
      links1: [
        { icon: 'home', text: 'Home', url:"/home"  },
        { icon: 'luggage', text: 'Tours', url:"/tours" },
        { icon: 'search', text: 'Explore', url:"/travels" },
        { icon: 'account_box', text: 'Profile', url:"/auth" }
      ]
    }
  }
}
</script>
