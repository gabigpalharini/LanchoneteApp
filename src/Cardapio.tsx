import React from "react";
import { FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, YellowBox, Linking } from "react-native";

interface CardapioItem {
    id: string;
    nome: string;
    preço: string;
    ingredientes: string;
    image: any,
    adicionar:string,
}

function zap(){
    Linking.openURL('https://github.com/gp0987gp/Pog_Burger');
  }
 
const dados: CardapioItem[] = [
    { id: "1", nome: "X-burguer", preço: "R$17,00", ingredientes: "pão, hamburguer, mussarela e presunto", image: require('./assets/image/xburguer.png'),adicionar:"adicionar +"},
    { id: "2", nome: "X-calabresa", preço: "R$22,00", ingredientes: "pão, hamburguer, mussarela, presunto e calabresa", image:require('./assets/image/xcalabresa.png'),adicionar:"adicionar +" },
    { id: "3", nome: "X-ovo", preço: "R$17,00", ingredientes: "pão, hamburguer, mussarela, presunto e ovo", image: require('./assets/image/xovo.png') ,adicionar:"adicionar +"},
    { id: "4", nome: "X-bacon", preço: "R$26,00", ingredientes: "pão, hamburguer, mussarela,  presunto e bacon", image:require('./assets/image/xbacon.png'),adicionar:"adicionar +" },
    { id: "5", nome: "X-frango", preço: "R$25,00", ingredientes: "pão, frango empanado, mussarela e presunto", image: require('./assets/image/xfrango.png'),adicionar:"adicionar +" },
    { id: "6", nome: "X-salada", preço: "R$20,00", ingredientes: "pão, frango empanado, mussarela, presunto, alface, tomate, cebola roxa e maionese ", image: require('./assets/image/xsalada.png'),adicionar:"adicionar +" },
    { id: "7", nome: "X-milho", preço: "R$17,00", ingredientes: "pão, hamburguer, mussarela, presunto e creme de milho", image: require('./assets/image/xmilho.png') ,adicionar:"adicionar +"},
    { id: "8", nome: "X-tudo", preço: "R$30,00", ingredientes: "pão, hamburguer, mussarela, presunto, salada, bacon,calabresa e batata palha", image: require('./assets/image/xtudo.png') ,adicionar:"adicionar +"},
    
   
   
   
   
];
interface acompanhamentos {
    id: string;
    nome: string;
    preço: string;
    ingredientes: string;
    image: any,
    adicionar:string,
}



const dados3: acompanhamentos[] = [
    { id: "9", nome: "Batata-frita", preço: "R$18,00", ingredientes: "batata frita", image: require('./assets/image/batata.png'),adicionar:"adicionar +" 
    },
    { id: "10", nome: "Batata-frita com cheddar e bacon", preço: "R$27,00", ingredientes: "batata-frita com fatias de bacon e cheddar cremoso", image: require('./assets/image/batatachedarebacon.png') ,adicionar:"adicionar +" 
    },
    { id: "11", nome: "Nuggets", preço: "R$17,00", ingredientes: "pedaços de frango frito", image:  require('./assets/image/nuggets.png') ,adicionar:"adicionar +"
    },
    { id: "12", nome: "Tiras de frango", preço: "R$25,00", ingredientes: "frango empanado com acompanhamento de molhos", image:  require('./assets/image/frangoempanado.png')  ,adicionar:"adicionar +"
    },
    { id: "13", nome: "Cebola frita", preço: "R$15,00", ingredientes: "cebolas fritas em rodelas", image:  require('./assets/image/cebolafrita.png'), adicionar:"adicionar+" 
    },
]

const renderacompanhamentos = ({ item }: { item: acompanhamentos }) => (
    <View style={styles.item}>
        <Text style={styles.nomeText}>{item.nome}</Text>
        <Text> ----------------------------------------------------------------------------- </Text>
        <Text style={styles.preçoText}>{item.preço}</Text>
        <Text>{item.ingredientes}</Text>   
        <View style={styles.imgAlign}>  
        <Image source={item.image} style={styles.image}/>
        </View>
    <TouchableOpacity><Text style={styles.adicionar}>{item.adicionar}</Text></TouchableOpacity>
</View>
)

interface Bebidas {
    id: string;
    nome: string;
    preço: string;
    ingredientes: string;
    image: any,
    adicionar:string,
}

const dados2: Bebidas[] = [
    {
    id: "1", nome: "Milkshake de chocolate", preço: "R$10,00", ingredientes: "leite,sorvete de chocolate e calda de chocolate ", image:  require('./assets/image/milkshakechoco.png') ,adicionar:"adicionar +"
    },
    {
    id: "2", nome: "Milkshake de morango", preço: "R$13,00", ingredientes: "leite,sorvete de morango e calda de morango", image:  require('./assets/image/milkshakemorango.png') ,adicionar:"adicionar +"
    },
    {
        id: "3", nome: "Refrigerante", preço: "R$8,00", ingredientes: "Coca-cola, Guaraná e Pepsi ", image:  require('./assets/image/refri.png') ,adicionar:"adicionar +"
    },
]

const renderItem = ({ item }: { item: CardapioItem }) => (
    <View style={styles.item}>
        <Text style={styles.nomeText}>{item.nome}</Text>
        <Text> ----------------------------------------------------------------------------- </Text>
        <Text style={styles.preçoText}>{item.preço}</Text>
       
        <Text>{item.ingredientes}</Text>    
        <View style={styles.imgAlign}>  
        <Image source={item.image} style={styles.image}/>
        



        </View>
    <TouchableOpacity><Text style={styles.adicionar}>{item.adicionar}</Text></TouchableOpacity>
</View>
)

const renderBebidas = ({ item }: { item: Bebidas }) => (
    <View style={styles.item}>
        <Text style={styles.nomeText}>{item.nome}</Text>
        <Text> ----------------------------------------------------------------------------- </Text>
        <Text style={styles.preçoText}>{item.preço}</Text>
        <Text>{item.ingredientes}</Text>   
        <View style={styles.imgAlign}>  
        <Image source={item.image} style={styles.image}/>
        



        </View>
    <TouchableOpacity><Text style={styles.adicionar}>{item.adicionar}</Text></TouchableOpacity>
</View>
)



function Cardapio(): React.JSX.Element {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#FF8800" barStyle='light-content' />
                <View style={styles.header}>
                <Image source={require('./assets/image/logotipo.png')} style={styles.logotipo} />

                </View>
                
            <ScrollView>
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
                <Text style={styles.Texto5}>Porções</Text>
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
                />
                 
                </ScrollView>
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

            <TouchableOpacity style={styles.zap} onPress={zap}>
                <Image 
                source={require('./assets/image/whats.png')} style={styles.footerIcon} />
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
    width:80,
    height: 80,
    },
    logotipo: {
        width: 180,
        height: 100
    },
    imgAlign:{
        flexDirection: 'row',
        alignSelf: 'flex-end'
    },
    adicionar:{
        fontFamily:'arial',
       marginTop:-200,
       marginLeft:240,
       fontSize:15,
       fontWeight:'bold'
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

export default Cardapio;