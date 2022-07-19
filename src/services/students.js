import axios from "axios";
//const baseURL = 'https://ge69b092f0f2339-sas1.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/oauth/token';
const baseURL2 = 'https://ge69b092f0f2339-sas1.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/sas/students';
//const getCollectionURL = () => baseURL;
const accToken='Cf_4xiV9DPJ6KSn6e_-tIg';

export const getAllStudents = async () => {
  
    let students = [];

/*RADIIIIIIII bez autorizacije
  const res = await axios.get(baseURL).then(response => response.data);
  students = res.items;
  console.log('RES', res);
  console.log('CCCC', students);     
  console.log('----xxxxxx----------',students)
RADIIIIIIIIII*/

// link za autorizaciju https://css-tricks.com/react-authentication-access-control/
const res = await axios.get(baseURL2 , {
  headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accToken}`,
    }
}).then(response => response.data);
students = res.items;
  //sortiranje
  students.sort((a,b) => a.id - b.id);


 
  console.log('RES', res);
  console.log('CCCC', students);     
  console.log('----xxxxxx----------',students)
  console.log('----ACCESS TOKEN----------',accToken)
  

    return students;
    };