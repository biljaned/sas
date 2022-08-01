import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useForm } from '../hooks/useForm';
import useRefreshToken from '../hooks/useRefreshToken';

export const StudForm = memo(forwardRef(({ onSubmitStudent, buttonText }, ref) => {
    console.log('render automobila');

    const [studForm, change, resetStudForm] = useForm({
        godine: '',
        adresa: '',
        year: 1900,
        color: '',
        price: 0,
    });

    const submitStudent = () => {
        onSubmitStudent({ ...studForm });
        resetStudForm();

    };

   
    const refresh=useRefreshToken;
    return <form>
        <br />
        <div>
            <label htmlFor="godine-input">Godine:</label>
            <input type="text" id="godine-input" name="godine" ref={ref}
                value={studForm.godine} onChange={change} />
        </div>
        <br />
        <div>
            <label htmlFor="adresa-input">Adresa:</label>
            <input type="text" id="adresa-input" name="adresa" value={studForm.adresa} onChange={change} />
        </div>
        <br />
        <button type="button" onClick={submitStudent}>{buttonText}</button>
        <br />
        <br />
        <button type="button" onClick={() => refresh()}>SAČUVAJ</button>
        <br />
               
    </form>

}));

StudForm.defaultProps = {
    buttonText: 'Submit Student',
};

StudForm.propTypes = {
    buttonText: PropTypes.string,
    onSubmitStudent: PropTypes.func.isRequired,
};
