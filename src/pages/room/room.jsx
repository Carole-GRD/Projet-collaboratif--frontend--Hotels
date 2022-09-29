

import NavBar from '../../components/nav-bar/nav-bar';
import SearchBar from '../../components/search-bar/search-bar';
// import style from './room-description.module.css'
import style from '../hotel/hotel.module.css'
// import chambres from '../../data/chambre.json'
import RoomItem from './room-item';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Room = () => {
    
    const { idHotel } = useParams();

    const [listChambres, setListChambres] = useState([]);

    useEffect(() => {
        
        // console.log(chambres.filter(c => c.hotel === idHotel));
        // TODO: requête axios à la place du filter
        // let newList = listChambres.filter(c => c.hotel === idHotel);    
        // setListChambres(newList)

        axios.get(`http://localhost:8080/api/chambres?hotel=${idHotel}`)
            .then((response) => {
                console.log(response);
                setListChambres(response.data.chambres);
                
            })
    
    }, [idHotel]);

    return (
        <div className={style.ensemblehotel} >
            <NavBar />
            <SearchBar />
            <div>
                <h1 className={style.hotel}>Chambres</h1>
                <Link to={`/roomAjout/${idHotel}`}><button className={style.adminButton}>Ajouter une chambre</button></Link>
                <div className={style.hotelframe}>
                    {listChambres.map(chambre => <RoomItem  key={chambre._id} {...chambre}/>)}
                </div>

                
            </div>
            
        </div>
    );
};



export default Room;