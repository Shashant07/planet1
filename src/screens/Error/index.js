import React from 'react'
import { Link} from "react-router-dom";
import './error.css';

const ErrorPage = () => {
    // var error = useRoutes();

    return (
        <div id="error-page">
            <div className="noise"></div>
            <div className="overlay"></div>
            <div className="terminal">
                <h1>Error <span className="errorcode">404</span></h1>
                <p className="output">The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
                {/* {error?<p className="output">{error.statusText || error.message}</p>:""} */}
                <p className="output">Return to our <Link to='/' className='errorLink'>homepage</Link>.</p>
                <p className="output">Good luck.</p>
            </div>
        </div>
    );
}

export default ErrorPage    