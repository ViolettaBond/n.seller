import styles from './adminSaler.module.scss';
import { useEffect, useState } from 'react';
import { Photos } from '../../photo';
import { Link } from 'react-router-dom';
import PopUp from '../components/page_seller/popUp/popUp';
import MainUsers from '../components/page_users/mainPage/mainUsers';

function MainSaler() {
    const [tariffs, setTariffs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/tariffs')
            .then((res) => res.json())
            .then((data) => setTariffs(data));
    }, []);

    const [isRegPopupOpen, setIsRegPopupOpen] = useState(false);

    const handleOpenReg = (e) => {
        e.preventDefault();
        setIsRegPopupOpen(true);
    };

    const handleCloseReg = () => {
        setIsRegPopupOpen(false);
    };
    return (
        <>
            <header className={styles.blackHeader}>
                <div className={styles.headerMain}>
                    <Link to="/mainUsers">
                        <h2>
                            N<span>.</span>SELLER
                        </h2>
                    </Link>

                    <ul>
                        <li>Маркетплейс</li>
                        <li>Про нас </li>
                        <li>Преимущества</li>
                        <li>Тарифы</li>
                    </ul>

                    <Link to="/registrationSalesman">
                        {' '}
                        <button>Войти</button>{' '}
                    </Link>
                </div>
            </header>

            <section className={styles.headerBottom}>
                <div className={styles.bottomText}>
                    <div className={styles.textButtonNovo}>
                        <div className={styles.textNovo}>
                            <h4>Novo - маркетплейс техники</h4>
                            <p>Продавай технику быстро и удобно!</p>
                        </div>
                        <button>стать продавцом на Novo</button>
                    </div>
                </div>
            </section>

            <section className={styles.aboutUs}>
                <div className={styles.aboutMain}>
                    <div className={styles.textAboutMain}>
                        <h4>Про компанию</h4>
                        <h2>NOVO - торговая площадка коммерческого транспорта и тяжелой техники</h2>
                    </div>
                    <div className={styles.hoverBlock}>
                        <div className={styles.hoverCard}>
                            <img src={Photos.hover1} alt="" />
                            <p>Коммерческий транспорт</p>
                        </div>
                        <div className={styles.hoverCard}>
                            <img src={Photos.hover2} alt="" />
                            <p>Сельхоз техника</p>
                        </div>
                        <div className={styles.hoverCard}>
                            <img src={Photos.hover3} alt="" />
                            <p>Строительная техника</p>
                        </div>
                        <div className={styles.hoverCard}>
                            <img src={Photos.hover4} alt="" />
                            <p>Складское оборудование</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.features}>
                <div className={styles.featuresRow}>
                    <div className={styles.featuresText}>
                        <p className={styles.text1}>Понятный мессенджер</p>
                        <p className={styles.text2}>Удобный дизайн </p>
                        <p className={styles.text3}>Круглосуточная поддержка</p>
                    </div>
                    <div className={styles.floorCard}>
                        <div className={styles.floor1}>
                            <img src={Photos.floor1} alt="" />
                        </div>
                        <div className={styles.floor2}>
                            <img src={Photos.floor2left} alt="" />
                            <img src={Photos.floor2right} alt="" />
                        </div>
                        <div className={styles.floor3}>
                            <img src={Photos.floor3left} alt="" />
                            <img src={Photos.floor3right} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.tariff}>
                <div className={styles.tariffMain}>
                    <div className={styles.tariffWrapper}>
                        <p className={styles.tariffSubtitle}>Тарифы и цены</p>
                        <h2 className={styles.tariffMainTitle}>
                            Стань продавцом сегодня и получи 10 объявлений бесплатно!
                        </h2>

                        <div className={styles.tariffContainer}>
                            {tariffs.map((tariff) => (
                                <div key={tariff.id} className={styles.tariffItem}>
                                    <div className={styles.tariffTextIcon}>
                                        <img src={tariff.icon_tariff} />
                                        <h3 className={styles.tariffTitle}>{tariff.plan}</h3>
                                    </div>

                                    <div className={styles.tariffTextPrice}>
                                        <p className={styles.tariffValue}>{tariff.price}</p>
                                        <p className={styles.tariffLimit}>{tariff.limit}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.tariffCta}>
                        <img src={Photos.iphone} alt="" className={styles.tariffCtaImg} />
                        <div className={styles.tariffCtaContent}>
                            <div className={styles.tariffCtaContentCenter}>
                                <h2 className={styles.tariffCtaTitle}>
                                    Хотите размещать больше 50-ти объявлений в месяц?
                                </h2>
                                <p className={styles.tariffCtaText}>
                                    Мы предложим индивидуальные условия сотрудничества!
                                </p>
                                <button className={styles.tariffCtaBtn}>отдел продаж</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.startSelling}>
                <div className={styles.container}>
                    <h2>Начать продавать легко!</h2>
                    <div className={styles.steps}>
                        <div className={styles.stepRight}>
                            <img src={Photos.registr} alt="" className={styles.stepImage} />
                            <div className={styles.stepContent}>
                                <p className={styles.stepNumber}>Шаг первый</p>
                                <h4 className={styles.stepTitle}>Регистрация</h4>
                            </div>
                        </div>

                        <div className={styles.step}>
                            <div className={styles.stepContent}>
                                <p className={styles.stepNumber}>Шаг второй</p>
                                <h4 className={styles.stepTitle}>Выбор пакета</h4>
                            </div>
                            <img src={Photos.packageI} alt="" className={styles.stepImage} />
                        </div>

                        <div className={styles.stepRight}>
                            <img src={Photos.advertisement} alt="" className={styles.stepImage} />
                            <div className={styles.stepContent}>
                                <p className={styles.stepNumber}>Шаг третий</p>
                                <h4 className={styles.stepTitle}>Размещение объявления</h4>
                            </div>
                        </div>
                    </div>{' '}
                    <div className={styles.btnLink} onClick={handleOpenReg}>
                        <a href="#" onClick={(e) => e.preventDefault()}>
                            <button className={styles.ctaButton}>стать продавцом</button>
                        </a>
                        <div className={styles.linkBorder}>
                            <img src={Photos.arrowR} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <PopUp
                isOpen={isRegPopupOpen}
                onClose={handleCloseReg}
                onSuccess={(data) => console.log('Регистрация успешна:', data)}
            />
        </>
    );
}

export default MainSaler;
