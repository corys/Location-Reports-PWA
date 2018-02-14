<template>
  <b-row>
    <ReportList />
    <Map v-if="mapVisible" />
  </b-row>
</template>

<script>
  import { mapState } from 'vuex'
  import Map from './map/map.vue'
  import ReportList from './reports/list.vue'

  export default {
    components: {
      Map,
      ReportList
    },
    computed: mapState({
      mapVisible: state => state.settings.mapVisible
    })
  }
</script>

<style scoped>
  .row {
    height: 100%;
  }
</style>
