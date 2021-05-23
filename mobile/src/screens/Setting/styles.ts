import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#E5E5E5',
    padding: 25,
  },
  topButton: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#105492',
  },
  title: {
    fontFamily: 'monospace',
    fontWeight: 'bold',
    fontSize: 16,
    height: 40,
  },
})

export default styles
