import { View, ViewProps } from 'react-native'
import { useThemeStore } from '@/stores/useThemeStore'

export function ThemedView({style, ...props}: ViewProps) {

  const theme = useThemeStore((state) => state.theme)
  const backgroundColor = theme === 'light' ? '#F5F5F5' : '#1A1A1A'
  
  return <View style={[{ backgroundColor }, style]} {...props} />
}