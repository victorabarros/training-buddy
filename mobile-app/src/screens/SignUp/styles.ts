import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#E5E5E5',
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

export default styles
