import React, {useState} from 'react';
import './DatabaseApp.css';
import Search from '../databaseComponents/Search';
import axios from 'axios';
import Results from '../databaseComponents/Results';
import Popup from '../databaseComponents/Popup';

const DatabaseApp = () => {
    const [state, setState] = useState({
        results: [],
        selected: {}
    });


    const apiUrl = "http://www.omdbapi.com/?apikey=718434de";

    const search = (e) => {
        if (e.key === "Enter") {
            axios(apiUrl + "&s=" + state.s).then(({data}) => {
                let results = data.Search;

                setState(prevState => {
                    return {...prevState, results: results}
                })
            });
        }
    }


    const handleInput = (e) => {
        let s = e.target.value;

        setState(prevState => {
            return {...prevState, s: s}
        });
    }


    const openPopup = id => {
        axios(apiUrl + "&i=" + id).then(({data}) => {
            let result = data;
            setState(prevState => {
                return {...prevState, selected: result}
            });
        });
    }


    
    const closePopup = () => {
        setState(prevState => {
            return {...prevState, selected: {}}
        });
    }


    return (
        <div>
            <header>
            <hr/>
            <hr/>
                <h1>-FILM DATABASE-</h1>
            </header>
            <main>
                <Search handleInput={handleInput} search={search}/>
                <Results results={state.results} openPopup={openPopup}/>

                {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup}/> : false}
            </main>
        </div>
    )
};



export default DatabaseApp;