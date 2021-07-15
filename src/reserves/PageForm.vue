<!-- Author: Wilson Pilco Nunez -->
<!-- Email: wilsonaux1@gmail.com -->
<!-- Created at: 2021-07-14 21:58 -->
<template>
  <div>
    <Form ref="elForm"></Form>
  </div>
</template>
<script>
import BackendService from "src/BackendService";
import Form from "./Form.vue";
export default {
  components: {
    Form,
  },

  // directives
  // filters

  props: {
    id: {
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
    BackendService.getReserve(this.id).then((res) =>
      this.$refs.elForm.setValue(res)
    );
  },

  methods: {
    //
  },
};
</script>

<style scoped></style>
