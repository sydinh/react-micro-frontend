import React from 'react';
import ReactDOM from 'react-dom';
import Programming from '.';

function ProgrammingStandalone() {
    const props = {};

    return <Programming isStandalone {...props} />;
}

ReactDOM.render(<ProgrammingStandalone />, document.getElementById('app'));
