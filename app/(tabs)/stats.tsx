import { View, Text, StyleSheet } from 'react-native'

export default function StatsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>📊 Statistics Coming Soon</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 16, color: '#666' },
})
