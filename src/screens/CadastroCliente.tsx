import React, { useState } from "react";
import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, Linking } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import axios from "axios";

function zap(){
    Linking.openURL('https://github.com/gabigpalharini/Tog_Burger');
  }

const CadastroCliente: React.FC = () => {
    const [cliente, setCliente] = useState<Cliente[]>([]);
    const [nome, setNome] = useState<string>('');
    const [telefone, setTelefone] = useState<string>('');
    const [cpf, setCpf] = useState<string>('');
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
         formData.append('cpf', cpf);
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
    }
      const selecionarFoto = () => {
        const options = {
                mediaType: 'photo',
                includeBase64: false,
                maxHeight: 2000,
                maxWidth: 2000,
        };
        launchImageLibrary(options,(response) => {
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
            <StatusBar backgroundColor="#FF8800" barStyle="light-content" />
            <View style={styles.header}>
           
                <Image source={require('../assets/image/logotipo.png')} style={styles.logotipo} />

                </View>
                <View style={styles.alinhamentoImagemSelecionada}>
                    {foto ? <Image source={{ uri: foto }} style={styles.imagemSelecionada} /> : null}
                </View> 
            <ScrollView>
            <View style={styles.form}>
                <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={setNome} />
                <TextInput style={styles.input} placeholder="Telefone" value={telefone} onChangeText={setTelefone} />
                <TextInput style={styles.input} placeholder="Cpf" value={cpf} onChangeText={setCpf} />
                <TextInput style={styles.input} placeholder="Endereco" value={endereco} onChangeText={setEndereco}/>
                <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
                <TextInput style={styles.input} placeholder="Senha" value={password} onChangeText={setPassword} />
                
                
               
                <TouchableOpacity style={styles.imageButton} onPress={selecionarFoto}>
                    <Text style={styles.imageButtonText}>Selecionar Imagem</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.imageButton} onPress={abrirCamera}>
                    <Text style={styles.imageButtonText}>Tirar Foto</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={CadastrarCliente}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
            <View style={styles.footer}>
            <TouchableOpacity>
                <Image source={require('../assets/image/home.png')} style={styles.footerIcon} />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image 
                source={require('../assets/image/menu.png')} style={styles.footerIcon}  />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image 
                source={require('../assets/image/profile.png')} style={styles.footerIcon}  /> 
            </TouchableOpacity>

            <TouchableOpacity style={styles.zap} onPress={zap} >
                <Image 
                source={require('../assets/image/whats.png')} style={styles.footerIcon} />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image 
                source={require('../assets/image/pedido.png')} style={styles.footerIcon} />
            </TouchableOpacity>

         
        </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffc15e'
    },
    header: {
        backgroundColor: '#FF9500',
        paddingVertical: 10,
        alignItems: 'center'
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    form: {
        marginTop:100,
        padding: 10,
        backgroundColor: '#FFAA00',
        marginBottom: 10,
        borderRadius: 35,
        borderWidth: 1,
    },
    input: {
        fontSize:15,
        height: 40,
        borderColor: 'black',
        borderBottomWidth:1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10

        
    },
    imageButton: {
        backgroundColor: '#FF9500',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 0.5,
    
    },
    imageButtonText: {
        color: 'black',
        fontWeight: 'bold',
    },
    imagemSelecionada: {
        width: 200,
        height: 200,
        borderWidth:2,
        borderColor: 'black',
        resizeMode: 'cover',
        borderRadius: 1000,
        marginBottom: 10,
    },
    alinhamentoImagemSelecionada: {
        alignItems: 'center',
        marginBottom:-100
    }, 
    button: {
        backgroundColor: '#FF9500',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 0.5,
        
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
    },
    logotipo: {
        width: 180,
        height: 100
    }, footer: {
        borderTopWidth: 0.2,
        backgroundColor: '#FF9500',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10
    },
    footerIcon: {
        width: 30,
        height: 30
    },
    zap: {
        position: 'absolute',
        width: 40,
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
      }, 
});

export default CadastroCliente;