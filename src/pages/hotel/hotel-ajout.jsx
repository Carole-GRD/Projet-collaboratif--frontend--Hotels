// import hotels from '../../data/hotel.json'
// import HotelItem from './hotel-item';
// import { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import axios from 'axios';

import style from './hotel-ajout.module.css';
import { useNavigate } from 'react-router-dom';

const HotelAjout = () => {

    const { handleSubmit, register } = useForm();
    const navigate = useNavigate();
    const onRegisterHotel = (data) => {
        console.log(data);    // data contient tout ce qu'il y a dans register

        axios.post('http://localhost:8080/api/hotels', data)
            .then(function (response) {
                console.log(response);
                navigate('/hotels')
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <>
            <div className={style.loginContainer}>
                <form onSubmit={handleSubmit(onRegisterHotel)}>
                    <h1>Ajouter un hôtel</h1>
                    <input id="nom" type="text" placeholder="Nom de l'hôtel" {...register('nom')} />
                    <input id="etoiles" type="number" placeholder="Nombre d'étoiles" {...register('etoiles')} />
                    <input id="adresse.CP" type="text" placeholder="Code postal" {...register('adresse.CP')} />
                    <input id="adresse.numero" type="text" placeholder="Numéro" {...register('adresse.numero')} />
                    <input id="adresse.rue" type="text" placeholder="Rue" {...register('adresse.rue')} />
                    <input id="adresse.pays" type="text" placeholder="Pays" {...register('adresse.pays')} />
                    <input id="telephone" type="text" placeholder="Numéro de téléphone" {...register('telephone')} />
                    <input id="email" type="email" placeholder="Email" {...register('email')} />
                    <input id="nombreChambres" type="text" placeholder="Nombre de chambres" {...register('nombreChambres')} />
                    <article>
                        <div>
                            <label htmlFor='piscine'>Piscine</label>
                            <input id="piscine" type="checkbox" {...register('piscine')} />
                        </div>
                        <div>
                            <label htmlFor='voiturier'>Voiturier</label>
                            <input id="voiturier" type="checkbox" {...register('voiturier')} />
                        </div>
                        <div>
                            <label htmlFor='roomService'>Room service</label>
                            <input id="roomService" type="checkbox" {...register('roomService')} />
                        </div>
                    </article>
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

export default HotelAjout;