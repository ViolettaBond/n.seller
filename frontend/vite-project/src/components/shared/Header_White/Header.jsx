import styles from './headerW.module.scss';
import { Photos } from '../../../../photo';
import { Link } from 'react-router-dom';

function Header_White() {
    return (
        <>
            <header className={styles.headerWhite}>
                <div className={styles.headerContainer}>
                    <div className={styles.settings}>
                        <Link to="/">
                            <h2 className={styles.logo}>NOVO SELLER</h2>
                        </Link>
                        <div className={styles.settingLanguage}>
                            <span>Язык</span>
                            <img src={Photos.arrowDown} alt="" className={styles.settingIcon} />
                        </div>
                        <div className={styles.setting}>
                            <span>Валюта</span>
                            <img src={Photos.arrowDown} alt="" className={styles.settingIcon} />
                        </div>
                    </div>

                    <button className={styles.switchBtn}>Перейти на NOVO</button>
                </div>
            </header>
        </>
    );
}

export default Header_White;
