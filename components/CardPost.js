import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  View
} from 'react-native';

export default function CardPost({ post, aoPressionar }) {
  return (
    <TouchableOpacity
      style={styles.cartao}
      onPress={() => aoPressionar(post)}
    >
      <Image
        source={post.imagem}
        style={styles.imagem}
        resizeMode="cover"
      />

      <View style={styles.informacoes}>
        <Text style={styles.titulo}>
          {post.titulo}
        </Text>

        <Text style={styles.meta}>
          Autor: {post.autor}
        </Text>

        <Text style={styles.meta}>
          Categoria: {post.categoria}
        </Text>

        <Text style={styles.preco}>
          R$ {post.preco.toFixed(2).replace('.', ',')}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cartao: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  imagem: {
    width: 90,
    height: 125,
    borderRadius: 6
  },
  informacoes: {
    flex: 1,
    marginLeft: 14
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#29243A',
    marginBottom: 6
  },
  meta: {
    fontSize: 13,
    color: '#555',
    marginBottom: 4
  },
  preco: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#7052B5',
    marginTop: 8
  }
});
