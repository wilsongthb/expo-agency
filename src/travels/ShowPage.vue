<!-- Author: Wilson Pilco Nunez -->
<!-- Email: wilsonaux1@gmail.com -->
<!-- Created at: 2021-06-07 21:20 -->
<template>
  <div class="q-pa-md row justify-center">
    <div class="col-11">
      <TravelCard :travel="travel"></TravelCard>
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
  </div>
</template>
<script>
import TravelCard from "./TravelCard.vue";
import TravelServices from "./TravelServices";
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
    TravelServices.getTravel(this.id).then((res) => {
      this.travel = res;
    });
  },

  methods: {
    //
  },
};
</script>

<style scoped></style>
