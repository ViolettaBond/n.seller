import { useState, useEffect } from 'react';
import { Photos } from '../../../../photo';
import styles from './myAds.module.scss';
import AddCarForm from './AddCarForm';
import { Link } from 'react-router-dom';

function MyAds() {
    const [carAds, setCarAds] = useState([]);
    const [viewMode, setViewMode] = useState('list');

    const loadAds = () => {
        fetch('http://localhost:3000/api/car')
            .then((response) => response.json())
            .then((data) => setCarAds(data))
            .catch((error) => console.log('Ошибка загрузки:', error));
    };

    useEffect(() => {
        if (viewMode === 'list') {
            loadAds();
        }
    }, [viewMode]);

    const handleAddClick = () => {
        setViewMode('add');
    };

    const handleCancel = () => {
        setViewMode('list');
    };

    const deleteAd = (id) => {
        if (window.confirm('Точно удалить это объявление?')) {
            fetch(`http://localhost:3000/api/car/${id}`, {
                method: 'DELETE',
            })
                .then((response) => {
                    if (response.ok) {
                        setCarAds(carAds.filter((car) => car.id !== id));
                        alert('Объявление удалено!');
                    } else {
                        alert('Ошибка при удалении');
                    }
                })
                .catch((error) => {
                    console.log('Ошибка:', error);
                    alert('Не получилось удалить');
                });
        }
    };

    return (
        <section className={styles.carSection}>
            <div className={styles.mainBlock}>
                {viewMode === 'list' ? (
                    <h2>
                        Использовано объявлений: <span>{carAds.length}/10</span>
                    </h2>
                ) : (
                    <h2>Добавление нового объявления</h2>
                )}

                {viewMode === 'list' && (
                    <div className={styles.searchContainer}>
                        <img src={Photos.search} alt="search" className={styles.searchIcon} />
                        <input
                            type="text"
                            placeholder="Поиск по объявлениям"
                            className={styles.searchInput}
                        />
                        <button className={styles.addButton} onClick={handleAddClick}>
                            <p>+ ДОБАВИТЬ ОБЪЯВЛЕНИЕ</p>
                        </button>
                    </div>
                )}

                {viewMode === 'list' ? (
                    <div className={styles.carBlock}>
                        {carAds.map((item) => (
                            <div className={styles.card} key={item.id}>
                                <div className={styles.cardInner}>
                                    <div className={styles.imageWrapper}>
                                        <img src={item.img_car} alt="" />
                                    </div>
                                    <div className={styles.titleBlock}>
                                        <p className={styles.bodyType}>{item.body_type}</p>
                                        <p className={styles.carName}>{item.name_car}</p>
                                    </div>
                                    <ul className={styles.specsList}>
                                        <li>{item.years_car}</li>
                                        <li>{item.size_car}</li>
                                        <li>{item.distance_traveled}</li>
                                    </ul>
                                    <div className={styles.footer}>
                                        <div className={styles.sellerInfo}>
                                            <div className={styles.locationIcon}>
                                                <img src={Photos.location} alt="location" />
                                                <div className={styles.sellerDetails}>
                                                    <p>{item.seller_name}</p>
                                                    <p>{item.seller_country}</p>
                                                </div>
                                            </div>
                                            <div className={styles.priceBlock}>
                                                <div className={styles.price}>
                                                    <p>
                                                        {item.price}
                                                        <span className={styles.currency}>€</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.actionsBtn}>
                                            <Link to="/redact">
                                                <button className={styles.editBtn}>
                                                    Редактировать
                                                </button>
                                            </Link>

                                            <button
                                                className={styles.deleteBtn}
                                                onClick={() => deleteAd(item.id)}>
                                                <img src={Photos.deleteI} alt="" /> Удалить
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <AddCarForm onCancel={handleCancel} />
                )}

                {viewMode === 'list' && <button className={styles.addAds}>Загрузить ещё</button>}
            </div>
        </section>
    );
}

export default MyAds;
