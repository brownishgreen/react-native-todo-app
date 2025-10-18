import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useModalStore } from '@/stores/useModalStore'
import { buttonStyles } from '@/styles/buttonStyles'

// --- component ---
export default function CompletionModal() {
  const { isVisible, closeModal } = useModalStore()

  return (
    <Modal
      visible={isVisible}
      animationType="fade"
      transparent
    >
      <View style={styles.overlay}>
        <View style={styles.modalBox}>
          <Text style={styles.title}>🎉 All tasks completed!</Text>
          <Text style={styles.subtitle}>Good job! 😍</Text>

          <TouchableOpacity
            style={[buttonStyles.base, buttonStyles.primary]}
            onPress={closeModal}
          >
            <Text style={buttonStyles.text}>Continue</Text>
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
