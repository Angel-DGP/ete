import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const questions = [
  {
    question: "1. Mi computadora no enciende. ¿Qué puedo hacer?",
    answer:
      "Asegúrate de que esté conectada a la corriente y verifica el cable de alimentación. Si sigue sin encender, podría ser un problema de hardware. Solicita soporte técnico.",
    image: require("../../assets/1.jpg"),
  },
  {
    question: "2. ¿Por qué mi computadora está tan lenta?",
    answer:
      "Podría deberse a falta de espacio en disco, demasiados programas abiertos o malware. Realiza una limpieza de archivos y verifica si hay actualizaciones pendientes.",
    image: require("../../assets/2.png"),
  },
  {
    question: "3. Mi computadora se reinicia sola, ¿qué ocurre?",
    answer:
      "Esto podría ser un problema de sobrecalentamiento o un fallo en el sistema operativo. Revisa si los ventiladores funcionan bien. Si el problema persiste, consulta a un técnico.",
    image: require("../../assets/3.jpg"),
  },{
    question: "4. ¿Qué antivirus me recomiendas instalar?",
    answer:
      "Algunos recomendados son Avast, Kaspersky o Bitdefender. Elige uno de acuerdo con tu presupuesto y necesidades.",
    image: require("../../assets/4.jpg"),
  },{
    question: "5. La pantalla está negra, pero la computadora parece encendida. ¿Qué hago?",
    answer:
      "Prueba conectar la computadora a un monitor externo para verificar si es un problema de la pantalla. Si no funciona, busca ayuda técnica.",
    image: require("../../assets/5.jpg"),
  },{
    question: "6. ¿Cómo elimino un virus de mi computadora?",
    answer:
      "Utiliza un antivirus actualizado para realizar un escaneo completo y elimina las amenazas detectadas.",
    image: require("../../assets/6.png"),
  },
  {
    question: "7. Mi teclado o mouse no responde. ¿Qué hago?",
    answer:
      "Comprueba que estén bien conectados. Si son inalámbricos, revisa las baterías. Si no funciona, intenta probarlos en otro dispositivo.",
    image: require("../../assets/7.jpg"),
  },
  {
    question: "8. ¿Qué puedo hacer si mi computadora no detecta el Wi-Fi?",
    answer:
      "Verifica que el Wi-Fi esté activado y que los controladores de red estén actualizados. Si no funciona, podría ser un problema de hardware.",
    image: require("../../assets/8.jpg"),
  },{
    question: "9. ¿Cómo recupero un archivo que eliminé por error?",
    answer:
      "Busca en la papelera de reciclaje. Si no está allí, podrías necesitar un software de recuperación de datos como Recuva.",
    image: require("../../assets/9.jpeg"),
  },{
    question: "10.  ¿Cómo puedo liberar espacio en mi computadora?",
    answer:
      "Elimina archivos innecesarios, desinstala programas que no uses y borra el caché del sistema.",
    image: require("../../assets/10.jpg"),
  },
];
//color blue de ios #248bda
export const QuestionsScreen = ({ navigation }) => {
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
        <Image
          source={require("../../assets/questions.png")}
          style={{
            height: 430,
            width: "100%",
            borderRadius: 110,
            paddingBottom: 30,
          }}
        />
        {questions.map((item, index) => (
          <View key={index} style={styles.questionContainer}>
            <Text style={styles.h2}>{item.question}</Text>
            <Text style={styles.p}>{item.answer}</Text>
            <Image
          source={item.image}
          style={{
            height: 200,
            width: "100%",
            borderRadius: 20,
            paddingBottom: 30,
            paddingVertical: 30
          }}
        />
          </View>
        ))}
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
    borderColor: "white",
  },
  // Contenedor para el botón
  containerButton: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "stretch", // Hace que el botón ocupe todo el ancho disponible
    borderWidth: 1,
    borderColor: "white",
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
    backgroundColor: "white", // Fondo oscuro para contraste
  },
  containerFather: {
    flex: 1, // Hace que ocupe todo el espacio restante de la pantalla
    width: "100%", // Asegura que ocupe todo el ancho del contenedor padre
    justifyContent: "flex-start", // Alinea las citas al inicio
    alignItems: "stretch", // Asegura que los hijos ocupen todo el ancho
    backgroundColor: "white",
  },
});
