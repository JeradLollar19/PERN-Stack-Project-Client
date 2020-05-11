import React, { useState, useEffect } from 'react';
import APIURL from '../helpers/enivronment';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Rating from '@material-ui/lab/Rating';
import {makeStyles} from '@material-ui/core/styles';

const Styles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      '& > * + *': {
        marginTop: theme.spacing(1),
      },
    },
  }));


const ReviewCreate = (props) => {
    const [filmTitle, setFilmTitle] = useState('');
    const [year, setYear] = useState('');
    const [director, setDirector] = useState('');
    const [overallThoughts, setOverallThoughts] = useState('');
    const [rating, setRating] = useState();


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
                setRating();
                props.fetchReviews();
            })
    }

    const classes = Styles();


    return (
        <>
            <h1 id="formTitle">-SUBMIT A REVIEW-</h1>
            <hr />
            <hr />
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="filmTitle">TITLE:</Label>
                    <Input name="filmTitle" value={filmTitle} placeholder="Enter Title" onChange={(e) => setFilmTitle(e.target.value)} required />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="year">YEAR OF RELEASE:</Label>
                    <Input name="year" value={year} placeholder="Enter Year" onChange={(e) => setYear(e.target.value)} required />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="director">DIRECTOR:</Label>
                    <Input name="director" value={director} placeholder="Enter Name of Director" onChange={(e) => setDirector(e.target.value)} required />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="overallThoughts">OVERALL THOUGHTS:</Label>
                    <Input type="textarea" name="overallThoughts" value={overallThoughts} placeholder="Enter Your Thoughts on the Film" onChange={(e) => setOverallThoughts(e.target.value)} required />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="rating">RATING:</Label>
                    <Rating type="select" name="rating" value={rating} precision={0.5} size="large" onChange={(e) => setRating(e.target.value)} required/>
                </FormGroup>
                <Button type="submit" variant="contained" color="primary" startIcon={<SendIcon />} >SUBMIT REVIEW</Button>
            </Form>
        </>
    )
}



export default ReviewCreate;