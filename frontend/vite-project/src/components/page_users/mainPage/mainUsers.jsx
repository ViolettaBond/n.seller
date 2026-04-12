import styles from './mainUsers.module.scss';
import { Link } from 'react-router-dom';
import { Photos } from '../../../../photo';

function MainUsers() {
    return (
        <>
            <section className={styles.mainUsers}>
                <div className={styles.blockHome}>
                    <div className={styles.searchCar}>
                        <div className={styles.leftBlock}>
                            <ul className={styles.navBlock}>
                                <li>Транспорт</li>

                                <li>Сельськое хозяйство</li>

                                <li>Строительство</li>

                                <li>Погрузочное оборудованиее</li>
                            </ul>

                            <div className={styles.inputSearch}>
                                <div className={styles.inputCar}>
                                    <label htmlFor="car">Марка</label>
                                    <input
                                        name="car"
                                        list="category-options"
                                        id="car"
                                        type="text"
                                    />
                                    <datalist id="category-options">
                                        <option value="Грузовики" />
                                    </datalist>
                                </div>
                                <div className={styles.inputCar}>
                                    <label htmlFor="car">Страна</label>
                                    <input name="car" list="country-options" id="car" type="text" />
                                    <datalist id="country-options">
                                        <option value="Франция" />
                                        <option value="Италия" />
                                        <option value="Германия" />
                                    </datalist>
                                </div>
                                <div className={styles.inputCar}>
                                    <label htmlFor="car">Категория</label>
                                    <input name="car" list="mark-options" id="car" type="text" />
                                    <datalist id="mark-options">
                                        <option value="Renault" />
                                    </datalist>
                                </div>
                                <div className={styles.inputCar}>
                                    <label htmlFor="car">Модель</label>
                                    <input name="car" list="model-options" id="car" type="text" />
                                    <datalist id="model-options">
                                        <option value="Premium 420HP" />
                                        <option value="Kangoo Z.E."></option>
                                        <option value="Dokker van"></option>
                                        <option value="Traffic"></option>
                                        <option value="New Master"></option>
                                    </datalist>
                                </div>
                                <div className={styles.inputCar}>
                                    <label htmlFor="car">Год (начиная с)</label>
                                    <input name="car" list="years-options" id="car" type="text" />
                                    <datalist id="years-options">
                                        <option value="2007" />
                                        <option value="2008"></option>
                                        <option value="2009"></option>
                                        <option value="2010"></option>
                                        <option value="2011"></option>
                                    </datalist>
                                </div>
                                <div className={styles.inputCar}>
                                    <label htmlFor="car">Цена до (EUR)</label>
                                    <input name="car" list="price-car" id="car" type="text" />
                                    <datalist id="price-car">
                                        <option value="15000"></option>
                                    </datalist>
                                </div>
                                <div className={styles.inputCar}>
                                    <label htmlFor="car">Пробег до (km)</label>
                                    <input name="car" list="mileage-car" id="car" type="text" />
                                    <datalist id="mileage-car">
                                        <option value="210000"></option>
                                    </datalist>
                                </div>
                                <div className={styles.inputCar}>
                                    <label htmlFor="car">Вес до (kg)</label>
                                    <input name="car" list="mess-car" id="car" type="text" />
                                    <datalist id="mess-car">
                                        <option value="8000"></option>
                                    </datalist>
                                </div>
                            </div>

                            <div className={styles.btnSearch}>
                                <Link to="/vehicles">
                                    <button>Поиск (3451 результатов)</button>{' '}
                                </Link>
                            </div>
                        </div>

                        <div className={styles.rightBlock}>
                            <div>
                                <img src="" alt="" />

                                <ul>
                                    <li>Opel COMBO Airco Elct Ramen Stuurbediening</li>
                                    <li>Закрытые грузопассажирские автомобили</li>
                                </ul>

                                <div>
                                    <div>
                                        <img src="" alt="" />
                                        <p>Garage van Nierop Netherlands</p>
                                    </div>
                                    <p>1 500€</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.topAds}>
                        <div className={styles.topAdsBlock}>
                            <h2>Топ объявления</h2>

                            <div className={styles.gridCar}>
                                <div className={styles.gridCarBlock}>
                                    <img src="" alt="" />
                                    <p></p>
                                    <div>
                                        <div>
                                            <img src="" alt="" />
                                            <p>Netherlands</p>
                                        </div>
                                        <p>1500$</p>
                                    </div>
                                </div>
                            </div>

                            <button>больше объявлений</button>
                        </div>
                    </div>

                    <div className={styles.ourSellers}>
                        <div className={styles.sellers}>
                            <div className={styles.leftText}>
                                <div className={styles.textMain}>
                                    <h2>Наши продавцы</h2>
                                    <p>
                                        Мы работаем только с лучшимы игроками на рынке. Безопасность
                                        сделки обеспечена
                                    </p>
                                </div>

                                <button>показать всех</button>
                            </div>

                            <div className={styles.rightPhoto}>
                                <img src={Photos.ourSellers} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default MainUsers;
