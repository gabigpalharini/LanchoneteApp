import React, { useState } from "react";
import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import axios from "axios";

const CadastroCliente: React.FC = () => {
    const [cliente, setCliente] = useState<Cliente[]>([]);
    const [nome, setNome] = useState<string>('');
    const [telefone, setTelefone] = useState<string>('');
    const [endereco, setEndereco] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [foto, setFoto] = useState<any>('');

    const CadastrarCliente = async () => {
        try{
         const formData = new FormData();
         formData.append('nome', nome);
         formData.append('telefone', telefone);
         formData.append('endereco', endereco);
         formData.append('email', email);
         formData.append('password', password);
         formData.append('foto', {
            uri: foto,
            type: 'foto/jpeg',
            name: new Date() + '.jpg'
         });
    
         const response = await axios.post('http://10.137.11.228:8000/api/cliente', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
         })
        }catch(error) {
          console.log(error)
        }
    }

    const abrirCamera = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };
    }

    launchCamera(options, response => {
        if(response.didCancel){
            console.log('cancelado pelo usuario');
          } else if(response.error){
              console.log('erro ao abrir a camera');
          }else {
              let imageUri = response.uri || response.assets?.[0]?.uri;
              setFoto(imageUri);
              console.log(imageUri);
          }
      });

      const selecionarFoto = () => {
        const options = {
                mediaType: 'photo',
                includeBase64: false,
                maxHeight: 2000,
                maxWidth: 2000,
        };
        launchImageLibrary(options, response => {
            if(response.didCancel){
                console.log('cancelado pelo usuario');
              } else if(response.error){
                  console.log('erro ao abrir a camera');
              }else {
                  let imageUri = response.uri || response.assets?.[0]?.uri;
                  setFoto(imageUri);
                  console.log(imageUri);
              }
          });
      }

      return (
        <View style={styles.container}>
            <StatusBar backgroundColor="red" barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.headerText}>Rini burguer's</Text>

            </View>
            <View style={styles.form}>
                <TextInput style={styles.input} placeholder="Nome do Cliente" value={nome} onChangeText={setNome} />
                <TextInput style={styles.input} placeholder="telefone" value={telefone} onChangeText={setTelefone} />
                <TextInput style={styles.input} placeholder="endereco" value={endereco} onChangeText={setEndereco} multiline />
                <TextInput style={styles.input} placeholder="email" value={email} onChangeText={setEmail} />
                <TextInput style={styles.input} placeholder="password" value={password} onChangeText={setPassword} />
                
                
                <View style={styles.alinhamentoImagemSelecionada}>
                    {foto ? <Image source={{ uri: foto }} style={styles.imagemSelecionada} /> : null}
                </View> 
                <TouchableOpacity style={styles.imageButton} onPress={selecionarFoto}>
                    <Text style={styles.imageButtonText}>Selecionar Imagem</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.imageButton} onPress={abrirCamera}>
                    <Text style={styles.imageButtonText}>Tirar Foto</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={CadastrarCliente}>
                    <Text style={styles.buttonText}>Cadastrar cliente</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        backgroundColor: 'red',
        paddingVertical: 10,
        alignItems: 'center'
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    form: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        marginBottom: 10
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    imageButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10
    },
    imageButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    imagemSelecionada: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 5,
        marginBottom: 10,
    },
    alinhamentoImagemSelecionada: {
        alignItems: 'center'
    }, button: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    }
});

export default CadastroCliente;