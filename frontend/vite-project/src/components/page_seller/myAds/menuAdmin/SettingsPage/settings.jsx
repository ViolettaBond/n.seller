import { useState, useEffect } from 'react';
import { IoChevronUp, IoChevronDown } from 'react-icons/io5';
import styles from './settings.module.scss';

function Box({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.boxSettings}>
            <div className={styles.boxClick}>
                <div onClick={() => setIsOpen(!isOpen)} className={styles.settingsStyle}>
                    <h2>{title}</h2>
                    <span>{isOpen ? <IoChevronUp /> : <IoChevronDown />}</span>
                </div>

                <div className={`${styles.boxContent} ${isOpen ? styles.open : ''}`}>
                    {children}
                </div>
            </div>
        </div>
    );
}

function Settings() {
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [currentEmail, setCurrentEmail] = useState('');
    const [message, setMessage] = useState('');

    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token) return;

        fetch('http://localhost:3000/api/me', {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((res) => res.json())
            .then((data) => setCurrentEmail(data.email || ''))
            .catch((err) => console.error(err));
    }, [token]);

    const handleUpdate = async () => {
        if (!token) {
            alert('Сначала войдите в систему');
            return;
        }

        try {
            const res = await fetch('http://localhost:3000/api/update_profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ newEmail, newPassword }),
            });

            const data = await res.json();

            if (res.ok) {
                setMessage('Данные успешно обновлены');
                if (data.user.email) setCurrentEmail(data.user.email);
                setNewEmail('');
                setNewPassword('');
            } else {
                setMessage(data.error);
            }
        } catch (err) {
            console.error(err);
            setMessage('Ошибка сервера');
        }
    };

    return (
        <section className={styles.profileSection}>
            <div className={styles.profileHeader}>
                <div className={styles.userInfo}>
                    <h2 className={styles.userName}>Профиль OTP Leasing</h2>
                    <p
                        className={styles.logoutLink}
                        onClick={() => localStorage.removeItem('token')}>
                        Выйти из аккаунта
                    </p>
                </div>

                <div className={styles.settingsContainer}>
                    <Box title="Настройки аккаунта">
                        <div className={styles.accountSettings}>
                            <div className={styles.currentEmailBlock}>
                                <p className={styles.label}>Ваш E-mail адрес:</p>
                                <span className={styles.emailValue}>{currentEmail}</span>
                            </div>

                            <div className={styles.changeEmailBlock}>
                                <p className={styles.sectionTitle}>Изменить E-mail адрес</p>
                                <div className={styles.inputGroup}>
                                    <p className={styles.inputLabel}>Введите новый E-mail адрес</p>
                                    <input
                                        type="text"
                                        className={styles.input}
                                        value={newEmail}
                                        onChange={(e) => setNewEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className={styles.changePasswordBlock}>
                                <p className={styles.sectionTitle}>Изменить пароль</p>
                                <div className={styles.inputGroup}>
                                    <p className={styles.inputLabel}>Введите новый пароль</p>
                                    <input
                                        type="password"
                                        className={styles.input}
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className={styles.formActions}>
                                <button className={styles.saveButton} onClick={handleUpdate}>
                                    Сохранить изменения
                                </button>
                            </div>
                            {message && <p>{message}</p>}
                        </div>
                    </Box>

                    <Box title="Изменить контактную информацию">
                        <div className={styles.contactInfo}>
                            <p className={styles.description}>
                                Тут вы можете поменять информацию про компанию, которую видят ваши
                                клиенты
                            </p>

                            <div className={styles.formGrid}>
                                <div className={styles.formColumn}>
                                    <div className={styles.formGroup}>
                                        <label>Название компании</label>
                                        <input type="text" />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label>Город</label>
                                        <input type="text" />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label>Адрес</label>
                                        <input type="text" />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label>Почтовый индекс</label>
                                        <input type="text" />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label>Мобильный телефон</label>
                                        <input type="tel" />
                                    </div>
                                </div>

                                <div className={styles.formColumn}>
                                    <div className={styles.formGroup}>
                                        <label>Веб-Сайт</label>
                                        <input type="url" />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label>Время работы</label>
                                        <input type="text" />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label>Контактное лицо</label>
                                        <input type="text" />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label>ФИО</label>
                                        <input type="text" />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label>Мобильный телефон</label>
                                        <input type="tel" />
                                    </div>
                                </div>
                            </div>

                            <div className={styles.formActions}>
                                <button className={styles.saveButton}>СОХРАНИТЬ ИЗМЕНЕНИЯ</button>
                            </div>
                        </div>
                    </Box>

                    <Box title="Изменить информацию о компании">
                        <div className={styles.companyInfo}>
                            <p className={styles.description}>
                                Опишите вашу компанию. Эта информация будет показана на странице
                                продавца
                            </p>

                            <div className={styles.editor}>
                                <div className={styles.editorToolbar}>
                                    <button className={styles.toolbarButton}>
                                        <strong>B</strong>
                                    </button>
                                    <button className={styles.toolbarButton}>
                                        <em>I</em>
                                    </button>
                                    <button className={styles.toolbarButton}>
                                        <u>U</u>
                                    </button>
                                    <button className={styles.toolbarButton}>
                                        <s>A</s>
                                    </button>
                                    <button className={styles.toolbarButton}>H1</button>
                                </div>

                                <div className={styles.editorArea}>
                                    <textarea
                                        placeholder="Описание..."
                                        className={styles.editorTextarea}
                                        rows={4}
                                    />
                                </div>
                            </div>

                            <div className={styles.editorActions}>
                                <button className={styles.saveButton}>СОХРАНИТЬ ИЗМЕНЕНИЯ</button>
                            </div>
                        </div>
                    </Box>
                </div>
            </div>
        </section>
    );
}

export default Settings;
