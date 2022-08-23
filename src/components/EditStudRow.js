import React from "react";
import PropTypes from 'prop-types';

import { studPropType } from '../propTypes/students';
import { useForm } from '../hooks/useForm';

import { useDefaultInputFocus } from '../hooks/useDefaultInputFocus';
import { API } from "../api";


export const EditStudRow = ({ st, onSaveStudent, onCancelStudent: cancelStudent, }) => {
    const [studForm, change] = useForm({
        ...st
    });

    const saveStudent = async () => {
        onSaveStudent({
            ...studForm,
            id: st.id,
        });
        await API.editStudent(st.id, studForm.godine, studForm.adresa)
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