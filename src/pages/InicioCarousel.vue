<template>
  <div class="q-pa-md">
    <q-carousel
      arrows
      animated
      navigation
      v-model="slide"
      height="100vh"
    >
      <q-carousel-slide name="first" img-src="~assets/01-Uros-00.jpg">
        <div class="absolute-top custom-caption q-ma-lg">
          <div class="text-h4">Isla flotante</div>
          <div class="text-h2 text-weight-regular text-uppercase">Los Uros</div>
          <div class="text-body1 text-weight-bold">Una de las culturas mas antiguas del continente, vive tradición y costumbres ancestrales.</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="second" img-src="~assets/02-Taquile-00.jpg">
        <div class="absolute-top custom-caption q-ma-lg">
          <div class="text-h4">Isla</div>
          <div class="text-h2 text-weight-regular text-uppercase">Taquile</div>
          <div class="text-body1 text-weight-bold">Toda la riqueza de su legado ancestral del lago Titicaca, en una isla. Tierra de tejedores ancestrales.</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="third" img-src="~assets/03-Amantani-00.jpg">
        <div class="absolute-top custom-caption q-ma-lg">
          <div class="text-h4">Isla</div>
          <div class="text-h2 text-weight-regular text-uppercase">Amantani</div>
          <div class="text-body1 text-weight-bold">Magia y misticismo andino, relaja tu alma con los hermosos parajes en el corazon del Titicaca.</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="fourd" img-src="~assets/04-Sillustani-00.jpg">
        <div class="absolute-top custom-caption q-ma-lg">
          <div class="text-h4">Chullpas de</div>
          <div class="text-h2 text-weight-regular text-uppercase">Sillustani</div>
          <div class="text-body1 text-weight-bold">Imponente cementerio de la cultura Kolla.</div>
        </div>
      </q-carousel-slide>
      
      <q-carousel-slide name="five" img-src="~assets/06-Anapia-00.jpg">
        <div class="absolute-top custom-caption q-ma-lg ">
          <div class="text-h4">Vive</div>
          <div class="text-h2 text-weight-regular text-uppercase">Anapia</div>
          <div class="text-body1 text-weight-bold">Paraíso bajo las constelaciones. El lugar perfecto para encontrar la conexión con la madre pachamama.</div>
        </div>
        <div v-if="true" class="fondo">
          <q-btn color="orange" class="full-width" label="Go!" to="/home"/>
        </div>
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
      slide: 'first',
      
    }
  }
}
</script>
<style scoped>
*{
        margin: 0;
        padding: 0;
    }
    html, body{
        height: 100%;
    }
    .container{
        
        /* background: url("~assets/01-Uros.jpg"); */
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-attachment: fixed;
    }
    /* .container div{
        color: #fff;
        font-size: 3vw;
        text-align: center;
        text-transform: uppercase;
        background: rgba(0, 0, 0, 0.5);
        background: linear-gradient(to bottom,black,rgba(255, 0, 0, 0));
        padding: 10px;
        position: fixed;
        display: block;
        width: 100%;
    } */
    .custom-caption{
      text-align: left;
      padding: 0px;
      color: white;
      /* background-color: rgba(0, 0, 0, .3); */
      position: relative;
      top: 70px;
      margin-left: auto;
      margin-right: auto;
      width: 80%;
      text-shadow: 1px 1px 2px black;
    }
    div .fondo{
      width: 50%;
      position: relative;
      margin-left: auto;
      margin-right: auto;
      margin-top: 40vh;
    }
</style>