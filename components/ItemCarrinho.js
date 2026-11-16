import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function ItemCarrinho({
  livro,
  aumentar,
  diminuir,
  remover
}) {
  return (
    <View style={styles.card}>

      <View style={styles.informacoes}>
        <Text style={styles.titulo}>
          {livro.titulo}
        </Text>

        <Text style={styles.autor}>
          {livro.autor}
        </Text>

        <Text style={styles.preco}>
          R$ {livro.preco.toFixed(2).replace('.', ',')}
        </Text>

        <View style={styles.quantidade}>
          <TouchableOpacity
            style={styles.botaoQuantidade}
            onPress={diminuir}
          >
            <Text style={styles.textoQuantidade}>-</Text>
          </TouchableOpacity>

          <Text style={styles.numero}>
            {livro.quantidade}
          </Text>

          <TouchableOpacity
            style={styles.botaoQuantidade}
            onPress={aumentar}
          >
            <Text style={styles.textoQuantidade}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.lateral}>
        <Text style={styles.subtotal}>
          R$ {(livro.preco * livro.quantidade)
            .toFixed(2).replace('.', ',')}
        </Text>

        <TouchableOpacity onPress={remover}>
          <Text style={styles.remover}>
            Remover
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 7,
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 2
  },

  informacoes: {
    flex: 1
  },

  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#29243A',
    marginBottom: 5
  },

  autor: {
    fontSize: 13,
    color: '#777184',
    marginBottom: 8
  },

  preco: {
    color: '#7052B5',
    fontWeight: 'bold'
  },

  quantidade: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12
  },

  botaoQuantidade: {
    backgroundColor: '#E4DDF3',
    width: 30,
    height: 30,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },

  textoQuantidade: {
    color: '#7052B5',
    fontSize: 20,
    fontWeight: 'bold'
  },

  numero: {
    marginHorizontal: 14,
    fontWeight: 'bold',
    color: '#29243A'
  },

  lateral: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginLeft: 8
  },

  subtotal: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#29243A'
  },

  remover: {
    color: '#C04455',
    fontSize: 13,
    marginBottom: 5
  }
});
