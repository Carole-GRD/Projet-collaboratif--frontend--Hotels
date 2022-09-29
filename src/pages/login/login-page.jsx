import Logo from '../../components/logo/logo';
import style from './login-page.module.css';
import { Link } from 'react-router-dom';

// import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/actions/auth-action';
import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // ------------------------------------------
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    // }


    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch();
    const errorMsg = useSelector(state => state.auth.errorMsg);
    const isConnected = useSelector(state => state.auth.isConnected);
    // on regarde constamment la valeur dans le store et dès que la valeur change, cela déclenche le useEffect


    const navigate = useNavigate();

    const onLogin = (data) => {
        // console.log('login');
        dispatch(loginUser(data));
        reset();
    }

    useEffect(() => {
        if (isConnected) {
            navigate('/a-propos');
        }
    }, [isConnected, navigate]);

    return (
        <>
            <Logo />
            <div className={style.loginContainer}>
                <form onSubmit={handleSubmit(onLogin)}>
                    <h1>Login</h1>
                    {/* <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /> */}
                    {/* <input type="text" placeholder="Mot de passe" value={password} onChange={e => setPassword(e.target.value)} /> */}
                    <input id="credential" type="text" placeholder="Pseudo ou Email" {...register('credential')} />
                    <input id="password" type="password" placeholder="Mot de passe"  {...register('password')} />
                    {/* <Link to ='/a-propos'><button type="submit">Connexion</button></Link> */}
                    <button type="submit">Connexion</button>
                    <Link to='/enregistrement'>S'inscrire</Link>

                    {errorMsg && (
                        <p>{errorMsg}</p>
                    )}
                </form>
            </div>
        </>
    );
};
export default LoginPage;