import styles from './footer.module.scss';
import { Photos } from '../../../../photo';

function Footer() {
    return (
        <>
            <footer>
                <div className={styles.footerMain}>
                    <div className={styles.footerTop}>
                        <div className={styles.textLogo}>
                            <h2>N O V O</h2>
                            <p>Маркетплейс коммерчиского транспорта и тяжелой техники</p>
                        </div>
                        <div className={styles.textAbout}>
                            <h4>Покупателю</h4>
                            <div className={styles.textRow}>
                                <p>Служба поддержки</p>
                                <p>Стать продавцом</p>
                            </div>
                        </div>
                        <div className={styles.socNetworks}>
                            <h4>Следите за нами</h4>
                            <div className={styles.socNetIcon}>
                                <img src={Photos.facebook} />
                                <img src={Photos.instagram} alt="" />
                                <img src={Photos.youtube} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.footerBottom}>
                        <h3>© 2019–2020 Группа компаний «NOVO»</h3>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
