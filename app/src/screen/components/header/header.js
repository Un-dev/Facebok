import facebok from '../../../utils/facebok.png'
import './header.css'

export default function Header(){
    return(
        <header>
            <img id='logo' src={facebok} alt='logo facebok'/>
            <h1 id='header title'>facebok</h1>
        </header>
    )
}