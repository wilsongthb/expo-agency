<template>
  <div>
  <div class="column" style="height: 350px">
    <q-banner class="col bg-info">
      <div class="text-h6 text-weight-bolder text-center text-white">
        <div class="q-mb-sm">
            <img
                alt="Quasar logo"
                src="~assets/logo.png"
                class="q-mb-sm"
            />
          
        </div>
        <div class="text-h6 text-weight-bolder text-center text-white">
            Sign In!
        </div>
       
      </div>
    </q-banner>
  </div>
  <div class="superponer q-mx-sm">
   
    <div class="row q-mt-sm q-mx-sm">
      <div class="col">
        <q-card class="my-card">
          <q-card-section>
            <div class="text-center ">
                <q-input color="primary" class="q-mt-sm" v-model="text" label="E-mail">
                    <template v-slot:append>
                    <q-icon name="email" />
                    </template>
                </q-input>
                <q-input color="primary" class="q-mt-sm q-mb-xl" v-model="text" label="Password">
                    <template v-slot:append>
                    <q-icon name="visibility" />
                    </template>
                </q-input>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
  <div class="superponer_boton">
    <div class="row justify-center">
      <div class="col q-mx-xl">
        <q-btn 
        to="home"
        size="lg"
        color="info"
        label="Sign In"
        rounded
        no-caps
        class="full-width"
        />
      </div>
    </div>
    
    <div class="row text-h11 text-center q-mt-md text-grey-6">
        <div class="col">
          Don't have an account?
          <q-item class="col text-weight-bolder text-grey-6" to="/register" style=display:inline;>Create Now</q-item>
        </div>
        
    </div>
  </div>
  
  </div>
</template>

<script>
export default {
  name: 'PageIndex',
  data(){
    return{
      text:"",

    }
  }
}
</script>
<style scoped>
  .superponer{
    position: relative;
    top: -50px;
  }
  .superponer_boton{
    position: relative;
    top: -76px;
  }
</style>