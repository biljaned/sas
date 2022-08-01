import axios from "axios";

const authUrl = "https://ge69b092f0f2339-sas1.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/oauth/token"

const data = { 'grant_type': 'client_credentials' };

const options = {
    method: 'POST',
    headers: { 
        'content-type': 'application/x-www-form-urlencoded' ,
        "Access-Control-Allow-Origin": window.location.origin
    },
    auth: {
        username: 'xH2eNdXCrwk3SC-8mPPjIg..',
        password: 'a8CEbqUdB-mbzTRJrAOZzg..',
    },
    data: JSON.stringify(data),
    url: authUrl
}

export const login = (clientId, clientSecret) => {
    const response = axios(options)

    console.log("response", response)


}