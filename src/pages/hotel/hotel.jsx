import NavBar from '../../components/nav-bar/nav-bar';
import SearchBar from '../../components/search-bar/search-bar';
import style from './hotel.module.css'

// import hotels from '../../data/hotel.json'
import HotelItem from './hotel-item';

import { useEffect, useState } from 'react';
import {  useSelector } from 'react-redux';
import axios from 'axios';

import { Link } from 'react-router-dom';


const Hotel = () => {


    const country = useSelector(state => state.hotels.country);


    // TODO: remplacer hotels2 par hotels et supprimer l'import : hotels des data
    const [hotels, setHotels] = useState([]);     

    useEffect(() => {
        if (country === "") {
            axios.get('http://localhost:8080/api/hotels')
                .then((response) => {
                    console.log(response.data.hotels);
                    setHotels(response.data.hotels)
                })
        }
        else {
            axios.get(`http://localhost:8080/api/hotels?country=${country}`)
                .then((response) => {
                    console.log(response.data.hotels);
                    setHotels(response.data.hotels)
                })
        }
    }, [country]);

    return (
        <div className={style.ensemblehotel} >
            <NavBar />
            <SearchBar />
            
            <div>
                <h1 className={style.hotel}>Hôtels</h1>
                <Link to='/hotelAjout'><button className={style.adminButton}>Ajouter un hôtel</button></Link>
                <div className={style.hotelframe}>
                    {hotels.map(hotel=><HotelItem  key={hotel._id} {...hotel}/>)}
                </div>
            </div>
        </div>
    );
};



export default Hotel;