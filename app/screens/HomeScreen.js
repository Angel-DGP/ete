import {
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeTab } from "./HomeTab";
import { SettingTab } from "./SettingTab";
import { Icon, Input, Button } from "@rneui/base";
import { BlurView } from "expo-blur";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { addDates } from "../services/appService";
import { DateScreen } from "./DateScreen";
import { QuestionsScreen } from "./QuestionsScreen";
import { TouchableOpacity } from "react-native";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();
let idList = null;
const SelectTab = ({ navigation, route }) => {
  const { date } = route.params;
  const [rating, setRating] = useState(0);

  const renderStars = () => {
    return [1, 2, 3, 4, 5].map((star) => (
      <TouchableOpacity key={star} onPress={() => setRating(star)}>
        <Icon
          name={star <= rating ? "star" : "star-outline"}
          size={40}
          color="gold"
          style={styles.star}
        />
      </TouchableOpacity>
    ));
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <KeyboardAvoidingView
      style={{ backgroundColor: "white",
        flex: 1,
        paddingVertical: 30,
        marginHorizontal: 5,
        paddingHorizontal: 15
      }
       
      }
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View
            style={{
              flex: 1,
              alignItems: "stretch",
              paddingVertical: 60,
              paddingBottom: 100
            }}
          >
            <Text style={styles.h1}>Información</Text>

            <Text style={styles.h2}>
              <Text style={{ fontWeight: "400" }}>
                La cita fue agendada a la fecha:
              </Text>{" "}
              {date.date} {date.time}
            </Text>
            <Text style={styles.h3}>Califique el servicio</Text>
            <View style={{ flexDirection: "row", paddingBottom: 10 }}>
              {renderStars()}
            </View>

            <View style={{ alignItems: "stretch" }}>
              <Input
                multiline={true}
                numberOfLines={4}
                placeholder="Escribe aquí..."
                inputContainerStyle={styles.inputContainer}
                inputStyle={styles.inputText}
                label="Comentario"
              />
            </View>

            <Text style={{ fontSize: 20, fontWeight: "400" }}>
            Agendada por
              <Text style={{ fontWeight: "bold" }}> {date.name} {date.lastname}{" "}</Text>
              
            </Text>
            <Text style={{ fontSize: 20, fontWeight: "400", paddingTop: 5 }}>
              En la dirección: <Text style={{ fontWeight: "bold" }}> {date.address}</Text>
            </Text>
            <Text style={{ fontSize: 20, fontWeight: "400", paddingTop: 5 }}>
              Correo electrónico: <Text style={{ fontWeight: "bold" }}> {date.email}</Text>
            </Text>

            <Text style={styles.p}>
              El motivo de la cita fue{" "}
              <Text style={{ fontWeight: "bold" }}>{date.service}</Text> a
              un/una <Text style={{ fontWeight: "bold" }}>{date.device}</Text>
            </Text>
            <Text style={styles.p}>
              Técnico: <Text style={{ fontWeight: "bold" }}>{date.tech}</Text>
            </Text>
            <Text style={styles.p}>
              Estado de la cita:{" "}
              <Text style={{ fontWeight: "bold" }}>{date.state}</Text>
            </Text>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const CreateTab = ({ navigation }) => {
  console.log("Seteado de idList" + idList);
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [address, setAddress] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [service, setService] = useState();
  const [device, setDevice] = useState();
  const [email, setEmail] = useState();

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  const save = () => {
    let date1 = {
      id: id,
      name: name,
      lastname: lastName,
      address: address,
      date: date,
      time: time,
      service: service,
      device: device,
      email: email,
    };
    addDates(date1);
    navigation.navigate("Date");
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <Text style={styles.h1}>Agendar una cita</Text>

          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Input
              placeholder="Cedula"
              keyboardAppearance="dark"
              label="Ingrese su cedula"
              value={id}
              onChangeText={setId}
              color="black"
            />
            <Input
              placeholder="Nombres"
              keyboardAppearance="dark"
              label="Ingrese su nombre"
              value={name}
              onChangeText={setName}
              color="black"
            />
            <Input
              color="black"
              placeholder="Apellidos"
              keyboardAppearance="dark"
              label="Ingrese su apellido"
              value={lastName}
              onChangeText={setLastName}
            />
            <Input
              color="black"
              placeholder="Ejemplo: Av.Eloy Alfaro entre Cristobal"
              keyboardAppearance="dark"
              label="Ingrese su dirección"
              value={address}
              onChangeText={setAddress}
            />
            <Input
              color="black"
              placeholder="Ejemplo: dia/mes/año"
              keyboardAppearance="dark"
              keyboardType="numbers-and-punctuation"
              label="Ingrese la fecha para realizar la cita"
              value={date}
              onChangeText={setDate}
            />
            <Input
              color="black"
              placeholder="Ejemplo: 08:00 - 18:00"
              keyboardAppearance="dark"
              keyboardType="numbers-and-punctuation"
              label="Ingrese la hora para realizar la cita"
              value={time}
              onChangeText={setTime}
            />
            <Input
              color="black"
              placeholder="Ejemplo: Soporte Técnico"
              keyboardAppearance="dark"
              label="Ingrese el servicio que necesita"
              value={service}
              onChangeText={setService}
            />
            <Input
              color="black"
              placeholder="Ejemplo: Computador, Movil"
              keyboardAppearance="dark"
              label="Ingrese el tipo de dispositivo"
              keyboardType="default"
              value={device}
              onChangeText={setDevice}
            />
            <Input
              color="black"
              placeholder="example@example.com"
              keyboardAppearance="dark"
              label="Ingrese su correo electrónico"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </ScrollView>
          <View style={styles.containerButtons}>
            <Button
              title="Guardar"
              buttonStyle={{
                paddingHorizontal: 42,
                borderRadius: 20,
                marginVertical: 15,
              }}
              onPress={save}
            />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};
const StackHome = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeTab}
        options={{
          title: "Inicio",
          headerBackVisible: false,
          headerTransparent: true,
          headerBlurEffect: "light",
          headerLargeTitle: true,
          headerLargeTitleStyle: {
            color: "black",
          },
          headerStyle: {
            color: "black",
          },
          headerTitleStyle: {
            color: "black",
          },
        }}
      />
    </Stack.Navigator>
  );
};
const StackSetting = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={SettingTab}
        options={{
          title: "Configuración",
          headerBackVisible: false,
          headerTransparent: true,
          headerBlurEffect: "light",
          headerLargeTitle: true,
          headerLargeTitleStyle: {
            color: "black",
          },
          headerStyle: {
            color: "black",
          },
          headerTitleStyle: {
            color: "black",
          },
        }}
      />
    </Stack.Navigator>
  );
};
const StackQuestion = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Preguntas"
        component={QuestionsScreen}
        options={{
          title: "Preguntas Frecuentes",
          headerBackVisible: false,
          headerTransparent: true,
          headerBlurEffect: "light",
          headerLargeTitle: true,
          headerLargeTitleStyle: {
            color: "black",
          },
          headerStyle: {
            color: "black",
          },
          headerTitleStyle: {
            color: "black",
          },
        }}
      />
    </Stack.Navigator>
  );
};
const StackDate = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Date"
        component={DateScreen}
        options={{
          title: "Citas",
          headerBackVisible: false,
          headerTransparent: true,
          headerBlurEffect: "light",
          headerLargeTitle: true,
          headerLargeTitleStyle: {
            color: "black",
          },
          headerStyle: {
            color: "black",
          },
          headerTitleStyle: {
            color: "black",
          },
        }}
      />
      <Stack.Screen
        name="createTab"
        component={CreateTab}
        options={{
          headerTitleAlign: "left",
          headerTitle: "",
          headerTransparent: true,
          headerBackTitle: "Regresar",
        }}
      />
      <Stack.Screen
        name="selectTab"
        component={SelectTab}
        options={{
          headerTitle: "",
          headerTransparent: true,
          headerBlurEffect: "light",
          headerLargeTitleStyle: {
            color: "black",
          },
          headerStyle: {
            color: "black",
          },
          headerTitleStyle: {
            color: "black",
          },
        }}
      />
    </Stack.Navigator>
  );
};
export const HomeScreen = ({ navigation, route }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          borderTopWidth: 0,
          backgroundColor: "transparent",
          paddingTop: 8,
        },
        animation: "shift",
        tabBarBackground: () => (
          <BlurView
            tint="systemThickMaterialLight"
            intensity={50}
            style={StyleSheet.absoluteFill}
          />
        ),
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={StackHome}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size }) => {
            return (
              <Icon
                name="home"
                size={size}
                color={focused ? "#248bda" : "black"} // Cambia el color si está seleccionado
                type="foundation"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Citas"
        component={StackDate}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size }) => {
            return (
              <Icon
                name="date-range"
                size={size}
                color={focused ? "#248bda" : "black"} // Cambia el color si está seleccionado
                type="materialicons"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Preguntas"
        component={StackQuestion}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size }) => {
            return (
              <Icon
                name="question-answer"
                size={size}
                color={focused ? "#248bda" : "black"} // Cambia el color si está seleccionado
                type="materialicons"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Configuración"
        component={StackSetting}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size }) => {
            return (
              <Icon
                name="settings"
                size={size}
                color={focused ? "#248bda" : "black"} // Cambia el color si está seleccionado
                type="ionicons"
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  h1: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
    paddingVertical: 20,
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
  },
  h3: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    paddingVertical: 2,
  },
  text: {
    fontSize: 18,
    color: "black", // Texto claro para el tema oscuro
    marginTop: 20,
    paddingHorizontal: 10,
    color: "black",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo oscuro con opacidad
  },
  modalContent: {
    backgroundColor: "black",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
    color: "black",
  },
  dropdown: {
    backgroundColor: "#333",
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 1,
    width: 200,
  },
  dropdownList: {
    backgroundColor: "#333",
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 1,
  },
  placeholder: {
    color: "black",
    fontSize: 16,
  },
  text: {
    color: "black",
  },
  containerStyle: {
    width: 200,
  },
  result: {
    fontSize: 16,
    color: "black",
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    color: "black",
    marginBottom: 20,
  },
  selectedDate: {
    fontSize: 18,
    color: "black",
    marginTop: 20,
  },
  containerButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 50,
  },
  inputContainer: {
    width: "100%", // Ajusta el ancho relativo al contenedor
    borderWidth: 1, // Opcional, para visualizar el borde
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 0,
  },
  inputText: {
    fontSize: 16, // Tamaño adecuado del texto
    color: "black",
  },
});
