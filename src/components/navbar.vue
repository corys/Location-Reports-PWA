<template>
  <div id="header" class="navbar sticky-top navbar-dark bg-dark">
  	<div class="navbar-header pull-left">
  		<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-filter-collapse">
  		<span class="sr-only">Toggle navigation</span>
  		<span class="icon-bar"></span>
  		<span class="icon-bar"></span>
  		<span class="icon-bar"></span>
  		</button>
  		<!-- <a class="navbar-brand" href="#">Alaska Outdoor Reports</a> -->
  	</div>

  	<div class="container-fluid">
  		<div class="pull-right">
  			<button class="btn btn-primary navbar-btn" id="add-report-button">
        	<i class="glyphicon glyphicon-pencil glyphicon-white"></i>
        	<span class="">Add Your Report</span>
        </button>
  		</div>
  		<div class="collapse navbar-collapse" id="navbar-filter-collapse">
  			<form class="navbar-form">

  				<div class="form-group input-group input-daterange col-sm-3" id="datepicker" title="Search by date">
  					<input type="text" class="form-control" id="startDate" name="start" placeholder="Start Date" />
  				  <span class="input-group-addon">to</span>
  				  <input type="text" class="form-control" id="endDate" name="end"  placeholder="End Date"/>
  				</div>
  				<div class="form-group input-group col-sm-3 col-md-4" title="Search reports by keyword">
  	        <span class="input-group-addon">Keywords</span>
  				  <input type="text" class="form-control" id="keywords" placeholder="Search by location or any other text" >
  	     </div>
  			</form>
  		</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style>

</style>
