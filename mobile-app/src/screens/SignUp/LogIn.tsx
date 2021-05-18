import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import BottomTab from './BottomTab'

const LogIn = () => {
  const navigation = useNavigation()
  return (
    <>
  {/* <Text>login</Text> */}

  <BottomTab stage={2}/>
  </>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    paddingTop: 40,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 13,
    lineHeight: 19,
    textAlign: 'justify',
    fontFamily: 'monospace',
  },
  imageContainer: {
    backgroundColor: 'white',
    padding: 5,
    margin: 10,
    borderRadius: 15,
    elevation: 5,
  },
  image: {
    width: 95,
    height: 120,
  },
})

export default LogIn
