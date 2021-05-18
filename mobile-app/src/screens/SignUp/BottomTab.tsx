import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BottomTab = ({stage, nextArrowOnPressed}: any) => {
  const navigation = useNavigation()
  const backButtonExtraStyle = (stage === 1 ? {color: "white"} : {})

  return (
      <View style={styles.container}>
        <Text style={[styles.button, backButtonExtraStyle]} onPress={() => navigation.goBack()}>{'<'}</Text>
        <Text style={styles.text}>{`${stage}/3 PASSOS`}</Text>
        <Text
          style={styles.button}
          onPress={nextArrowOnPressed}
        >
          {'>'}
        </Text>
      </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 13,
    lineHeight: 19,
    textAlign: 'justify',
    fontFamily: 'monospace',
  },
  container: {
    flexDirection: 'row',
    position: 'absolute',
    alignSelf: 'center',
    bottom: 10,
  },
  button: {
    fontSize: 18,
    width: 25,
    borderRadius: 12.5,
    textAlign: 'center',
    marginHorizontal: 30,
  },
})

export default BottomTab