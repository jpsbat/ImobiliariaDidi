import { Image, View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { fotos } from '../Fotos'

export default function Compra({ navigation }) {
  const data = [
    {
      key: 'montroyal',
      nome: 'Mont Royal',
      codigo: 'AP064 Mont Royal',
      descricao: 'Apartamento',
      preco: 'R$135.000,00',
      conteudo: '40m², 1 dormitório, banheiro social, sala, cozinha e 1 vaga na garagem. Condomínio fechado com lazer e portaria.',
      imagem: fotos.montroyal,
      foto1: fotos.mr1,
      foto2: fotos.mr2,
      foto3: fotos.mr3,
      foto4: fotos.mr4
    },
    {
      key: 'altosavecuia',
      nome: 'Altos do Avecuia',
      codigo: 'AP021 Altos do Avecuia',
      descricao: 'Apartamento na planta',
      preco: 'R$169.990,00',
      conteudo: '2 dormitórios, banheiro social, sala, cozinha, área de serviço, varanda, piscina, quiosques, quadra esportiva, portaria, salão de festas e academia.',
      imagem: fotos.altosavecuia,
      foto1: fotos.aa1,
      foto2: fotos.aa2,
      foto3: fotos.aa3,
      foto4: fotos.aa4
    },
    {
      key: 'villageamerica',
      nome: 'Village América',
      codigo: 'CA176 Village America',
      descricao: 'Casa em Condomínio',
      preco: 'R$295.000,00',
      conteudo: 'Sobrado com 2 dormitórios, cozinha planejada, sala, 2 banheiros, quintal, ar condicionado e garagem para 2 carros. Condomínio fechado.',
      imagem: fotos.villageamerica,
      foto1: fotos.va1,
      foto2: fotos.va2,
      foto3: fotos.va3,
      foto4: fotos.va4
    },
    {
      key: 'jardimexcelsior',
      nome: 'Jardim Excelsior',
      codigo: 'CA166 Jardim Excelsior',
      descricao: 'Sobrado',
      preco: 'R$320.000,00',
      conteudo: 'Sobrado com 3 dormitórios, 2 banheiros, sala, cozinha, varanda, garagem e piscina',
      imagem: fotos.jardimexcelsior,
      foto1: fotos.je1,
      foto2: fotos.je2,
      foto3: fotos.je3,
      foto4: fotos.je4
    },
    {
      key: 'rayara',
      nome: 'Residencial Rayara',
      codigo: 'AP030 Residencial Rayara',
      descricao: 'Apartamento',
      preco: 'R$180.000,00',
      conteudo: 'Apartamento com 2 dormitórios, banheiro social, sala, cozinha, área de serviço, varanda e 1 vaga na garagem. Condomínio fechado',
      imagem: fotos.rayara,
      foto1: fotos.r1,
      foto2: fotos.r2,
      foto3: fotos.r3,
      foto4: fotos.r4
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
    margin: 6
  },
  imagem: {
    width: 135,
    height: 110
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
    marginBottom: 20
  },
  logo: {
    width: 222,
    height: 97,
    marginTop: 70
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