<template>
  <b-col class="reports" md="6" order="2" xl="5" order-md="1">
    <div id="report-add"></div>

    <div class="loading" v-if="loading">
      Loading...
    </div>

		<div id="report-list">
  		<template v-if="reports.length">
  		  <ShowReport
  		    v-for="report in reports"
  		    :key="report.reportId"
  		    :reportId="report.reportId"
          :cssClass="report.cssClass"
          :locationName="report.locationName"
          :reportDateTimeText="report.reportDateTimeText"
          :report="report.report"
          :authorName="report.authorName"
          :sourceTypeId="report.sourceTypeId"
  			/>
  		</template>
			<div v-else class="well well-xs">
				<h3>
					No reports found
				</h3>
				We couldn't find any reports that meet the search criteria.  Try expanding the date range above or using fewer keywords.
			</div>
		</div>
  </b-col>
</template>

<script>
  import { mapState } from 'vuex'
  import ShowReport from './show.vue'

  export default {
    components: {
      ShowReport
    },
    data () {
      return {
        loading: false
      }
    },
    computed: mapState({
      reports: state => state.reports
    }),
    created () {
      this.$store.dispatch('reports/get')
    }
  }
</script>

<style>


/* mods for short wide screens */
@media all and (max-height: 900px){
	 #sidebar {
		padding: 5px;
	 }
	 .reports {
  	 overflow: auto;
  	 padding-top: 5px;
  	 padding-right: 10px;
	 }
 }
</style>
