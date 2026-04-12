import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import styles from './LoginSalesman.module.scss';

function LoginSalesman() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        if (!formData.email || !formData.password) {
            setError('Email и пароль обязательны');
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/api/login', formData);
            const { token, user } = response.data;

            localStorage.setItem('token', token);

            if (user.role === 'admin') {
                navigate('/admin');
            } else if (user.role === 'seller') {
                navigate('/my-ads');
            } else if (user.role === 'buyer') {
                navigate('/mainUsers');
            } else {
                navigate('/');
            }
        } catch (err) {
            if (err.response && err.response.data) {
                setError(err.response.data.error);
            } else {
                setError('Ошибка при входе');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className={styles.loginSection}>
            <div className={styles.loginContainer}>
                <h2>Вход в систему</h2>
                <p>Введите email и пароль, чтобы войти</p>

                {error && <div className={styles.error}>{error}</div>}

                <form onSubmit={handleSubmit} className={styles.loginForm}>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
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
                        <label htmlFor="password">Пароль</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" disabled={loading}>
                        {loading ? 'Вход...' : 'Войти'}
                    </button>
                </form>

                <p className={styles.registerLink}>
                    Нет аккаунта? <Link to="/registrationSalesman">Зарегистрироваться</Link>
                </p>
            </div>
        </section>
    );
}

export default LoginSalesman;
