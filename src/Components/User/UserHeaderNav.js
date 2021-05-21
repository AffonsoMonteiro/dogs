import React, {useContext, useState} from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../UserContext'

import {ReactComponent as MyPhoto } from '../../Assets/feed.svg'
import {ReactComponent as Statistics } from '../../Assets/estatisticas.svg'
import {ReactComponent as AddPhoto } from '../../Assets/adicionar.svg'
import {ReactComponent as Exit } from '../../Assets/sair.svg'

import styles from './UserHeaderNav.module.css'

const UserHeaderNav = () => {

    const { userLogout } = useContext(UserContext)

    const [ mobile, setMobile] = useState(null)

    return (
        <nav className={styles.nav}>
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
    )
}

export default UserHeaderNav
