import React, { useState, useCallback, useEffect } from 'react';

import {useDefaultInputFocus} from '../hooks/useDefaultInputFocus';
import {getAllStudents} from '../services/students';

import { ToolHeader } from './ToolHeader';
import { StudTable } from './StudTable';
import { StudForm } from './StudForm';



export const StudTool = () => {
    const [students, setStudents] = useState([]);
    const [editStudentId, setEditStudentId] = useState(-1);
    

    const defaultInputRef = useDefaultInputFocus();

    useEffect(() => {
        getAllStudents().then(students => setStudents(students));

    },[]);

    const init = useCallback(() => {
        setEditStudentId(-1);
        if(defaultInputRef.current){
            defaultInputRef.current.focus();
        }
    },[defaultInputRef]);

    const addStudent = useCallback((st) => {
        setStudents(students.concat({ ...st, id: Math.max(...students.map(c => c.id)) + 1 }));
        init();
    }, [students,init]);

    const replaceStudent = useCallback((st) => {
        const newStudents = students.concat();
        const studentIndex = newStudents.findIndex(c => c.id === st.id);
        newStudents[studentIndex] = st;
        setStudents(newStudents);
        init();
    }, [students,init]);

    const deleteStudent = useCallback(studentId => {
        setStudents(students.filter(stud => stud.id !== studentId));
        init();
    }, [students,init]);

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