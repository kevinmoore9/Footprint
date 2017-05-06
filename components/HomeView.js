import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class HomeView extends Component {
  constructor() {
    super();
    this.state = {
      location: null
    }
    this.onLocation = this.onLocation.bind(this);
    this.onProviderChange = this.onProviderChange.bind(this);
  }

  componentWillMount() {


      // 1.  Wire up event-listeners

      // This handler fires whenever bgGeo receives a location update.
      BackgroundGeolocation.on('location', this.onLocation);

      // This handler fires whenever bgGeo receives an error
      BackgroundGeolocation.on('error', this.onError);

      // This handler fires when movement states changes (stationary->moving; moving->stationary)
      BackgroundGeolocation.on('motionchange', this.onMotionChange);

      // This event fires when a chnage in motion activity is detected
      BackgroundGeolocation.on('activitychange', this.onActivityChange);

      // This event fires when the user toggles location-services
      BackgroundGeolocation.on('providerchange', this.onProviderChange);

      // 2.  #configure the plugin (just once for life-time of app)
      BackgroundGeolocation.configure({
        // Geolocation Config
        desiredAccuracy: 0,
        stationaryRadius: 25,
        distanceFilter: 10,
        // Activity Recognition
        stopTimeout: 1,
        // Application config
        debug: true, // <-- enable this hear sounds for background-geolocation life-cycle.
        logLevel: BackgroundGeolocation.LOG_LEVEL_VERBOSE,
        stopOnTerminate: false,   // <-- Allow the background-service to continue tracking when user closes the app.
        startOnBoot: true,        // <-- Auto start tracking when device is powered-up.
        // HTTP / SQLite config
        url: 'http://yourserver.com/locations',
        batchSync: false,       // <-- [Default: false] Set true to sync locations to server in a single HTTP request.
        autoSync: true,         // <-- [Default: true] Set true to sync each location to server as it arrives.
        headers: {              // <-- Optional HTTP headers
          "X-FOO": "bar"
        },
        params: {               // <-- Optional HTTP params
          "auth_token": "maybe_your_server_authenticates_via_token_YES?"
        }
      }, function(state) {
        console.log("- BackgroundGeolocation is configured and ready: ", state.enabled);

        if (!state.enabled) {
          BackgroundGeolocation.start(function() {
            console.log("- Start success");
          });
        }
      });
    }

    // You must remove listeners when your component unmounts
    componentWillUnmount() {
      // Remove BackgroundGeolocation listeners
      BackgroundGeolocation.un('location', this.onLocation);
      BackgroundGeolocation.un('error', this.onError);
      BackgroundGeolocation.un('motionchange', this.onMotionChange);
      BackgroundGeolocation.un('activitychange', this.onActivityChange);
      BackgroundGeolocation.un('providerchange', this.onProviderChange);
    }

    onLocation(location) {
      console.log('- [js]location: ', JSON.stringify(location));
      this.setState({location: location})
    }
    onError(error) {
      var type = error.type;
      var code = error.code;
      alert(type + " Error: " + code);
    }
    onActivityChange(activityName) {
      console.log('- Current motion activity: ', activityName);  // eg: 'on_foot', 'still', 'in_vehicle'
    }
    onProviderChange(provider) {
      console.log('- Location provider changed: ', provider.enabled);
    }
    onMotionChange(location) {
      console.log('- [js]motionchanged: ', JSON.stringify(location));
    }



  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          myFootprint
        </Text>
        <Text>
          { this.state.location ? this.state.location.activity.type : '' }
          { this.state.location ? this.state.location.coords.speed : '' }
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = HomeView;
