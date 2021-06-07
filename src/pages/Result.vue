<template>
  <q-page>
  <div class="column" style="height: 220px">
    <q-banner class="col bg-info">
      <div class="text-h6 text-weight-bolder text-center text-white">
        <div class="q-mb-sm">
          Your travel price: S/. 700.00
        </div>
        <q-btn label="I Can Book" color="secondary" rounded no-caps/>
      </div>
    </q-banner>
  </div>
  <div class="superponer q-mx-sm">
    
    <div class="row q-mb-md">
      <div class="col">
        <q-card class="my-card">
          <q-card-section>
            <div class="row q-mb-md">
              <q-icon color="primary" name="place" />
              <div class="col">Puno, Puno</div>
              <q-icon color="primary" name="event" />
              <div class="col">08/12/12</div>
              <q-icon color="primary" name="person" />
              <div class="col">1 Passenger</div>
            </div>
            <div class="row">
              <q-icon color="primary" name="flight_class" />
              <div class="col">First class</div>
              <q-icon color="primary" name="airplane_ticket" />
              <div class="col">S/.300.00</div>
              <div class="col">
                <div class="text-center">
                  <q-btn class="items-center full-width" label="Edit" color="info" rounded no-caps/></div>
                </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <q-card class="my-card q-mb-md">
      <q-card-section horizontal>
        <q-img
          class="col-5"
          src="https://cdn.quasar.dev/img/parallax1.jpg"
        />
        <q-card-section>
          <div class="text-h6 q-mb-xs">Our Changing Planet</div>
            <div class="row no-wrap items-center">
              <q-rating size="18px" v-model="stars" :max="5" color="primary" />
              <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
            </div>
            <div class="row justify-end self-end"><h6 class="q-ma-sm q-pa-sm">S/. 300.00</h6></div>
          </q-card-section>
        </q-card-section>
      <q-separator />
      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat>
          5:30PM
        </q-btn>
        <q-btn flat>
          7:00PM
        </q-btn>
        <q-btn flat color="primary">
          Reserve
        </q-btn>
      </q-card-actions>
    </q-card>
    <q-card class="my-card q-mb-md">
      <q-card-section horizontal>
        <q-img
          class="col-5"
          src="https://cdn.quasar.dev/img/parallax1.jpg"
        />
        <q-card-section>
          <div class="text-h6 q-mb-xs">Our Changing Planet</div>
            <div class="row no-wrap items-center">
              <q-rating size="18px" v-model="stars" :max="5" color="primary" />
              <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
            </div>
            <div class="row justify-end self-end"><h6 class="q-ma-sm q-pa-sm">S/. 300.00</h6></div>
          </q-card-section>
        </q-card-section>
      <q-separator />
      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat>
          5:30PM
        </q-btn>
        <q-btn flat>
          7:00PM
        </q-btn>
        <q-btn flat color="primary">
          Reserve
        </q-btn>
      </q-card-actions>
    </q-card>
    <q-card class="my-card q-mb-md">
      <q-card-section horizontal>
        <q-img
          class="col-5"
          src="https://cdn.quasar.dev/img/parallax1.jpg"
        />
        <q-card-section>
          <div class="text-h6 q-mb-xs">Our Changing Planet</div>
            <div class="row no-wrap items-center">
              <q-rating size="18px" v-model="stars" :max="5" color="primary" />
              <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
            </div>
            <div class="row justify-end self-end"><h6 class="q-ma-sm q-pa-sm">S/. 300.00</h6></div>
          </q-card-section>
        </q-card-section>
      <q-separator />
      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat>
          5:30PM
        </q-btn>
        <q-btn flat>
          7:00PM
        </q-btn>
        <q-btn flat color="primary">
          Reserve
        </q-btn>
      </q-card-actions>
    </q-card>

  </div>
  <div class="row justify-center">
    <q-btn 
    size="lg"
    color="info"
    label="Find Now"
    rounded
    no-caps
    class="q-px-xl"
  />
  </div>  
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data(){
    return{
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.',
      stars: 4
    }
  }
}
</script>
<style scoped>
  .superponer{
    position: relative;
    top: -50px;
    
  }
</style>
