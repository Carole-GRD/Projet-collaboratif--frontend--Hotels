import { Link } from 'react-router-dom';
import style from '../hotel/hotel-item.module.css'
import axios from 'axios';

const RoomItem = ({ image, _id, nom, descriptionCourte, prix, nombreDePersonnes }) => {

    const onDelete = () => {
        console.log(_id, nom);
        // axios.delete('http://localhost:8080/api/chambres', id)
        axios.delete(`http://localhost:8080/api/chambres/${_id}`)
            .then(function (response) {
                console.log(response);
            })
            .catch()
    }

    return (
        <article className={style.blablaRoomItem}>
            <Link to={`/description/${_id}`} className={style.linkSoulignement}>

                <img src={image} alt={nom} />
                <div className={style.descriptionRoomItem}>
                    <h3>{nom}</h3>
                    <p>{descriptionCourte}</p>
                    <p>Nombre de personnes : {nombreDePersonnes}</p>
                    <p>Prix : {prix} € / nuit</p>
                </div>
            </Link>
            <div className={style.adminButtonRoomItem}>
                <Link to={`/chambreModification/${_id}`}><button>Modifier la chambre</button></Link>
                <button type="submit" onClick={onDelete}>Supprimer la chambre</button>
            </div>
        </article>
    );
};

export default RoomItem;