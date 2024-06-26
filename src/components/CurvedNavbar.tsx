import React from 'react';
import styles from './CurvedNavbar.module.css';

const CurvedNavbar: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
    return (
        <div className={`${styles.Navbar} ${isOpen ? styles.Open : ''}`}>
            <ul className={styles.NavList}>
                <li className={styles.NavItem}><a href="/interno">Resumo</a></li>
                <li className={styles.NavItem}><a href="/interno#historico">Histórico</a></li>
                <li className={styles.NavItem}><a href="/interno#senha">Alter. Senha</a></li>
                <li className={styles.NavItem}><a href="/interno#nu">New User</a></li>
                <li className={styles.NavItem}><a href="/">Sair</a></li>
            </ul>
        </div>
    );
};

export default CurvedNavbar;