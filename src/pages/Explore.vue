<template>
    <q-page>
        <carousel :autoplay="true" :nav="false" :items="3.5" :margin="0.5" :dots="false" >
            
            <q-card class="my-card" flat bordered>
            <q-img
                src="https://cdn.quasar.dev/img/parallax2.jpg"
            />

            <q-card-section>
                <div class="text-overline text-orange-9">Overline</div>
                <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
                <div class="text-caption text-grey">
                Lorem ipsum dolor .
                </div>
            </q-card-section>

            <q-card-actions>
                <q-btn flat color="dark" label="Share" />
                <q-btn flat color="primary" label="Book" />

                <q-space />

                <q-btn
                color="grey"
                round
                flat
                dense
                :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                @click="expanded = !expanded"
                />
            </q-card-actions>

            <q-slide-transition>
                <div v-show="expanded">
                <q-separator />
                <q-card-section class="text-subitle2">
                    {{ lorem }}
                </q-card-section>
                </div>
            </q-slide-transition>
            </q-card>
            <q-card class="my-card" flat bordered>
            <q-img
                src="https://cdn.quasar.dev/img/parallax2.jpg"
            />

            <q-card-section>
                <div class="text-overline text-orange-9">Overline</div>
                <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
                <div class="text-caption text-grey">
                Lorem ipsum dolor .
                </div>
            </q-card-section>

            <q-card-actions>
                <q-btn flat color="dark" label="Share" />
                <q-btn flat color="primary" label="Book" />

                <q-space />

                <q-btn
                color="grey"
                round
                flat
                dense
                :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                @click="expanded = !expanded"
                />
            </q-card-actions>

            <q-slide-transition>
                <div v-show="expanded">
                <q-separator />
                <q-card-section class="text-subitle2">
                    {{ lorem }}
                </q-card-section>
                </div>
            </q-slide-transition>
            </q-card>
            <q-card class="my-card" flat bordered>
            <q-img
                src="https://cdn.quasar.dev/img/parallax2.jpg"
            />

            <q-card-section>
                <div class="text-overline text-orange-9">Overline</div>
                <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
                <div class="text-caption text-grey">
                Lorem ipsum dolor .
                </div>
            </q-card-section>

            <q-card-actions>
                <q-btn flat color="dark" label="Share" />
                <q-btn flat color="primary" label="Book" />

                <q-space />

                <q-btn
                color="grey"
                round
                flat
                dense
                :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                @click="expanded = !expanded"
                />
            </q-card-actions>

            <q-slide-transition>
                <div v-show="expanded">
                <q-separator />
                <q-card-section class="text-subitle2">
                    {{ lorem }}
                </q-card-section>
                </div>
            </q-slide-transition>
            </q-card>
            <q-card class="my-card" flat bordered>
            <q-img
                src="https://cdn.quasar.dev/img/parallax2.jpg"
            />

            <q-card-section>
                <div class="text-overline text-orange-9">Overline</div>
                <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
                <div class="text-caption text-grey">
                Lorem ipsum dolor .
                </div>
            </q-card-section>

            <q-card-actions>
                <q-btn flat color="dark" label="Share" />
                <q-btn flat color="primary" label="Book" />

                <q-space />

                <q-btn
                color="grey"
                round
                flat
                dense
                :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                @click="expanded = !expanded"
                />
            </q-card-actions>

            <q-slide-transition>
                <div v-show="expanded">
                <q-separator />
                <q-card-section class="text-subitle2">
                    {{ lorem }}
                </q-card-section>
                </div>
            </q-slide-transition>
            </q-card>
            <q-card class="my-card" flat bordered>
            <q-img
                src="https://cdn.quasar.dev/img/parallax2.jpg"
            />

            <q-card-section>
                <div class="text-overline text-orange-9">Overline</div>
                <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
                <div class="text-caption text-grey">
                Lorem ipsum dolor .
                </div>
            </q-banner>
        </div>
    <div class="row">
    <div class="col q-pa-md">
         <div class="row">
            <h6 class="q-ma-none">Tours visitados recientemente</h6>
         </div>
        <carousel :dots="false" :nav="false" :items="3" :margin="5" class="q-mb-md">
            <q-card v-for="item in 10" :key="item" class="my-card" flat bordered>
                <q-img
                    src="https://cdn.quasar.dev/img/parallax2.jpg"
                />
                <q-card-section class="q-pa-xs">
                    <div class="text-weight-bold">Our Changing Planet</div>
                    <q-rating size="18px" v-model="stars" :max="5" color="primary" />
                </q-card-section>
            </q-card>
<<<<<<< HEAD
            <q-card class="my-card" flat bordered>
            <q-img
                src="https://cdn.quasar.dev/img/parallax2.jpg"
            />

            <q-card-section>
                <div class="text-overline text-orange-9">Overline</div>
                <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
                <div class="text-caption text-grey">
                Lorem ipsum dolor .
                </div>
            </q-card-section>

            <q-card-actions>
                <q-btn flat color="dark" label="Share" />
                <q-btn flat color="primary" label="Book" />

                <q-space />

                <q-btn
                color="grey"
                round
                flat
                dense
                :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                @click="expanded = !expanded"
                />
            </q-card-actions>

            <q-slide-transition>
                <div v-show="expanded">
                <q-separator />
                <q-card-section class="text-subitle2">
                    {{ lorem }}
=======
        </carousel>
        <q-separator color="orange" inset class="q-mb-sm"/>

        <div class="row">
            <h6 class="q-ma-none">Tours clásicos</h6>
         </div>
        <carousel :dots="false" :nav="false" :items="1" :margin="5" class="q-mb-md">
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
>>>>>>> f95b4e1c88d6aee69342c1f8608d8f6aa7525422
                </q-card-section>
            </q-card>
<<<<<<< HEAD
            <q-card class="my-card" flat bordered>
            <q-img
                src="https://cdn.quasar.dev/img/parallax2.jpg"
            />

            <q-card-section>
                <div class="text-overline text-orange-9">Overline</div>
                <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
                <div class="text-caption text-grey">
                Lorem ipsum dolor .
                </div>
            </q-card-section>

            <q-card-actions>
                <q-btn flat color="dark" label="Share" />
                <q-btn flat color="primary" label="Book" />

                <q-space />

                <q-btn
                color="grey"
                round
                flat
                dense
                :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                @click="expanded = !expanded"
                />
            </q-card-actions>

            <q-slide-transition>
                <div v-show="expanded">
                <q-separator />
                <q-card-section class="text-subitle2">
                    {{ lorem }}
=======
        </carousel>
        <q-separator color="orange" inset class="q-mb-sm"/>
        
        <div class="row">
            <h6 class="q-ma-none">Tours clásicos</h6>
         </div>
        <carousel :dots="false" :nav="false" :items="1" :margin="5" class="q-mb-md">
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
>>>>>>> f95b4e1c88d6aee69342c1f8608d8f6aa7525422
                </q-card-section>
            </q-card>
         
        </carousel>
<<<<<<< HEAD
        
=======
        <q-separator color="orange" inset class="q-mb-md"/>
    </div>
    </div>
>>>>>>> f95b4e1c88d6aee69342c1f8608d8f6aa7525422
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
