import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const baseURL = 'https://api.otaviolube.com';

const MAX_WIDTH = Dimensions.get('window').width*0.9;
const MAX_HEIGHT = Dimensions.get('window').height*0.7;

export default function CardFilme({ filme }){
    return (
        <View style={styles.container}>
            <Image style = {styles.image} source={{uri: baseURL + filme.poster.data.attributes.formats.thumbnail.url}}/>
            <Text style={styles.titulo}>{filme.titulo}</Text>
            <Text style={styles.sinopse}>{filme.sinopse}</Text>
            <TouchableOpacity style = {styles.button}>
                <Text style = {styles.btnText}>Comprar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        backgroundColor: "#f9f9f9",
        borderRadius: 10,
        padding: 16,
        marginBottom: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 4,
        alignItems: 'center',
        justifyContent: 'center',
        height: MAX_HEIGHT,
        width: MAX_WIDTH
    },

    image: {
        width: "150px",
        height: "200px",
        resizeMode: "cover",
        marginBottom: 16,
    },

    titulo: {
        fontWeight: "bold",
        fontSize: 24,
        marginBottom: 8,
        color: "#444",
    },

    sinopse: {
        fontSize: 16,
        marginBottom: 8,
        color: "#666",
    },

    button: {
        backgroundColor: "#2e7d32",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        alignSelf: "flex-start",
    },

    btnText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
});
