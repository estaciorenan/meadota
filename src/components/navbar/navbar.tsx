import style from './navbar.module.css';
import Link from 'next/link';


export default function Navbar() {


    return (
        <>
            <div className={style['navbar']}>
                <img src="./media/logo.png" alt="logomarca da MeAdota" className={style['logo']} />
                <div className={style['navbar-menu']}>
                    <ul>
                        <li>
                            <Link href="">Quem Somos</Link>
                        </li>
                        <li>
                            <Link href="">Nossos Parceiros</Link>
                        </li>
                        <li>
                            <Link href="">Contato</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}