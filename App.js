import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Weather from "./Weather.js";

const API_KEY = "1e91edb732f5d2fed514f2e58fa176a7";

export default class App extends React.Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    city: null,
    weather: null,
  }

  // http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={API_KEY}
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude)
      },
      error => {
        this.setState({
          error: toString(error)
        });
    });
  }

  _getWeather = async(lat, lon) => {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        weather: json.list[0].weather[0].main,
        temperature: json.list[0].main.temp,
        city: json.city.name,
        isLoaded: true
      })
    })
    .error()
  }

  render() {
    const { isLoaded, error, temperature, city, weather } = this.state;
    return (
      <View style={styles.container}>
        {isLoaded ? <Weather weatherName={weather} cityName={city} temp={Math.floor((temperature - 273.15)*10)/10}/> :
        <View style={styles.loading}>
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
          <Text style={styles.loadingText}>Loading...</Text>
        </View>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loading: {
    flex: 1,
    backgroundColor:'#FDF6AA',
    justifyContent: 'flex-end',
    paddingRight: 25,
    paddingLeft: 24
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 100
  },
  errorText: {
    color: "red",
    fontSize: 38,
  },
});
