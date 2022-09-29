import style from "./logo.module.css"
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <div className={style.logo}>

            {/* <Link to ='/a-propos'> <p className={style.click}>Logo</p></Link> */}
            <Link to='/a-propos'> <p className={style.click}>Logo</p></Link>

        </div>
    );
};

export default Logo;