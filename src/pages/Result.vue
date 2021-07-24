<template>
  <q-page>
    <div class="column" style="height: 220px">
      <q-banner class="col bg-info">
        <div class="text-h6 text-weight-bolder text-center text-white">
          <div class="q-mb-sm">
            Mis Reservas
          </div>
        </div>
      </q-banner>
    </div>
   
    <div class="superponer q-mx-sm">
      <div class="row q-mb-md">
        <div class="col">
          <q-card
            class="my-card q-mt-sm"
            v-for="item in reserves"
            :key="item.id"
          >
            <q-card-section>
              <div class="row q-mb-md items-center">
                <q-icon color="primary" name="place" />
                <div class="col">{{ item.product }}</div>
                <q-icon color="primary" name="event" />
                <div class="col">{{ item.start_date }}</div>
                <!-- <q-icon color="primary" name="schedule" /> -->
                <!-- <div class="col">07:00</div> -->
              </div>
              <div class="row items-center">
                <q-icon color="primary" name="person" />
                <div class="col">{{ item.companion }} Passenger</div>
                <q-icon color="primary" name="flight_class" />
                <div class="col">First class</div>
                <q-icon color="primary" name="airplane_ticket" />
                <div class="col">S/ {{ item.price }}</div>
              </div>
              <div class="row q-mt-sm">
                <div class="col q-mx-md">
                  <div class="text-center">
                    <q-btn
                      class="items-center full-width"
                      label="Edit"
                      :to="`/reserves/${item.id}`"
                      color="info"
                      rounded
                      no-caps
                    />
                  </div>
                </div>
                <div class="col q-mx-md">
                  <div class="text-center">
                    <q-btn
                      class="items-center full-width"
                      label="Eliminar"
                      @click="eliminarReserva(item.id)"
                      color="red"
                      rounded
                      no-caps
                    />
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>

      <q-separator color="deep-orange" class="q-mt-lg" ></q-separator>

      <div class="text-h6">Lugares que te puede gustar</div>
      <div class="row">
        <template v-if="list.length">
          <carousel
            :dots="false"
            :nav="false"
            :items="1"
            :margin="5"
            :autoplay="true"
            class="col-12 q-mb-md "
          >
            <q-card v-for="item in random" :key="item.id" class="my-card" flat bordered>
              <q-card-section horizontal class="items-center">
                <q-img
                  class="col-5"
                  :src="item.image"
                  height="20vh"
                />
                <q-card-section>
                  <div class="text-h6 q-mb-xs">{{item.name}}</div>
                  <div class="row no-wrap items-center">
                    <q-rating
                      size="18px"
                      v-model="item.rating"
                      :max="5"
                      color="primary"
                    />
                    <span class="text-caption text-grey q-ml-sm">{{item.rating}}</span>
                  </div>
                  
                </q-card-section>
              </q-card-section>
              <q-separator />
              <q-card-actions class="justify-between">
                <!-- <q-btn >
                  5:30PM
                </q-btn>
                <q-btn >
                  7:00PM
                </q-btn> -->
                <q-btn flat color="primary" :to="`/travels/${item.id}`">
                  <q-icon name="event"></q-icon>
                  Reservar
                </q-btn>
                <div >
                  <h6 class="q-ma-sm q-pa-sm">S/. {{item.price}}</h6>
                </div>
              </q-card-actions>
            </q-card>
          </carousel>
        </template>
      </div>
    </div>
    <!-- <div class="row justify-center">
    <q-btn 
    size="lg"
    color="info"
    label="Find Now"
    rounded
    no-caps
    class="q-px-xl"
  />
  </div>   -->

    <q-dialog v-model="seeEditModal">
      <q-card>
        <q-card-section>
          <div class="text-h6">Alert</div>
        </q-card-section>

        <!-- <q-card-section class="q-pt-none"> -->
        <!--   <ReserveForm ref="elReserveForm"></ReserveForm> -->
        <!-- </q-card-section> -->

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import BackendService from "src/BackendService";
import carousel from "vue-owl-carousel";
import ReserveForm from "../reserves/Form.vue";
export default {
  components: { carousel, ReserveForm },
  name: "PageIndex",
  data() {
    return {
      seeEditModal: false,
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.",
      stars: 4,
      reserves: [],
      list:[]
    };
  },
  async mounted() {
    this.getReserves();
    BackendService.getProducts({
            //
        }).then(res => {
            this.list = res.results.filter(x => [2, 3].includes(x.type))
    });
  },
  methods: {
    async getReserves() {
      let res = await BackendService.getCurrentClient();
      let response = await BackendService.getReserves({
        client_id: res.id,
      });
      this.reserves = response.results;
      console.log(response.results)
    },
    async eliminarReserva(id) {

      ///cambiar alert 2
      
      if (window.confirm("Eliminar reserva?")) {
        await BackendService.deleteReserve(id);
        this.getReserves();
      }
    },
    loadToEdit(item) {
      console.log(
        this.$refs,
        this.$refs.elReserveForm,
        this.$refs["elReserveForm"]
      );
      this.$refs.elReserveForm.setValue(item);
    },
  },
  computed:{
    random(){         
      return this.list.sort(()=> Math.random()-0.5)
    }
  }
};
</script>
<style scoped>
.superponer {
  position: relative;
  top: -50px;
}
</style>
