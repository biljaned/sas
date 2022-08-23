import React, { useState, useCallback, useEffect, useContext } from 'react';

import { useDefaultInputFocus } from '../hooks/useDefaultInputFocus';

import { ToolHeader } from './ToolHeader';
import { StudTable } from './StudTable';
import { StudForm } from './StudForm';

import { AuthContext } from '../context/AuthProvider';
import { useHistory } from 'react-router-dom';
import { API } from '../api';

export const StudTool = () => {
    const [students, setStudents] = useState([]);
    const [editStudentId, setEditStudentId] = useState(-1);
    const { auth, setLoggedIn } = useContext(AuthContext)
    const history = useHistory();

    const defaultInputRef = useDefaultInputFocus();

    useEffect(() => {
        const fetch = async () => {
            const sortedStudents = await API.getStudents()
            setStudents(sortedStudents)
        }
        fetch()
    }, []);

    useEffect(() => {
        if (!auth.isLoggedIn) { history.push('/') }
    }, [auth, history]);

    const init = useCallback(() => {
        setEditStudentId(-1);
        if (defaultInputRef.current) {
            defaultInputRef.current.focus();
        }
    }, [defaultInputRef]);

    const addStudent = useCallback(async (st) => {
        setStudents(students.concat({ ...st, id: Math.max(...students.map(c => c.id)) + 1 }));
        init();


        await API.addStudent(Math.max(...students.map(c => c.id)) + 1, st.godine, st.adresa)

    }, [students, init]);

    const replaceStudent = useCallback((st) => {
        const newStudents = students.concat();
        const studentIndex = newStudents.findIndex(c => c.id === st.id);
        newStudents[studentIndex] = st;
        setStudents(newStudents);
        init();
    }, [students, init]);

    const deleteStudent = useCallback(async (studentId) => {
        setStudents(students.filter(stud => stud.id !== studentId));
        init();
        await API.deleteStudent(studentId)


    }, [students, init]);

    const cancelStudent = useCallback(() => {
        init();
    }, [init]);

    return (
        <>
            <button onClick={() => setLoggedIn(false)}>Izloguj se</button>
            <ToolHeader headerText="Student" />
            <StudTable students={students} editStudentId={editStudentId}
                onEditStudent={setEditStudentId} onDeleteStudent={deleteStudent}
                onSaveStudent={replaceStudent} onCancelStudent={cancelStudent} />
            <StudForm buttonText="Dodaj studenta" onSubmitStudent={addStudent}
                ref={defaultInputRef} />



        </>
    );
}