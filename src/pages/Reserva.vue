<template>
  <q-page>
  <div class="row" style="height: 220px;">
    <q-banner class="col bg-info over justify-center" >
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
          <q-tab name="round" label="Round"/>
          <!--q-tab name="one_way" label="One Way" />
          <q-tab name="multi" label="Multi" /-->
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="round">
            <div class="text-h6">name tour</div>
            <div class="row ">
              <div class="col q-mr-sm">
                <q-input color="primary" v-model="text" label="Firts Name" size="10px" font-size="10px">
                  <template v-slot:prepend>
                    <q-icon name="person" />
                  </template>
                </q-input>
                <q-input color="primary" v-model="text" label="Email">
                  <template v-slot:prepend>
                    <q-icon name="email" />
                  </template>
                </q-input>
                <q-input color="primary" v-model="text" label="Departure date">
                  <template v-slot:prepend>
                    <q-icon name="event" />
                  </template>
                </q-input>
                <q-input color="primary" v-model="text" label="Number of passenger">
                  <template v-slot:prepend>
                    <q-icon name="people" />
                  </template>
                </q-input>
              </div>
              <div class="col q-ml-sm">
                <q-input color="primary" v-model="text" label="Last Name">
                  <template v-slot:prepend>
                    <q-icon name="person" />
                  </template>
                </q-input>
                <q-input color="primary" v-model="text" label="Pais">
                  <template v-slot:prepend>
                    <q-icon name="place" />
                  </template>
                </q-input>
                <q-input color="primary" v-model="text" label="Arrive date">
                  <template v-slot:prepend>
                    <q-icon name="event" />
                  </template>
                </q-input>
                <q-input color="primary" v-model="text" label="Flight class">
                  <template v-slot:prepend>
                    <q-icon name="flight_class" />
                  </template>
                </q-input>
              </div>
            </div>
            
          </q-tab-panel>

          <!--q-tab-panel name="one_way">
            <div class="text-h6">One way</div>
            <div class="row ">
              <div class="col q-mr-sm">
                <q-input color="primary" v-model="text" label="From" size="10px" font-size="10px">
                  <template v-slot:prepend>
                    <q-icon name="place" />
                  </template>
                </q-input>
                <q-input color="primary" v-model="text" label="Departure date">
                  <template v-slot:prepend>
                    <q-icon name="event" />
                  </template>
                </q-input>
                <q-input color="primary" v-model="text" label="Number of passenger">
                  <template v-slot:prepend>
                    <q-icon name="person" />
                  </template>
                </q-input>
              </div>
              <div class="col q-ml-sm">
                <q-input color="primary" v-model="text" label="To">
                  <template v-slot:prepend>
                    <q-icon name="place" />
                  </template>
                </q-input>
                <q-input color="primary" v-model="text" label="Return date">
                  <template v-slot:prepend>
                    <q-icon name="event" />
                  </template>
                </q-input>
                <q-input color="primary" v-model="text" label="Flight class">
                  <template v-slot:prepend>
                    <q-icon name="flight_class" />
                  </template>
                </q-input>
              </div>
            </div>
          </q-tab-panel>

          <q-tab-panel name="multi">
            <div class="text-h6">Multi</div>
            <div class="row ">
              <div class="col q-mr-sm">
                <q-input color="primary" v-model="text" label="From" size="10px" font-size="10px">
                  <template v-slot:prepend>
                    <q-icon name="place" />
                  </template>
                </q-input>
                <q-input color="primary" v-model="text" label="Departure date">
                  <template v-slot:prepend>
                    <q-icon name="event" />
                  </template>
                </q-input>
                <q-input color="primary" v-model="text" label="Number of passenger">
                  <template v-slot:prepend>
                    <q-icon name="person" />
                  </template>
                </q-input>

              </div>
              <div class="col q-ml-sm">
                <q-input color="primary" v-model="text" label="To">
                  <template v-slot:prepend>
                    <q-icon name="place" />
                  </template>
                </q-input>
                <q-input color="primary" v-model="text" label="Return date">
                  <template v-slot:prepend>
                    <q-icon name="event" />
                  </template>
                </q-input>
                <q-input color="primary" v-model="text" label="Flight class">
                  <template v-slot:prepend>
                    <q-icon name="flight_class" />
                  </template>
                </q-input>
              </div>
            </div>
          </q-tab-panel-->
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>
  <div class="row justify-center">
    <q-btn 
    size="lg"
    color="info"
    label="Reserve Now"
    rounded
    no-caps
    class="q-px-xl"
    to="result"
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
      tab: 'round',
      text: ''
    }
  }
}
</script>
<style scoped>
  .superponer{
    position: relative;
    top: -50px;    
  }
  .superponer_img{
    position: relative;
    top: 75px;    
  }
  .over{
    overflow:hidden;
  }
</style>
