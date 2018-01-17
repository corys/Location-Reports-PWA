<template>
  <div id="sidebar" class="col-md-6 bg-shaded">
    <div id="report-add"></div>

    <div class="loading" v-if="loading">
      Loading...
    </div>

		<div  id="report-list">
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
	</div>
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
.bg-shaded {
	/* Fallback for web browsers that doesn't support RGBa */
	background: rgb(255, 255, 255) transparent;
	/* RGBa with 0.6 opacity */
	background: rgba(255, 255, 255, 0.6);
	/* For IE 5.5 - 7*/
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99FFFFFF, endColorstr=#99FFFFFF);
	/* For IE 8*/
	-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99FFFFFF, endColorstr=#99FFFFFF)";
}

#sidebar {
	padding-top: 10px;
	margin-bottom: 50px;
}

/* bootstrap overrides */
#sidebar h3 {
	margin-top: 0px;
}

/* mods for short wide screens */
@media all and (max-height: 900px){
	 #sidebar {
		padding: 5px;
	 }
 }
</style>
