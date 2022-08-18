import React, { useState, useCallback, useEffect } from 'react';

import { useDefaultInputFocus } from '../hooks/useDefaultInputFocus';
import { getAllStudents } from '../services/students';

import { ToolHeader } from './ToolHeader';
import { StudTable } from './StudTable';
import { StudForm } from './StudForm';

import axios from "axios";

const accToken = 'ebAdhbNnCb5hdGnDPvf7sw';


export const StudTool = () => {
    const [students, setStudents] = useState([]);
    const [editStudentId, setEditStudentId] = useState(-1);
    

    const defaultInputRef = useDefaultInputFocus();

    useEffect(() => {
        getAllStudents().then(students => setStudents(students));
        

    }, []);

    const init = useCallback(() => {
        setEditStudentId(-1);
        if (defaultInputRef.current) {
            defaultInputRef.current.focus();
        }
    }, [defaultInputRef]);

    const addStudent = useCallback((st) => {
        setStudents(students.concat({ ...st, id: Math.max(...students.map(c => c.id)) + 1 }));
        init();
        // console.log('ID JE u StudTool.js', Math.max(...students.map(c => c.id)) + 1);
        // console.log('Godina koja je dodata u StudTool.js',st.godine);
        // console.log('Adresa koja je dodata u StudTool.js',st.adresa);

        //DODAT JE END POINT ZA UBACIVANJE NOVOG STUDENTA----
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accToken}`,

        };
        axios.post('https://ge69b092f0f2339-sas1.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/sas/ubaciStudenta',{"id":Math.max(...students.map(c => c.id)) + 1,"godine":st.godine,"adresa":st.adresa}, { headers })

    }, [students, init]);

    const replaceStudent = useCallback((st) => {
        const newStudents = students.concat();
        const studentIndex = newStudents.findIndex(c => c.id === st.id);
        newStudents[studentIndex] = st;
        setStudents(newStudents);
        init();
    }, [students, init]);

    const deleteStudent = useCallback(studentId => {
        setStudents(students.filter(stud => stud.id !== studentId));
        init();
        //DODAT JE END POINT ZA BRISANJE
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accToken}`,

        };
        axios.delete('https://ge69b092f0f2339-sas1.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/sas/obrisiStudenta/' + studentId, { headers })

    }, [students, init]);

    const cancelStudent = useCallback(() => {
        init();
    }, [init]);

    return (
        <>
            <ToolHeader headerText="Student" />
            <StudTable students={students} editStudentId={editStudentId}
                onEditStudent={setEditStudentId} onDeleteStudent={deleteStudent}
                onSaveStudent={replaceStudent} onCancelStudent={cancelStudent} />
            <StudForm buttonText="Dodaj studenta" onSubmitStudent={addStudent}
                ref={defaultInputRef} />



        </>
    );
}