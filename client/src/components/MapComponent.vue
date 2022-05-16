<template>
  <div class="container">

    <div class="row">

      <div class="col-md-8">
        <div class="map_holder">
          <place-search
            v-bind:ready="ready"
            placeholder="Enter a location"
            loading="Map is loading"
            v-bind:gps_timeout="7000"
            v-bind:fallbackProcedure="fallbackProcedure"
            v-bind:zoom="zoom"
            v-bind:geolocation="geolocation"
            v-bind:address="address"
            v-bind:manually="manually"
            @changed="getMapData"
          >
          </place-search>
        </div>
      </div>

      <div class="results">
        <p>Direccion</p>
        <p>
          {{place.address_description}}
        </p>

      </div>

    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "App",
  data() {
    return {
      ready: true,
      fallbackProcedure: "gps",
      zoom: 17, //
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
  },
  created() {},
};
</script>

<style>
.map_holder {
  width: 200px;
  height: 300px;
}
.results {
  border-radius: 5px;
  border: 2px solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 500px;
  margin-left: 800px;
  margin-top: 180px;
  background-color: rgba(13, 26, 38, 0.807);
  color: white;
}
.btn {
   width: 200px;
}
</style>