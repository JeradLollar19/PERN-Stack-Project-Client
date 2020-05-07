import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ReviewCreate from './ReviewCreate';
import ReviewTable from './ReviewTable';
import ReviewEdit from './ReviewEdit';



const ReviewIndex = (props) => {
    const [reviews, setReviews] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [reviewToUpdate, setReviewToUpdate] = useState({});


    const fetchReviews = () => {
        fetch('http://localhost:3000/reviews/myOwn', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
            .then((reviewData) => {
                setReviews(reviewData)
            })
    };

    useEffect(() => {
        fetchReviews();
    }, [])


    const editUpdateReview = (review) => {
        setReviewToUpdate(review);
        console.log(review);
    }

    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false);
    }



    return (
        <Container>
            <Row>
                <Col>
                    <ReviewCreate fetchReviews={fetchReviews} token={props.token} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <ReviewTable reviews={reviews} editUpdateReview={editUpdateReview} updateOn={updateOn} fetchReviews={fetchReviews} token={props.token} />
                </Col>
                {updateActive ? <ReviewEdit reviewToUpdate={reviewToUpdate} updateOff={updateOff} token={props.token} fetchReviews={fetchReviews} /> : <></>}
            </Row>
        </Container>
    )
};


export default ReviewIndex;