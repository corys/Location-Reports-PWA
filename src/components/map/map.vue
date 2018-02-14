<template>
  <b-col id="map" md="6" order="1" xl="7" order-md="2">
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
      }"
      @map-load="mapLoaded"
      @map-click="mapClicked">
    </mapbox>
  </b-col>
</template>

<script>
  import { mapState } from 'vuex'
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
    },
    computed: mapState({
      reports: state => state.reports
    }),
    methods: {
      mapLoaded (map) {
        const features = this.reports.map((r) => {
          return {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [r.lng, r.lat]
            },
            'properties': {
              'title': r.locationName,
              'color': this.getMarkerColor(r.reportDateTime)
            }
          }
        })
        // console.log(features)
        map.addLayer({
          'id': 'points',
          'type': 'circle',
          'source': {
            'type': 'geojson',
            'data': {
              'type': 'FeatureCollection',
              'features': features
            }
          },
          paint: {
            'circle-radius': 6,
            'circle-opacity': 0.3,
            'circle-color': ['get', 'color'],
            'circle-stroke-width': 6,
            'circle-stroke-opacity': 1,
            'circle-stroke-color': ['get', 'color']
          }
        })
      },
      mapClicked (map, e) {
        this.addPopUp(map, e)
      },
      mapMouseMoved (map, e) {
        const features = map.queryRenderedFeatures(e.point, {
          layers: ['points']
        })
        map.getCanvas().style.cursor = (features.length) ? 'pointer' : ''
      },
      getMarkerColor (dateString) {
        const colors = [
          {
            'age': 21600,
            'description': '< 6 hours ago',
            'color': '#FF0000',
            'opacity': 0.8
          },
          {
            'age': 43200,
            'description': '',
            'color': '#FF1900',
            'opacity': 0.8
          },
          {
            'age': 64800,
            'description': '',
            'color': '#FF3200',
            'opacity': 0.8
          },
          {
            'age': 86400,
            'description': '1 day ago',
            'color': '#FF4C00',
            'opacity': 0.8
          },
          {
            'age': 129600,
            'description': '',
            'color': '#FF6500',
            'opacity': 0.8
          },
          {
            'age': 172800,
            'description': '',
            'color': '#FF7F00',
            'opacity': 0.8
          },
          {
            'age': 216000,
            'description': '',
            'color': '#FF9800',
            'opacity': 0.8
          },
          {
            'age': 259200,
            'description': '3 days ago',
            'color': '#FFB200',
            'opacity': 0.8
          },
          {
            'age': 345600,
            'description': '',
            'color': '#FFCB00',
            'opacity': 0.8
          },
          {
            'age': 432000,
            'description': '',
            'color': '#FFE500',
            'opacity': 0.8
          },
          {
            'age': 604800,
            'description': '1 week ago',
            'color': '#FFFF00',
            'opacity': 0.8
          },
          {
            'age': 864000,
            'description': '',
            'color': '#CCCC22',
            'opacity': 0.7
          },
          {
            'age': 1209600,
            'description': '',
            'color': '#999944',
            'opacity': 0.6
          },
          {
            'age': 788400000,
            'description': '> 2 weeks ago',
            'color': '#666666',
            'opacity': 0.5
          }
        ]

        const reportDateTime = Date.parse(dateString)
        const color = colors.find((c) => {
          return 1000 * c.age > (Date.now() - reportDateTime)
        })
        return color.color
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import 'https://api.tiles.mapbox.com/mapbox-gl-js/v0.43.0/mapbox-gl.css';

  #map {
    padding: 0px;
  }
</style>
