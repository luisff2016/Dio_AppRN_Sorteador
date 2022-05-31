import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';

const App = () => {
  const [maximo, onChangeMaximo] = useState(null);
  const [numero, setNumero] = useState(maximo);

  function handleNumero() {
    console.log(maximo);
    const novo_numero = Math.floor(Math.random() * maximo) + 1; //para incluir o numero maximo no sorteio
    setNumero(novo_numero);
  }

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.textoMaximo}>Número Máximo</Text>
      <TouchableOpacity onPress={handleNumero} style={style.input}>
        <TextInput
          style={style.textoInput}
          onChangeText={onChangeMaximo}
          value={maximo}
          placeholder="Digite um  número."
          keyboardType="numeric"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleNumero} style={style.botao}>
        <Text style={style.texto}>Sortear Agora!</Text>
      </TouchableOpacity>
      <Text style={style.numero}>{numero}</Text>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numero: {
    fontSize: 60,
    fontWeight: 'bold',
    color: 'white',
  },
  botao: {
    backgroundColor: '#909090',
    width: '80%',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    backgroundColor: '#909090',
    width: '60%',
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  texto: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    justifyContent: 'center',
    textAlign: 'center',
  },
  textoInput: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
  },
  textoMaximo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    justifyContent: 'center',
  },
});

export default App;
