import "./styles.css"
import mainImage from "./imgemblog.jpg"

function Header(){
    return(
        <header>
            <h1>Meu Blog!</h1>
            <img src={mainImage} alt="" />
        </header>
    );

}

export default Header;
