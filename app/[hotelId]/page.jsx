import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image';
export default async function Hotel({ params }) {
    console.log({ hotelId: params.hotelId });
    const hotel = await fetch(`http://localhost:3003/api/listings/${params.hotelId}`)
        .then(res => res.json())
    return (
        <div className={styles.screenSize}>
            <div className={styles.myHouseContainer}>
                <h1>
                    {hotel.title}
                </h1>
                <div className={styles.imgGridContainer}>
                    {hotel.images.map(image =>

                        // <Image src={image} alt='' width={50} height={}/>
                        <img src={image} alt={image} />
                    )}
                </div>
            </div>
        </div>
    )
}
