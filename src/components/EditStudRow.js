import React from "react";
import PropTypes from 'prop-types';

import { studPropType } from '../propTypes/students';
import { useForm } from '../hooks/useForm';

import { useDefaultInputFocus } from '../hooks/useDefaultInputFocus';
import axios from "axios";

const accToken = 'R7dyi2dfy8bmdF8diRxzew';

export const EditStudRow = ({ st, onSaveStudent, onCancelStudent: cancelStudent, }) => {
    const [studForm, change] = useForm({
        ...st
    });

    const saveStudent = () => {
        onSaveStudent({
            ...studForm,
            id: st.id,
            
        });

        console.log('ID koji je menjan u EditStudRow.js je', st.id);
        console.log('Godina koja je menjana u EditStudRow.js je', studForm.godine);
        console.log('Adresa koja je menjana u EditStudRow.js je', studForm.adresa);

        
        //DODAT JE END POINT ZA IZMENU NOVOG STUDENTA
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accToken}`,

        };//format za {} je {"godine":23,"adresa":"LimskaUpdate"}
        axios.put('https://ge69b092f0f2339-sas1.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/sas/izmeniStudenta/' + st.id, {"godine":studForm.godine,"adresa":studForm.adresa}
            , { headers })
    };

    const defaultInputRef = useDefaultInputFocus();

    return <tr>
        <td>{st.id}</td>
        <td><input type="text" id="edit-godine-input" name="godine" ref={defaultInputRef}
            value={studForm.godine} onChange={change} />
        </td>
        <td><input type="text" id="edit-adresa-input" name="adresa"
            value={studForm.adresa} onChange={change} />
        </td>
        <td><button type="button" onClick={saveStudent}>Save</button></td>
        <td><button type="button" onClick={cancelStudent}>Cancel</button></td>
    </tr>
};

EditStudRow.propTypes = {
    st: studPropType.isRequired,
    onSaveStudent: PropTypes.func.isRequired,
    onCancelStudent: PropTypes.func.isRequired,
}