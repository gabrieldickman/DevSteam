import style from './navbar.module.css'
import {BsCart4} from 'react-icons/bs'
import Logo from '@/components/logo/logo'
import Input from '@/components/forms/input/input'

export default function Navbar(){
    return (
        <nav className={style.navbar}>
            <Logo />
            <div className={style.search}>
                <Input type="text" placeholder="Buscar jogos" fullWidth/>
            </div>
            <BsCart4 size={45} />
        </nav>
    )
}