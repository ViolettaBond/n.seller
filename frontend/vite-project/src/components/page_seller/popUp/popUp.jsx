import styles from '../popUp/popUp.module.scss';
// import axios from 'axios';
import { useState, useEffect } from 'react';

function PopUp({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setFormData({
                name: '',
                phone: '',
                email: '',
            });
            setError(null);
            setSuccess(false);
        }
    }, [isOpen]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        setError(null);
    };

    const formatPhone = (value) => {
        const phoneNumber = value.replace(/\D/g, '').slice(0, 11);

        if (!phoneNumber) return '';

        let formatted = '+7';

        if (phoneNumber.length > 1) {
            formatted += ' (' + phoneNumber.substring(1, 4);
        }
        if (phoneNumber.length >= 5) {
            formatted += ') ' + phoneNumber.substring(4, 7);
        }
        if (phoneNumber.length >= 8) {
            formatted += '-' + phoneNumber.substring(7, 9);
        }
        if (phoneNumber.length >= 10) {
            formatted += '-' + phoneNumber.substring(9, 11);
        }

        return formatted;
    };

    const handlePhoneChange = (e) => {
        const formatted = formatPhone(e.target.value);
        setFormData((prev) => ({
            ...prev,
            phone: formatted,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        console.log(' Отправка данных:', formData);

        // try {
        //     const response = await axios.post('http://localhost:3000/api/users', {
        //         name: formData.name,
        //         phone: formData.phone,
        //         email: formData.email,
        //     });

        //     console.log(' Ответ сервера:', response.data);
        //     setSuccess(true);

        //     setTimeout(() => {
        //         setSuccess(false);
        //         setFormData({ name: '', phone: '', email: '' });
        //         onClose();
        //         if (onSuccess) onSuccess(response.data);
        //     }, 2000);
        // } catch (err) {
        //     console.error(' Ошибка:', err.response?.data || err.message);
        //     setError(err.response?.data?.error || 'Ошибка при отправке');
        // } finally {
        //     setLoading(false);
        // }
    };

    const handleClose = () => {
        setFormData({ name: '', phone: '', email: '' });
        setError(null);
        setSuccess(false);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={handleClose}>
            <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeBtn} onClick={handleClose}>
                    ×
                </button>

                <div className={styles.textUp}>
                    <h2 className={styles.title}>Мы свяжемся с вами в ближайшее время</h2>
                    <p>
                        Впишите свои данные и мы перезвоним вам для создания личного тарифного плана
                    </p>
                </div>

                {/* {success ? (
                    <div className={styles.success}>
                        <div className={styles.successIcon}>✓</div>
                        <p>Данные успешно отправлены!</p>
                    </div>
                ) : ( */}
                <form className={styles.popUpForm} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Ваше имя "
                            required
                            disabled={loading}
                            autoComplete="name"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="E-mail адрес"
                            required
                            disabled={loading}
                            autoComplete="email"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handlePhoneChange}
                            placeholder="Номер телефона"
                            required
                            disabled={loading}
                            autoComplete="tel"
                        />
                    </div>

                    {/* {error && <div className={styles.error}>{error}</div>} */}

                    <button type="submit" className={styles.submitBtn} disabled={loading}>
                        {'Перезвоните мне!'}
                    </button>
                </form>
                {/* )} */}
            </div>
        </div>
    );
}

export default PopUp;
