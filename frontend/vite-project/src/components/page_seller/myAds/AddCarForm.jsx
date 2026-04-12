import { useState } from 'react';
import styles from './AddCarForm.module.scss';

function AddCarForm({ onCancel, onSuccess }) {
    const [formData, setFormData] = useState({
        category: '',
        year: '',
        brand: '',
        mileage: '',
        model: '',
        country: '',
        price: '',
        weight: '',
        description: '',
        photos: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleUpload = (e) => {
        const files = Array.from(e.target.files);

        setFormData((prev) => ({
            ...prev,
            photos: [...prev.photos, ...files],
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();

        Object.entries(formData).forEach(([key, value]) => {
            if (key === 'photos') {
                value.forEach((file) => data.append('photos', file));
            } else {
                data.append(key, value);
            }
        });

        try {
            const res = await fetch('http://localhost:3000/api/car', {
                method: 'POST',
                body: data,
            });

            if (res.ok) onSuccess();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.topBar}>
                <button onClick={onCancel} className={styles.back}>
                    ← Назад
                </button>

                <div className={styles.pageTitle}>Создание нового объявления</div>
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h2 className={styles.sectionTitle}>Обзор транспортного средства</h2>

                <div className={styles.grid}>
                    <div className={styles.field}>
                        <label>Категория</label>
                        <input name="category" onChange={handleChange} />
                    </div>

                    <div className={styles.field}>
                        <label>Год (начиная с)</label>
                        <input name="year" onChange={handleChange} />
                    </div>

                    <div className={styles.field}>
                        <label>Марка</label>
                        <input name="brand" onChange={handleChange} />
                    </div>

                    <div className={styles.field}>
                        <label>Пробег</label>
                        <input name="mileage" onChange={handleChange} />
                    </div>

                    <div className={styles.field}>
                        <label>Модель</label>
                        <input name="model" onChange={handleChange} />
                    </div>

                    <div className={styles.field}>
                        <label>Страна</label>
                        <input name="country" onChange={handleChange} />
                    </div>

                    <div className={styles.field}>
                        <label>Цена</label>
                        <input name="price" onChange={handleChange} />
                    </div>

                    <div className={styles.field}>
                        <label>Вес</label>
                        <input name="weight" onChange={handleChange} />
                    </div>
                </div>

                <div className={styles.media}>
                    <h3>Медиа файлы</h3>

                    <div className={styles.mediaGrid}>
                        <label className={styles.mainPhoto}>
                            Нажмите, чтобы добавить главное фото
                            <input type="file" hidden onChange={handleUpload} />
                        </label>

                        {[...Array(5)].map((_, i) => (
                            <label key={i} className={styles.photoBox}>
                                +
                                <input type="file" hidden onChange={handleUpload} />
                            </label>
                        ))}
                    </div>

                    <label className={styles.addMore}>
                        + Добавить еще фото
                        <input type="file" hidden onChange={handleUpload} />
                    </label>
                </div>

                <div className={styles.description}>
                    <h3>Описание</h3>

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
                </div>
            </form>

            <div className={styles.actions}>
                <button type="button" className={styles.preview}>
                    Предпросмотр
                </button>

                <button type="submit" className={styles.submit}>
                    СОЗДАТЬ ОБЪЯВЛЕНИЕ
                </button>
            </div>
        </div>
    );
}

export default AddCarForm;
