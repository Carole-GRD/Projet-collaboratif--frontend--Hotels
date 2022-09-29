
import Logo from "../../components/logo/logo";
import style from './register-page.module.css';


// import { useState } from "react";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../store/actions/auth-action';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const RegisterPage = () => {
    
    // const [nom, setNom] = useState('');
    // const [prenom, setPrenom] = useState('');
    // const [email, setEmail] = useState('');
    // const [pays, setPays] = useState('');
    // const [telephone, setTelephone] = useState('');
    // const [motDePasse, setMotDePasse] = useState('');
    // --------------------------------------------------
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    // }

    const { register, handleSubmit,reset } = useForm();
    const dispatch = useDispatch();
    const errorMsg = useSelector(state => state.auth.errorMsg);
    const navigate = useNavigate();
    const isConnected = useSelector(state => state.auth.isConnected);


    useEffect(() => {
        if (isConnected) {
            navigate('/hotels');
        }
    }, [isConnected, navigate])

    const onRegister = (data) => {
        // console.log('register');
        dispatch(registerUser(data));
        reset();
    }

    return (
        <div>
            <Logo />
            <div className={style.registerContainer}>
                <form onSubmit={handleSubmit(onRegister)}>
                    <h1>Register</h1>
                    {/* <input type="text" placeholder="Nom" value={nom} onChange={e => setNom(e.target.value)} /> */}
                    <input id="pseudo" type="text" placeholder="Pseudo" {...register('pseudo')} />
                    <input id="lastname" type="text" placeholder="Nom" {...register('lastname')} />
                    <input id="firstname" type="text" placeholder="Prénom" {...register('firstname')} />
                    <input id="email" type="text" placeholder="Email" {...register('email')} />
                    <input id="country" type="text" placeholder="Pays" {...register('country')} />
                    <input id="phone" type="text" placeholder="Téléphone" {...register('phone')} />
                    <input id="password" type="password" placeholder="Mot de passe" {...register('password')} />
                    <button type="submit">S'inscrire</button>
                    {/* <button type="submit">S'inscrire</button> */}

                    {errorMsg && (
                        <p>{errorMsg}</p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;