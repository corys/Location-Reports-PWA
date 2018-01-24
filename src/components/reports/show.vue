<template>
  <b-card :class="[ cssClass ]" data-report-id="reportId">
		<h3>
  		<span class="pull-right" data-original-title="" title="">
    	<!---
    				<% _.each(activityUrls, function(url) { %>
    					<img src="<%= url %>" style="height:28px;margin-top: -14px;">
    				<% }); %>
    	--->
    	</span>
			{{ locationName }}
			<small>
			  {{ reportDateTimeText }}
			  <template v-if="authorName">
			    by {{ authorName }}
			  </template>
      </small>
		</h3>
    {{ report }}
		<template v-if="sourceTypeId == 'TRACK'">
			{{ authorName }} was out grooming.
			<div class="visible-xs visible-sm">
			<img class="lazy" style="height:640px; width:320px; display:block; max-width:800px; max-height:400px; width:100% !important; height:auto !important;" data-original="https://maps.googleapis.com/maps/api/staticmap?size=640x320&path=weight:3%7Ccolor:red%7Cenc:<%=  report.locationFeatureSummary %>&key=AIzaSyAC3jCTdg4DWGRaUT4vK0rGZwfypiuhUX0"/>
			</div>
			<div class="hidden-xs hidden-sm">
				Click this report to see where.
			</div>
		</template>
	</b-card>
</template>

<script>
  export default {
    props: {
      reportId: Number,
      cssClass: String,
      locationName: String,
      reportDateTimeText: String,
      report: String,
      authorName: String,
      sourceTypeId: String
    }
  }
</script>

<style>
.pointer{
	cursor: pointer;
}

.card {
	margin-bottom: 8px;
 }

 small {
   font-size: 65%;
   color: #777777;
 }

 /* mods for short wide screens */
@media all and (max-height: 900px){

 /* bootstrap overrides */
 h3 {
	margin-bottom: 5px;
	font-size: 20px;
 }

 .card-body {
   padding: 0.75rem;
 }
}
</style>
