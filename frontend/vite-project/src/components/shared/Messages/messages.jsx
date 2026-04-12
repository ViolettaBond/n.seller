import styles from './Messages.module.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Messages() {
    const [messageText, setMessageText] = useState('');

    const messages = [
        { id: 1, text: 'Привет, у меня все ок, а у тебя?', time: '14:59', isMy: false },
        { id: 2, text: 'У меня все отлично!', time: '14:59', isMy: true },
        {
            id: 3,
            text: 'Посылаю тебе цены на Rav 4, думаю, тебе все понравится',
            time: '14:59',
            isMy: true,
        },
        { id: 4, text: 'Pricing.pdf', time: '14:59', isMy: true, isFile: true },
        { id: 5, text: 'Привет, нужно больше информации по авто', time: '14:59', isMy: false },
        { id: 6, text: 'Когда сможешь сорентировать?', time: '14:59', isMy: false },
    ];

    return (
        <div className={styles.messagesPage}>
            <div className={styles.chatsList}>
                <div className={styles.chatsHeader}>
                    <Link to={'/my-ads/messages'}>
                        <button>Все сообщения</button>
                    </Link>
                    <p>Игорь Игорьевич</p>
                </div>
            </div>

            <div className={styles.chatArea}>
                <>
                    <div className={styles.messages}>
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`${styles.message} ${msg.isMy ? styles.myMessage : ''}`}>
                                {msg.isFile ? (
                                    <a href="#" className={styles.fileLink}>
                                        📎 {msg.text}
                                    </a>
                                ) : (
                                    <div className={styles.messageText}>{msg.text}</div>
                                )}
                                <div className={styles.messageTime}>{msg.time}</div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.messageInput}>
                        <textarea
                            placeholder="Напишите свое сообщение..."
                            value={messageText}
                            onChange={(e) => setMessageText(e.target.value)}
                        />
                        <div className={styles.inputActions}>
                            <button className={styles.attachBtn}>📎 Прикрепить файлы</button>
                            <button className={styles.sendBtn}>ОТПРАВИТЬ</button>
                        </div>
                    </div>
                </>
            </div>
        </div>
    );
}

export default Messages;
