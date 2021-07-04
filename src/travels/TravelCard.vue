<!-- Author: Wilson Pilco Nunez -->
<!-- Email: wilsonaux1@gmail.com -->
<!-- Created at: 2021-06-05 14:23 -->
<template>
  <q-card class="my-card">
    <q-img :src="travel.image" />

    <q-card-section>
      <div class="text-subtitle2">{{ travel.name }}</div>
      <!-- <div class="text-h6">{{ travel.name }}</div> -->
      <!-- <div class="text-subtitle2">by John Doe</div> -->
    </q-card-section>

    <!-- <q-card-section class="q-pt-none"> -->
    <!--   {{ "nani " }} -->
    <!-- </q-card-section> -->
  </q-card>
</template>
<script>
export default {
  components: {
    //
  },

  // directives
  // filters

  props: {
    travel: {
      required: true,
    },
  },

  data: () => ({
    //
  }),

  computed: {
    //
  },

  // watch: {},

  mounted() {
    //
  },

  methods: {
    //
  },
};
</script>

<style scoped></style>
