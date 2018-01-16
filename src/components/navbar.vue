<template>
  <b-navbar toggleable="md" type="dark" variant="dark">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#">Alaska Outdoor Reports</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item href="#">Help</b-nav-item>
        <b-nav-item href="#">About</b-nav-item>
        <b-nav-item href="#">Terms</b-nav-item>
        <b-nav-item href="#">Subscribe</b-nav-item>
        <b-nav-item href="rss" target="_blank" title="RSS Feed">
  				<img class="logo" src="/static/img/icons/rss.png" />
  			</b-nav-item>
        <b-nav-item href="http://www.facebook.com/pages/Alaska-Outdoor-Reports/403998892672" target="_blank" title="Like us on Facebook">
  				<img class="logo" src="/static/img/icons/facebook.png" />
  			</b-nav-item>
        <b-nav-item href="http://www.twitter.com/akoutdoor" target="_blank" title="Follow us on Twitter">
  				<img class="logo" src="/static/img/icons/twitter.png" />
  			</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown text="Filter Reports" right>
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
        </b-nav-item-dropdown>

        <b-button variant="primary" v-html="pencil + ' Add Your Report'" />
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>
  var octicons = require('octicons')
  export default {
    name: 'navbar',
    data: () => {
      return {
        pencil: octicons.pencil.toSVG({'class': 'white'})
      }
    }
  }
</script>

<style scoped>
  .white {
    fill: white;
  }
  .logo {
    height: 20px;
  }
</style>
