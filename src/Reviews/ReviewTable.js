import React from 'react';
import APIURL from '../helpers/enivronment';
import {Table} from 'reactstrap';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';


const ReviewTable = (props) => {


    const deleteReview = (review) => {
        fetch(`${APIURL}reviews/${review.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchReviews())
    };


const reviewMapper = () => {
    return props.reviews.map((review, index) => {
        return (
            <tr key={index}>
                <th scope="row">{review.owner}</th>
                <td>{review.filmTitle}</td>
                <td>{review.year}</td>
                <td>{review.director}</td>
                <td>{review.overallThoughts}</td>
                <td>{review.rating}</td>
                <td>
                    <Tooltip title="DELETE">
                    <IconButton variant="contained" color="secondary" onClick={() => {deleteReview(review)}}><DeleteIcon/></IconButton>
                    </Tooltip>
                    <Tooltip title="UPDATE">
                    <IconButton variant="contained" color="primary" onClick={() => {props.editUpdateReview(review); props.updateOn()}} ><EditIcon/></IconButton>
                    </Tooltip>
                </td>
            </tr>
        )
    })
};


    return (
        <>
        <h1 id="tableTitle">-YOUR REVIEWS-</h1>
        <hr/>
        <hr/>
        <Table dark hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>YEAR</th>
                    <th>DIRECTOR</th>
                    <th>THOUGHTS</th>
                    <th>RATING</th>
                </tr>
            </thead>
            <tbody>
                {reviewMapper()}
            </tbody>
        </Table>
        </>
    )
}



export default ReviewTable;