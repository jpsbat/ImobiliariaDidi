import { Image, View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { fotos } from '../Fotos'

export default function Aluguel({ navigation }) {
  const data = [
    {
      key: 'centro',
      nome: 'Centro',
      codigo: 'BC054 Centro',
      descricao: 'Sala comercial',
      preco: 'R$850,00',
      conteudo: 'Sala comercial com banheiro.',
      imagem: fotos.centro,
      foto1: fotos.c1,
      foto2: fotos.c2,
      foto3: fotos.c3,
      foto4: fotos.c4
    },
    {
      key: 'saomatheus',
      nome: 'São Matheus',
      codigo: 'CA312 Condomínio São Matheus',
      descricao: 'Casa em Condomínio',
      preco: 'R$2.000,00',
      conteudo: 'Excelente casa com 2 quartos, sala, banheiro, cozinha com moveis planejados,  vaga de garagem, área de lazer e playground.',
      imagem: fotos.saomatheus,
      foto1: fotos.sm1,
      foto2: fotos.sm2,
      foto3: fotos.sm3,
      foto4: fotos.sm4
    },
    {
      key: 'jdbelavista',
      nome: 'Jd Bela Vista',
      codigo: 'CA178 Jardim Bela Vista',
      descricao: 'Casa mobiliada',
      preco: 'R$3.000,00',
      conteudo: 'Casa com 3 dormitórios sendo 1 suíte, sala de estar e jantar, copa e cozinha, área de serviço, home office, churrasqueira, jardim e varanda.',
      imagem: fotos.jdbelavista,
      foto1: fotos.jbv1,
      foto2: fotos.jbv2,
      foto3: fotos.jbv3,
      foto4: fotos.jbv4
    },
    {
      key: 'condmoncoes',
      nome: 'Cond Monções',
      codigo: 'CA204 Condominio Monções',
      descricao: 'Casa em Condomínio',
      preco: 'R$4.000,00',
      conteudo: 'Casa com 3 dormitórios sendo 1 suíte​, banheiro social, sala, cozinha planejada, área gourmet e 2 vagas na garagem.',
      imagem: fotos.condmoncoes,
      foto1: fotos.cm1,
      foto2: fotos.cm2,
      foto3: fotos.cm3,
      foto4: fotos.cm4
    },
    {
      key: 'bandeirantes',
      nome: 'Portal Bandeirantes',
      codigo: 'CA210 Portal Bandeirantes',
      descricao: 'Casa em Condomínio',
      preco: 'R$5.000,00',
      conteudo: 'Casa com 3 dormitórios com 1 suíte com closet, sala de estar e jantar, cozinha americana, área gourmet com churrasqueira, hidromassagem, aquecedor, piscina e pomar. Condomínio fechado.',
      imagem: fotos.bandeirantes,
      foto1: fotos.bd1,
      foto2: fotos.bd2,
      foto3: fotos.bd3,
      foto4: fotos.bd4
    }
  ];

  return (
    <View style={estilos.fundo}>
      <View style={estilos.logoContainer}>
        <Image style={estilos.logo} source={require("../../../assets/Logo.png")} />
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Informações', item)}>
            <View style={estilos.itemContainer}>
              <Image style={estilos.imagem} source={item.imagem} />
              <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                <Text style={estilos.nome}>{item.nome}</Text>
                <Text style={estilos.descricao}>Clique para maiores informações</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 2,
    paddingEnd: 16,
    borderRadius: 5,
    borderColor: 'white',
    margin: 6,
  },
  imagem: {
    width: 135,
    height: 110,
  },
  nome: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginLeft: 20
  },
  descricao: {
    fontSize: 12,
    lineHeight: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "white",
    marginLeft: 20
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 222,
    height: 97,
    marginTop: 70,
  },
  fundo: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    backgroundColor: '#1C1C1C'
  },
});