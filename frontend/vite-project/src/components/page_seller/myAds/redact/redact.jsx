import styles from './redact.module.scss'

function Redact(){
    return(
        <>
            <section className={styles.redactMain}>
                <div className={styles.redactBlock}>
                    <div>
                        <button>Назад</button>
                        <ul>
                            <li>Редактировать объявление</li>
                            <li>Удалить</li>
                        </ul>
                    </div>

                    <div>
                        <div className={styles.leftPanel}>
                            <div className={styles.gridImg}>

                            </div>

                            <div className={styles.reviewBlock}>
                                <h2>Обзор транспортного средства</h2>
                                <div className={styles.categoryGrid}>
                                    <ul>
                                        <li>Категория</li>
                                        <li>Грузовики</li>
                                    </ul>

                                    <ul>
                                        <li>Марка</li>
                                        <li>NIssan</li>
                                    </ul>
                                    
                                    <ul>
                                        <li>Модель</li>
                                        <li>Eco T 100 Paardenvervoer/BJ 1995 ledig gewicht</li>
                                    </ul>

                                    <ul>
                                        <li>Год (начиная с)</li>
                                        <li>1996</li>
                                    </ul>

                                    <ul>
                                        <li>Пробег</li>
                                        <li>225 650km</li>
                                    </ul>

                                    <ul>
                                        <li>Страна</li>
                                        <li>Ukraine</li>
                                    </ul>

                                    <ul>
                                        <li>Вес</li>
                                        <li>15 000kg</li>
                                    </ul>
                                </div>

                                <div className={styles.description}>
                                    <ul>
                                        <li>Быстроразьёмныое соединение</li>
                                        <li>А также диаграммы связей являются только методом политического участия и ограничены исключительно образом мышления. Постоянный количественный рост и сфера нашей активности требует от нас анализа новых принципов формирования материально-технической и кадровой базы. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены на независимые элементы. </li>
                                    </ul>

                                    <ul>
                                        <li>Ну и еще пример текста</li>
                                        <li>Предварительные выводы неутешительны: перспективное планирование в значительной степени обусловливает важность укрепления моральных ценностей.</li>
                                    </ul>

                                    <button>Показать больше</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Redact