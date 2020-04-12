import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';

function Programming({ isStandalone }) {
    return (
        <div style={{ backgroundColor: 'green', padding: '20px' }}>
            <h1>Programming</h1>

            {!isStandalone && (
                <ul>
                    <li>
                        <Link to={routes.INSTALLATION}>
                            Back to Installation
                        </Link>
                    </li>
                </ul>
            )}
        </div>
    );
}

export default Programming;
