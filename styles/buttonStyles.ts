import { StyleSheet } from 'react-native'

export const buttonStyles = StyleSheet.create({
  base: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: '#0a72eb',
  },
  danger: {
    backgroundColor: '#f5204a',
  },
  text: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '400',
  },
})
