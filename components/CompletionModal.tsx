import { useState } from 'react'
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native'

// --- component ---
export default function CompletionModal() {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <Modal
      visible={isVisible}
      animationType="fade"
      transparent
      onRequestClose={() => setIsVisible(false)}
    >
      <View style={styles.overlay}>
        <View style={styles.modalBox}>
          <Text style={styles.title}>🎉 All tasks completed!</Text>
          <Text style={styles.subtitle}>Good job! 😍</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => setIsVisible(false)}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    gap: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 14,
  },
})
