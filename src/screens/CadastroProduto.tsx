import React, { useState } from "react";
import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, Linking } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import axios from "axios";


function zap(){
    Linking.openURL('https://github.com/gabigpalharini/Top_Burger');
  }

const CadastroProduto: React.FC = () => {
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [nome, setNome] = useState<string>('');
    const [preco, setPreco] = useState<string>('');
    const [ingredientes, setIngredientes] = useState<string>('');
    const [imagem, setImagem] = useState<any>('');

    const CadastrarProduto = async () => {
        try{
         const formData = new FormData();
         formData.append('nome', nome);
         formData.append('preco', preco);
         formData.append('ingredientes', ingredientes);
         formData.append('imagem', {
            uri: imagem,
            type: 'imagem/jpeg',
            name: new Date() + '.jpg'
         });
    
         const response = await axios.post('http://10.137.11.228:8000/api/produtos', formData, {
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
                setImagem(imageUri);
                console.log(imageUri);
            }
        });
    }

    const selecionarImagem = () => {
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
                  setImagem(imageUri);
                  console.log(imageUri);
              }
          });
      }
    

    return (
        <ScrollView style={{height: '100%' , width: "auto"}}>
        <View style={styles.container}>
            <StatusBar backgroundColor="#FF8800" barStyle="light-content" />
            <View style={styles.header}>
            <Image source={require('../assets/image/logotipo.png')} style={styles.logotipo} />

                </View>
                <View style={styles.alinhamentoImagemSelecionada}>
                    {imagem ? <Image source={{ uri: imagem }} style={styles.imagemSelecionada} /> : null}
                </View> 

            
            <View style={styles.form}>
                <TextInput style={styles.input} placeholder="Nome do Produto" value={nome} onChangeText={setNome} />
                <TextInput style={styles.input} placeholder="Preço" value={preco} onChangeText={setPreco} />
                <TextInput style={styles.input} placeholder="Ingredientes" value={ingredientes} onChangeText={setIngredientes} multiline />

                
                <TouchableOpacity style={styles.imageButton} onPress={selecionarImagem}>
                    <Text style={styles.imageButtonText}>Selecionar Imagem</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.imageButton} onPress={abrirCamera}>
                    <Text style={styles.imageButtonText}>Tirar Foto</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={CadastrarProduto}>
                    <Text style={styles.buttonText}>Cadastrar Produto</Text>
                </TouchableOpacity>
            </View>

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
        </ScrollView>  
   
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
        resizeMode: 'cover',
        borderRadius: 150,
        marginBottom: 28,
        marginTop:28
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
        paddingVertical: 10,
        marginBottom:10
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

export default CadastroProduto;