<template>
  <q-page>
    <div class="column" style="height: 130px">
      <q-banner class="col bg-info">
        <div class="text-h6 text-weight-bolder text-center text-white"></div>
      </q-banner>
    </div>
    <div class="superponer">
      <q-input
        outlined
        v-model="text"
        label-slot
        clearable
        class="q-mx-md bg-white"
        color="info"
        @change="getLugares()"
      >
        <template v-slot:prepend>
          <q-avatar>
            <q-icon name="search" size="md" color="info" />
          </q-avatar>
        </template>

        <template v-slot:label>
          <strong class="text-deep-orange"> Are you</strong>
          search
          <em class="q-px-sm bg-deep-orange text-white rounded-borders"
            >cities</em
          >?
        </template>
      </q-input>
    </div>

    <div class="q-pa-md" v-for="item in tours" :key="item.id">
      <router-link :to="`/travels/${item.id}`">
        <q-parallax :height="200" :speed="0.5">
          <template v-slot:media>
            <img :src="item.image" />
          </template>
          <h4 class="text-white ellipsis">{{ item.name }}</h4>
        </q-parallax>
      </router-link>
    </div>
    <!--div class="q-ma-sm">
         <q-card class="my-card q-mb-md" v-for="item in list" :key="item.id">
            <q-img :src="item.image"  style="height:200px"/>

            <q-card-section>
            <q-btn
               fab
               color="primary"
               icon="place"
               class="absolute"
               style="top: 0; right: 12px; transform: translateY(-50%);"
            />

            <div class="row no-wrap items-center">
               <div class="col text-h6 ellipsis">
                  {{item.name}}
               </div>
               <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                  <q-icon name="place" />
                  250 ft
               </div>
            </div>

            <q-rating v-model="stars" :max="5" size="32px" />
            </q-card-section>

            <q-card-section class="q-pt-none">
            <div class="text-subtitle1">
               $・{{item.price}}
            </div>
            <q-scroll-area :visible="true" style="height: 80px;">
               <div class="text-caption text-grey">
                  {{item.description}}
               </div>
            </q-scroll-area>
            </q-card-section>
         
            <q-separator />

            <q-card-actions>
            <q-btn flat round icon="event" />
            <q-btn flat color="primary">
               Reserve
            </q-btn>
            </q-card-actions>
         </q-card> 
      </div-->
  </q-page>
</template>
<script>
import BackendService from "../BackendService.js";
//import EssentialLink from "components/EssentialLink.vue";
const TIPO_LUGAR = 1;

export default {
  components: {
    "essential-link": require("components/EssentialLink.vue").default,
    // EssentialLink,
  },
  mounted() {
    this.getLugares();
  },
  data() {
    return {
      text: null,
      stars: 4,
      tours: [
        {
          id: "1",
          name: "Taquile",
          image: "https://www.punotours.org/wp-content/uploads/puno12.png",
          to: "/1",
        },
        {
          id: "2",
          name: "Uros",
          image:
            "https://www.peru.travel/Contenido/Destino/Imagen/pe/37/1.2/Principal/Los%20Uros.jpg",
          to: "/2",
        },
        {
          id: "3",
          name: "Sillustani",
          image:
            "https://portal.andina.pe/EDPfotografia3/Thumbnail/2020/10/13/000717789W.jpg",
          to: "/3",
        },
        {
          id: "4",
          name: "Puno",
          image:
            "https://www.viajaraperu.com/wp-content/uploads/2011/12/mirador-Kuntur-Wasi-puno-760x500.jpg",
          to: "/4",
        },
        {
          id: "5",
          name: "Amantani",
          image:
            "https://www.punotours.org/wp-content/uploads/lago-titicaca.jpg",
          to: "/5",
        },
        {
          id: "6",
          name: "bahia",
          image:
            "https://www.punotours.org/wp-content/uploads/lago-titicaca2.jpg",
          to: "/6",
        },
      ],
      list: [],
    };
  },
  methods: {
    async getLugares() {
      var response = await BackendService.getProducts({
        type: TIPO_LUGAR,
        search: this.text,
      });
      this.tours = response.results;
    },
  },
  computed: {
    filtro() {
      return this.list.filter((items) =>
        items.name.toUpperCase().includes(this.text.toUpperCase())
      );
    },
  },
};
</script>
<style scoped>
.superponer {
  position: relative;
  top: -30px;
}
</style>
