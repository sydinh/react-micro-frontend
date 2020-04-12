import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';

function Installation({ isStandalone }) {
    return (
        <div style={{ backgroundColor: 'yellow', padding: '20px' }}>
            <h1>Installation</h1>

            {!isStandalone && (
                <ul>
                    <li>
                        <Link to={routes.PROGRAMMING}>Back to Programming</Link>
                    </li>
                </ul>
            )}
        </div>
    );
}

export default Installation;
