<template>
   <div class="q-ma-sm">
      <q-card class="my-card q-mb-md" >
            <q-img :src="travel.image"  style="height:200px"/>

            <q-card-section>
            <q-btn
               fab
               color="primary"
               icon="pending_actions"
               class="absolute"
               style="top: 0; right: 12px; transform: translateY(-50%);"
               @click="enviar"
            />

            <div class="row no-wrap items-center">
               <div class="col text-h6 ellipsis">
                  {{travel.name}}
               </div>
               <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                  <q-icon name="pending_actions" />
                  actividad
               </div>
            </div>

            <q-rating v-model="stars" :max="5" size="32px" />
            </q-card-section>

            <q-card-section class="q-pt-none">
            <div class="text-subtitle1">
               $・{{travel.price}}
            </div>
            <q-scroll-area :visible="true" style="height: 80px;">
               <div class="text-caption text-grey">
                  {{travel.description}}
               </div>
            </q-scroll-area>
            </q-card-section>
         
            <q-separator />

            <q-card-actions>
            <q-btn flat round icon="event" />
            <q-btn flat round to="home" color="primary">
               Reserve
            </q-btn>
            </q-card-actions>
         </q-card> 
      </div>
</template>

<script>
export default {
  name: 'EssentialLink',
  // props: {
  //   title: {
  //     type: String,
  //     required: true
  //   },
  // }
  props:['list','travel'],
  data(){
    return{
      stars: 4,
    }
  },
  methods:{
     enviar(e){
        //alert('antes')
        e.preventDefault();
        this.$emit("modal", true);
     }
  }
}
</script>
