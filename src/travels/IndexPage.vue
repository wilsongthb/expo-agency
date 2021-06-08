<!-- Author: Wilson Pilco Nunez -->
<!-- Email: wilsonaux1@gmail.com -->
<!-- Created at: 2021-06-05 14:17 -->
<template>
  <q-page>
    <div class="q-pa-md row items-start q-gutter-md">
      <div class="col">
        <q-input
          color="grey-3"
          label-color="orange"
          outlined
          v-model="searchQuery"
          label="Buscar Viaje"
        >
          <template v-slot:append>
            <q-icon name="search" color="orange" />
          </template>
        </q-input>
      </div>
    </div>
    <div class="q-pa-md row justify-center ">
      <router-link
        :to="`/travels/${l.id}`"
        v-for="(l, i) in filteredList"
        :key="i"
        :travel="l"
      >
        <TravelCard
          class="col-md-5 q-mx-lg q-mb-lg"
          :travel="l"
        ></TravelCard>
      </router-link>
    </div>
  </q-page>
</template>
<script>
import TravelCard from "./TravelCard.vue";
import TravelServices from "./TravelServices.js";
export default {
  components: {
    TravelCard,
  },

  // directives
  // filters

  props: {
    //
  },

  data: () => ({
    list: [],
    searchQuery: null,
  }),

  computed: {
    filteredList() {
      if (this.searchQuery && this.searchQuery.length > 0) {
        return this.list.filter((x) => {
          return (
            x.name.toUpperCase().indexOf(this.searchQuery.toUpperCase()) != -1
          );
        });
      }
      return this.list;
    },
  },

  // watch: {},

  mounted() {
    TravelServices.getTravels().then((res) => {
      this.list = res;
    });
  },

  methods: {
    //
  },
};
</script>

<style scoped></style>
