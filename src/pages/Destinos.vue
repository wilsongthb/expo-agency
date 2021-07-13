<template>
    <q-page>
        <div class="row">
            <div class="col">
               <div class="row">
                    Los uros
               </div>
                <div class="row">
                Isla flotante
                </div>

            </div>
            <div class="col">
                <q-btn>
                    $45.00
                </q-btn>
            </div>
        </div>
        <div class="row">
            <div class="col">
            <q-carousel
                animated
                v-model="slide"
                arrows
                navigation
                infinite
                >
                <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
                <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
                <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
                <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
            </q-carousel>
            </div>
        </div>
        <div class="row">
            <div class="col">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur deleniti quia unde tenetur illum libero magni, repudiandae itaque deserunt esse iusto, accusantium sapiente! Temporibus aliquam quod hic molestias sed libero!
            </div>
        </div>
        <div class="row">
            <div class="col">
                <q-btn round color="deep-orange" icon="edit_location" />  
                <q-btn round color="purple" glossy icon="local_grocery_store" />
                <q-btn round color="black" icon="my_location" />
            </div>
        </div>
        <div class="row">
          <div class="col">
            <q-list bordered separator>
                <q-item clickable v-ripple v-for="item in 4" :key="item">
                    <q-item-section>Single line item</q-item-section>
                </q-item>
            </q-list>
          </div>  
        </div>
        <q-btn color="secondary" label="Reservar" @click="goToReserve" />
    </q-page>
</template>
<script>
export default {
    data(){
        return{
            slide: 1
        }
    },
    methods: {
    goToReserve() {
      this.$router.push({
        path: "/reserva",
        query: {
          product_id: this.id
        }
      });
    },
  },
}
</script>
<style lang="">
    
</style>