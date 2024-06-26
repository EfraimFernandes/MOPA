import React from 'react';
import styles from './CurvedNavbar.module.css';

interface CurvedNavbarProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

const CurvedNavbar: React.FC<CurvedNavbarProps> = ({ isOpen, toggleMenu }) => {
    return (
        <div className={`${styles.Navbar} ${isOpen ? styles.Open : ''}`}>
            <ul className={styles.NavList}>
                <li className={styles.NavItem}><a href="#resumo" onClick={toggleMenu}>Resumo</a></li>
                <li className={styles.NavItem}><a href="#historico" onClick={toggleMenu}>Histórico</a></li>
                <li className={styles.NavItem}><a href="#senha" onClick={toggleMenu}>Alter. Senha</a></li>
                <li className={styles.NavItem}><a href="#nu" onClick={toggleMenu}>New User</a></li>
                <li className={styles.NavItem}><a href="/" onClick={toggleMenu}>Sair</a></li>
            </ul>
        </div>
    );
};

export default CurvedNavbar;