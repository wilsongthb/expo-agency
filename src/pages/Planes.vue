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
    <div class="row">
      <div class="col q-mr-sm">
        <q-card class="my-card">
          <q-card-section>
            <div class="text-center ">
              <div class="q-mb-sm text-h7 text-grey-6" >
                Min Price:
                <span class=" text-weight-bolder text-black">400 PE</span>
              </div>
              <q-btn label="I Can Book" color="info" rounded no-caps/>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col">
        <q-card class="my-card">
          <q-card-section>
            <div class="text-center ">
              <div class="q-mb-sm text-h7 text-grey-6" >
                Average Price:
                <span class=" text-weight-bolder text-black">600 PE</span>
              </div>
              <q-btn label="I Can Book" color="info" rounded no-caps/>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row q-mt-sm q-mx-sm">
      <div class="col">
        <q-card class="my-card">
          <q-card-section>
            <div class="text-center ">
              <div class="q-mb-sm text-h7 text-grey-6" >
                Maximum Price:
                <span class=" text-weight-bolder text-black">800 PE</span>
              </div>
              <q-btn label="I Can Book" color="info" rounded no-caps/>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
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
