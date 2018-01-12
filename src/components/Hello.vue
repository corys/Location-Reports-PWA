<template>
  <mapbox
    :access-token="accessToken "
    :map-options="mapOptions"
  ></mapbox>
</template>

<script>
  import Mapbox from 'mapbox-gl-vue'
  export default {
    components: { Mapbox },
    data () {
      return {
        accessToken: 'pk.eyJ1IjoiY29yeWhzbWl0aCIsImEiOiJjamNiOWl3MWYwcWdtMzJsbG5mcG50a2gxIn0.Za3kNsNlJ6KVLKIioK1hsQ',
        mapOptions: {
          style: 'mapbox://styles/mapbox/outdoors-v10'
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#map {
  width: 100%;
  height: 500px;
}
</style>
