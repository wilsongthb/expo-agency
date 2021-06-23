<template>
    <q-page >
        <div class="column" style="height: 130px">
            <q-banner class="col bg-info">
               <div class="text-h6 text-weight-bolder text-center text-white">
               
               
               </div>
            </q-banner>
         </div>
         <div class="row">
        <div class="scrollmenu col-12">
            <q-card class="my-card" style="display: inline;">
                <img src="https://cdn.quasar.dev/img/mountains.jpg" style="width: 60%;">
                <div style="width: 60%;">
                  <div  style="display: inline;">Our Changing Planet</div>
                  <div  style="display: inline;">by John Doe</div>
                </div>
            </q-card>
          </div>
          </div>
    </q-page>
</template>

<script>
    import { SplitCarousel, SplitCarouselItem } from "vue-split-carousel";
export default {
    name:"explore",
    

}
</script>
<style scoped>
    div.scrollmenu {
        background-color: #333;
        overflow: auto;
        white-space: nowrap;
    }

    div.scrollmenu a {
        display: inline-block;
        color: white;
        text-align: center;
        padding: 14px;
        text-decoration: none;
    }

    div.scrollmenu a:hover {
        background-color: #777;
    }
</style>