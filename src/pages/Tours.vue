<template>
    <q-page>
        <div class="column" style="height: 30px">
            <q-banner class="col bg-info">
                <div class="text-h6 text-weight-bolder text-center text-white">
                
                </div>
            </q-banner>
        </div>
    <div class="row">
        <div class="col q-pa-md">
            <div class="row">
                <h6 class="q-ma-none">Tours visitados recientemente</h6>
            </div>
            <template v-if="list.length">
                <carousel :dots="false" :nav="false" :items="3" :margin="5" class="q-mb-md" :autoplay="true">
                    <q-card v-for="item in ramdon" :key="item.id" class="my-card" flat bordered>
                    <router-link class="col-12 col-md-6 col-sm-6" :to="`/travels/${item.id}`" style="text-decoration:none"> 
                        <q-img
                          :src="item.image"
                          style="height: 90px;"
                        />
                        <q-card-section class="q-pa-xs">
                            <div class="text-weight-bold text-caption ellipsis-2-lines" >{{item.description}}</div>
                            <q-rating size="18px" v-model="item.rating" :max="5" color="primary" />
                        </q-card-section>
                    </router-link>
                    </q-card>
                </carousel>
            </template>
            <q-separator color="orange" inset class="q-mb-sm"/>

            <div class="row">
                <h6 class="q-ma-none">Tours clásicos</h6>
            </div>
            <div class="row">
                <template v-if="list.length">
                    <carousel :dots="false" :nav="false" :items="1" :margin="5" class="q-mb-md q-px-md col-12" style="display: inline-flex;">
                        <template slot="next"><q-icon name="arrow_forward_ios"></q-icon></template>
                        <template slot="prev"><q-icon name="arrow_back_ios"></q-icon></template>

                        <q-card v-for="item in list.filter(x => x.type == 2)" :key="item.id" class="my-card" flat bordered > 
                            <router-link class="col-12 col-md-6 col-sm-6" :to="`/travels/${item.id}`" style="text-decoration:none">       
                            <q-img
                                :src="item.image"
                                style="height: 200px;"
                            >
                                <div class="absolute-bottom text-subtitle1 text-center">
                                {{item.name}}
                                </div>
                            </q-img>
                            <q-card-section class="q-pa-xs">
                                <div class="text-weight-bold ellipsis-2-lines">{{item.description}}</div>
                                <q-rating size="18px" v-model="item.rating" :max="5" color="primary" />
                            </q-card-section>
                            </router-link>
                        </q-card>
                    </carousel>
                </template>
            </div>
            <q-separator color="orange" inset class="q-mb-sm" style="display: block;"/>
            
            <div class="row">
                <h6 class="q-ma-none">Tours especiales</h6>
            </div>
            <div class="row">
                <template v-if="list.length">
                    <carousel :dots="false" :nav="false" :items="1" :margin="5" class="q-mb-md q-px-md col-12" style="display: inline-flex;">
                        <template slot="next"><q-icon name="arrow_forward_ios" ></q-icon></template>
                        <template slot="prev"><q-icon name="arrow_back_ios" ></q-icon></template>
                        <q-card v-for="item in list.filter(x => x.type == 3)" :key="item.id" class="my-card" flat bordered > 
                            <router-link class="col-12 col-md-6 col-sm-6" :to="`/travels/${item.id}`" style="text-decoration:none"> 
                            <q-img
                                :src="item.image"
                                style="height: 200px;"
                            >
                                <div class="absolute-bottom text-subtitle1 text-center">
                                {{item.name}}
                                </div>
                            </q-img>
                            <q-card-section class="q-pa-xs">
                                <div class="text-weight-bold ellipsis-2-lines">{{item.description}}</div>
                                <q-rating size="18px" v-model="item.rating" :max="5" color="primary" />
                            </q-card-section>
                            </router-link>
                        </q-card>
                    </carousel>
                
                </template>
            </div>
            <q-separator color="orange" inset class="q-mb-sm" style="display: block;"/>  
        </div>
    </div>
    </q-page>
</template>
<script>
import carousel from 'vue-owl-carousel'
import BackendService from "../BackendService.js"
export default {
    components: { carousel},
    mounted(){
          BackendService.getProducts({
            //
        }).then(res => {
            this.list = res.results.filter(x => [2, 3].includes(x.type))
        });
    },
    data(){
        return{
            expanded: false,
            lorem: 'Lorem ',
            text:'',
            stars: 3,
            tours:[
                {id:"1",name:"Taquile",image:"https://www.punotours.org/wp-content/uploads/puno12.png" , to:"/1"},
                {id:"2",name:"Uros",image:"https://www.peru.travel/Contenido/Destino/Imagen/pe/37/1.2/Principal/Los%20Uros.jpg",to:"/2"},
                {id:"3",name:"Sillustani",image:"https://portal.andina.pe/EDPfotografia3/Thumbnail/2020/10/13/000717789W.jpg", to:"/3"},
                {id:"4",name:"Puno",image:"https://www.viajaraperu.com/wp-content/uploads/2011/12/mirador-Kuntur-Wasi-puno-760x500.jpg", to:"/4"},
                {id:"5",name:"Amantani",image:"https://www.punotours.org/wp-content/uploads/lago-titicaca.jpg", to:"/5"},
                {id:"6",name:"bahia",image:"https://www.punotours.org/wp-content/uploads/lago-titicaca2.jpg",to:"/6"},
            ],
            list: [],
        }
    },
    methods: {
        getTours() {
      
        },
        star(){

        },

    },
    computed:{
        ramdon(){         
            return this.list.sort(()=> Math.random()-0.5)
        }
    }
    

    
}
</script>