import { useState, useEffect } from 'react';
import styles from './subscription.module.scss';

function SubscriptionPage() {
    const [allTariffs, setAllTariffs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3000/api/tariffs')
            .then((res) => res.json())
            .then((data) => {
                setAllTariffs(data);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className={styles.loading}>Загрузка...</div>;

    const starter = allTariffs.find((t) => t.id === 1);
    const premiumAndUltimate = allTariffs.filter((t) => t.id === 2 || t.id === 3);

    return (
        <div className={styles.subscriptionPage}>
            <div className={styles.container}>
                <div className={styles.starterSection}>
                    <h2>Ваш тарифный план:</h2>
                    <div className={styles.starterMain}>
                        {starter && <TariffCard tariff={starter} type="starter" />}
                        <div className={styles.subscriptionDates}>
                            <div className={styles.paymentInfo}>
                                <div className={styles.date}>
                                    <h4>Оплачено:</h4>
                                    <p>15.10.2020</p>
                                </div>
                                <div className={styles.date}>
                                    <h4>Действителен до:</h4>
                                    <p>15.10.2020</p>
                                </div>
                            </div>

                            <div className={styles.planNotice}>
                                <p>
                                    * Вы выбрали бесплатный пакет Starter, который действует до {}
                                    <span>15.10.2021.</span> С <span>15.09.21</span> этот пакет
                                    будет стоить <span>499 гривен / месяц</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.premiumSection}>
                    <h2>Другие тарифные планы:</h2>
                    <div className={styles.tariffsGrid}>
                        {premiumAndUltimate.map((tariff) => (
                            <TariffCard key={tariff.id} tariff={tariff} type="premium" />
                        ))}
                        <div className={styles.contactStyle}>
                            <h2>
                                Для размещения более 50-ти объявлений в месяц, свяжитесь с отделом
                                продаж
                            </h2>
                            <button>
                                <p>отдел продаж</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function TariffCard({ tariff, type }) {
    return (
        <div className={`${styles.tariffCard} ${styles[type]}`}>
            <div className={styles.cardHeader}>
                <img src={`/${tariff.icon_tariff}`} alt={tariff.plan} />
                <h3>{tariff.plan}</h3>
            </div>

            <div className={styles.cardBody}>
                <div className={styles.priceBlock}>
                    <span className={styles.price}>{tariff.price}</span>
                    {tariff.price !== 'Бесплатно' && <span className={styles.currency}></span>}
                </div>

                <p className={styles.limit}>{tariff.limit}</p>

                {tariff.dollar && (
                    <p className={styles.subscription}>
                        ${tariff.dollar} {tariff.month}
                    </p>
                )}
            </div>
        </div>
    );
}

export default SubscriptionPage;
