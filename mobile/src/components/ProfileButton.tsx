import React from 'react'
import { StyleSheet, TouchableOpacity, ViewProps } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'

interface ProfileButtonProps extends ViewProps {
  size: number
  backgroundColor: string
  color: string
}

const ProfileButton = ({ size, backgroundColor, color }: ProfileButtonProps) => (
  <TouchableOpacity
    style={[styles.button, { height: size, width: size, borderRadius: size / 2, backgroundColor }]}
    onPress={() => alert('not implemented yeat')}
  >
    <Entypo name="user" size={35} color={color} />
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default ProfileButton
