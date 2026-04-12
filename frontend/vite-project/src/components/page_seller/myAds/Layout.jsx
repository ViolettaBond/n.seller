import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { Photos } from '../../../../photo';
import styles from './Layout.module.scss';
import Header_White from '../../shared/Header_White/Header';
import Footer from '../../shared/Footer/footer';
import { useMemo } from 'react';

function Layout() {
    const location = useLocation();

    const pageTitle = useMemo(() => {
        switch (location.pathname) {
            case '/my-ads':
                return 'Мои объявления';
            case '/my-ads/messages':
                return 'Сообщения';
            case '/my-ads/subscription':
                return 'Управление подпиской';
            case '/my-ads/profile':
                return 'Настройки профиля';
            default:
                return 'Мои объявления';
        }
    }, [location]);

    return (
        <>
            <Header_White />
            <section className={styles.myAdsNav}>
                <div className={styles.mainNav}>
                    <h2>{pageTitle}</h2>
                    <ul className={styles.userMenuList}>
                        <li className={styles.userMenuItem}>
                            <NavLink to="/my-ads">Мои объявления</NavLink>
                        </li>
                        <li className={styles.userMenuItem}>
                            <NavLink to="/my-ads/messages">
                                Сообщения <span>(4 новых)</span>
                            </NavLink>
                        </li>
                        <li className={styles.userMenuItem}>
                            <NavLink to="/my-ads/subscription">Управление подпиской</NavLink>
                        </li>
                        <li className={styles.userMenuItem}>
                            <img src={Photos.settings} alt="" />
                            <NavLink to="/my-ads/profile">Настройки профиля</NavLink>
                        </li>
                    </ul>
                </div>
            </section>
            <Outlet />

            <Footer />
        </>
    );
}

export default Layout;
