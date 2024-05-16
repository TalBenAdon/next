
import React from 'react'
import NavLink from '../NavLink/NavLink'
import styles from './styles.module.scss'
import { FiMenu } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";
import { FaUserLarge } from "react-icons/fa6";
import { LiaAirbnb } from "react-icons/lia";
export default function Nav() {
    return (
        <header className={styles.header}>
            <div>
                <div className={styles.logoDiv}> <LiaAirbnb className={styles.icon} />airbnb</div>
            </div>
            <div className={styles.navBar}>
                <ul>
                    <li>Home</li>
                    <li><TfiWorld /></li>
                    <li>
                        <div className={styles.settings}>
                            <FiMenu />
                            <div className={styles.userIcon}>
                                <FaUserLarge />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    )
}
