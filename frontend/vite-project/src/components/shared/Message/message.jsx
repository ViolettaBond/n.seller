import styles from './Message.module.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Message() {
    const [selectedUser, setSelectedUser] = useState(null);

    const users = [
        {
            id: 1,
            name: 'Игорь Игорьевич',
            message: 'SCHWARZMUELLER 3Achs Stahl... SCHWARZMUELLER 3Achs...',
            time: '19:56',
            isNew: false,
        },
        {
            id: 2,
            name: 'Darrell Steward',
            message: 'Opel Movano B Pritsche L3H1 3...',
            time: '19:05',
            isNew: true,
            newCount: 4,
        },
        {
            id: 3,
            name: 'Albert Flores',
            message: 'SCHWARZMUELLER 3Achs Stahl... SCHWARZMUELLER 3Achs...',
            time: '16:45',
            isNew: false,
        },
        {
            id: 4,
            name: 'Robert Fox',
            message: 'Opel Movano B Pritsche L3H1 3...',
            time: '12:50',
            isNew: false,
        },
        {
            id: 5,
            name: 'Arlene McCoy',
            message: 'SCHWARZMUELLER 3Achs Stahl... SCHWARZMUELLER 3Achs...',
            time: '20:30',
            isNew: true,
            newCount: 2,
        },
        {
            id: 6,
            name: 'Игорь Игорьевич',
            message: 'pel Movano B Pritsche L3H... dfdsfdsfs dsfsdf',
            time: '19:56',
            isNew: true,
            newCount: 4,
        },
        {
            id: 7,
            name: 'Cody Fisher',
            message: 'SCHWARZMUELLER 3Achs Stahl... SCHWARZMUELLER 3Achs...',
            time: '19:56',
            isNew: false,
        },
        {
            id: 8,
            name: 'Kristin Watson',
            message: 'Opel Movano B Pritsche L3H1 3... Opel Movano B Pritsche L3H...',
            time: '19:56',
            isNew: false,
        },
        {
            id: 9,
            name: 'Devon Lane',
            message: 'SCHWARZMUELLER 3Achs Stahl... SCHWARZMUELLER 3Achs...',
            time: '19:56',
            isNew: false,
        },
        {
            id: 10,
            name: 'Darrell Steward',
            message: 'pel Movano B Pritsche L3H...',
            time: '19:56',
            isNew: false,
        },
    ];

    return (
        <section className={styles.messageSection}>
            <div className={styles.topNav}>
                <input type="checkbox" />
                <div>
                    <ul>
                        <li>Пользователь</li>
                        <li>Объявления</li>
                    </ul>

                    <ul>
                        <li>Сообщений</li>
                        <li>Отправлено</li>
                    </ul>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.usersColumn}>
                    <div className={styles.usersList}>
                        {users.map((user) => (
                            <Link to={'/messages/'}>
                                <div
                                    className={`${styles.userItem} ${selectedUser?.id === user.id ? styles.selected : ''}`}
                                    onClick={() => setSelectedUser(user)}>
                                    <div className={styles.userInfo}>
                                        <input type="checkbox" />
                                        <div>
                                            <div className={styles.userName}>{user.name}</div>
                                            <div className={styles.userMessage}>{user.message}</div>
                                        </div>
                                    </div>
                                    <div className={styles.userMeta}>
                                        <div className={styles.userTime}>{user.time}</div>
                                        {user.isNew && (
                                            <div className={styles.newBadge}>
                                                НОВЫХ {user.newCount}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.delete}>
                <button>Удалить</button>
            </div>
        </section>
    );
}

export default Message;
