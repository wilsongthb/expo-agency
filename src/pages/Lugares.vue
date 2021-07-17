<template>
   <q-page >
      <div class="column" style="height: 130px">
         <q-banner class="col bg-info">
            <div class="text-h6 text-weight-bolder text-center text-white">
            
            
            </div>
         </q-banner>
      </div>
      <div class="superponer">
         <q-input outlined v-model="text"  label-slot clearable class="q-mx-md bg-white" color="info">
            <template v-slot:prepend>
               <q-avatar>
                  <q-icon name="search" size="md" color="info"/>
               </q-avatar>
            </template>

            <template v-slot:label>
               <strong class="text-deep-orange"> Are you</strong>
               search <em class="q-px-sm bg-deep-orange text-white rounded-borders">cities</em>?
            </template>

         </q-input>
      </div> 

      <router-link class="col-12 col-md-6 col-sm-6"
        :to="`/travels/${l.id}`"
        v-for="(l, i) in filtro"
        :key="i"
        :travel="l"
        style="text-decoration:none"
      >
        <essential-link
          class="q-mx-lg q-mb-lg"
          :travel="l"
          :list="i"
           @modal="handleClick"
        ></essential-link>
      </router-link>


      
      <q-dialog v-model="confirm">
         
         <q-card class="my-card q-ma-none">
            <q-bar class="bg-primary full-width" style="position: sticky; top: 0px; z-index: 10;">
               <div class="text-white" >Actividades</div>
   
               <q-space />
   
               <q-btn class="text-white" dense flat icon="close" v-close-popup>
                  <q-tooltip>Close</q-tooltip>
               </q-btn>
            </q-bar>
         <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />

         <q-card-section>
            <q-list>
               <q-item clickable v-ripple v-for="item in 15" :key="item">
                  
               <q-item-section>
                  <q-item-label>Actividad</q-item-label>
                  <q-item-label caption lines="2">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
               </q-item-section>

               <q-item-section side top>
                  <q-item-label caption>5 min ago</q-item-label>
                  <q-icon name="watch_later" color="secondary" />
               </q-item-section>
               </q-item>
            
            </q-list>
         </q-card-section>

         </q-card>
      </q-dialog>


      <!--div class="q-pa-md" v-for="item in tours" :key="item.id">
         <q-parallax :height="200" :speed="0.5">
            <template v-slot:media>
            <img :src="item.image">
            </template>

            <h4 class="text-white ellipsis">{{item.name}}</h4>
         </q-parallax>
      </div>
      <div class="q-ma-sm">
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
import BackendService from "../BackendService.js"
//import EssentialLink from "components/EssentialLink.vue";
export default {
   components:{
      'essential-link':require('components/EssentialLink.vue').default
     // EssentialLink,
   },
   mounted(){
      BackendService.getProducts().then(res => {
      this.list = res.results;
      })
   },
    data(){
    return{
      text:"",
      confirm: false,
      stars: 4,
      tours:[
         {id:"1",name:"Taquile",image:"https://www.punotours.org/wp-content/uploads/puno12.png" , to:"/1"},
         {id:"2",name:"Uros",image:"https://www.peru.travel/Contenido/Destino/Imagen/pe/37/1.2/Principal/Los%20Uros.jpg",to:"/2"},
         {id:"3",name:"Sillustani",image:"https://portal.andina.pe/EDPfotografia3/Thumbnail/2020/10/13/000717789W.jpg", to:"/3"},
         {id:"4",name:"Puno",image:"https://www.viajaraperu.com/wp-content/uploads/2011/12/mirador-Kuntur-Wasi-puno-760x500.jpg", to:"/4"},
         {id:"5",name:"Amantani",image:"https://www.punotours.org/wp-content/uploads/lago-titicaca.jpg", to:"/5"},
         {id:"6",name:"bahia",image:"https://www.punotours.org/wp-content/uploads/lago-titicaca2.jpg",to:"/6"},
      ],
      list: [],

      

    }
  },
  computed:{
     filtro(){
        return this.list.filter((items)=> items.name.toUpperCase().includes(this.text.toUpperCase()));
     }
  },
  methods:{
     handleClick(info) {
      // alert(info)
      this.confirm = info
    }
  }
}
</script>
<style scoped>
.superponer{
    position: relative;
    top: -30px;
  }
</style>