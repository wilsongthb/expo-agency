<template>
  <q-page>
    <div class="row" style="height: 220px;">
      <q-banner class="col bg-info over justify-center">
        <div class="row justify-center">
          <q-img
            alt=""
            src="~assets/aeroplane.png"
            style="width: 150px"
            class="superponer_img"
          >
          </q-img>
        </div>
      </q-banner>
    </div>
    <q-form @submit.prevent="reservacion">
      <div class="q-pa-md">
        <div class="q-gutter-y-md">
          <q-card>
            <q-tabs
              v-model="tab"
              dense
              class="text-white"
              active-bg-color="info"
              indicator-color="primary"
              active-text-color="white"
              align="justify"
              narrow-indicator
            >
              <q-tab name="round" label="Round" />
              <!--q-tab name="one_way" label="One Way" />
            <q-tab name="multi" label="Multi" /-->
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="round">
                <div class="text-h6">{{ product && product.name }}</div>

                <div class="row ">
                  <div class="col q-mr-sm">
                    <q-input
                      color="primary"
                      v-model="reserva.firstName"
                      label="Firts Name"
                      size="10px"
                      font-size="10px"
                      required
                    >
                      <template v-slot:prepend>
                        <q-icon name="person" />
                      </template>
                    </q-input>
                    <q-input
                      color="primary"
                      v-model="reserva.email"
                      type="email"
                      label="Email"
                      required
                    >
                      <template v-slot:prepend>
                        <q-icon name="email" />
                      </template>
                    </q-input>
                    <q-input
                      v-model="reserva.ida"
                      mask="date"
                      label="Reserva YYYY/MM/DD"
                    >
                      <template v-slot:prepend>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy
                            ref="qDateProxy"
                            transition-show="scale"
                            transition-hide="scale"
                          >
                            <q-date v-model="reserva.ida">
                              <div class="row items-center justify-end">
                                <q-btn
                                  v-close-popup
                                  label="Close"
                                  color="primary"
                                  flat
                                />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>

                    <!-- <q-input -->
                    <!--   v-model="reserva.ida" -->
                    <!--   type="text" -->
                    <!--   label="reserva" -->
                    <!--   required -->
                    <!-- > -->
                    <!--   <template v-slot:prepend> -->
                    <!--     <q-icon name="event" /> -->
                    <!--   </template> -->
                    <!-- </q-input> -->
                    <q-input
                      color="primary"
                      v-model="reserva.numeroPasajeros"
                      type="number"
                      label="Number of passenger"
                      required
                    >
                      <template v-slot:prepend>
                        <q-icon name="people" />
                      </template>
                    </q-input>
                  </div>
                  <div class="col q-ml-sm">
                    <q-input
                      color="primary"
                      v-model="reserva.lastName"
                      label="Last Name"
                      required
                    >
                      <template v-slot:prepend>
                        <q-icon name="person" />
                      </template>
                    </q-input>
                    <!-- <q-input color="primary" v-model="reserva.pais" label="Pais"> -->
                    <q-select
                      v-model="reserva.pais"
                      :options="options"
                      label="Pais"
                      required
                    >
                      <template v-slot:prepend>
                        <q-icon name="place" />
                      </template>
                    </q-select>

                    <q-input
                      v-model="reserva.vuelta"
                      mask="date"
                      label="Retorno YYYY/MM/DD"
                    >
                      <template v-slot:prepend>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy
                            ref="qDateProxy"
                            transition-show="scale"
                            transition-hide="scale"
                          >
                            <q-date v-model="reserva.vuelta">
                              <div class="row items-center justify-end">
                                <q-btn
                                  v-close-popup
                                  label="Close"
                                  color="primary"
                                  flat
                                />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                    <!-- <q-input -->
                    <!--   v-model="reserva.vuelta" -->
                    <!--   :mask="date" -->
                    <!--   type="date" -->
                    <!--   label="regreso" -->
                    <!--   required -->
                    <!-- > -->
                    <!--   <template v-slot:prepend> -->
                    <!--     <q-icon name="event" /> -->
                    <!--   </template> -->
                    <!-- </q-input> -->

                    <q-select
                      v-model="reserva.tipo"
                      :options="clases"
                      label="Flight class"
                      :rules="[myRule]"
                      required
                    >
                      <template v-slot:prepend>
                        <q-icon name="flight_class" />
                      </template>
                    </q-select>
                  </div>
                </div>
                <div class="row q-mt-sm">
                  <div class="col">
                    <q-input
                      v-model="reserva.descripcion"
                      filled
                      clearable
                      rows="3"
                      type="textarea"
                      label="Escribe tu mensaje aqui!"
                    />
                  </div>
                </div>
              </q-tab-panel>
            </q-tab-panels>
          </q-card>
        </div>
      </div>
      <q-expansion-item
        expand-separator
        icon="info"
        label="More details"
        header-class="text-primary"
      >
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
            eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
            dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <div class="row justify-center">
        <q-btn
          size="lg"
          type="submit"
          color="info"
          label="Reserve Now"
          rounded
          no-caps
          class="q-px-xl"
        />
      </div>
    </q-form>
  </q-page>
</template>

<script>
import axios from "axios";
import BackendService from "src/BackendService";
import worldCountries from "./worldCountries.js";
export default {
  name: "PageIndex",
  data() {
    return {
      client: null,
      product: null,
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.",
      tab: "round",
      options: worldCountries,
      clases: ["clasica", "medium", "luxurios"],
      text: "",
      reserva: {
        firstName: "",
        lastName: "",
        email: "",
        pais: "",
        ida: "",
        vuelta: "",
        numeroPasajeros: "",
        tipo: "",
        descripcion: "",
      },
    };
  },

  mounted() {
    BackendService.getProduct(this.$route.query.product_id).then((res) => {
      this.product = res;
    });
    BackendService.getCurrentClient().then((client) => {
      this.reserva.firstName = client.name;
      this.reserva.lastName = client.lastname;
      this.reserva.email = client.email;
      this.reserva.pais = client.country;
      this.client = client;
    });
  },

  methods: {
    myRule(val) {
      if (val === null) {
        return "You must make a selection!";
      }
    },
    async reservacion() {
      try {
        if (!this.client) {
          this.client = await BackendService.saveClient({
            name: this.reserva.firstName,
            lastname: this.reserva.lastName,
            idcard: "00",
            birth_date: null,
            country: this.reserva.pais,
            cellphone: "00",
            email: this.reserva.email,
            user_id: this.$store.state.user.id,
          });
        }
        await BackendService.saveReserve({
          start_date: this.reserva.ida.replaceAll("/", "-"),
          end_date: this.reserva.vuelta.replaceAll("/", "-"),
          price: this.product.price,
          local_price: "0",
          is_local: false,
          companion: this.reserva.numeroPasajeros,
          client_id: this.client.id,
          product_id: this.product.id,
          request_message: this.reserva.descripcion
        });
        window.alert("reserva registrada");
      } catch (e) {
        //
      }
    },
  },
  computed: {
    date() {
      var d = new Date();
      return d.toLocaleDateString();
    },
  },
};
</script>
<style scoped>
.superponer {
  position: relative;
  top: -50px;
}
.superponer_img {
  position: relative;
  top: 75px;
}
.over {
  overflow: hidden;
}
</style>
