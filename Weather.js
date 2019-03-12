import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

// export default class Weather extends Component {
//     render() {
//         return(
//             <LinearGradient colors={["#00C6FB", "#005BEA"]} style={styles.container}>
//                 <View style={styles.upper}>
//                     <Ionicons color="skyblue" size={144} name="ios-rainy" />
//                     <Text style={styles.temp}>35도</Text>
//                 </View>
//                 <View style={styles.lower}>
//                     <Text style={styles.title}>Raining!</Text>
//                     <Text style={styles.subtitle}>For more info look outside.</Text>
//                 </View>
//             </LinearGradient>
//         )
//     }
// }

const weatherClass = {
    Rain: {
        color: ["#00C6FB", "#005BEA"],
        title: "비 오는 날.",
        subtitle: "비 올때는 파전과 막걸리!",
        icon: "ios-rainy"
    },
    Clear: {
        color: ["#FEF253", "#FF7300"],
        title: "맑음.",
        subtitle: "여행가기 딱 좋은 날씨네요.",
        icon: "ios-sunny"
    },
    Thunderstorm: {
        color: ["#00ECBC", "#007ADF"],
        title: "번개 치는 날",
        subtitle: "우르르쾅쾅!",
        icon: "ios-thunderstorm"
    },
    Clouds: {
        color: ["#D7D2CC", "#304352"],
        title: "흐림",
        subtitle: "감성 음악에 젖어 볼까요?",
        icon: "ios-cloudy"
    },
    Snow:{
        color: ["#7DE2FC", "#B9B6E5"],
        title: "눈 오는 날",
        subtitle: "밖에서 눈 싸움 할 사람?",
        icon: "ios-snow"
    },
    Drizzle:{
        color: ["#89F7FE", "#66A6FF"],
        title: "이슬 비 내리는 날",
        subtitle: "이슬 이슬 참이슬?",
        icon: "ios-rainy"
    },
    Haze:{
        color: ["#89F7FE", "#66A6FF"],
        title: "안개 낀 날",
        subtitle: "안개 낀 날엔 헤이즈 음악을 들어요",
        icon: "ios-cloudy"
    }
}

function Weather({ weatherName, temp, cityName }) {
    return (
        <LinearGradient colors={weatherClass[weatherName].color} style={styles.container}>
            <View style={styles.upper}>
                <Ionicons color="white" size={144} name={weatherClass[weatherName].icon} />
                <Text style={styles.temp}>{temp}도</Text>
                <Text style={styles.city}>{cityName}</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherClass[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherClass[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    )
}
Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired,
    cityName: PropTypes.string.isRequired,
}
export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    upper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "transparent"
    },
    temp: {
        fontSize: 45,
        backgroundColor: "transparent",
        color: '#fff',
        marginTop:10
    },
    city: {
        fontSize: 20,
        backgroundColor: "transparent",
        color: '#eee',
        marginTop:5
    },
    lower: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25,
        paddingRight: 25,
        marginBottom: 40
    },
    title: {
        fontSize: 38,
        backgroundColor: "transparent",
        color: '#fff',
    },
    subtitle: {
        fontSize: 24,
        backgroundColor: "transparent",
        color: '#fff'
    }
})