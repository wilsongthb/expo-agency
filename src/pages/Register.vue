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
            Sign Up!
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
                <q-input color="primary" class="" v-model="text" label="Full Name">
                    <template v-slot:append>
                    <q-icon name="person" />
                    </template>
                </q-input>
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
        <q-btn 
        to="/home"
        size="lg"
        color="info"
        label="Sign Up"
        rounded
        no-caps
        class="q-px-xl"
        />
    </div>
    <div class="row justify-center q-mt-sm">
        <q-btn 
        to="/home"
        size="lg"
        color="blue"
        label="Facebook"
        rounded
        no-caps
        class="q-px-xl"
        />
    </div>
    <div class="row justify-center q-mt-sm">
        <q-btn
        to="/home" 
        size="lg"
        color="red"
        label="Google"
        rounded
        no-caps
        class="q-px-xl"
        />
    </div>
    <div class="text-h11 q-mt-md text-center text-grey-4">
        Already have an account? 
        <span class="text-weight-bolder text-grey-6" ><a href="/">Sign In </a></span>
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