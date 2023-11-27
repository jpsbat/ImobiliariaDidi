import { Image, ScrollView, View, StyleSheet, Linking, Text, TouchableOpacity } from 'react-native';

import ig from '../../../assets/ig.png';
import fb from '../../../assets/fb.png';
import wpp from '../../../assets/wpp.png';

import mapa from '../../../assets/mapa.png';

export default function Contato() {
  
  const email = 'imobiliariadidi@gmail.com';
  const telefone1 = 'tel:(15)996822559';
  const telefone2 = 'tel:(15)996173638';
  const telefone3 = 'tel:(15)32623955';

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={estilos.fundo}>
        <View style={estilos.logoContainer}>
          <Image style={estilos.logo}
            source={require("../../../assets/Logo.png")}
          />
          <Text style={estilos.hyperlink}
            onPress={() => { Linking.openURL('https://www.imobiliariadidi.com'); }}>
            Didi Consultoria e Negócios Imobiliários
          </Text>

          <Text style={estilos.texto}>CRECI/SP 39816-J</Text>

          <Text style={[estilos.texto, { marginTop: 30 }]}>
            Somos a DIDI Consultoria e Negócios Imobiliários, e
            estamos aqui para fornecer o melhor imóvel para a
            realização do seu sonho! Entre em contato conosco!
          </Text>

          <Text style={estilos.contato}>CONTATO</Text>

          <TouchableOpacity onPress={() => { Linking.openURL(`mailto:${email}`) }}>
            <Text style={estilos.texto}>
              {email}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { Linking.openURL(telefone1) }}>
            <Text style={estilos.texto}>
              (15) 99682-2559
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { Linking.openURL(telefone2) }}>
            <Text style={estilos.texto}>
              (15) 99617-3638
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { Linking.openURL(telefone3) }}>
            <Text style={estilos.texto}>
              (15) 3262-3955
            </Text>
          </TouchableOpacity>

          <View style={estilos.iconContainer}>
          <TouchableOpacity
          onPress={() => { Linking.openURL('https://www.instagram.com/imobiliaria.didi/'); }}>
            <Image style={estilos.icon} source={ig}/>
          </TouchableOpacity>
          
          <TouchableOpacity
          onPress={() => { Linking.openURL('https://www.facebook.com/imobiliaria.didi'); }}>
            <Image style={estilos.icon} source={fb}/>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={() => { Linking.openURL('https://wa.me/5515996822559'); }}>
            <Image style={estilos.icon} source={wpp}/>
          </TouchableOpacity>
          </View>

          <Text style={[estilos.texto, { marginTop: 10 }]}>
            Rua João Angelieri, 190 - Centro | Porto Feliz - SP
          </Text>

          <TouchableOpacity
          onPress={() => { Linking.openURL('https://maps.app.goo.gl/gvciVkXt3wyMUYcBA'); }}>
            <Image style={estilos.mapa} source={mapa}/>
          </TouchableOpacity>

        </View>
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
    flex: 1
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
  hyperlink: {
    fontSize: 18,
    color: 'white',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    marginTop: 10
  },
  texto: {
    fontSize: 16,
    lineHeight: 26,
    textAlign: 'center',
    color: 'white',
    marginTop: 10,
    paddingHorizontal: 20
  },
  contato: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginTop: 30,
  },
  icon: {
    width: 32,
    height: 32,
    marginLeft: 20,
    marginRight: 20
  },
  iconContainer: {
    flexDirection: "row",
    paddingVertical: 20
  },
  mapa: {
    width: 242,
    height: 117,
    marginTop: 10
  },
});