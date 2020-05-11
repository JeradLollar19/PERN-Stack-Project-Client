import React, { useState, useEffect } from 'react';
import APIURL from '../helpers/enivronment';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';


const ReviewCreate = (props) => {
    const [filmTitle, setFilmTitle] = useState('');
    const [year, setYear] = useState('');
    const [director, setDirector] = useState('');
    const [overallThoughts, setOverallThoughts] = useState('');
    const [rating, setRating] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${APIURL}reviews/`, {
            method: 'POST',
            body: JSON.stringify({ review: { filmTitle: filmTitle, year: year, director: director, overallThoughts: overallThoughts, rating: rating } }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => {res.json()})
            .then((reviewFromRequest) => {
                console.log(reviewFromRequest);
                setFilmTitle('');
                setYear('');
                setDirector('');
                setOverallThoughts('');
                setRating('');
                props.fetchReviews();
            })
    }


    return (
        <>
            <h1 id="formTitle">-SUBMIT A REVIEW-</h1>
            <hr />
            <hr />
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="filmTitle">TITLE</Label>
                    <Input name="filmTitle" value={filmTitle} placeholder="Enter Title" onChange={(e) => setFilmTitle(e.target.value)} required />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="year">YEAR OF RELEASE</Label>
                    <Input name="year" value={year} placeholder="Enter Year" onChange={(e) => setYear(e.target.value)} required />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="director">DIRECTOR</Label>
                    <Input name="director" value={director} placeholder="Enter Name of Director" onChange={(e) => setDirector(e.target.value)} required />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="overallThoughts">OVERALL THOUGHTS</Label>
                    <Input type="textarea" name="overallThoughts" value={overallThoughts} placeholder="Enter Your Thoughts on the Film" onChange={(e) => setOverallThoughts(e.target.value)} required />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="rating">RATING</Label>
                    <Input type="select" name="rating" value={rating} onChange={(e) => setRating(e.target.value)} required>
                        <option>1 (Horrible)</option>
                        <option>2 (Bad)</option>
                        <option>3 (Decent)</option>
                        <option>4 (Good)</option>
                        <option>5 (Fantastic)</option>
                    </Input>
                </FormGroup>
                <Button type="submit" variant="contained" color="primary" startIcon={<SendIcon />} >SUBMIT REVIEW</Button>
            </Form>
        </>
    )
}



export default ReviewCreate;