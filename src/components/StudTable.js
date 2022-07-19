import React, {memo} from 'react';
import PropTypes from 'prop-types';
import { studentsPropType } from '../propTypes/students'
import { EditStudRow } from './EditStudRow';
import { ViewStudentRow } from './ViewStudRow';

export const StudTable = memo(({ 
    students, editStudentId, 
    onEditStudent:editStudent,
    onDeleteStudent:deleteStudent,
    onSaveStudent:saveStudent,
    onCancelStudent:cancelStudent,
}) => {

    return <table>
        <thead>
            <tr>
                <th>Id</th>
                <th><label htmlFor="edit-godine-input">Godine</label></th>
                <th><label htmlFor="edit-adresa-input">Adresa</label></th>
                <th>Akcije</th>
            </tr>
        </thead>
        <tbody>
            {students.length === 0 && <tr>
                <td colSpan="4">Nema studenata.</td>
            </tr>}
            {students.map(st => st.id === editStudentId
            ? <EditStudRow key={st.id} st={st} 
            onSaveStudent= {saveStudent} onCancelStudent={cancelStudent} />
            : <ViewStudentRow key={st.id} st={st} 
            onEditStudent= {editStudent} onDeleteStudent={deleteStudent}/> )}
        </tbody>
    </table>;
});

StudTable.defaultProps = {
    students: [],
    editStudentId:-1,
};

StudTable.propTypes = {
    students: studentsPropType,
    editStudentId:PropTypes.number,
    onEditStudent: PropTypes.func.isRequired,
    onDeleteStudent: PropTypes.func.isRequired,
    onSaveStudent: PropTypes.func.isRequired,
    onCancelStudent: PropTypes.func.isRequired,
};