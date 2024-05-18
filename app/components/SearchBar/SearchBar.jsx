"use client"
import React, { useState } from 'react';
import styles from './styles.module.scss';
import { LiaSearchSolid } from "react-icons/lia";
import { useRouter } from 'next/navigation';

export default function SearchBar() {
    const router = useRouter()
    const handleSubmit = (e) => {
        e.preventDefault()
        router.push('/result?search=' + e.target.search.value)

    }
    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>

            <i className={styles.searchIcon} >
                <LiaSearchSolid />
            </i>

            <input type="text" name="search" className={styles.textInput}

            />


        </form>

    )
}