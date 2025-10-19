import { View, Text, StyleSheet } from 'react-native'
import { useTodoStore } from '@/stores/todoStore'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import Svg, { Circle } from 'react-native-svg'
import { useThemeStore } from '@/stores/useThemeStore'
export default function StatsScreen() {
  const { todos } = useTodoStore()
  const theme = useThemeStore((state) => state.theme)
  // --- calculations ---
  const total = todos.length
  const completed = todos.filter(todo => todo.completed).length
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100)

  // --- chart calculations ---
  const radius = 60
  const strokeWidth = 10
  const circumference = 2 * Math.PI * radius
  const progress = (percentage / 100) * circumference

  return (
    <ThemedView style={[styles.container, { backgroundColor: theme === 'light' ? '#F5F5F5' : '#1A1A1A' }]}>
      <ThemedText style={styles.title}>Statistics Overview</ThemedText>

      <View style={styles.chartContainer}>
        <Svg width={160} height={160}>
          {/* Background circle */}
          <Circle
            cx="80"
            cy="80"
            r={radius}
            stroke={theme === 'light' ? '#eee' : '#333'}
            strokeWidth={strokeWidth}
            fill="none"
          />
          {/* Progress circle */}
          <Circle
            cx="80"
            cy="80"
            r={radius}
            stroke="#0a72eb"
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            strokeLinecap="round"
          />
        </Svg>

        <View style={styles.percentTextContainer}>
          <ThemedText style={styles.percentText}>{percentage}%</ThemedText>
        </View>
      </View>

      <ThemedText style={styles.caption}>
        {percentage === 100
          ? '🎉 You finished everything!'
          : 'Keep going! Consistency builds mastery 💪'}
      </ThemedText>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 24,
  },
  chartContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  percentTextContainer: {
    position: 'absolute',
    top: '40%',
    alignItems: 'center',
  },
  percentText: {
    fontSize: 28,
    fontWeight: '700',
  },
  detailText: {
    fontSize: 16,
    marginVertical: 4,
  },
  caption: {
    marginTop: 20,
    fontSize: 14,
    textAlign: 'center',
  },
})
