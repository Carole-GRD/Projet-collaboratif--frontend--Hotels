// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// import { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import hotels from '../../data/hotel.json';
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

import { Link } from 'react-router-dom';
import style from './hotel-item.module.css'
import axios from 'axios';

const HotelItem = ({ nom, etoiles, adresse, telephone, email, nombreChambres, piscine, voiturier, roomService, image, _id }) => {

    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // const { idHotel } = useParams();

    // const [listHotels, setListHotels] = useState([]);
    const onDelete = () => {
        console.log(_id, nom);
        // axios.delete('http://localhost:8080/api/hotels', id)
        axios.delete(`http://localhost:8080/api/hotels/${_id}`)
            .then()
            .catch()
    }
    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    return (
        <article className={style.blabla}>
            <Link to={`/chambres/${_id}`} className={style.linkSoulignement}>
                <img src={image} alt={nom} />
                <div className={style.description}>
                    <p>{nom}</p>
                    <p>{etoiles} étoiles</p>
                    <p>Piscine : {piscine ? "Oui" : "Non"}</p>
                    <p>Voiturier : {voiturier ? "Oui" : "Non"}</p>
                    <p>Room service : {roomService ? "Oui" : "Non"}</p>
                    <p>Adresse : {adresse.rue}, {adresse.numero}</p>
                    <p>Code postal :  {adresse.CP}</p>
                    <p>Pays :  {adresse.pays}</p>
                    <p>Téléphone : {telephone}</p>
                    <p>Email : {email}</p>
                    <p>Nbres chambres : {nombreChambres}</p>
                    <button>Voir les chambres</button>
                </div>
            </Link>
            {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
            <div className={style.adminButton}>
                <Link to={`/hotelModification/${_id}`}><button>Modifier l'hôtel</button></Link>
                <button type="submit" onClick={onDelete}>Supprimer l'hôtel</button>
            </div>
            {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        </article>
    );
};

export default HotelItem;