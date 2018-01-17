<template>
  <div>
    <Map />
    <ReportList />
  </div>
</template>

<script>
  import Map from './map.vue'
  import ReportList from './reports/list.vue'

  export default {
    components: {
      Map,
      ReportList
    }
  }
</script>

<style>

</style>
