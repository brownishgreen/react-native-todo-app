import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useModalStore } from '@/stores/useModalStore'
import { buttonStyles } from '@/styles/buttonStyles'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
// --- component ---
export default function CompletionModal() {
  const { isVisible, closeModal } = useModalStore()

  return (
    <Modal
      visible={isVisible}
      animationType="fade"
      transparent
    >
      <ThemedView style={styles.overlay}>
        <ThemedView style={styles.modalBox}>
          <ThemedText style={styles.title}>🎉 All tasks completed!</ThemedText>
          <ThemedText style={styles.subtitle}>Good job! 😍</ThemedText>

          <TouchableOpacity
            style={[buttonStyles.base, buttonStyles.primary]}
            onPress={closeModal}
          >
            <ThemedText style={buttonStyles.text}>Continue</ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </ThemedView>
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
    textAlign: 'center',
  },
  button: {
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    fontWeight: '500',
    fontSize: 14,
  },
})
