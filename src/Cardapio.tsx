import React from "react";
import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View, YellowBox } from "react-native";

interface CardapioItem {
    id: string;
    nome: string;
    preço: string;
    ingredientes: string;
    image: any,
}
const dados: CardapioItem[] = [
    { id: "1", nome: "X-burguer", preço: "R$17,00", ingredientes: "pão, hamburguer, mussarela e presunto", image: require('./assets/image/hamburguer.png')},
    { id: "2", nome: "X-calabresa", preço: "R$17,00", ingredientes: "pão, hamburguer, mussarela, presunto e calabresa", image:require('./assets/image/hamburguer.png') },
    { id: "3", nome: "X-ovo", preço: "R$17,00", ingredientes: "pão, hamburguer, mussarela, presunto e ovo", image: require('./assets/image/hamburguer.png') },
    { id: "4", nome: "X-bacon", preço: "R$17,00", ingredientes: "pão, hamburguer, mussarela,  presunto e bacon", image:require('./assets/image/hamburguer.png') },
    { id: "5", nome: "X-frango", preço: "R$17,00", ingredientes: "pão, filé de frango, mussarela e presunto", image: require('./assets/image/hamburguer.png') },
    { id: "6", nome: "X-salada", preço: "R$17,00", ingredientes: "pão, filé de frango, mussarela, presunto, alface e tomate", image: require('./assets/image/hamburguer.png') },
    { id: "7", nome: "X-milho", preço: "R$17,00", ingredientes: "pão, hamburguer, mussarela, presunto e milho", image: require('./assets/image/hamburguer.png') },
    { id: "8", nome: "X-tudo", preço: "R$17,00", ingredientes: "pão, hamburguer, mussarela, presunto, salcicha, bacaon,calabresa e batata palha", image: require('./assets/image/hamburguer.png') },
    { id: "9", nome: "batata-frita", preço: "R$17,00", ingredientes: "batata frita", image: require('./assets/image/batata.png') },
    { id: "10", nome: "batata-frita com bacon e cheddar", preço: "R$17,00", ingredientes: "batata-frita com fatias de bacon e cheddar cremoso", image: require('./assets/image/batata.png') },
    { id: "11", nome: "nuggets", preço: "R$17,00", ingredientes: "pedaços de frango frito", image:  require('./assets/image/batata.png') },
    { id: "12", nome: "tirinhas de frango", preço: "R$25,00", ingredientes: "frango frito com acompanhamento de molhos", image:  require('./assets/image/batata.png')  },
    { id: "13", nome: "cebola frita", preço: "R$17,00", ingredientes: "cebolas fritas em rodelas", image:  require('./assets/image/batata.png') },
    { id: "14", nome: "milkshake de chocolate", preço: "10,00", ingredientes: "leite,sorvete de chocolate e calda de chocolate ", image:  require('./assets/image/milkshake.png') },
    { id: "15", nome: "milkshake de morango", preço: "13,00", ingredientes: "leite,sorvete de morango, calda de morango e a fruta ", image:  require('./assets/image/milkshake.png') },
   
];

const renderItem = ({ item }: { item: CardapioItem }) => (
    <TouchableOpacity style={styles.item}>
        <Text>{item.nome}</Text>
        <Text>{item.preço}</Text>
        <Text>{item.ingredientes}</Text>
      <TouchableOpacity>
        <Image source={item.image} style={styles.image}/>
    </TouchableOpacity>
</TouchableOpacity>
)
function Cardapio(): React.JSX.Element {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#FF8800" barStyle='light-content' />
                <View style={styles.header}>
                    <Text style={styles.headerText}> Rini Burguer's</Text>

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
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#FFAA00',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
    },
    header: {
        backgroundColor: '#FF9500',
        alignItems: 'center',
        paddingVertical: 50

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
    marginBottom: 20,
    marginTop: 65,
    marginLeft: 250
    }
    
});

export default Cardapio;