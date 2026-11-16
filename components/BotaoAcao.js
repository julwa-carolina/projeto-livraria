import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

export default function BotaoAcao({ titulo, aoPressionar }) {
  return (
    <TouchableOpacity
      style={styles.botao}
      onPress={aoPressionar}
    >
      <Text style={styles.texto}>
        {titulo}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#7052B5',
    paddingVertical: 13,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },

  texto: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold'
  }
});
