<template>
  <q-page class="col">
    
    
    <div id="mapa">
      <gmap-map
        class="q-ma-sm"
        :center="center"
        :zoom="zoom"
        style="width: 96%; height: 350px; border-radius:5px;">
        <gmap-marker v-for="(marker) in markers"
          :key="marker.key"
          :position="marker"
        >
        </gmap-marker>
      </gmap-map>
    </div>
    <q-card class="my-card q-ma-sm">
      <q-parallax
        src="https://cdn.quasar.dev/img/parallax1.jpg"
        :height="150"
      />

      <q-card-section class="text-center">
        <q-list separator >
            <q-item clickable >
                <q-item-section avatar>
                <q-icon color="secondary" name="email" />
                </q-item-section>

                <q-item-section>Reservas@solperureisen.com</q-item-section>
            </q-item>

             <q-item clickable >
                <q-item-section avatar>
                <q-icon color="secondary" name="phone_iphone" />
                </q-item-section>

                <q-item-section> RPM Movistar: 051 956560496</q-item-section>
            </q-item>

             <q-item clickable >
                <q-item-section avatar>
                <q-icon color="secondary" name="phone" />
                </q-item-section>

                <q-item-section> Fijo 051 355114</q-item-section>
            </q-item>

             <q-item clickable >
                <q-item-section avatar>
                <q-icon color="secondary" name="push_pin" />
                </q-item-section>

                <q-item-section> Jr. Tacna 287 Of. 106 , Puno - Perú</q-item-section>
            </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDXHGhub9FsRDp1eMd2VyH1F5hS30qZ2bw'
  }
})

export default {
  name: 'PageIndex',
  data () {
    return {
      center: {
        lat: 36.60338869729776,
        lng: -4.643738644531254
      },
      markers: [
        { lat: 36.71395099999999, lng: -4.432000000000016 },
        { lat: 36.51007199999999, lng: -4.882447400000046 }
        ],
      zoom: 7,
      icon: '/statics/marker.png',
    }
  }
}
</script>

<style>
  #mapa{
    border-radius:50% ;
  }
</style>