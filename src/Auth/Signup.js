import React, {useState} from 'react';
import APIURL from '../helpers/enivronment';
import {Form, FormGroup, Label, Input} from 'reactstrap';
import Button from '@material-ui/core/Button';

const Signup = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}user/create`, {
            method: 'POST',
            body: JSON.stringify({user: {username: username, password: password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data)=> {
            props.updateToken(data.sessionToken);
        })
    }


    return (
        <div>
            <h1>-SIGNUP-</h1>
            <hr/>
            <hr/>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">USERNAME</Label>
                    <Input placeholder="Create a Username" onChange={(e) => setUsername(e.target.value)} name="username" value={username} required/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">PASSWORD</Label>
                    <Input placeholder="Create a Password" onChange={(e) => setPassword(e.target.value)} name="password" value={password} required/>
                </FormGroup>
                <Button variant="contained" color="primary" type="submit">SIGNUP</Button>
            </Form>
        </div>
    )
}

export default Signup;