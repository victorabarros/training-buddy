import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Svg, { Ellipse } from 'react-native-svg'
import Entypo from 'react-native-vector-icons/Entypo'
import styles from './styles'

const Header = () => (
  <View>
    <View style={extraStyles.topContainer}>
      <Text style={[styles.title, { flex: 4 }]}>Training Buddy</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 3 }}>
        <TouchableOpacity
          style={[extraStyles.topButton, { backgroundColor: '#898989' }]}
          onPress={() => alert('not implemented yeat')}
        >
          <Entypo name="user" size={35} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[extraStyles.topButton, { backgroundColor: 'white' }]}
          onPress={() => alert('not implemented yeat')}
        >
          {/* <Entypo name="search" size={35} /> */}
          <Entypo name="menu" size={35} />
        </TouchableOpacity>
      </View>

      <View>
        <View style={extraStyles.topBar}>
          {['Mais procurados', 'Recentes', 'Aluguel'].map(label => (
            <TouchableOpacity
              key={`view=${label.toLowerCase().replace(' ', '-')}`}
              style={extraStyles.topBarButton}
              onPress={() => alert('not implemented yeat')}
            >
              <Text
                key={`text=${label.toLowerCase().replace(' ', '-')}`}
                style={[styles.text, { color: 'white', fontSize: 11 }]}
              >
                {label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>

    <Svg height="65" width="100%">
      <Ellipse cx="50%" rx="50%" ry="100%" fill="#3991E2" />
    </Svg>
  </View>
)

const MarketHome = () => (
  <View style={styles.root}>
    <Header />

    <View style={{ paddingHorizontal: 25 }}>
      {/* body */}
      <View>
        <Text>Aulas mais procuradas</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {['Canoagem', 'Surf', 'Tênis'].map(sport => (
            <Text key={`top-trending-${sport}`}>{sport}</Text>
          ))}
        </View>
      </View>

      <View>
        <Text>Recentes</Text>
      </View>

      <View>
        <Text>Aluguel de equipamentos e roupas</Text>
      </View>
    </View>
  </View>
)

const extraStyles = StyleSheet.create({
  topContainer: {
    height: 290,
    backgroundColor: '#3991E2',
    padding: 25,
  },
  topButton: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBar: {
    backgroundColor: 'white',
    height: 50,
    width: '86%',
    borderRadius: 15,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  topBarButton: {
    backgroundColor: '#1464AF',
    justifyContent: 'center',
    borderRadius: 16,
    padding: 7,
  },
})

export default MarketHome
