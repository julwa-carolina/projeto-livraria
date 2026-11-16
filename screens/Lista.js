import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import { useState } from 'react';
import CardPost from '../components/CardPost';

const LIVROS = [
  {
    id: 1,
    titulo: 'Dom Casmurro',
    autor: 'Machado de Assis',
    categoria: 'Romance',
    preco: 29.90,
    descricao: 'Ao longo da obra, somos convidados a questionar verdade, percepção e a complexidade das relações humanas , em uma história rica em nuances e interpretações, que permanece atual e provocadora. Mais do que um romance, é uma experiência literária que estimula o pensamento crítico e desperta diferentes olhares a cada leitura.',
    imagem: require('../assets/dom-casmuro.jpeg')
  },
  {
    id: 2,
    titulo: 'O Pequeno Príncipe',
    autor: 'Antoine de Saint-Exupéry',
    categoria: 'Fábula',
    preco: 24.90,
    descricao: '"O Pequeno Príncipe", escrito por Antoine de Saint-Exupéry, narra a história de um príncipe que deixa seu minúsculo planeta e viaja pelo universo. Durante sua jornada, ele encontra várias personagens que representam diferentes aspectos da natureza humana. Na Terra, ele conhece um aviador perdido no deserto e uma raposa que lhe ensina valiosas lições sobre amor e amizade.',
    imagem: require('../assets/pequeno-principe.jpeg')
  },
  {
    id: 3,
    titulo: 'Harry Potter e a Pedra Filosofal',
    autor: 'J. K. Rowling',
    categoria: 'Fantasia',
    preco: 39.90,
    descricao: 'Harry Potter e a Pedra Filosofal O primeiro livro apresenta Harry, um garoto que descobre ser bruxo e é convidado a estudar em Hogwarts. A narrativa introduz o mundo mágico, os personagens principais e o conflito central envolvendo Lord Voldemort. A história combina descoberta, aventura e formação de identidade. ',
    imagem: require('../assets/harry_potter.jpg')
  },
  {
    id: 4,
    titulo: 'Vidas secas',
    autor: 'Graciliano Ramos',
    categoria: 'Romance',
    preco: 34.90,
    descricao: 'Lançado originalmente em 1938,  Vidas secas  retrata a vida miserável de uma família de retirantes sertanejos obrigada a se deslocar de tempos em tempos para áreas menos castigadas pela seca. O pai, Fabiano, caminha pela paisagem árida da caatinga do Nordeste brasileiro com a sua mulher, Sinha Vitória, e os dois filhos, que não têm nome, sendo chamados apenas de “filho mais velho” e “filho mais novo”. São também acompanhados pela cachorrinha da família, Baleia, cujo nome é irônico, pois a falta de comida a fez muito magra. Vidas secas  pertence à segunda fase modernista da literatura brasileira, conhecida como “regionalista” ou “romance de 30”. Denuncia fortemente as mazelas do povo brasileiro, principalmente a situação de miséria do sertão nordestino',
    imagem: require('../assets/vidas-secas.jpg')
  },
  {
    id: 5,
    titulo: 'Angústia',
    autor: 'Graciliano Ramos',
    categoria: 'Romance',
    preco: 32.54,
    descricao: 'Lançado originalmente em 1936 e apresentado aqui em novo projeto gráfico, Angústia tem como protagonista Luís Silva, funcionário público de Maceió que leva uma vida medíocre e sem grandes emoções até o dia em que se apaixona por Marina. De início, a jovem demonstra certo interesse no relacionamento e no conforto material que o casamento poderia lhe proporcionar, mas logo acaba trocando o noivo por Julião Tavares, mais rico e poderoso. Tomado por ciúmes e rancor, Silva fica perturbado com os acontecimentos que se desenrolam e passa a acompanhar a vida de Marina enquanto sonha em matar Julião. Escrito em primeira pessoa, o romance tem estrutura temporal não linear, seguindo o fluxo de consciência do narrador-personagem e aproximando o leitor dos sentimentos despertados pelos conflitos vividos por Luís Silva.',
    imagem: require('../assets/angustia.jpg')
  },
  {
    id: 6,
    titulo: '1984',
    autor: 'George Orwell',
    categoria: 'Ficção',
    preco: 32.90,
    descricao: 'Winston, herói de 1984 , último romance de George Orwell, vive aprisionado na engrenagem totalitária de uma sociedade completamente dominada pelo Estado, onde tudo é feito coletivamente, mas cada qual vive sozinho. Ninguém escapa à vigilância do Grande Irmão, a mais famosa personificação literária de um poder cínico e cruel ao infinito, além de vazio de sentido histórico. De fato, a ideologia do Partido dominante em Oceânia não visa nada de coisa alguma para ninguém, no presente ou no futuro. OBrien, hierarca do Partido, é quem explica a Winston que "só nos interessa o poder em si. Nem riqueza, nem luxo, nem vida longa, nem felicidade: só o poder pelo poder, poder puro"..',
    imagem: require('../assets/george.jpg')
  },
  {
    id: 7,
    titulo: 'Laranja Mecânica',
    autor: 'Anthony Burgess',
    categoria: 'Ficção',
    preco: 50.90,
    descricao: 'Uma das mais brilhantes sátiras distópicas já escritas, Laranja Mecânica ganhou fama ao ser adaptado em uma obra magistral do cinema pelas mãos de Stanley Kubrick. O livro, entretanto, também é um clássico moderno da ficção inglesa e um marco na cultura pop, que ao lado de 1984, de George Orwell, Admirável Mundo Novo, de Aldous Huxley, e Fahrenheit 451, de Ray Bradbury, representa um dos ícones literários da alienação pós-industrial. Alex é o jovem líder de uma gangue de adolescentes cuja diversão é cometer perversidades e atos de violência pelas ruas de uma cidade futurista governada por um Estado repressivo e totalitário. Depois de cometer um crime que termina em um assassinato, ele acaba preso pelo governo e submetido a um método experimental de recondicionamento de mentes criminosas, que se utiliza de terapia de aversão brutal.',
    imagem: require('../assets/laranja-mecanica.jpg')
  },
  {
    id: 8,
    titulo: 'Blade Runner: Androides sonham com ovelhas elétricas?',
    autor: 'Philip K. Dick ',
    categoria: 'Ficção',
    preco: 49.78,
    descricao: 'Inspiração para um dos maiores clássicos do cinema, dirigido por Ridley Scott, este romance é de autoria do prolífico e revolucionário Philip K. Dick, um dos maiores expoentes da contracultura na ficção científica durante as décadas de 60 e 70. Rick Deckard é um caçador de recompensas, vivendo em uma San Francisco decadente, coberta pela poeira radioativa que dizimou inúmeras espécies de animais e plantas. Um novo trabalho pode ser o ponto de virada para melhorar seu padrão de vida e realizar seu sonho de consumo: uma ovelha de verdade, para substituir a réplica elétrica que ele cria em casa. Para isso, Deckard precisa perseguir e aposentar seis androides que estão foragidos, se passando por humanos. Mas as convicções do detetive podem mudar quando percebe que a linha que separa o real do fabricado não é mais tão nítida quanto ele acreditava',
    imagem: require('../assets/blad-runner.jpg')
  },
  {
    id: 9,
    titulo: 'O avesso da pele',
    autor: 'Jeferson Tenório',
    categoria: 'Ficção',
    preco: 27.90,
    descricao: 'O avesso da pele é a história de Pedro, que, após a morte do pai, sai em busca de resgatar o passado da família e refazer os caminhos paternos. Com uma narrativa sensível e por vezes brutal, Jeferson Tenório traz à superfície um país marcado pelo racismo e por um sistema educacional falido, e um denso relato sobre as relações entre pais e filhos.O que está em jogo é a vida de um homem abalado pelas inevitáveis fraturas existenciais da sua condição de negro em um país racista, um processo de dor, de acerto de contas, mas também de redenção, superação e liberdade. Com habilidade incomum para conceber e estruturar personagens e de lidar com as complexidades e pequenas tragédias das relações familiares, Jeferson Tenório se consolida como uma das vozes mais potentes e estilisticamente corajosas da literatura brasileira contemporânea.',
    imagem: require('../assets/avesso-pele.jpg')
  },
  {
    id: 10,
    titulo: 'Memórias póstumas de Brás Cubas',
    autor: 'Machado de Assis',
    categoria: 'Romance',
    preco: 36.90,
    descricao: 'Em 1881, Machado de Assis lançou aquele que seria um divisor de águas não só em sua obra, mas na literatura brasileira: Memórias póstumas de Brás Cubas . Ao mesmo tempo em que marca a fase mais madura do autor, o livro é considerado a transição do romantismo para o realismo. Num primeiro momento, a prosa fragmentária e livre de Memórias póstumas , misturando elegância e abuso, refinamento e humor negro, causou estranheza, inclusive entre a crítica. Com o tempo, no entanto, o defunto autor que dedica sua obra ao verme que primeiro roeu as frias carnes de seu cadáver tornou-se um dos personagens mais populares da nossa literatura.',
    imagem: require('../assets/memorias-postumas.webp')
  }
];

const FILTROS = [
  { rotulo: 'Todos', categoria: null },
  { rotulo: 'Ficção', categoria: 'Ficção' },
  { rotulo: 'Fantasia', categoria: 'Fantasia' },
  { rotulo: 'Romance', categoria: 'Romance' },
  { rotulo: 'Fábula', categoria: 'Fábula' }
];

export default function ListaPosts({ navigation }) {

  const [categoria, setCategoria] = useState(null);
  const livrosFiltrados = categoria
    ? LIVROS.filter((livro) => livro.categoria === categoria)
    : LIVROS;

  function abrirDetalhes(livro) {
    navigation.navigate('DetalhesPost', { livro });
  }

  return (
    <View style={styles.container}>

      <View style={styles.filtros}>
        {FILTROS.map((filtro) => (
          <TouchableOpacity
            key={filtro.rotulo}
            style={[
              styles.chip,
              categoria === filtro.categoria && styles.chipAtivo
            ]}
            onPress={() => setCategoria(filtro.categoria)}
          >
            <Text
              style={
                categoria === filtro.categoria
                  ? styles.chipTextoAtivo
                  : styles.chipTexto
              }
            >
              {filtro.rotulo}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={livrosFiltrados}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <CardPost
            post={item}
            aoPressionar={abrirDetalhes}
          />
        )}
        contentContainerStyle={styles.lista}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F5FA'
  },
  filtros: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 12,
    gap: 8
  },
  chip: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    backgroundColor: '#FFFFFF'
  },
  chipAtivo: {
    backgroundColor: '#7052B5'
  },
  chipTexto: {
    color: '#29243A'
  },
  chipTextoAtivo: {
    color: '#fff',
    fontWeight: 'bold'
  },
  lista: {
    paddingBottom: 16
  }
});
