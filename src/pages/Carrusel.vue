<template>
  <div class="fullscreen text-center  flex flex-center ">
    <q-carousel
      v-model="slide"
      swipeable
      animated
      :control-type="controlType"
      control-color="primary"
      navigation
      padding
      arrows
      height="500px"
      class="q-mt-md text-primary rounded-borders"
    >
      <q-carousel-slide v-for="(item,index) in carrusel" :key="index" :name="item.name" class="column no-wrap flex-center">
        <img
            alt="Quasar logo"
            :src="'/statics/'+item.img+ '.png'"
            
            style="width: 200px; height: 200px"
        >
        <div class="q-mt-sm text-weight-bolder text-black">{{item.titulo}}</div>
        <div class="q-mt-md text-center text-black">
          {{ item.descripcion }}
        </div>
        <template v-if="item.button">
          <q-btn color="secondary" class=" q-mt-md full-width" label="Go!" to="/home"/>
        </template>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>
<script>
export default {
  data () {
    return {
      controlType: 'flat',
      controlTypeOptions: [
        { value: 'regular', label: 'regular' },
        { value: 'unelevated', label: 'unelevated' },
        { value: 'flat', label: 'flat (default)' },
        { value: 'outline', label: 'outline' },
        { value: 'push', label: 'push' }
      ],
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.',
      carrusel:[
        {titulo:"Primer Titulo",name:"style", img:"1", descripcion:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo."},
        {titulo:"Segundo Titulo",name:"tv", img:"2", descripcion:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo."},
        {titulo:"Tercero Titulo",name:"layers", img:"3", descripcion:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo."},
        {titulo:"Cuarto Titulo",name:"map",img:"4", descripcion:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.",
        button:true}
      ],
      slide: 'style',
      
    }
  }
}
</script>
<style scoped>

</style>