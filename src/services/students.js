import axios from "axios";
import useRefreshToken from '../hooks/useRefreshToken';
//const baseURL = 'https://ge69b092f0f2339-sas1.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/oauth/token';
const baseURL2 = 'https://ge69b092f0f2339-sas1.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/sas/students';
//const getCollectionURL = () => baseURL;
const accToken='BTbogx76_vHEdSTpn-XxVw';

export const getAllStudents = async () => {
  
    let students = [];

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
  console.log('----ACCESS TOKEN preko id polja----------',res.access_token)

    return students;
    };