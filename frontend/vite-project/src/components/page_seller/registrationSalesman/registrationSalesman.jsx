import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './RegistrationSalesman.module.scss';
import axios from 'axios';

function RegistrationSalesman() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name_company: '',
        country: '',
        city: '',
        adress: '',
        poch_index: '',
        work_number: '',
        web_site: '',
        initials: '',
        number: '',
        role: 'seller',
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        if (!formData.email || !formData.password) {
            setError('Email и пароль обязательны для заполнения');
            setLoading(false);
            return;
        }

        try {
            console.log('Отправка данных:', formData);

            const response = await axios.post(
                'http://localhost:3000/api/registration_seller',
                formData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
            );

            console.log('Успешно:', response.data);

            setSuccess('Регистрация успешна! Через 2 секунды вы будете перенаправлены...');

            setFormData({
                email: '',
                password: '',
                name_company: '',
                country: '',
                city: '',
                adress: '',
                poch_index: '',
                work_number: '',
                web_site: '',
                initials: '',
                number: '',
                role: 'seller',
            });

            setTimeout(() => {
                if (formData.role === 'admin') {
                    navigate('/admin');
                } else if (formData.role === 'seller') {
                    navigate('/my-ads');
                } else if (formData.role === 'buyer') {
                    navigate('/mainUsers');
                } else {
                    navigate('/');
                }
            }, 2000);
        } catch (error) {
            console.error(' Ошибка:', error);
            if (error.response) {
                setError(error.response.data.error || 'Ошибка при регистрации');
            } else if (error.request) {
                setError('Сервер не отвечает. Проверьте подключение к бэкенду');
            } else {
                setError('Ошибка при отправке запроса');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <section className={styles.registrationSection}>
                <div className={styles.registrationContainer}>
                    <div className={styles.registrationList}>
                        <h2>Регистрация продавца</h2>
                        <p>Заполните указаные поля, чтобы создать акаунт продавца</p>

                        {error && <div className={styles.error}>{error}</div>}
                        {success && <div className={styles.success}>{success}</div>}

                        <div className={styles.registrationBlock}>
                            <div className={styles.account}>
                                <h3>Аккаунт</h3>

                                <div className={styles.formGroup}>
                                    <label htmlFor="role">Тип аккаунта *</label>
                                    <select
                                        id="role"
                                        name="role"
                                        value={formData.role}
                                        onChange={handleChange}
                                        required
                                        className={styles.roleSelect}>
                                        <option value="buyer">Покупатель</option>
                                        <option value="seller">Продавец</option>
                                        <option value="admin">Администратор</option>
                                    </select>
                                </div>

                                <div className={styles.accountInput}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="email">E-mail *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="password">Пароль *</label>
                                        <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className={styles.aboutCompany}>
                                <h3>Про компанию</h3>
                                <div className={styles.companyInput}>
                                    <div className={styles.companyGroup}>
                                        <label htmlFor="name_company">Название компании</label>
                                        <input
                                            type="text"
                                            id="name_company"
                                            name="name_company"
                                            value={formData.name_company}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className={styles.companyGroup}>
                                        <label htmlFor="country">Страна</label>
                                        <input
                                            type="text"
                                            id="country"
                                            name="country"
                                            value={formData.country}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className={styles.companyGroup}>
                                        <label htmlFor="city">Город</label>
                                        <input
                                            type="text"
                                            id="city"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className={styles.companyGroup}>
                                        <label htmlFor="adress">Адрес</label>
                                        <input
                                            type="text"
                                            id="adress"
                                            name="adress"
                                            value={formData.adress}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className={styles.companyGroup}>
                                        <label htmlFor="poch_index">Почтовый индекс</label>
                                        <input
                                            type="text"
                                            id="poch_index"
                                            name="poch_index"
                                            value={formData.poch_index}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className={styles.companyGroup}>
                                        <label htmlFor="work_number">Рабочий телефон *</label>
                                        <input
                                            type="tel"
                                            id="work_number"
                                            name="work_number"
                                            value={formData.work_number}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className={styles.companyGroup}>
                                        <label htmlFor="web_site">Веб-сайт</label>
                                        <input
                                            type="url"
                                            id="web_site"
                                            name="web_site"
                                            value={formData.web_site}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className={styles.account}>
                                <h3>Контактное лицо</h3>
                                <div className={styles.pesonInput}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="initials">ФИО *</label>
                                        <input
                                            type="text"
                                            id="initials"
                                            name="initials"
                                            value={formData.initials}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="number">Номер телефона *</label>
                                        <input
                                            type="tel"
                                            id="number"
                                            name="number"
                                            value={formData.number}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.checkboxBlock}>
                            <input id="checkbox" type="checkbox" required />
                            <label htmlFor="checkbox">
                                Авторизуясь, Вы принимаете <span>Условия использования</span> и{' '}
                                <span>Заявление о конфиденциальности</span> NOVO
                            </label>
                        </div>

                        <button type="submit" disabled={loading}>
                            {loading ? 'Регистрация...' : 'Продолжить'}
                        </button>

                        <div className={styles.loginLink}>
                            Уже есть аккаунт? <Link to="/login-sales">Войти</Link>
                        </div>
                    </div>
                </div>
            </section>
        </form>
    );
}

export default RegistrationSalesman;
