<template>
  <div class="container">

    <main>
      <h1 class="h1">Reporte</h1>
      <div class="reportform">
        <form action="Enviar" class="formReport" id="form-report" @submit.prevent="postReport">

          <section class="formReport">
            <label for="name" name="name" id="name" class="name">name:</label>
            <input type="text" name="name" id="name" class="name" placeholder="Nombre" v-model="form.name">
          </section>

          <section class="formReport">
            <label for="name" name="name" id="name" class="name">lastname:</label>
            <input type="text" name="name" id="name" class="name" placeholder="Apellidos" v-model="form.lastname">
          </section>

          <section class="formReport">
            <label for="direccion" name="direccion" id="direccion" class="direccion">Dirección: </label>
            <input id="pac-input" placeholder="Ingresa la localización" type="text" class="pac-target-input" autocomplete="off" v-model="location.adress"><div class="location-by-gps-btn"></div>
          </section>


          <section class="formReport">
            <label for="contacto" name="contacto" id="contacto" class="contacto">Teléfono de Contacto: </label>
            <input type="number" name="contacto" id="contacto" class="contacto" placeholder="Teléfono de Contacto">
          </section>

            <section class="formReport">
            <label  abel for="correo" name="correo" id="correo" class="correo">Correo Electrónico: </label>
            <input type="email" name="correo" id="correo" class="correo" placeholder="Correo Electrónico">
            <button type="submit" class="btn">Enviar</button>
          </section>


        </form>

      </div>
    </main>



    <div class="">

      <div class="#map">
        <div class="map_holder">
          <place-search
            v-bind:ready="ready"
            placeholder="Or search here a location"
            loading="Map is loading"
            v-bind:gps_timeout="7000"
            v-bind:fallbackProcedure="fallbackProcedure"
            v-bind:zoom="zoom"
            v-bind:geolocation="geolocation"
            v-bind:address="address"
            @changed="getMapData"
          >
          </place-search>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';

export default {
  name: "MapComponent",
  data() {
    return {
      ready: true,
      fallbackProcedure: "gps",
      zoom: 17,
      geolocation: {
        lat: 31.73858,
        lng: -35.98628,
        zoom: 2,
      },
      address: {
        query: "Albania, Tirane",
        zoom: 12,
      },
      manually: {
        address_description: "21 Dhjetori, Tirana, Albania",
        city: "Tirana",
        country: "Albania",
        lat: 41.3267905,
        lng: 19.8060475,
        state: "Tirana County",
        zip_code: "",
        zoom: 12,
      },
      place: {},
      form_data: {},
      
      location: {
        lat: '',
        lng: '',
        adress: ''
      },

      form: {
        name: '',
        lastname: '',
        latitude: '',
        longitude: '',
        status: 'Open'
      }
      
    };
  },
  methods: {
    getMapData(place) {
      this.place = place;
      console.log(place);
    },
    triggerReady() {
      this.fallbackProcedure = "manually";
      this.ready = true;
    },

          // Post request to create a Report
    postReport() {

      this.form.latitude = this.manually.lat;
      this.form.longitude = this.manually.lng;
      console.log(this.form);
      document.getElementById("form-report").reset();
      alert("Su reporte se envio de manera satisfactoria")

      axios.post('localhost:3000/reports', this.form)
        .then( response => console.log(response))
        .catch( error => console.log(error))
    }
  },
  created() {},
};
</script>

<style>
.map_holder {
  width: 900px;
  height: 400px;
  margin-top: 0px;
  margin-bottom: 50px;
  border-radius: 6px;
}
.btn {
  width: 100px;
  margin: 20px 0;
  box-shadow: 1px 1px 1px white;
}

#map {
  border-radius: 5px;
}
</style>