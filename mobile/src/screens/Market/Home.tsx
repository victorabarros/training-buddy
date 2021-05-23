import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ViewProps, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Svg, { Ellipse } from 'react-native-svg'
import Entypo from 'react-native-vector-icons/Entypo'
import ProfileButton from '../../components/ProfileButton'
import styles from './styles'

const Header = () => (
  <View>
    <View style={extraStyles.topContainer}>
      <Text style={[styles.title, { flex: 4 }]}>Training Buddy</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 3 }}>
        <ProfileButton size={50} backgroundColor={'#898989'} color={'black'} />
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
    case 'surf':
      return require(`../../../assets/sport/surf.png`)
    case 'canoagem':
      return require(`../../../assets/sport/canoagem.png`)
    case 'kitesurf':
      return require(`../../../assets/sport/kitesurf.png`)
    case 'tênis':
      return require(`../../../assets/sport/tenis.png`)
    case 'raquete':
      return require(`../../../assets/rent/raquete.png`)
    case 'prancha':
      return require(`../../../assets/rent/prancha.png`)
  }
}

interface CardProps extends ViewProps {
  name: string
}

const CardItem = ({ name }: CardProps) => {
  return (
    <TouchableOpacity
      style={{
        width: 80,
        height: 100,
        elevation: 5,
        marginVertical: 10,
        borderRadius: 20,
        marginHorizontal: 15,
      }}
      onPress={() => alert('not implemented yeat')}
    >
      <Image source={imageSource(name)} style={{ width: 80, height: 100, borderRadius: 20 }} />
      <View
        style={{
          height: 20,
          width: 80,
          backgroundColor: '#D3D1D1',
          position: 'absolute',
          bottom: 0,
          borderRadius: 20,
          alignItems: 'center',
        }}
      >
        <Text>{name}</Text>
      </View>
    </TouchableOpacity>
  )
}

interface ContentSessionProps extends ViewProps {
  title: string
  items: string[]
}

const ContentSession = ({ title, items }: ContentSessionProps) => (
  <View style={{ marginVertical: 15 }}>
    <Text style={[styles.text, { fontWeight: 'bold', fontSize: 16 }]}>{title}</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {items.map(item => (
        <CardItem key={`${title.toLocaleLowerCase().replace(' ', '-')}-${item}`} name={item} />
      ))}
    </ScrollView>
  </View>
)

const MarketHome = () => {
  const toTrendingSports = ['Canoagem', 'Surf', 'Tênis']
  const newestSports = ['Canoagem', 'Surf', 'Tênis', 'Kitesurf']
  const itemToRent = ['Prancha', 'Raquete']

  return (
    <View style={styles.root}>
      <Header />

      <ScrollView style={{ paddingHorizontal: 25 }}>
        {/* body */}
        <ContentSession title={'Aulas mais procuradas'} items={toTrendingSports} />
        <ContentSession title={'Recentes'} items={newestSports} />
        <ContentSession title={'Aluguel de equipamentos e roupas'} items={itemToRent} />
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
