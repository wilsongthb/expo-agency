<template>
  <q-page class="q-ma-md">
    <div class="row justify-center">
      <div class="col-8">
        <!-- <q-scroll-area :visible="true" style="height: 50px;"></q-scroll-area> -->
          <div class="text-h5 text-uppercase row" style="min-height: 80px;">{{ travel.name }}</div>
        <!-- </q-scroll-area> -->
        <div class="text-h6 row">
          <q-icon name="edit_location" color="deep-orange"></q-icon>
          {{ travel.location }}
        </div>
      </div>

      <div class="col-4 items-center">
        <q-btn class="full-width" color="deep-orange" disable>
          S/. {{ travel.price }}
        </q-btn>
      </div>
    </div>
    <div class="row q-mb-md">
      <div class="col">
        <q-carousel
          animated
          v-model="slide"
          arrows
          navigation
          infinite
          height="300px"
        >
          <q-carousel-slide
            v-for="(item, index) in gallery"
            :key="index"
            :name="index"
            :img-src="item.image"
          />
          <!-- <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
                <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
                <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" /> -->
        </q-carousel>
      </div>
    </div>
    <div class="row q-mb-lg">
      <div class="col">
        <q-scroll-area :visible="true" style="height: 150px;" align="justify">
          {{ travel.description }}
        </q-scroll-area>
      </div>
    </div>
    <div class="row q-mb-md">
      <div class="col q-gutter-md">
        <q-tabs
          v-model="panel"
          dense
          active-color="deep-orange"
          indicator-color="deep-orange"
          align="justify"
          narrow-indicator
          
        >
        
          <q-tab name="mails" >
            <q-btn padding="sm md"  icon="schedule"></q-btn
          ></q-tab>
          <q-tab name="alarms"
            ><q-btn padding="sm md"   icon="support_agent"  ></q-btn
          ></q-tab>
          <q-tab name="movies"
            ><q-btn padding="sm md"  icon="groups"></q-btn
          ></q-tab>
        </q-tabs>

        <q-tab-panels v-model="panel" animated class="shadow-2 rounded-borders">
          <q-tab-panel name="alarms">
            <div class="text-h6">Servico</div>
            <q-separator color="orange" />
         
           
              <ul>
                <li v-for="(service,index) in travel.services" :key="index">
                  {{service}}
                </li>
              </ul>
           
          </q-tab-panel>

          <q-tab-panel name="movies">
            <div class="text-h6">Información</div>
            <q-separator color="orange" />
            
             <ul>
                <li v-for="(service,index) in travel.advices" :key="index">
                  {{service}}
                </li>
              </ul>
            
          </q-tab-panel>

        
        </q-tab-panels>
      </div>
    </div>
    <div class="row q-mb-md">
      <div class="col">
        <!-- <q-list bordered separator>
                <q-item clickable v-ripple v-for="item in 4" :key="item">
                    <q-item-section>Single line item</q-item-section>
                </q-item>
            </q-list> -->
        <q-table
          title="Activities"
          :data="travel.activities"
          :columns="columns"
          row-key="name"
        />
      </div>
    </div>
    <div class="row justify-center">
      <q-btn
        color="deep-orange"
        label="Reservar"
        @click="goToReserve"
        class="q-pa-sm flex flex-center"
      />
    </div>
  </q-page>
</template>
<script>
import BackendService from "../BackendService.js";
export default {
  mounted() {
    // TravelServices.getTravel(this.id).then((res) => {
    //   this.travel = res;
    // });
    BackendService.getProduct(this.id).then((res) => {
      this.travel = res;
      this.gallery = res.gallery;
    });
  },
  props: {
    id: {
      required: true,
    },
  },
  data() {
    return {
      slide: 1,
      travel: {},
      gallery: [],
      columns: [
        { align: "left", name: "time", label: "Time", field: "time" },
        {
          align: "left",
          name: "activity",
          label: "Activity",
          field: "activity",
        },
      ],
      panel: "mails",
    };
  },
  methods: {
    goToReserve() {
      this.$router.push({
        path: "/reserva",
        query: {
          product_id: this.id,
        },
      });
    },
  },
};
</script>
<style lang=""></style>
