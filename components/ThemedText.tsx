import { Text, TextProps } from 'react-native'
import { useThemeStore } from '@/stores/useThemeStore'

export function ThemedText({ style, ...props }: TextProps) {
  const theme = useThemeStore((state) => state.theme)
  const color = theme === 'light' ? '#333' : '#EDEDED'
  return <Text style={[
    {
      color, fontFamily: 'EB-Garamond'
    }, style]} {...props} />
}