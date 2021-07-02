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

      <div class="q-pa-md" v-for="item in filtro" :key="item.id">
         <q-parallax :height="200" :speed="0.5">
            <template v-slot:media>
            <img :src="item.img">
            </template>

            <h4 class="text-white">{{item.title}}</h4>
         </q-parallax>
      </div> 
     
         
   </q-page>
</template>
<script>
export default {
    data(){
    return{
      text:"",
      tours:[
         {id:"1",title:"Taquile",img:"https://www.punotours.org/wp-content/uploads/puno12.png" , to:"/1"},
         {id:"2",title:"Uros",img:"https://www.peru.travel/Contenido/Destino/Imagen/pe/37/1.2/Principal/Los%20Uros.jpg",to:"/2"},
         {id:"3",title:"Sillustani",img:"https://portal.andina.pe/EDPfotografia3/Thumbnail/2020/10/13/000717789W.jpg", to:"/3"},
         {id:"4",title:"Puno",img:"https://www.viajaraperu.com/wp-content/uploads/2011/12/mirador-Kuntur-Wasi-puno-760x500.jpg", to:"/4"},
         {id:"5",title:"Amantani",img:"https://www.punotours.org/wp-content/uploads/lago-titicaca.jpg", to:"/5"},
         {id:"6",title:"bahia",img:"https://www.punotours.org/wp-content/uploads/lago-titicaca2.jpg",to:"/6"},
      ]
    }
  },
  computed:{
     filtro(){
        return this.tours.filter((items)=> items.title.toUpperCase().includes(this.text.toUpperCase()));
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