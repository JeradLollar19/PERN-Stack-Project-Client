import React from 'react';
import {Row} from 'reactstrap';

const Footer = () => {


    return (
        <footer>
        <hr/>
            <Row>
                <p>All info from the film database are pulled from <a href="http://www.omdbapi.com/" target="_blank">The Open Movie Database</a> (OMDb API).</p>
            </Row>
        </footer>
    );
};

export default Footer;