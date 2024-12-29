import React, { useState } from "react";
import {
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { BlurView } from "expo-blur";
import { Icon } from "@rneui/themed";

const CustomModal = ({ visible, onClose, text, image, title }) => (
  <Modal
    animationType="fade"
    transparent={true}
    visible={visible}
    onRequestClose={onClose}
  >
    <BlurView intensity={20} style={StyleSheet.absoluteFill}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Image
            source={image}
            style={{
              height: 250,
              width: 250,
            }}
          />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              fontSize: 18,
              paddingVertical: 10,
              paddingBottom: 40,
              textAlign: "center",
            }}
          >
            {text}
          </Text>

          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={onClose}
          >
            <Text style={styles.textStyle}>Cerrar</Text>
          </Pressable>
        </View>
      </View>
    </BlurView>
  </Modal>
);

export const HomeTab = ({ navigation, route }) => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalId) => setActiveModal(modalId);
  const closeModal = () => setActiveModal(null);

  const items = [
    {
      id: 1,
      type: "font-awesome-5",
      name: "laptop-medical",
      offModal: "Reparaciones",
      route: require("../../assets/repair.png"),
      content:
        "Las reparaciones de computadoras consisten en arreglar problemas que afectan el funcionamiento de una computadora. Esto puede incluir solucionar fallas físicas (como una pantalla rota o un teclado dañado) y problemas internos (como el sistema que no enciende, programas que no funcionan bien o virus). También se hacen tareas como limpiar el equipo por dentro, mejorar su velocidad, o instalar actualizaciones. En resumen, se trata de dejar la computadora funcionando correctamente.",
    },
    {
      id: 2,
      type: "ionicon",
      name: "hardware-chip",
      offModal: "Mantenimiento Preventivo",
      route: require("../../assets/hardware.png"),
      content:
        " El mantenimiento preventivo consiste en realizar tareas regulares, como limpiar el polvo interno de los equipos para evitar sobrecalentamientos, revisar componentes clave como el disco duro y la memoria RAM, actualizar el software y el sistema operativo para mejorar el rendimiento y la seguridad, asegurarse de que el antivirus y firewall estén activos y actualizados, y optimizar el equipo eliminando archivos innecesarios, todo con el objetivo de prevenir problemas y mantener el equipo funcionando de manera eficiente.",
    },
    {
      id: 3,
      type: "material",
      name: "cleaning-services",
      offModal: "Limpieza",
      route: require("../../assets/clean.png"),
      content:
        "La limpieza de un equipo informático implica eliminar el polvo y la suciedad que se acumulan en el interior del dispositivo, especialmente en componentes como el ventilador, el procesador y las rejillas de ventilación, lo que puede prevenir el sobrecalentamiento. También incluye la limpieza de la pantalla, el teclado y otros elementos externos del equipo para mejorar su apariencia y funcionamiento, y la eliminación de archivos temporales y caché para liberar espacio en el disco duro.",
    },

    {
      id: 4,
      type: "material-community",
      name: "application-cog-outline",
      offModal: "Optimización Software",
      route: require("../../assets/software.png"),
      content:
        "La optimización de software consiste en mejorar el rendimiento de un sistema operativo o programa, eliminando procesos innecesarios, actualizando el software a su última versión, y ajustando la configuración para que los recursos del dispositivo, como la memoria RAM y el procesador, se utilicen de manera más eficiente. También puede incluir la eliminación de programas no deseados o el ajuste de la configuración para acelerar el inicio del sistema y la ejecución de aplicaciones. El objetivo es hacer que el software funcione más rápido y con mayor estabilidad.",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{
          alignItems: "center",
          paddingVertical: 20,
          paddingHorizontal: 20,
          backgroundColor: "white",
          paddingBottom: 50,
        }}
      >
        <Text style={styles.h1}>
          ¿Qué <Text style={{ color: "#248bda" }}>servicios</Text> ofrecemos?
        </Text>
        <View style={styles.gridContainer}>
          {items.map((item) => (
            <TouchableHighlight
              key={item.id}
              style={styles.gridItem}
              onPress={() => openModal(item.id)}
              underlayColor="rgba(96,107,208, 0.10)"
            >
              <View style={styles.iconContainer}>
                <Icon
                  type={item.type} // Especifica el tipo del ícono
                  name={item.name} // Nombre del ícono
                  color="#248bda"
                  size={50}
                />
                <Text style={styles.iconText}>{item.offModal}</Text>
              </View>
            </TouchableHighlight>
          ))}
        </View>

        {/* Modals */}
        {items.map((item) => (
          <CustomModal
            key={item.id}
            visible={activeModal === item.id}
            onClose={closeModal}
            text={item.content}
            image={item.route}
            title={item.offModal}
          />
        ))}
        <Text style={styles.h2}>
          Nuestros{" "}
          <Text style={{ color: "#248bda", fontWeight: "bold" }}>técnicos</Text>{" "}
          están calificados
        </Text>
        <Text style={styles.p}>
          Nuestros técnicos calificados no solo poseen la experiencia necesaria
          para realizar reparaciones y mantenimiento, sino que también están en
          constante capacitación para mantenerse actualizados con las últimas
          tecnologías y tendencias del mercado.
        </Text>

        <Image
          source={require("../../assets/homeImage.jpg")}
          style={{
            height: 280,
            width: "99%",
            borderRadius: 20,
          }}
        />
        <Text style={styles.p}>
          Su compromiso es garantizar que cada servicio se realice con el más
          alto estándar de calidad, brindando soluciones personalizadas para
          detalle y enfoque en la satisfacción del cliente, asegurándose de que
          cada cliente.
        </Text>
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
    textAlign: "left", // Cambia a "left" para alinear el texto a la izquierda
    width: "100%", // Asegura que el texto ocupe todo el ancho disponible
  },
  h2: {
    fontSize: 25,
    color: "black",
    fontWeight: "bold",
    paddingVertical: 10,
    textAlign: "left", // Cambia a "left" para alinear el texto a la izquierda
    width: "100%", // Asegura que el texto ocupe todo el ancho disponible
  },
  p: {
    fontSize: 20,
    color: "black",
    paddingVertical: 10,
    textAlign: "left", // Cambia a "left" para alinear el texto a la izquierda
    width: "100%", // Asegura que el texto ocupe todo el ancho disponible
  },

  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start", // Cambia a "flex-start" para pegarlos más
  },

  gridItem: {
    width: "48%", // Ajusta el ancho para permitir más elementos por fila
    aspectRatio: 1, // Mantiene proporción cuadrada
    backgroundColor: "rgba(238,250,255, 0.60)",
    borderRadius: 30,
    margin: "1%", // Reduce el margen entre los elementos
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 30,
  },

  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconText: {
    marginTop: 10,
    color: "black",
    fontSize: 16,
    textAlign: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.35,
    shadowRadius: 50,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    paddingHorizontal: 35,
    paddingVertical: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 25,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: "black",
  },
  image: {
    width: 50, // Ajusta el tamaño según lo necesites
    height: 50,
    resizeMode: "contain",
  },
});
