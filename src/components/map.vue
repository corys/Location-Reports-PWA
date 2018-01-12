<template>
  <mapbox
    :access-token="accessToken"
    :map-options="mapOptions"
    :geolocate-control="{
    show: true,
    position: 'top-left'
  }"
  :scale-control="{
    show: true,
    position: 'top-left'
  }"
  :fullscreen-control="{
    show: true,
    position: 'top-left'
  }">
  </mapbox>
</template>

<script>
  import Mapbox from 'mapbox-gl-vue'
  export default {
    components: { Mapbox },
    data () {
      return {
        accessToken: 'pk.eyJ1IjoiY29yeWhzbWl0aCIsImEiOiJjamNiOWl3MWYwcWdtMzJsbG5mcG50a2gxIn0.Za3kNsNlJ6KVLKIioK1hsQ',
        mapOptions: {
          style: 'mapbox://styles/mapbox/outdoors-v10',
          center: [-149.9, 61.15],
          zoom: 11
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import 'https://api.tiles.mapbox.com/mapbox-gl-js/v0.43.0/mapbox-gl.css';

  #map {
    position: fixed;
    top: 56px;
    left: 0px;
    right: 0px;
    bottom: 0px;
}
</style>
