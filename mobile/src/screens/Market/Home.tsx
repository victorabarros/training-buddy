import React from 'react'
import { View, Text } from 'react-native'
import Svg, { Ellipse } from 'react-native-svg'
import Entypo from 'react-native-vector-icons/Entypo'
import styles from './styles'

const MarketHome = () => (
  <View style={styles.root}>
  {/* header */}
  <View>
    <View
      style={{
        height: 290,
        backgroundColor: '#3991E2',
        padding: 25,
        justifyContent: 'space-between',
      }}
    >
      <Text style={styles.title}>Training Buddy</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <View style={{backgroundColor: '#898989', height: 50, width: 50, borderRadius: (50/2), justifyContent: 'center', alignItems: 'center'}}>
          <Entypo name="user" size={30} />
        </View>
        <View style={{backgroundColor: 'white', height: 50, width: 50, borderRadius: (50/2), justifyContent: 'center', alignItems: 'center'}}>
          <Entypo name="search" size={30} />
        </View>
      </View>
      <View style={{backgroundColor: 'white', height: 50, width: "86%", borderRadius: 15, alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
        {['Mais procurados', 'Recentes', 'Aluguel'].map((label => (
          <View key={`view=${label.toLowerCase().replace(' ', '-')}`} style={{backgroundColor: '#1464AF', justifyContent: 'center', borderRadius: 16, padding: 7}}>
            <Text key={`text=${label.toLowerCase().replace(' ', '-')}`} style={{color: 'white', fontSize: 11}}>{label}</Text>
          </View>
        )))}
      </View>
    </View>

    <Svg height="65" width="100%">
      <Ellipse cx="50%" rx="50%" ry="100%" fill="#3991E2" />
    </Svg>
  </View>
  </View>
)

export default MarketHome
