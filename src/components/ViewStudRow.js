import React from "react";
import PropTypes from 'prop-types';

import {studPropType} from '../propTypes/students';

export const ViewStudentRow = ({st,onDeleteStudent:deleteStudent, onEditStudent:editStudent}) => {

return    <tr>
                <td>{st.id}</td>
                <td>{st.godine}</td>
                <td>{st.adresa}</td>
                <td><button type="button" onClick={() => editStudent(st.id)}>Edit</button></td>
                <td><button type="button" onClick={() => deleteStudent(st.id)}>Delete</button></td>
            </tr>
};

ViewStudentRow.propTypes = {
    st: studPropType.isRequired,
    onEditStudent: PropTypes.func.isRequired,
    onDeleteStudent: PropTypes.func.isRequired,
}