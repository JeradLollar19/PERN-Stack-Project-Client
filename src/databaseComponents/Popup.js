import React from 'react';
import Button from '@material-ui/core/Button';


const Popup = ({selected, closePopup}) => {

    return (
        <section className="popup">
            <div className="content">
                <h2>-{selected.Title}-<span>({selected.Year})</span></h2>
                <p className="rating">RATING-{selected.imdbRating}</p>
                <div className="plot">
                    <img src={selected.Poster}/>
                    <p>{selected.Plot}</p>
                </div>
                <Button variant="contained" color="secondary" size="large" onClick={closePopup}>CLOSE</Button>
            </div>
        </section>
    )
}


export default Popup;