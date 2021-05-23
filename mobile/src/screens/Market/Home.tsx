import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ViewProps, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
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

const imageSource = (name: string) => {
  switch (name.toLowerCase()) {
    case 'surf': return require(`../../../assets/sport/surf.png`)
    case 'canoagem': return require(`../../../assets/sport/canoagem.png`)
    case 'raquete': return require(`../../../assets/rent/raquete.png`)
  }
}

interface CardProps extends ViewProps {
  name: string
}

const CardItem = ({ name }: CardProps) => {

  return (
  <TouchableOpacity style={{width: 80, height: 100, elevation: 5, marginVertical: 10, borderRadius: 20}} onPress={() => alert('not implemented yeat')}>
    <Image source={imageSource(name)} style={{width: 80, height: 100, borderRadius: 20}}/>
    <View style={{height: 20, width: 80, backgroundColor: '#D3D1D1', position: 'absolute', bottom: 0, borderRadius: 20, alignItems: 'center'}}>
      <Text>{name}</Text>
    </View>
  </TouchableOpacity>
)
}

const MarketHome = () => {
  const toTrendingSports = ['Canoagem', 'Surf', 'Tênis']
  const newestSports = ['Canoagem', 'Surf', 'Tênis']
  const itemToRent = ['Prancha', 'Raquete', 'Roupa']

  return (
  <View style={styles.root}>
    <Header />

    <ScrollView style={{ paddingHorizontal: 25 }}>
      {/* body */}
      <View>
        <Text>Aulas mais procuradas</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {toTrendingSports.map(sport => (
            <CardItem key={`top-trending-${sport}`} name={sport} />
          ))}
        </View>
      </View>

      <View>
        <Text>Recentes</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {newestSports.map(sport => (
            <CardItem key={`top-trending-${sport}`} name={sport} />
          ))}
        </View>
      </View>

      <View>
        <Text>Aluguel de equipamentos e roupas</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {itemToRent.map(sport => (
            <CardItem key={`top-trending-${sport}`} name={sport} />
          ))}
        </View>
      </View>
    </ScrollView>
  </View>
)
}


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
