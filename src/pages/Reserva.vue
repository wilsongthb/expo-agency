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
                  <q-input color="primary" v-model="reserva.firstName" label="Firts Name" size="10px" font-size="10px" required>
                    <template v-slot:prepend>
                      <q-icon name="person" />
                    </template>
                  </q-input>
                  <q-input color="primary" v-model="reserva.email"   type="email" label="Email" required>
                    <template v-slot:prepend>
                      <q-icon name="email" />
                    </template>
                  </q-input>
                  <q-input v-model="reserva.ida"  type="date" label="reserva" required>
                    <template v-slot:prepend>
                      <q-icon name="event" />
                    </template>
                  </q-input>
                  <q-input color="primary" v-model="reserva.numeroPasajeros"  type="number" label="Number of passenger" required>
                    <template v-slot:prepend>
                      <q-icon name="people" />
                    </template>
                  </q-input>
                </div>
                <div class="col q-ml-sm">
                  <q-input color="primary" v-model="reserva.lastName" label="Last Name" required>
                    <template v-slot:prepend>
                      <q-icon name="person" />
                    </template>
                  </q-input>
                  <!-- <q-input color="primary" v-model="reserva.pais" label="Pais"> -->
                  <q-select v-model="reserva.pais" :options="options" label="Pais" required>
                    <template v-slot:prepend>
                      <q-icon name="place" />
                    </template>
                  </q-select>
                  <q-input v-model="reserva.vuelta"  :mask="date" type="date"  label="regreso" required>
                    <template v-slot:prepend>
                      <q-icon name="event" />
                    </template>
                  </q-input>
                 
                  <q-select v-model="reserva.tipo" :options="clases" label="Flight class" :rules="[myRule]" required>
                    <template v-slot:prepend>
                      <q-icon name="flight_class" />
                    </template>
                  </q-select>
                </div> 
              </div>
              <div class="row q-mt-sm">
                <div class="col">
                  <q-input v-model="reserva.descripcion"
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
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
export default {
  
  name: 'PageIndex',
  data(){
    return{
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.',
      tab: 'round',
      options:[
        "Afganistán","Albania","Alemania","Andorra","Angola","Antigua y Barbuda","Arabia Saudita","Argelia","Argentina","Armenia","Australia","Austria","Azerbaiyán","Bahamas","Bangladés","Barbados","Baréin","Bélgica","Belice","Benín","Bielorrusia","Birmania","Bolivia","Bosnia y Herzegovina","Botsuana","Brasil","Brunéi","Bulgaria","Burkina Faso","Burundi","Bután","Cabo Verde","Camboya","Camerún","Canadá","Catar","Chad","Chile","China","Chipre","Ciudad del Vaticano","Colombia","Comoras","Corea del Norte","Corea del Sur","Costa de Marfil","Costa Rica","Croacia","Cuba","Dinamarca","Dominica","Ecuador","Egipto","El Salvador","Emiratos Árabes Unidos","Eritrea","Eslovaquia","Eslovenia","España","Estados Unidos","Estonia","Etiopía","Filipinas","Finlandia","Fiyi","Francia","Gabón","Gambia","Georgia","Ghana","Granada","Grecia","Guatemala","Guyana","Guinea","Guinea ecuatorial","Guinea-Bisáu","Haití","Honduras","Hungría","India","Indonesia","Irak","Irán","Irlanda","Islandia","Islas Marshall","Islas Salomón","Israel","Italia","Jamaica","Japón","Jordania","Kazajistán","Kenia","Kirguistán","Kiribati","Kuwait","Laos","Lesoto","Letonia","Líbano","Liberia","Libia","Liechtenstein","Lituania","Luxemburgo","Madagascar","Malasia","Malaui","Maldivas","Malí","Malta","Marruecos","Mauricio","Mauritania","México","Micronesia","Moldavia","Mónaco","Mongolia","Montenegro","Mozambique","Namibia","Nauru","Nepal","Nicaragua","Níger","Nigeria","Noruega","Nueva Zelanda","Omán","Países Bajos","Pakistán","Palaos","Panamá","Papúa Nueva Guinea","Paraguay","Perú","Polonia","Portugal","Reino Unido","República Centroafricana","República Checa","República de Macedonia","República del Congo","República Democrática del Congo","República Dominicana","República Sudafricana","Ruanda","Rumanía","Rusia","Samoa","San Cristóbal y Nieves","San Marino","San Vicente y las Granadinas","Santa Lucía","Santo Tomé y Príncipe","Senegal","Serbia","Seychelles","Sierra Leona","Singapur","Siria","Somalia","Sri Lanka","Suazilandia","Sudán","Sudán del Sur","Suecia","Suiza","Surinam","Tailandia","Tanzania","Tayikistán","Timor Oriental","Togo","Tonga","Trinidad y Tobago","Túnez","Turkmenistán","Turquía","Tuvalu","Ucrania","Uganda","Uruguay","Uzbekistán","Vanuatu","Venezuela","Vietnam","Yemen","Yibuti","Zambia","Zimbabue"
      ],
      clases:[
        'clasica',
        'medium',
        'luxurios'
      ],
      text: '',
      reserva:{
        firstName:"",
        lastName:"",
        email:"",
        pais:"",
        ida:"",
        vuelta:"",
        numeroPasajeros:"",
        tipo:"",
        descripcion:""
      }
    }
  },
  methods: {
    myRule (val) {
      if (val === null) {
        return 'You must make a selection!'        
      }
    },
    reservacion() {
      console.log(this.reserva);
      axios
        .post("http://localhost:8000/api/auth/token/login", this.reserva)
        .then((response) => {
          
          this.$router.push("/home");
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
  computed:{
      date(){
        var d = new Date();
        return d.toLocaleDateString();
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
