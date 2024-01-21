import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Modal, StyleSheet, Text, Pressable, View } from 'react-native';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Pressable onPress={showModal}>
        <Text>Show modal message</Text>
      </Pressable>

      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>This is the modal ...</Text>
            <Pressable style={styles.closeButton} onPress={closeModal}>
              <Text>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 100,
    borderRadius: 0,
    elevation: 5,
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    backgroundColor: 'lightgrey',
    alignSelf: 'center',
  },
});

export default App;