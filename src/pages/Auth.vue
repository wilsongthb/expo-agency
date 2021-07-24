<template>
  <div class="fullscreen text-center  flex flex-center bg-info">
    <div class="row justify-center">
      <div class="col q-mx-md">
        <img
        alt="Quasar logo"
        src="~assets/logo-vertical.png"
        style="width: 200px; height: 200px"
      >
      <q-btn color="warning" rounded class="full-width q-mt-sm" label="Registrarse" to="/register"/>
      <q-btn outline rounded color="yellow" size="md" class="full-width q-mt-md" label="Iniciar Sesion" to="/login" />
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
    
}
</script>
<style>

</style>