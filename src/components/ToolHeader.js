import React, {memo} from 'react';
import PropTypes from 'prop-types';

export const ToolHeader = memo(({ headerText }) => {
    console.log('renderovanje');
    return <header>
        <h1>{headerText}</h1>
    </header>;
});


ToolHeader.defaultProps = {
    headerText: 'The Tool',
};

ToolHeader.propTypes = {
    headerText: PropTypes.string,
};