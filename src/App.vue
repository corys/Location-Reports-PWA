<template>
  <div id="app">
    <Navbar />

    <div class="container-fluid">
      <router-view></router-view>
    </div>

    <div id="footer" class="navbar navbar-inverse navbar-fixed-bottom">
    	<div class="row">
    		<div class="col-xs-6">
    			<a href="rss" target="_blank" class="navbar-link-icon" title="RSS Feed">
    				<img src="/images/rss.png" />
    			</a>

    			<a href="http://www.facebook.com/pages/Alaska-Outdoor-Reports/403998892672" target="_blank" class="navbar-link-icon" title="Like us on Facebook">
    				<img src="/images/facebook.png"/>
    			</a>

    			<a href="http://www.twitter.com/akoutdoor" target="_blank" class="navbar-link-icon" title="Follow us on Twitter">
  					<img src="/images/twitter.png"/>
  	      </a>
    		</div>
    		<div class="col-xs-6 text-right">
    			<a class="navbar-link-icon" data-toggle="modal" data-target="#aboutModal">About</a>
    			<a class="navbar-link-icon" data-toggle="modal" data-target="#termsModal">Terms</a>
    		</div>
      </div>
    </div>

    <!-- About Modal -->
    <div class="modal fade" id="aboutModal" tabindex="-1" role="dialog" aria-labelledby="aboutModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="aboutModalLabel">About This Site</h4>
          </div>
          <div class="modal-body">
            <p><a href="http://www.resdat.com" target="_blank"><img src="images/rdi_logo_sm.gif" align="right" border="0"></a> The Alaska Outdoor Reports website is a community of outdoor enthusiasts who share information about the areas where they recreate.  Thank you very much to everyone who takes the time to post reports.  You are what makes this site so great! </p>
            <p>The Alaska Outdoor Reports are developed and maintained by Cory Smith, out of his desire to always know where the best skiing is.  Special thanks to <a href="http://www.resdat.com" target="_blank">Resource Data, Inc.</a> for contributing to this project.</p>
            <p>If you have any questions, or are interested in having the Reports on your website, <a href="http://akoutdoor.tumblr.com" target="_blank">check our admittedly meager help section</a> for more information and/or contact info.</p>
            <p>Thanks for visiting!</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Terms Modal -->
    <div class="modal fade" id="termsModal" tabindex="-1" role="dialog" aria-labelledby="termsModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="termsModalLabel">Terms Of Use</h4>
          </div>
          <div class="modal-body">
            <p>By using this website and the information it contains, you acknowledge all of the following:</p>
            <p>Reports in this forum are the opinion of the reporter only. They are opinions only, and should not be construed as fact or professional assesment. The information may be inaccurate. Reports are not the views of this organization, the website owner, or the forum moderator(s). These reports are intended to supplement your existing knowledge of the area being reported, and the outdoors in general. The reports are not comprehensive. Hazards will undoubtably exist that are not documented here. These reports should not be your only source of information. The reports are simply one more piece of information to help you make better decisions in the outdoors. Those decisions are still yours alone.</p>
            <p>Have fun and be safe!</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/navbar'
export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
