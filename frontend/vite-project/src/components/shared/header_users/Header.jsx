import styles from './headerU.module.scss';
import { Photos } from '../../../../photo';
import { Link } from 'react-router-dom';

function Header_White() {
    return (
        <>
            <header className={styles.headerWhite}>
                <div className={styles.headerContainer}>
                    <div className={styles.settings}>
                        <Link to="/">
                            <h2 className={styles.logo}>NOVO</h2>
                        </Link>
                        <div className={styles.settingLanguage}>
                            <span>Язык</span>
                            <img src={Photos.arrowDown} alt="" className={styles.settingIcon} />
                        </div>
                        <div className={styles.setting}>
                            <span>Евро</span>
                            <img src={Photos.arrowDown} alt="" className={styles.settingIcon} />
                        </div>

                        <div className={styles.setting}>
                            <span>Поиск</span>
                        </div>
                    </div>

                    <div className={styles.btnHeader}>
                        <Link to={'/registrationUsers'}>
                            <button>Мой профиль</button>
                        </Link>
                        <button className={styles.switchBtn}>Стать продавцом</button>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header_White;
