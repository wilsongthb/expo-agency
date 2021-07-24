<template>
  <q-page class="q-pa-md">
    <div class="row">
      <h6 class="q-ma-none">Nosotros</h6>
    </div>
    <q-card class="my-card q-mt-none q-mx-sm">
      <q-card-section >
        <q-scroll-area :visible="true" style="height: 200px;">
          <div class="q-py-xs">
            Sol Peru Reisen les da la bienvenida.<br>
            Somos una agencia de viajes ubicada en la ciudad de Puno.<br>
            Después de muchos años de experiencia en la actividad del Turismo y motivados por brindar un servicio diferente:<br>
            Promovemos un turismo creativo.
            <q-list bordered separator >
              <q-item>
                <q-item-section avatar>
                  <q-icon color="primary" name="check" />
                </q-item-section>
                <q-item-section>Tratamos de  preservar la naturaleza a través de nuestros viajes.</q-item-section>
              </q-item>
              <q-item>
                <q-item-section avatar>
                  <q-icon color="primary" name="check" />
                </q-item-section>
                <q-item-section>Visitamos  escuelas de niños y con pequeñas actividades queremos generar el entusiasmo, unión, creatividad para valorar y proteger la naturaleza.</q-item-section>
              </q-item>
              <q-item>
                <q-item-section avatar>
                  <q-icon color="primary" name="check" />
                </q-item-section>
                <q-item-section>Somos flexibles a otras ideas útiles que puedan ayudar a la niñez.</q-item-section>
              </q-item>
              <q-item>
                <q-item-section avatar>
                  <q-icon color="primary" name="check" />
                </q-item-section>
                <q-item-section>Si usted no le agrada el turismo en masas, y busca algo especial, auténtico, entonces esta en la empresa adecuada.</q-item-section>
              </q-item>
            </q-list>
            <div>Tenemos diferentes programas cuidadosamente diseñados para cada interés y podemos organizar además otro tipo de tours como:</div>
            <q-list bordered separator >
              <q-item>
                <q-item-section avatar>
                  <q-icon color="primary" name="check" />
                </q-item-section>
                <q-item-section>Clásicos. Caminatas. Kayak, tour espirituales y otros.</q-item-section>
              </q-item>
            </q-list>
            Permítanos brindarle días agradables e inolvidables.<br>
            Viajando nos ayudaras a preservar la naturaleza.
          </div>
        </q-scroll-area>
      </q-card-section>
    </q-card>
    <q-separator color="orange" inset class="q-my-sm"/>

    <div class="row">
      <h6 class="q-ma-none">Ubicanos</h6>
    </div>
    <div id="mapa">
      <gmap-map
        class="q-ma-sm"
        :center="center"
        :zoom="zoom"
        style=" height: 250px; border-radius:5px;">
        <gmap-marker v-for="(marker) in markers"
          :key="marker.key"
          :position="marker"
        >
        </gmap-marker>
      </gmap-map>
    </div>
    <q-separator color="orange" inset class="q-my-sm"/>

    <div class="row">
      <h6 class="q-ma-none">Contactanos</h6>
    </div>
    <q-card class="my-card q-ma-sm q-pa-sm">
      <q-img
        src="~assets/logo.png"
       
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
    border: #ccc 3px solid ;
    margin-left: 10px;
    margin-right: 10px;
    background-color: white;
    box-shadow: 1px 1px 5px black;
    border-radius: 10px;
  }
</style>