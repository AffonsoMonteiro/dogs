import React, {useContext, useState, useEffect} from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import useMedia from '../../Hooks/useMedia'

import {ReactComponent as MyPhoto } from '../../Assets/feed.svg'
import {ReactComponent as Statistics } from '../../Assets/estatisticas.svg'
import {ReactComponent as AddPhoto } from '../../Assets/adicionar.svg'
import {ReactComponent as Exit } from '../../Assets/sair.svg'

import styles from './UserHeaderNav.module.css'

const UserHeaderNav = () => {

    const { userLogout } = useContext(UserContext)

    const mobile = useMedia('(max-width: 40rem)')
    
    const [ mobileMenu, setMobileMenu] = useState(false)

    const {pathname} = useLocation()
    useEffect(() => {
        setMobileMenu(false)
    }, [pathname])

    return (
        <>
        {mobile && (
            <button 
                aria-label="Menu" 
                className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
                onClick={() => setMobileMenu(!mobileMenu) }>
            </button>
        )}
            <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
            <NavLink to="/conta" end activeClassName={styles.active}>
                <MyPhoto />
                {mobile && 'Minhas Fotos'}
                </NavLink> 
            <NavLink to="/conta/estatisticas" activeClassName={styles.active}>
                <Statistics />
                {mobile && 'Estatísticas'}
                </NavLink> 
            <NavLink to="/conta/postar" activeClassName={styles.active}>
                <AddPhoto />
                {mobile && 'Adicionar Foto'}
                </NavLink> 
            <button onClick={userLogout}>
                <Exit />
                {mobile && 'Sair'}
                </button>
            </nav>
        </>
    )
}

export default UserHeaderNav
