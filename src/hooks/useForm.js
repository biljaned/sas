import { useState } from 'react';

export const useForm = (initialForm) => {

    const [form, setForm] = useState(initialForm);

    // dekompozicija target:{name,type,value}
    const change = ({ target: { name, type, value } }) => {
        setForm({
            ...form,
            [name]: type === 'number' ? Number(value) : value,

        });
    };
    // 0 - form data
    // 1 - change function for input controls
    // 2 - reset the form function
    return [form, change, () => setForm(initialForm)];
};