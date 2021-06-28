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
        <carousel :dots="false" :nav="false" :items="3" :margin="5" class="q-mb-md" :autoplay="true">
            <q-card v-for="item in 10" :key="item" class="my-card" flat bordered>
                <q-img
                    src="https://cdn.quasar.dev/img/parallax2.jpg"
                />
                <q-card-section class="q-pa-xs">
                    <div class="text-weight-bold">Our Changing Planet</div>
                    <q-rating size="18px" v-model="stars" :max="5" color="primary" />
                </q-card-section>
            </q-card>
        </carousel>
        <q-separator color="orange" inset class="q-mb-sm"/>

        <div class="row">
            <h6 class="q-ma-none">Tours clásicos</h6>
         </div>
        <carousel :dots="false" :nav="false" :items="1" :margin="5" class="q-mb-md">
            <template slot="next"><q-icon name="arrow_forward_ios" ></q-icon></template>
            <template slot="prev"><q-icon name="arrow_back_ios" ></q-icon></template>
            <q-card v-for="item in 10" :key="item" class="my-card" flat bordered >
                
                <q-img
                    src="https://www.punotours.org/wp-content/uploads/puno12.png"
                    style="height: 200px;"
                >
                    <div class="absolute-bottom text-subtitle1 text-center">
                    titulo
                    </div>
                </q-img>
                <q-card-section class="q-pa-xs">
                    <div class="text-weight-bold">Our Changing Planet</div>
                    <q-rating size="18px" v-model="stars" :max="5" color="primary" />
                </q-card-section>
            </q-card>
        </carousel>
        <q-separator color="orange" inset class="q-mb-sm"/>
        
        <div class="row">
            <h6 class="q-ma-none">Tours clásicos</h6>
         </div>
        <carousel :dots="false" :nav="false" :items="1" :margin="5" class="q-mb-md">
            <template slot="next"><q-icon name="arrow_forward_ios" ></q-icon></template>
            <template slot="prev"><q-icon name="arrow_back_ios" ></q-icon></template>
            <q-card v-for="item in 10" :key="item" class="my-card" flat bordered>
                <q-img
                    src="https://www.punotours.org/wp-content/uploads/puno12.png"
                    style="height: 200px;"
                >
                    <div class="absolute-bottom text-subtitle1 text-center">
                    titulo
                    </div>
                </q-img>
                <q-card-section class="q-pa-xs">
                    <div class="text-weight-bold">Our Changing Planet</div>
                    <q-rating size="18px" v-model="stars" :max="5" color="primary" />
                </q-card-section>
            </q-card>
        </carousel>
        <q-separator color="orange" inset class="q-mb-md"/>
    </div>
    </div>
    </q-page>
</template>
<script>
import carousel from 'vue-owl-carousel'
export default {
    components: { carousel },
    data(){
        return{
            expanded: false,
            lorem: 'Lorem ',
            stars: 3
        }
    }    
    
}
</script>