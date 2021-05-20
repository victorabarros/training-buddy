import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BottomTab = ({ step, nextArrowOnPressed, totalSteps = 3 }: any) => {
  const navigation = useNavigation()
  const backButtonExtraStyle = step === 1 ? { color: '#E5E5E5' } : {}

  return (
    <View style={styles.container}>
      <Text style={[styles.button, backButtonExtraStyle]} onPress={navigation.goBack}>
        {'<'}
      </Text>
      <Text style={styles.text}>{`${step}/${totalSteps} PASSOS`}</Text>
      <Text style={styles.button} onPress={nextArrowOnPressed}>
        {'>'}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  button: {
    fontSize: 18,
    width: 25,
    borderRadius: 12.5,
    textAlign: 'center',
    marginHorizontal: 30,
  },
  text: {
    fontSize: 13,
    lineHeight: 19,
    textAlign: 'justify',
    fontFamily: 'monospace',
  },
})

export default BottomTab
