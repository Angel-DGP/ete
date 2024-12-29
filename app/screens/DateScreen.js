import { StatusBar } from "expo-status-bar";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getDates } from "../services/appService";
import { Button } from "@rneui/base";
let dates = getDates();
//color blue de ios #248bda
export const DateScreen = ({ navigation }) => {
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
          paddingBottom: 50,
        }}
      >
        <Text style={styles.p}>Agenda tu cita para tu servicio de soporte técnico a tu hogar</Text>
        <Image
          source={require("../../assets/date.png")}
          style={{
            height: 200,
            width: "100%",
            borderRadius: 20,
            paddingBottom: 30
          }}
        />
        
        <Button
          title="Agregar cita"
          buttonStyle={{
            paddingHorizontal: 50,
            borderRadius: 20,
            marginBottom: 10,
          }}
          onPress={() => {
            navigation.navigate("createTab");
          }}
        />
        <View style={styles.containerFather}>
          
          <Text style={styles.h2}>Citas agendadas</Text>
          
          {dates.map((item, index) => (
            <TouchableHighlight
              key={index}
              style={styles.datesContainer}
              underlayColor="#e3eefb" // Color al presionar
              onPress={() => {
                console.log(`Cita seleccionada: ${item.name} ${item.lastname}`);
                navigation.navigate("selectTab",{date: item})
                // Agrega aquí la lógica para manejar la cita seleccionada.
              }}
            >
              <View>
                <Text
                  style={{
                    color: "black",
                    fontSize: 18,
                    fontWeight: "700",
                  }}
                >
                  Fecha: {item.date} {item.time}
                </Text>
                <Text
                  style={{
                    color: "black",
                    fontSize: 16,
                  }}
                >
                  Tecnico: {item.tech}
                </Text>
                <Text
                  style={{
                    color: "black",
                    fontSize: 14,
                  }}
                >
                  Motivo: {item.service} - {item.device}
                </Text>
                <Text
                  style={{
                    color: "black",
                    fontSize: 16,
                  }}
                >
                  Estado: {item.state}
                </Text>
              </View>
            </TouchableHighlight>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
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
    paddingBottom: 20
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
  button: {
    borderWidth: 1,
    borderColor: "black",
  },
  // Contenedor para el botón
  containerButton: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "stretch", // Hace que el botón ocupe todo el ancho disponible
    borderWidth: 1,
    borderColor: "black",
  },
  // Estilo para el TouchableHighlight
  touchableHighlight: {
    flex: 1, // Hace que ocupe toda la altura disponible del contenedor
    justifyContent: "center", // Centra el contenido verticalmente
    alignItems: "flex-start", // Alinea el contenido horizontalmente a la izquierda
    backgroundColor: "transparent", // Fondo transparente
  },
  datesContainer: {
    borderWidth: 1,
    borderColor: "white",
    marginVertical: 10, // Espaciado entre las citas
    padding: 10, // Relleno interno de cada cita
    width: "100%", // Asegura que ocupe todo el ancho del contenedor
    borderRadius: 10, // Bordes redondeados
    backgroundColor: "rgba(96,107,208, 0.10)", // Fondo oscuro para contraste
  },
  containerFather: {
    flex: 1, // Hace que ocupe todo el espacio restante de la pantalla
    width: "100%", // Asegura que ocupe todo el ancho del contenedor padre
    justifyContent: "flex-start", // Alinea las citas al inicio
    alignItems: "stretch", // Asegura que los hijos ocupen todo el ancho
    backgroundColor: "white",
  },
});
