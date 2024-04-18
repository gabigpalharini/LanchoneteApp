import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, YellowBox, Linking } from "react-native";


interface Produtos {
    id: string;
    nome: string;
    preco: string;
    ingredientes: string;
    //  imagem: any;

}

const Carrinho = () => {
    const [dados, setDados] = useState<Produtos[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://10.137.11.228:8000/api/produtos');
                console.log('Dados recebidos da API:', response.data);
                setDados(response.data);
            } catch (error) {
                console.error('Erro ao buscar os dados:', error);
                setError("Ocorreu um erro ao buscar os dados");
            }
        };

        fetchData();
    }, []);

    const renderItem = ({ item }: { item: Produtos }) => (
        <View style={styles.item}>
            <Text style={styles.nomeText}>{item.nome}</Text>
            <Text> ----------------------------------------------------------------------------- </Text>
            <Text style={styles.preçoText}>{item.preco}</Text>

            <Text>{item.ingredientes}  </Text>
            <View style={styles.imgAlign}>
                {/*<Image source={{uri:item.imagem}}style={styles.image}/>*/}
            </View>
        </View>
    );
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#FF8800" barStyle='light-content' />
            <View style={styles.header}>
                <Image source={require('../assets/image/logotipo.png')} style={styles.logotipo} />

            </View>

            <ScrollView>

               

                
                {/*<Text style={styles.Texto5}>Porções</Text>
                <FlatList
                showsVerticalScrollIndicator={false}
                    data={dados3}
                    renderItem={renderacompanhamentos}
                    keyExtractor={(item) => item.id}
                />
                <Text style={styles.Texto5}>Bebidas</Text>
                <FlatList
                showsVerticalScrollIndicator={false}
                    data={dados2}
                    renderItem={renderBebidas}
                    keyExtractor={(item) => item.id}
    />*/}

            </ScrollView>
            <View style={styles.footer}>
                <TouchableOpacity>
                    <Image source={require('../assets/image/home.png')} style={styles.footerIcon} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        source={require('../assets/image/menu.png')} style={styles.footerIcon} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        source={require('../assets/image/profile.png')} style={styles.footerIcon} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.zap} >
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
    alinhamentopesquisa: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        width: '90%'
    },
    container: {
        flex: 1,
        backgroundColor: '#ffc15e'
    },
    nomeText: {
        fontWeight: 'bold',
        fontSize: 30
    },
    preçoText: {
        fontWeight: 'bold',
        fontSize: 20
    },
    lupa: {
        width: 30,
        height: 30,
        marginLeft: 20,
        marginTop: 10
    },
    input: {
        backgroundColor: 'orange',
        height: 45,
        width: '90%',

        marginBottom: 20,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'black'
    },
    item: {
        backgroundColor: '#FFAA00',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 2
    },
    header: {
        backgroundColor: '#FF9500',
        alignItems: 'center',
        paddingVertical: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,


    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },

    footer: {
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
    image: {
        width: 80,
        height: 80,
    },
    logotipo: {
        width: 180,
        height: 100
    },
    imgAlign: {
        flexDirection: 'row',
        alignSelf: 'flex-end'
    },
    adicionar: {
        fontFamily: 'arial',
        marginTop: -200,
        marginLeft: 240,
        fontSize: 15,
        fontWeight: 'bold'
    },
    Texto5: {
        fontWeight: 'bold',
        fontSize: 35,
        paddingHorizontal: 125
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

export default Carrinho;