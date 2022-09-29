import style from './search-bar.module.css';

import { setCountry } from '../../store/actions/hotel-action';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

const SearchBar = () => {

    const { handleSubmit, reset, register } = useForm();
    const dispatch = useDispatch();

    const handleCountry = (data) => {
        // console.log(data);
        // console.log(data.country);
        dispatch(setCountry(data.country));
        // reset();
    }
    const resetCountry = () => {
        dispatch(setCountry(''));
        reset();
    }

    return (
        <form onSubmit={handleSubmit(handleCountry)} className={style.searchDivGeneral}>
            <div className={style.searchDiv}>
                <input id="country" type="text" placeholder="Pays,Ville..." {...register('country')} />
                <button type='submit'>Chercher</button>
                <button type='button' onClick={resetCountry}>Reset</button>
            </div>
        </form>

    );
};

export default SearchBar;