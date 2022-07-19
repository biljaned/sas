import PropTypes from 'prop-types';

export const studPropType = PropTypes.shape({
    id: PropTypes.number,
    godine: PropTypes.string,
    adresa: PropTypes.string,
});
export const studentsPropType = PropTypes.arrayOf(studPropType);