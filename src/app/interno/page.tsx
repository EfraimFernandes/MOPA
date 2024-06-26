"use client";

import Logo from "../../../public/images/Logo_MOPA.png";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import CurvedNavbar from '../../components/CurvedNavbar';
import Resumo from '../../components/Resumo';
import Historico from '../../components/Historico';
import AlterSenha from '../../components/AlterSenha';
import NewUser from '../../components/NewUser';
import styles from './page.module.css';

export default function Interno() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeComponent, setActiveComponent] = useState(<Resumo />);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const updateComponent = () => {
        const hash = window.location.hash;
        switch (hash) {
            case '#historico':
                setActiveComponent(<Historico />);
                break;
            case '#senha':
                setActiveComponent(<AlterSenha />);
                break;
            case '#nu':
                setActiveComponent(<NewUser />);
                break;
            default:
                setActiveComponent(<Resumo />);
        }
    };

    useEffect(() => {
        // Update component based on current hash when component mounts
        updateComponent();

        // Add event listener for hash changes
        window.addEventListener('hashchange', updateComponent);

        // Clean up event listener when component unmounts
        return () => {
            window.removeEventListener('hashchange', updateComponent);
        };
    }, []);

    return (
        <div className={styles.Body}>
            <header>
                <div className={styles.Header}>
                    <div className={styles.LogoTitle}>
                        <Image
                            className={styles.Logo}
                            src={Logo}
                            alt="Logo do sistema: MOPA"
                            width={130}
                            height={100}
                            priority
                        />
                        <h1 className={styles.HeaderText}>Fulano, seja bem-vindo</h1>
                    </div>
                    <div className={styles.HamburgerMenu} onClick={toggleMenu}>
                        <div className={`${styles.Bar} ${isOpen ? styles.TopBarOpen : ''}`}></div>
                        <div className={`${styles.Bar} ${isOpen ? styles.MiddleBarOpen : ''}`}></div>
                        <div className={`${styles.Bar} ${isOpen ? styles.BottomBarOpen : ''}`}></div>
                    </div>
                </div>
            </header>
            <CurvedNavbar isOpen={isOpen} toggleMenu={toggleMenu} />
            <main className={styles.MainContent}>
                {activeComponent}
            </main>
        </div>
    );
}