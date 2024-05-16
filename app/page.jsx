import React from 'react'
import styles from './styles.module.scss'
import HotelElement from './components/HotelElement/HotelElement'
import { connectToMongo } from '@/DL/connectToMongo'
import { getAllHotels } from '@/BL/hotel.service'
export default async function Home() {

  connectToMongo()
  const hotelsData = await getAllHotels()

  return (
    <div className={styles.contentContainer}>
      <div className={styles.listContainer}>
        {hotelsData.map(hotel => {
          return <HotelElement key={hotel.id} id={hotel.id}
            title={hotel.title}
            image={hotel.images[0]}
            location={hotel.location.country}
            rating={hotel.rating}
            price={hotel.price_per_night}
          />
        })}
      </div>
    </div>
  )
}
