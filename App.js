import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TouchableOpacity,Text} from 'react-native';
import ListaPosts from './screens/Lista';
import DetalhesPost from './screens/Detalhes';
import Carrinho from './screens/Carrinho';

const Stack = createNativeStackNavigator();

export default function App() {

  const [carrinho, setCarrinho] = useState([]);

  function adicionarAoCarrinho(livro) {
    setCarrinho((atual) => {
      const existente = atual.find(
        (item) => item.id === livro.id
      );

      if (existente) {
        return atual.map((item) =>
          item.id === livro.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }

      return [
        ...atual,
        { ...livro, quantidade: 1 }
      ];
    });
  }

  function aumentarQuantidade(id) {
    setCarrinho((atual) =>
      atual.map((item) =>
        item.id === id
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      )
    );
  }

  function diminuirQuantidade(id) {
    setCarrinho((atual) =>
      atual.map((item) =>
        item.id === id
          ? {
              ...item,
              quantidade: Math.max(1, item.quantidade - 1)
            }
          : item
      )
    );
  }

  function removerLivro(id) {
    setCarrinho((atual) =>
      atual.filter((item) => item.id !== id)
    );
  }

  function limparCarrinho() {
    setCarrinho([]);
  }

  const quantidadeCarrinho = carrinho.reduce(
    (total, item) => total + item.quantidade,
    0
  );

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListaPosts">

        <Stack.Screen
          name="ListaPosts"
          component={ListaPosts}
          options={({ navigation }) => ({
            title: 'BookLab',

            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Carrinho')}
                style={{ paddingHorizontal: 10 }}
              >
                <Text style={{
                  fontSize: 17,
                  color: '#7052B5',
                  fontWeight: 'bold'
                }}>
                  🛒 {quantidadeCarrinho}
                </Text>
              </TouchableOpacity>
            )
          })}
        />

        <Stack.Screen
          name="DetalhesPost"
          options={{ title: 'Detalhes do livro' }}
        >
          {(props) => (
            <DetalhesPost
              {...props}
              adicionarAoCarrinho={adicionarAoCarrinho}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Carrinho"
          options={{ title: 'Meu Carrinho' }}
        >
          {(props) => (
            <Carrinho
              {...props}
              carrinho={carrinho}
              aumentarQuantidade={aumentarQuantidade}
              diminuirQuantidade={diminuirQuantidade}
              removerLivro={removerLivro}
              limparCarrinho={limparCarrinho}
            />
          )}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
