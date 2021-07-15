<template>
  <q-page class="q-ma-md">
    <div class="row justify-center">
      <div class="col-8">
        <q-scroll-area :visible="true" style="height: 50px;">
          <div class="text-h5 text-uppercase row">{{ travel.name }}</div>
        </q-scroll-area>
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
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="mails">
            <q-btn padding="sm md" color="orange-5" icon="eco"></q-btn
          ></q-tab>
          <q-tab name="alarms"
            ><q-btn round color="grey" glossy icon="local_grocery_store"></q-btn
          ></q-tab>
          <q-tab name="movies"
            ><q-btn round color="grey" icon="my_location"></q-btn
          ></q-tab>
        </q-tabs>

        <q-tab-panels v-model="panel" animated class="shadow-2 rounded-borders">
          <q-tab-panel name="mails">
            <div class="text-h6">Servico</div>
            <q-separator color="orange" />
            <q-scroll-area
              :visible="true"
              style="height: 100px;"
              align="justify"
            >
              <ul>
                <li>
                  Guía en el idioma requerido.
                </li>
                <li>
                  Transporte en movilidad privada por la cantidad requerida de
                  pasajeros
                </li>
                <li>
                  Lancha de Punta Hermosa a Anapia, y retorno.
                </li>
                <li>
                  Alimentación y hospedaje en las casas de familia de Anapia.
                </li>
                <li>
                  Comida típica.
                </li>
                <li>
                  Y botes veleros.
                </li>
              </ul>
            </q-scroll-area>
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <div class="text-h6">Información</div>
            <q-separator color="orange" />
            <q-scroll-area
              :visible="true"
              style="height: 100px;"
              align="justify"
            >
              <ul>
                <li>
                  Las casas de los habitantes de Anapia son sencillas, y sin
                  embargo, eso lo convierte en un lugar especial; una
                  experiencia diferente. El alojamiento es en una habitación
                  doble, sin baño privado, Las casas están siempre limpias y se
                  proporcionarán frazadas suficientes. Tenga en cuenta que quizá
                  algunos de ustedes estarán alojados en casas distantes unas de
                  otras.
                </li>
                <li>
                  Llevar zapatos cómodos para la caminata, Sombrero, lentes de
                  sol, protector solar, ropa de abrigo el clima es muy cambiante
                  en cualquier época del año.
                </li>
                <li>
                  Si tuviera algún problema de Salud o cualquier otro detalle no
                  dude en comunicarnos oportunamente que podemos ayudarlos
                </li>
                <li>
                  Llevar linterna.
                </li>
              </ul>
            </q-scroll-area>
          </q-tab-panel>

          <q-tab-panel name="movies">
            <div class="text-h6">otros</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
