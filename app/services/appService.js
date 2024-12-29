let dates = [
  {
    id: "08400",
    name: "Didier Angel",
    lastname: "Guaña Patiño",
    address: "Avenida Eloy alfaro entre...",
    date: "31/12/2024",
    time: "10:00",
    service: "Soporte Técnico",
    device: "Computador",
    email: "guanadid@gmail.com",
    tech: "No asignado",
    state: "Peticion"
  },
  {
    id: "08401",
    name: "María Fernanda",
    lastname: "Lopez Sánchez",
    address: "Calle Bolívar y 10 de Agosto",
    date: "15/01/2025",
    time: "14:30",
    service: "Reparación de Software",
    device: "Teléfono móvil",
    email: "maria.lopez@example.com",
    tech: "No asignado",
    state: "Peticion"
  },
];

export const getDates = () =>{
    return dates
}
export const addDates = (date) =>{
    dates.push(date)
    console.log("Arreglo", dates)
}