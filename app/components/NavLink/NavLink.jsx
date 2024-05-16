"use client"
import Link from "next/link"
import styles from './styles.module.scss'
const { usePathname } = require("next/navigation")

const NavLink = ({ href, children }) => {
    const path = usePathname()
    return (
        <Link href={href} style={{ color: path === href ? 'red' : 'black' }}>
            {children}
        </Link>
    )
}

export default NavLink