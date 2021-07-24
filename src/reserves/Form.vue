<!-- Author: Wilson Pilco Nunez -->
<!-- Email: wilsonaux1@gmail.com -->
<!-- Created at: 2021-07-14 20:58 -->
<template>
  <form @submit.prevent="save" class="q-ma-md">
    <div class="text-h6">{{ product }}</div>

    <q-input
      v-model="request_message"
      filled
      clearable
      rows="3"
      type="textarea"
      label="Escribe tu mensaje aqui!"
    />
    <q-input v-model="companion" label="Pasajeros" class="q-mb-md">
      <template v-slot:prepend>
        <q-icon color="primary" name="person" class="cursor-pointer">
        </q-icon>
      </template>
    </q-input>

    <q-input v-model="start_date" label="Reserva YYYY/MM/DD" class="q-mb-md">
      <template v-slot:prepend>
        <q-icon color="primary" name="event" class="cursor-pointer">
          <q-popup-proxy
            ref="qDateProxy"
            transition-show="scale"
            transition-hide="scale"
          >
            <q-date v-model="start_date" mask="YYYY-MM-DD">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>

    <q-input v-model="end_date" label="Retorno YYYY/MM/DD" class="q-mb-md">
      <template v-slot:prepend>
        <q-icon color="primary" name="event" class="cursor-pointer">
          <q-popup-proxy
            ref="qDateProxy"
            transition-show="scale"
            transition-hide="scale"
          >
            <q-date v-model="end_date" mask="YYYY-MM-DD">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
    <div class="row justify-center">

      <q-btn color="primary" label="Guardar" type="submit" />
    </div>
  </form>
</template>
<script>
import BackendService from "src/BackendService";
export default {
  components: {
    //
  },

  // directives
  // filters

  props: {
    //
  },

  data: () => ({
    id: null,
    product: null,
    companion:null,
    start_date: null,
    end_date: null,
    price: null,
    product_id: null,
    status: null,
    request_message: null,
    client_id: null,
  }),

  computed: {
    //
  },

  // watch: {},

  mounted() {
    //
  },

  methods: {
    setValue(item) {
      this.id = item.id;
      this.product = item.product;
      this.start_date = item.start_date;
      this.companion = item.companion;
      this.end_date = item.end_date;
      this.price = item.price;
      this.product_id = item.product_id;
      this.status = item.status;
      this.request_message = item.request_message;
      this.client_id= item.client_id;
    },
    reset() {
      //
    },
    async save() {
      let result = await BackendService.saveReserve(this.$data);
      this.$emit("submitted", result);
      this.$router.push({
        path: "/result",
      });
    },
  },
};
</script>

<style scoped></style>
