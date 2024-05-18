import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image';
import { connectToMongo } from '@/DL/connectToMongo';
import { getHotelById } from '@/BL/hotel.service';
export default async function Hotel({ params }) {
    console.log({ hotelId: params.hotelId });
    connectToMongo()
    const hotel = await getHotelById(params.hotelId)
    console.log({ hotel });
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
