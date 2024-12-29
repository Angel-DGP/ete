import { Icon } from "@rneui/base";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const SettingTab = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{
          alignItems: "flex-start",
          paddingVertical: 20,
          paddingHorizontal: 20,
          backgroundColor: "white",
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
        {/* Contenedor para alinear el botón al final de la pantalla */}
        <View style={styles.containerButton}>
          <TouchableHighlight
            onPress={() => {
              navigation.navigate("SesionNav");
            }}
            style={styles.touchableHighlight}
            underlayColor="rgba(0, 0, 0, 0.1)"
          >
            <View style={styles.rowContainer}>
              <Icon
                name="logout"
                color="#248bda"
                type="materialicons"
                style={styles.icon}
              />
              <Text style={styles.h2}>Cerrar Sesión</Text>
            </View>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1
  },
  h1: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
    paddingVertical: 10,
  },
  p: {
    paddingTop: 10,
    fontSize: 20,
    color: "black",
  },
  h2: {
    fontSize: 25,
    color: "black",
    fontWeight: "bold",
    paddingVertical: 5,
    textAlign: "left", // Alinea el texto a la izquierda
  },
  h3: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    paddingVertical: 2,
  },
  button: {},
  // Contenedor para el botón
  containerButton: {
    flex: 3,
    justifyContent: "center",
    alignItems: "stretch", // Hace que el botón ocupe todo el ancho disponible
    borderRadius: 18
  },
  touchableHighlight: {
    flex: 1,  
    justifyContent: 'center',  
    alignItems: 'flex-start',  
    backgroundColor: 'transparent',
    padding: 10, // Espaciado interno opcional
    borderRadius: 18
  },
  // Estilo para el contenedor del ícono y texto
  rowContainer: {
    flexDirection: 'row',  // Coloca el ícono y el texto en línea
    alignItems: 'center',  // Centra verticalmente ambos elementos
    justifyContent: 'flex-start'
  },
  // Estilo del texto
  h2: {
    fontSize: 25,
    color: "black",
    fontWeight: "bold",
    paddingLeft: 10, // Espacio entre el ícono y el texto
  },
  // Estilo del ícono (puede ser opcional)
  icon: {
    paddingRight: 10, // Si necesitas algún espaciado adicional
  },
});
