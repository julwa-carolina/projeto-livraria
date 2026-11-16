import React, { useState } from 'react';
import {View, Text, Image, ScrollView,TouchableOpacity, StyleSheet} from 'react-native';

export default function DetalhesPost({
  route,
  navigation,
  adicionarAoCarrinho
}) {
  
const { livro } = route.params;
const [mensagem, setMensagem] = useState('');


function comprarLivro() {
  adicionarAoCarrinho(livro);

  setMensagem(
    `${livro.titulo} foi adicionado ao seu carrinho!`
  );
}

  return (
    <ScrollView style={styles.container}>
      <View style={styles.conteudo}>

        <View style={styles.areaCapa}>
          {livro.imagem ? (
            <Image
              source={livro.imagem}
              style={styles.capa}
              resizeMode="cover"
            />
          ) : (
            <View style={styles.capaVazia}>
              <Text style={styles.textoCapa}>
                Sem imagem
              </Text>
            </View>
          )}
        </View>

        <Text style={styles.titulo}>
          {livro.titulo}
        </Text>

        <Text style={styles.autor}>
          Por {livro.autor}
        </Text>

        <View style={styles.categoria}>
          <Text style={styles.textoCategoria}>
            {livro.categoria}
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.tituloSecao}>
            Sobre o livro
          </Text>

          <Text style={styles.descricao}>
            {livro.descricao || 'Descrição não disponível.'}
          </Text>
        </View>

        <View style={styles.cardCompra}>
          <View>
            <Text style={styles.textoPreco}>
              Preço
            </Text>

            <Text style={styles.preco}>
              R$ {livro.preco.toFixed(2).replace('.', ',')}
            </Text>
          </View>

          
  <TouchableOpacity
    style={styles.botaoComprar}
    onPress={comprarLivro}
  >
    <Text style={styles.textoBotao}>
      Comprar
    </Text>
  </TouchableOpacity>

  {mensagem !== '' && (
    <View style={styles.mensagemSucesso}>
      <Text style={styles.textoMensagem}>
        ✓ {mensagem}
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('Carrinho')}
      >
        <Text style={styles.linkCarrinho}>
          Ver carrinho →
        </Text>
      </TouchableOpacity>
    </View>
  )}

        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F5FA',
  },

  conteudo: {
    padding: 20,
    paddingBottom: 35,
  },

  areaCapa: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 15,
    marginBottom: 22,
  },

  capa: {
    width: 155,
    height: 225,
    borderRadius: 10,
    elevation: 6,
  },

  capaVazia: {
    width: 155,
    height: 225,
    backgroundColor: '#D8D0E8',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoCapa: {
    color: '#655582',
  },

  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#29243A',
    textAlign: 'center',
    marginBottom: 8,
  },

  autor: {
    fontSize: 16,
    color: '#777184',
    textAlign: 'center',
    marginBottom: 14,
  },

  categoria: {
    alignSelf: 'center',
    backgroundColor: '#E4DDF3',
    paddingHorizontal: 18,
    paddingVertical: 7,
    borderRadius: 20,
    marginBottom: 25,
  },

  textoCategoria: {
    color: '#7052B5',
    fontWeight: 'bold',
    fontSize: 13,
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    marginBottom: 18,
    elevation: 2,
  },

  tituloSecao: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#29243A',
    marginBottom: 12,
  },

  descricao: {
    fontSize: 15,
    color: '#696575',
    lineHeight: 24,
    textAlign: 'justify',
  },


cardCompra: {
  backgroundColor: '#FFFFFF',
  borderRadius: 16,
  padding: 18,
  elevation: 2,
  gap: 15,
},


mensagemSucesso: {
  marginTop: 5,
  padding: 14,
  backgroundColor: '#E6F4EA',
  borderRadius: 10,
  width: '100%',
},

textoMensagem: {
  color: '#287A45',
  fontSize: 14,
  fontWeight: 'bold',
  marginBottom: 10,
},

linkCarrinho: {
  color: '#7052B5',
  fontSize: 15,
  fontWeight: 'bold',
},


  textoPreco: {
    fontSize: 13,
    color: '#888293',
    marginBottom: 5,
  },

  preco: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#29243A',
  },

  botaoComprar: {
    backgroundColor: '#7052B5',
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 12,
    elevation: 3,
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
