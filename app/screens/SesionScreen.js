import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import { useState } from "react";
import { Input, Button } from "@rneui/base";

const users = [
  {
    user: "admin",
    password: "admin",
    id: "08400",
  },
  {
    user: "root",
    password: "root",
  },
  {
    user: "student",
    password: "student",
    id: "08401",
  },
];
let userId = null;

export const SesionScreen = ({ navigation }) => {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const [errorUser, setErrorUser] = useState();
  const [errorPassword, setErrorPassword] = useState();
  const [isNew, setIsNew] = useState(false);

  const validate = () => {
    setErrorPassword("");
    setErrorUser("");
    let majinBoo = false;
    for (let i = 0; i < users.length; i++) {
      if (users[i].user == user && users[i].password == password) {
        majinBoo = true;
        userId = users[i].id;
      }
    }
    if (majinBoo == false) {
      setErrorPassword("Contraseña incorrecta. Verifique de nuevo");
      setErrorUser("Usuario incorrecto. Verifique de nuevo");
    }
    return majinBoo;
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          display: !isNew ? "flex" : "none",
          paddingHorizontal: 50,
          paddingVertical: 40,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/loginImage.png")} // Ruta de tu imagen
          style={styles.image}
        />
        <Text
          style={{
            fontSize: 40,
            fontWeight: "bold",
            color: "black",
            paddingBottom: 30,
          }}
        >
          Iniciar Sesión
        </Text>
        <View style={styles.containerInputs}>
          <Input
            value={user}
            onChangeText={setUser}
            placeholder="Ingrese su usuario"
            label="Usuario"
            errorMessage={errorUser}
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.inputText}
          />
          <Input
            value={password}
            onChangeText={setPassword}
            placeholder="Ingrese su contraseña"
            label="Contraseña"
            secureTextEntry={true}
            errorMessage={errorPassword}
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.inputText}
          />
        </View>

        <Button
          title="Iniciar Sesión"
          onPress={() => {
            if (validate()) {
              console.log("Navegando a HomeNav con ID:", userId);
              navigation.navigate("HomeNav", { id: userId });
            }
          }}
          buttonStyle={{
            paddingHorizontal: 50,
            borderRadius: 20,
          }}
          icon={{
            name: "login", // Nombre del ícono (por ejemplo, 'login')
            type: "material-community", // Tipo de ícono (puede ser 'font-awesome', 'material', etc.)
            size: 20, // Tamaño del ícono
            color: "white", // Color del ícono
          }}
        />
        <View style={styles.createAccountContainer}>
          <Text style={styles.text}>¿No tienes cuenta?</Text>
          <TouchableHighlight
            underlayColor="#e3eefb"
            onPress={() => {
              setIsNew(!isNew);
              setErrorPassword("");
              setErrorUser("");
              setUser("");
              setPassword("");
            }}
            style={{
              borderRadius: 5,
            }}
          >
            <Text style={styles.linkText}> Crea una</Text>
          </TouchableHighlight>
        </View>

        <StatusBar style="dark" />
      </View>

      <View
        style={{
          display: isNew ? "flex" : "none",
          paddingHorizontal: 50,
          paddingVertical: 40,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 40,
            fontWeight: "bold",
            color: "black",
            paddingBottom: 30,
          }}
        >
          Crear Cuenta
        </Text>
        <Input
          value={user}
          onChangeText={setUser}
          placeholder="Cree un usuario"
          label="Usuario"
          errorMessage={errorUser}
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.inputText}
        />
        <Input
          value={password}
          onChangeText={setPassword}
          placeholder="Crear contraseña"
          label="Contraseña"
          secureTextEntry={true}
          errorMessage={errorPassword}
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.inputText}
        />
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 20,
          }}
        >
          <Button
            title="Regresar"
            style={{
              paddingHorizontal: 10,
            }}
            onPress={() => {
              setIsNew(!isNew);
            }}
            buttonStyle={{
              paddingHorizontal: 25,
              borderRadius: 20,
            }}
            icon={{
              name: "arrow-left-circle", // Nombre del ícono (por ejemplo, 'login')create
              type: "feather", // Tipo de ícono (puede ser 'font-awesome', 'material', etc.)material-icons
              size: 20, // Tamaño del ícono
              color: "white", // Color del ícono
            }}
          />
          <Button
            title="Crear cuenta"
            onPress={() => {
              console.log(isNew);
              if (validate() == true) {
                setErrorPassword("Contraseña existente. Verifique de nuevo");
                setErrorUser("Usuario existente. Verifique de nuevo");
              } else if (user == "" && password == "") {
                setErrorPassword("Espacio vacio. Rellene por favor");
                setErrorUser("Espacio vacio. Rellene por favor");
              } else {
                setIsNew(!isNew);
                let newUser = { user: user, password: password };
                users.push(newUser);
                setErrorPassword("");
                setErrorUser("");
              }
            }}
            buttonStyle={{
              paddingHorizontal: 30,
              borderRadius: 20,
            }}
            icon={{
              name: "create", // Nombre del ícono (por ejemplo, 'login')create
              type: "material-icons", // Tipo de ícono (puede ser 'font-awesome', 'material', etc.)
              size: 20, // Tamaño del ícono
              color: "white", // Color del ícono
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  containerInputs: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%", // Asegura que los inputs ocupen el espacio disponible
  },
  inputContainer: {
    width: "90%", // Ajusta el ancho relativo al contenedor
    borderWidth: 1, // Opcional, para visualizar el borde
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  inputText: {
    fontSize: 16, // Tamaño adecuado del texto
    color: "black",
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 30,
  },
  createAccountContainer: {
    flexDirection: "row", // Para alinear el texto y el enlace en la misma fila
    marginTop: 10,
    alignItems: "center",
  },
  text: {
    color: "black",
    fontSize: 14,
  },
  linkText: {
    color: "#248bda",
    fontSize: 14,
    fontWeight: "bold",
  },
});
