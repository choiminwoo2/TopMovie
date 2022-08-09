import Image from 'next/image';
import styles from './header.module.css'
import Logo from '../../assets/TopMovies.png'
const header = () => {
    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                <h2>TopMovies</h2>
            </div>
            <div></div>
        </header>
    )
}


export default header;