import React from "react";
import { FlatList, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, YellowBox } from "react-native";

interface CardapioItem {
    id: string;
    nome: string;
    preço: string;
    ingredientes: string;
    image: any,
}
const dados: CardapioItem[] = [
    { id: "1", nome: "X-burguer", preço: "R$17,00", ingredientes: "pão, hamburguer, mussarela e presunto", image: require('./assets/image/xburguer.png')},
    { id: "2", nome: "X-calabresa", preço: "R$22,00", ingredientes: "pão, hamburguer, mussarela, presunto e calabresa", image:require('./assets/image/xcalabresa.png') },
    { id: "3", nome: "X-ovo", preço: "R$17,00", ingredientes: "pão, hamburguer, mussarela, presunto e ovo", image: require('./assets/image/xovo.png') },
    { id: "4", nome: "X-bacon", preço: "R$26,00", ingredientes: "pão, hamburguer, mussarela,  presunto e bacon", image:require('./assets/image/xbacon.png') },
    { id: "5", nome: "X-frango", preço: "R$25,00", ingredientes: "pão, frango empanado, mussarela e presunto", image: require('./assets/image/xfrango.png') },
    { id: "6", nome: "X-salada", preço: "R$20,00", ingredientes: "pão, frango empanado, mussarela, presunto, alface, tomate, cebola roxa e maionese ", image: require('./assets/image/xsalada.png') },
    { id: "7", nome: "X-milho", preço: "R$17,00", ingredientes: "pão, hamburguer, mussarela, presunto e creme de milho", image: require('./assets/image/xmilho.png') },
    { id: "8", nome: "X-tudo", preço: "R$30,00", ingredientes: "pão, hamburguer, mussarela, presunto, salada, bacon,calabresa e batata palha", image: require('./assets/image/xtudo.png') },
    { id: "9", nome: "Batata-frita", preço: "R$18,00", ingredientes: "batata frita", image: require('./assets/image/batata.png') },
    { id: "10", nome: "Batata-frita com cheddar e bacon", preço: "R$27,00", ingredientes: "batata-frita com fatias de bacon e cheddar cremoso", image: require('./assets/image/batatachedarebacon.png') },
    { id: "11", nome: "Nuggets", preço: "R$17,00", ingredientes: "pedaços de frango frito", image:  require('./assets/image/nuggets.png') },
    { id: "12", nome: "Tirinhas de frango", preço: "R$25,00", ingredientes: "frango empanado com acompanhamento de molhos", image:  require('./assets/image/frangoempanado.png')  },
    { id: "13", nome: "Cebola frita", preço: "R$15,00", ingredientes: "cebolas fritas em rodelas", image:  require('./assets/image/cebolafrita.png') },
    { id: "14", nome: "Milkshake de chocolate", preço: "R$10,00", ingredientes: "leite,sorvete de chocolate e calda de chocolate ", image:  require('./assets/image/milkshakechoco.png') },
    { id: "15", nome: "Milkshake de morango", preço: "R$13,00", ingredientes: "leite,sorvete de morango, calda de morango e a fruta ", image:  require('./assets/image/milkshakemorango.png') },
   
];

const renderItem = ({ item }: { item: CardapioItem }) => (
    <TouchableOpacity style={styles.item}>
        <Text style={styles.nomeText}>{item.nome}</Text>
        <Text> ----------------------------------------------------------------------------- </Text>
        <Text style={styles.preçoText}>{item.preço}</Text>
       
        <Text>{item.ingredientes}</Text>    
        <View style={styles.imgAlign}>  
        <Image source={item.image} style={styles.image}/>
        </View>
    
</TouchableOpacity>
)
function Cardapio(): React.JSX.Element {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#FF8800" barStyle='light-content' />
                <View style={styles.header}>
                <Image source={require('./assets/image/logotipo.png')} style={styles.logotipo} />

                </View>
                <View style={styles.alinhamentopesquisa} > 
                <Image source={require('./assets/image/lupa.png')} style={styles.lupa} />

                <TextInput
                style={styles.input}
                placeholder="Pesquisar"
                placeholderTextColor={'black'}/> 
        
        </View>

                <FlatList
                showsVerticalScrollIndicator={false}
                    data={dados}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />

        <View style={styles.footer}>
            <TouchableOpacity>
                <Image source={require('./assets/image/home.png')} style={styles.footerIcon} />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image 
                source={require('./assets/image/menu.png')} style={styles.footerIcon}  />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image 
                source={require('./assets/image/profile.png')} style={styles.footerIcon}  /> 
            </TouchableOpacity>

            <TouchableOpacity>
                <Image 
                source={require('./assets/image/pedido.png')} style={styles.footerIcon} />
            </TouchableOpacity>

        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    alinhamentopesquisa:{

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
    preçoText:{
        fontWeight: 'bold',
        fontSize: 20
    },
    lupa:{
      width: 30,
      height: 30,
      marginLeft: 20,
      marginTop: 10
    },
    input:{
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
        paddingVertical: 20

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
    width:80,
    height: 80,
    },
    logotipo: {
        width: 180,
        height: 80
    },
    imgAlign:{
        flexDirection: 'row',
        alignSelf: 'flex-end'
    }
    
});

export default Cardapio;