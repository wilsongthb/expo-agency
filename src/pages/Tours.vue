<template>
   <q-page>
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
      <div class="q-pa-md">
         <q-parallax :height="200"  >
            <template v-slot:media>
            <img src="https://www.punotours.org/wp-content/uploads/puno12.png">
            </template>

            <h4 class="text-white">Taquile</h4>
         </q-parallax>
      </div>
      <div class="q-pa-md">
         <q-parallax :height="200" :speed="0.5">
            <template v-slot:media>
            <img src="https://www.peru.travel/Contenido/Destino/Imagen/pe/37/1.2/Principal/Los%20Uros.jpg">
            </template>

            <h4 class="text-white">Uros</h4>
         </q-parallax>
      </div>
      <div class="q-pa-md">
         <q-parallax :height="200" :speed="0.5">
            <template v-slot:media>
            <img src="https://portal.andina.pe/EDPfotografia3/Thumbnail/2020/10/13/000717789W.jpg">
            </template>

            <h4 class="text-white">Sillustani</h4>
         </q-parallax>
      </div>
      <div class="q-pa-md">
         <q-parallax :height="200" :speed="0.5">
            <template v-slot:media>
            <img src="https://www.viajaraperu.com/wp-content/uploads/2011/12/mirador-Kuntur-Wasi-puno-760x500.jpg">
            </template>

            <h4 class="text-white">Puno</h4>
         </q-parallax>
      </div>  
      <div class="q-pa-md">
         <q-parallax :height="200" :speed="0.5">
            <template v-slot:media>
            <img src="https://www.punotours.org/wp-content/uploads/lago-titicaca.jpg">
            </template>

            <h4 class="text-white">Amantani</h4>
         </q-parallax>
      </div> 
      <div class="q-pa-md">
         <q-parallax :height="200" >
            <template v-slot:media>
            <img src="https://www.punotours.org/wp-content/uploads/lago-titicaca2.jpg">
            </template>

            <h4 class="text-white">bahia</h4>
         </q-parallax>
      </div> 
         
   </q-page>
</template>
<script>
export default {
    data(){
    return{
      text:"",

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