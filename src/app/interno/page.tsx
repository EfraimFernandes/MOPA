"use client"

import Logo from "../../../public/images/Logo_MOPA.png"
import Image from "next/image";
import React, { useState } from 'react';
import CurvedNavbar from '../../components/CurvedNavbar';
import styles from './page.module.css';

export default function Interno() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

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
                        ></Image>
                        <h1 className={styles.HeaderText}>Fulano, seja bem-vindo</h1>
                    </div>
                    <div className={styles.HamburgerMenu} onClick={toggleMenu}>
                        <div className={`${styles.Bar} ${isOpen ? styles.TopBarOpen : ''}`}></div>
                        <div className={`${styles.Bar} ${isOpen ? styles.MiddleBarOpen : ''}`}></div>
                        <div className={`${styles.Bar} ${isOpen ? styles.BottomBarOpen : ''}`}></div>
                    </div>
                </div>
            </header>
            <CurvedNavbar isOpen={isOpen} />
        </div>
    );
}