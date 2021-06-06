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
      <q-carousel-slide name="style" class="column no-wrap flex-center">
        <img
            alt="Quasar logo"
            src="~assets/1.png"
            style="width: 200px; height: 200px"
        >
        <div class="q-mt-sm text-weight-bolder text-black">Primer Titulo</div>
        <div class="q-mt-md text-center text-black">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="tv" class="column no-wrap flex-center">
        <img
            alt="Quasar logo"
            src="~assets/2.png"
            style="width: 200px; height: 200px"
        >
        <div class="q-mt-sm text-weight-bolder text-black">Segundo Titulo</div>
        <div class="q-mt-md text-center text-black">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="layers" class="column no-wrap flex-center">
        <img
            alt="Quasar logo"
            src="~assets/3.png"
            style="width: 200px; height: 200px"
        >
        <div class="q-mt-sm text-weight-bolder text-black">Tercero Titulo</div>
        <div class="q-mt-md text-center text-black">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="map" class="column no-wrap flex-center">
        
        <img
            alt="Quasar logo"
            src="~assets/4.png"
            style="width: 200px; height: 200px"
        >
        <div class="q-mt-sm text-weight-bolder text-black">Cuarto Titulo</div>
        <div class="q-mt-md text-center text-black">
          {{ lorem }}
        </div>
        <q-btn color="secondary" class=" q-mt-md full-width" label="Go!" to="/home"/>
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

      slide: 'style',
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  }
}
</script>
<style scoped>

</style>