'use client';

import React, { useState, useEffect } from 'react';
import styles from "./FormHome.module.css";

const FormHome: React.FC = () => {
    const [currentTime, setCurrentTime] = useState<string>("");
    const [isPresencial, setIsPresencial] = useState<boolean>(false);
    const [isHovered, setIsHovered] = useState<string | null>(null);

    const handleHover = (button: string) => {
        setIsHovered(button);
    };

    const handleLeave = () => {
        setIsHovered(null);
    };

    useEffect(() => {
        const updateTime = () => {
            setCurrentTime(new Date().toLocaleTimeString());
        };

        updateTime();
        const timer = setInterval(updateTime, 1000);

        return () => clearInterval(timer);
    }, []);

    const handlePresencialChange = () => {
        setIsPresencial(!isPresencial);
    };

    return (
        <div className={styles.CardForm}>
            <div className={styles.HoraPresencial}>
                <div className={styles.Hora}>
                    <h1 className={styles.Hora}>{currentTime}</h1>
                </div>
                <div className={styles.Presencial}>
                    <span>Presencial?</span>
                    <input
                        type="checkbox"
                        name="InputPresencialConfirmation"
                        id="InputPresencialConfirmation"
                        checked={isPresencial}
                        onChange={handlePresencialChange}
                    />
                </div>
            </div>

            <div className={styles.Inputs}>
                <div className={styles.InputGroup}>
                    <label className={styles.UserName} htmlFor="username">Nome de Usuário</label>
                    <input type="text" id="username" name="username" placeholder="Digite o nome de Usuário" />
                </div>
                <div className={styles.InputGroup}>
                    <label htmlFor="password">Senha</label>
                    <input className={styles.Senha} type="password" id="password" name="password" placeholder="Digite a Senha" />
                </div>
            </div>

            <div className={styles.Buttons}>
                <button
                    className={`${styles.MarcarPonto} ${styles.Button} ${isHovered === 'Entrar' ? styles.Hovered : ''}`}
                    onMouseEnter={() => handleHover('MarcarPonto')}
                    onMouseLeave={() => handleLeave()}
                >
                    Efetuar Marcação
                </button>
                <button
                    className={`${styles.Entrar} ${styles.Button} ${isHovered === 'MarcarPonto' ? styles.Hovered : ''}`}
                    onMouseEnter={() => handleHover('Entrar')}
                    onMouseLeave={() => handleLeave()}
                >
                    Entrar no Sistema
                </button>
            </div>
        </div>
    );
}

export default FormHome;