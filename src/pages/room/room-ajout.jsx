import { useForm } from 'react-hook-form';
import axios from 'axios';

import style from '../hotel/hotel-ajout.module.css';
import { useNavigate, useParams } from 'react-router-dom';

const RoomAjout = () => {

    const { idHotel } = useParams();

    const { handleSubmit, register } = useForm();
    const navigate = useNavigate();
    const onRegisterRoom = (data) => {
        console.log(data);    // data contient tout ce qu'il y a dans register
        data.hotel = idHotel;
        console.log(data);

        axios.post('http://localhost:8080/api/chambres', data)
            .then(function (response) {
                // console.log(response);
                navigate(`/chambres/${idHotel}`);
                // navigate(`/chambres/${_id}`)
            })
            .catch(function (error) {
                // console.log(error);
            });

    }
    
    return (
        <>
            <div  className={style.loginContainer}>
                <form onSubmit={handleSubmit(onRegisterRoom)}>
                    <h1>Ajouter une chambre</h1>
                    <input id="nom" type="text" placeholder="Nom de la chambre" {...register('nom')} />
                    <input id="descriptionCourte" type="text" placeholder="Description courte" {...register('descriptionCourte')} />
                    <input id="descriptionLongue" type="text" placeholder="Description longue" {...register('descriptionLongue')} />
                    {/* <input id="hotel" type="text" placeholder="Identifiant hôtel" {...register('hotel')} /> */}
                    <input id="type" type="text" placeholder="Type" {...register('type')} />
                    <input id="nombreDePersonnes" type="number" placeholder="Nombre de personnes" {...register('nombreDePersonnes')} />
                    <input id="prix" type="number" placeholder="Prix en euros" {...register('prix')} />
                    <input id="salleDeBain" type="number" placeholder="Nombre de salles de bain" {...register('salleDeBain')} />
                    <input id="nombreDeWc" type="number" placeholder="Nombre de wc" {...register('nombreDeWc')} />

                    <article>
                        <div>
                            <label htmlFor='balcon'>Balcon</label>
                            <input id="options.balcon" type="checkbox" {...register('options.balcon')} />
                        </div>
                        <div>
                            <label htmlFor='airConditione'>Air conditionné</label>
                            <input id="options.airConditione" type="checkbox" {...register('options.airConditione')} />
                        </div>
                        <div>
                            <label htmlFor='wifi'>Wifi</label>
                            <input id="options.wifi" type="checkbox" {...register('options.wifi')} />
                        </div>
                        <div>
                            <label htmlFor='minibar'>Mini bar</label>
                            <input id="options.minibar" type="checkbox" {...register('options.minibar')} />
                        </div>
                        <div>
                            <label htmlFor='animaux'>Animaux</label>
                            <input id="options.animaux" type="checkbox" {...register('options.animaux')} />
                        </div>
                        <div>
                            <label htmlFor='tv'>TV</label>
                            <input id="options.tv" type="checkbox" {...register('options.tv')} />
                        </div>
                        <div>
                            <label htmlFor='dejeuner'>Déjeuner</label>
                            <input id="options.dejeuner" type="checkbox" {...register('options.dejeuner')} />
                        </div>
                        {/* <div>
                            <label htmlFor='disponible'>Disponible</label>
                            <input id="options.disponible" type="checkbox" {...register('options.disponible')} />
                        </div> */}
                        <div>
                            <label htmlFor='chambrestatus'>Status de la chambre</label>
                            <input id="options.chambrestatus" type="checkbox" {...register('options.chambrestatus')} />
                        </div>
                    </article>
                    {/* <input id="dateDebut" type="text" placeholder="Date début réservation"  {...register('dateDebut')} /> */}
                    {/* <input id="dateFin" type="text" placeholder="Date fin réservation"  {...register('dateFin')} /> */}
                    <input id="image" type="text" placeholder="URL image"  {...register('image')} />
                    
                    {/* <Link to ='/hotels'><button type="submit">Ajouter</button></Link> */}

                    <button type='submit'>Ajouter</button>

                    {/* {errorMsg && (
                        <p>{errorMsg}</p>
                        )} */}
                </form>
            </div>
        </>
    );
};

export default RoomAjout;