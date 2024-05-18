import { getHotelsBySearch } from '@/BL/hotel.service'
import { connectToMongo } from '@/DL/connectToMongo'
import React from 'react'
import styles from './styles.module.scss'
import HotelElement from '../components/HotelElement/HotelElement'

export default async function Page({ searchParams }) {
    const query = searchParams.search
    connectToMongo()

    const searchResult = await getHotelsBySearch(query)
    console.log(searchResult);
    return (

        <div className={styles.searchContainer} >
            {searchResult.map(hotel => {
                return (<div className={styles.hotelElement}>
                    <HotelElement key={hotel.id} id={hotel.id}
                        pageStyle={'search'}
                        title={hotel.title}
                        image={hotel.images[0]}
                        location={hotel.location.country}
                        rating={hotel.rating}
                        price={hotel.price_per_night} />
                </div>)
            })}
        </div>

    )
}
