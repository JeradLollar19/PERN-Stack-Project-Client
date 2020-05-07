import React, { useState } from 'react';
import { FormGroup, Input, Form, Label, Modal, ModalBody } from 'reactstrap';
import Button from '@material-ui/core/Button';


const ReviewEdit = (props) => {
    const [editTitle, setEditTitle] = useState(props.reviewToUpdate.filmTitle);
    const [editYear, setEditYear] = useState(props.reviewToUpdate.year);
    const [editDirector, setEditDirector] = useState(props.reviewToUpdate.director);
    const [editThoughts, setEditThoughts] = useState(props.reviewToUpdate.overallThoughts);
    const [editRating, setEditRating] = useState(props.reviewToUpdate.rating);


    const reviewUpdate = (event, review) => {
        event.preventDefault();
        fetch(`http://localhost:3000/reviews/${props.reviewToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({ review: { filmTitle: editTitle, year: editYear, director: editDirector, overallThoughts: editThoughts, rating: editRating } }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => {
            props.fetchReviews();
            props.updateOff();
        })
    };


    return (
        <Modal isOpen={true}>
            <h3 id="editHeader">-EDIT YOU REVIEW-</h3>
            <ModalBody>
                <hr />
                <hr />
                <Form onSubmit={reviewUpdate}>
                    <FormGroup>
                        <Label htmlFor="filmTitle">TITLE</Label>
                        <Input name="filmTitle" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="year">YEAR OF RELEASE</Label>
                        <Input name="year" value={editYear} onChange={(e) => setEditYear(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="director">DIRECTOR</Label>
                        <Input name="director" value={editDirector} onChange={(e) => setEditDirector(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="overallThoughts">OVERALL THOUGHTS</Label>
                        <Input type="textarea" name="overallThoughts" value={editThoughts} onChange={(e) => setEditThoughts(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="rating">RATING</Label>
                        <Input type="select" name="rating" value={editRating} onChange={(e) => setEditRating(e.target.value)}>
                            <option>1 (Horrible)</option>
                            <option>2 (Bad)</option>
                            <option>3 (Decent)</option>
                            <option>4 (Good)</option>
                            <option>5 (Fantastic)</option>
                        </Input>
                    </FormGroup>
                    <Button variant="contained" type="submit" color="primary">UPDATE</Button>
                    <Button variant="contained" type="cancel" color="secondary">CANCEL</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
};


export default ReviewEdit;