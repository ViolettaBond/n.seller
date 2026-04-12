import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './admin.module.scss';

function Admin() {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const token = localStorage.getItem('token');

    useEffect(() => {
        fetchCars();
    }, []);

    const fetchCars = async () => {
        try {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/car', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setCars(response.data);
            setError('');
        } catch (err) {
            console.error('Ошибка загрузки машин:', err);
            setError('Не удалось загрузить список машин');
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteCar = async (carId) => {
        if (!window.confirm('Вы уверены, что хотите удалить эту машину?')) {
            return;
        }

        try {
            await axios.delete(`http://localhost:3000/api/car/${carId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setSuccess('Машина успешно удалена');
            fetchCars();
            setTimeout(() => setSuccess(''), 3000);
        } catch (err) {
            console.error('Ошибка удаления:', err);
            setError(err.response?.data?.error || 'Не удалось удалить машину');
            setTimeout(() => setError(''), 3000);
        }
    };

    if (loading && cars.length === 0) {
        return (
            <div className={styles.loading}>
                <div className={styles.spinner}></div>
                <p>Загрузка данных...</p>
            </div>
        );
    }

    return (
        <div className={styles.adminSection}>
            <div className={styles.mainBlock}>
                <div className={styles.headerBlock}>
                    <h2>Админ панель</h2>
                    <p>Управление автомобилями OTP Leasing</p>
                </div>

                {error && <div className={styles.error}>{error}</div>}
                {success && <div className={styles.success}>{success}</div>}

                <div className={styles.carBlock}>
                    {cars.length === 0 ? (
                        <div className={styles.emptyBlock}>
                            <p>Нет машин для отображения</p>
                        </div>
                    ) : (
                        cars.map((car) => (
                            <div key={car.id} className={styles.card}>
                                <div className={styles.cardInner}>
                                    <div className={styles.imageBlock}>
                                        {car.img_car ? (
                                            <img
                                                src={car.img_car}
                                                alt={car.name_car}
                                                className={styles.carImage}
                                                onError={(e) => {
                                                    e.target.src = '/placeholder.png';
                                                }}
                                            />
                                        ) : (
                                            <div className={styles.noImage}>Нет фото</div>
                                        )}
                                    </div>

                                    <div className={styles.titleBlock}>
                                        <span className={styles.bodyType}>
                                            {car.body_type || 'Тип не указан'}
                                        </span>
                                        <h3 className={styles.carName}>
                                            {car.name_car || 'Название не указано'}
                                        </h3>
                                    </div>

                                    <div className={styles.specsList}>
                                        <li>Год: {car.years_car || '-'}</li>
                                        <li>Грузоподъемность: {car.size_car || '-'}</li>
                                    </div>

                                    <div className={styles.sellerBlock}>
                                        <span className={styles.sellerName}>
                                            Продавец: OTP Leasing
                                        </span>
                                    </div>

                                    <div className={styles.footer}>
                                        <div className={styles.actionsBtn}>
                                            <button
                                                onClick={() => handleDeleteCar(car.id)}
                                                className={styles.deleteBtn}>
                                                Удалить
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default Admin;
