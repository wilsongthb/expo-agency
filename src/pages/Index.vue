<template>
  <q-page>
  <div class="q-gutter-sm column" style="height: 220px">
    <q-banner class="col bg-info">
      <div class="text-h6 text-weight-bolder text-center text-white">
        You will travel by?
      </div>
    </q-banner>
  </div>
  <div class="superponer q-mx-sm">
    <div class="row">
      <div class="col q-mr-sm">
        <q-card class="my-card">
          <q-card-section>
            <q-item to="/planes">
              <q-img
              alt="Quasar logo"
              src="~assets/3.png"              
              ></q-img>
            </q-item>            
          </q-card-section>
        </q-card>
      </div>
      <div class="col">
        <q-card class="my-card">
          <q-card-section>
            <q-item to="/planes">
              <q-img
              alt="Quasar logo"
              src="~assets/train.png"
              >
              </q-img>
            </q-item>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row q-mt-sm q-gutter-sm">
      <div class="col">
        <q-card class="my-card">
          <q-card-section>
            <q-item to="/planes">
              <q-img
              alt="Quasar logo"
              src="~assets/1.png"
              >
              </q-img>
            </q-item>            
          </q-card-section>
        </q-card>
      </div>
      <div class="col">
        <q-card class="my-card">
          <q-card-section>
            <q-item to="/planes">
              <q-img
              alt="Quasar logo"
              src="~assets/aeroplane.png"
              >
              </q-img>
            </q-item>            
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>

  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data(){
    return{
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
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
