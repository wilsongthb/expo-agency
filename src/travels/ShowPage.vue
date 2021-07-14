<!-- Author: Wilson Pilco Nunez -->
<!-- Email: wilsonaux1@gmail.com -->
<!-- Created at: 2021-06-07 21:20 -->

<template>
  <div class="q-pa-md row justify-center">
    <div class="col-11">
      <TravelCard :travel="travel"></TravelCard>
    </div>
    <div class="col-11" style="margin-top: 0.5rem; margin-bottom: 0.5rem">
      <!-- <q-btn round color="primary" icon="share" /> -->
      <q-btn color="secondary" label="Reservar" @click="goToReserve" />
    </div>
    <div class="col-11">
      <q-card>
        <q-card-section>
          {{ travel.description }}
        </q-card-section>
      </q-card>
    </div>
    <div class="col-11">
      <q-table
        title="Activities"
        :data="travel.activities"
        :columns="columns"
        row-key="name"
      />
    </div>
    <div class="col-11">
      <q-card>
        <q-card-section>
          <div class="text-subtitle2">SERVICIOS</div>
          {{ travel.service }}
        </q-card-section>
      </q-card>
    </div>
    <div class="col-11">
      <q-card>
        <q-card-section>
          <div class="text-subtitle2">INFORMACION UTIL</div>
          {{ travel.advice }}
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script>
import BackendService from "src/BackendService";
import TravelCard from "./TravelCard.vue";
// import TravelServices from "./TravelServices";
export default {
  components: {
    TravelCard,
  },

  // directives
  // filters

  props: {
    id: {
      required: true,
    },
  },

  data: () => ({
    travel: {},
    columns: [
      { align: "left", name: "time", label: "Time", field: "time" },
      { align: "left", name: "activity", label: "Activity", field: "activity" },
    ],
  }),

  computed: {
    //
  },

  // watch: {},

  mounted() {
    // TravelServices.getTravel(this.id).then((res) => {
    //   this.travel = res;
    // });
    BackendService.getProduct(this.id).then((res) => {
      this.travel = res;
    });
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
};
</script>

<style scoped></style>
