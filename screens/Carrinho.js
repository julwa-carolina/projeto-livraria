import React, { useEffect } from 'react';
import {View, Text, FlatList, StyleSheet, Alert} from 'react-native';
import ItemCarrinho from '../components/ItemCarrinho';
import BotaoAcao from '../components/BotaoAcao';

export default function Carrinho({
  navigation,
  carrinho,
  aumentarQuantidade,
  diminuirQuantidade,
  removerLivro,
  limparCarrinho
}) {
  useEffect(() => {
    navigation.setOptions({
      title: `Meu Carrinho (${carrinho.length})`
    });
  }, [navigation, carrinho.length]);
  
  const total = carrinho.reduce(
    (soma, livro) => soma + livro.preco * livro.quantidade,
    0
  );

  function finalizarCompra() {
    Alert.alert(
      'Compra realizada!',
      'Obrigado por comprar na BookLab!',
      [
        {
          text: 'OK',
          onPress: limparCarrinho
        }
      ]
    );
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Meus livros
      </Text>

      {carrinho.length === 0 ? (

        <View style={styles.vazio}>
          <Text style={styles.icone}>🛒</Text>

          <Text style={styles.mensagem}>
            Seu carrinho está vazio
          </Text>

          <Text style={styles.submensagem}>
            Adicione seus livros favoritos!
          </Text>

          <BotaoAcao
            titulo="Ver livros"
            aoPressionar={() =>
              navigation.navigate('ListaPosts')
            }
          />
        </View>

      ) : (

        <>
          <FlatList
            data={carrinho}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <ItemCarrinho
                livro={item}
                aumentar={() => aumentarQuantidade(item.id)}
                diminuir={() => diminuirQuantidade(item.id)}
                remover={() => removerLivro(item.id)}
              />
            )}
            contentContainerStyle={styles.lista}
          />

          <View style={styles.resumo}>

            <Text style={styles.textoResumo}>
              Resumo do pedido
            </Text>

            <View style={styles.linha}>
              <Text style={styles.textoTotal}>
                Total
              </Text>

              <Text style={styles.valorTotal}>
                R$ {total.toFixed(2).replace('.', ',')}
              </Text>
            </View>

            <BotaoAcao
              titulo="Finalizar compra"
              aoPressionar={finalizarCompra}
            />

          </View>
        </>

      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F5FA'
  },

  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#29243A',
    margin: 18
  },

  lista: {
    paddingBottom: 10
  },

  resumo: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5
  },

  textoResumo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#29243A',
    marginBottom: 15
  },

  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18
  },

  textoTotal: {
    fontSize: 16,
    color: '#777184'
  },

  valorTotal: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#7052B5'
  },

  vazio: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25
  },

  icone: {
    fontSize: 55,
    marginBottom: 15
  },

  mensagem: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#29243A',
    marginBottom: 8
  },

  submensagem: {
    fontSize: 14,
    color: '#777184',
    marginBottom: 20
  }
});
