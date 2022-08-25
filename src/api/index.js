
import axios from 'axios';

const baseURL = 'https://ge69b092f0f2339-sas1.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/sas';

//const accToken = process.env.REACT_APP_ACCESS_TOKEN;
const accToken = 'oSSc19wGDtfaVX79ui9IGQ'
console.log("accToken",accToken)
const options = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accToken}`,
  }
};


export const API = {
  getStudents: async () => {
    const response = await axios.get(baseURL + '/students', options)

    console.log("get students response:", response)

    return response.data.items.sort((a, b) => a.id - b.id);
  },
  addStudent: async (nextId, godine, adresa) => {
    const response = await axios.post(baseURL + '/ubaciStudenta', { id: nextId, godine, adresa }, options)

    console.log("add student response:", response)
    return response
  },
  editStudent: async (id, godine, adresa) => {
    const response = await axios.put(
      baseURL + '/izmeniStudenta/' + id,
      { godine, adresa }
      , options)

    console.log("edit student response:", response)

    return response


  },
  deleteStudent: async (id) => {
    const response = await axios.delete(
      baseURL + '/obrisiStudenta/' + id
      , options)


    console.log("delete student response:", response)

    return response


  }


}