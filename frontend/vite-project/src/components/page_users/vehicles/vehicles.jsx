import styles from './vehiclesSt.module.scss'

function Vehicles(){
    return(
        <>
            <section className={styles.vehiclesMain}>
                <div className={styles.vehiclesBlock}>

                    <div className={styles.trackBlock}>
                        <div className={styles.track}>
                        <p>Главная</p>
                        <p> > </p>
                        <p>Транспортные средства</p>
                    </div>

                    <div className={styles.list}>
                            <div className={styles.listLeft}>
                                <div className={styles.listBlock}>
                                    <p>- Цена, €</p>
        
                                    <div className={styles.priceList}>
                                        <div className={styles.priceText}>
                                            <p>От <span>1200</span></p>
                                        </div>
                                        
                                        <div className={styles.priceTextRight}>
                                            <p>До <span>152444</span></p>
                                        </div>                                    
                                    </div>
        
                                    <div>
                                        <div>
                                            <p>- Тип транспорта</p>
        
                                            <label htmlFor="car"></label>
                                            <input name='car' list='category-options' id='car' type="text" />
                                            <datalist id='category-options'>
                                                <option value="Грузовики" />
        
                                            </datalist>
                                        </div>                                    
                                    </div>
        
                                    <div className={styles.carList}>
                                        <div className={styles.carListBox}>
                                             <p>- Тип транспорта</p>
        
                                            <div className={styles.checkboxList}>
                                                <input type='checkbox'/>
                                                <p>Volkswagen</p>
                                            </div>
        
                                            <div className={styles.checkboxList}>
                                                <input type='checkbox'/>
                                                <p>Mercedes benz </p>
                                            </div>
        
                                            <div className={styles.checkboxList}>
                                                <input type='checkbox'/>
                                                <p>Scania</p>
                                            </div>
        
                                            <div className={styles.checkboxList}>
                                                <input type='checkbox'/>
                                                <p>Volvo</p>
                                            </div>
                                            
                                             <div className={styles.checkboxList}>
                                                <input type='checkbox'/>
                                                <p>Iveco</p>
                                            </div>
        
                                            <div className={styles.checkboxList}>
                                                <input type='checkbox'/>
                                                <p>Van Hool</p>
                                            </div>
                                            
                                        </div>
                                    </div>
        
                                     <div>
                                        <div>
                                            <p>- Страна местонахождения</p>
        
                                            <label htmlFor="car"></label>
                                            <input name='car' list='country-options' id='car' type="text" />
                                            <datalist id='country-options'>
                                                <option value="Франция; Италия " />
        
                                            </datalist>
                                        </div>                                    
                                    </div>
        
                                    <div className={styles.carList}>
                                        <div className={styles.carListBox}>
                                             <p>- Коробка передач</p>
        
                                            <div className={styles.checkboxList}>
                                                <input type='checkbox'/>
                                                <p>Коробка автомат</p>
                                            </div>
        
                                            <div className={styles.checkboxList}>
                                                <input type='checkbox'/>
                                                <p>Механика</p>
                                            </div>
                                           
                                            
                                        </div>
                                    </div>
        
                                    <div className={styles.carList}>
                                        <div className={styles.carListBox}>
                                             <p>- Продажа</p>
        
                                            <div className={styles.checkboxList}>
                                                <input type='checkbox'/>
                                                <p>Аукцион</p>
                                            </div>
        
                                            <div className={styles.checkboxList}>
                                                <input type='checkbox'/>
                                                <p>По запросу</p>
                                            </div>
        
                                            <div className={styles.checkboxList}>
                                                <input type='checkbox'/>
                                                <p>Лизинг</p>
                                            </div>
                                            
                                            <div className={styles.checkboxList}>
                                                <input type='checkbox'/>
                                                <p>Сдется в аренду</p>
                                            </div>                                          
                                        </div>
                                    </div>
        
                                    <div>
                                        <button>применить</button>
                                    </div>
        
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    <div>
                        <div>
                            <div>
                                <div>
                                    <p>Цена</p>
                                    <p>от 1200 до 152444 </p>
                                </div>

                                 <div>
                                    <p>Тип транспорта</p>
                                    <p>Грузовики </p>
                                </div>

                                <button>Очистить всё </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Vehicles 