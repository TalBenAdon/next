import Link from "next/link"
import { IoIosStar } from "react-icons/io";
import styles from './styles.module.scss'
export default function HotelElement({ id, image, location, rating, title, price }) {
    // console.log(price);
    return (
        <div className={styles.listContainer}>


            <Link key={id} href={`/${id}`} className={styles.element}>
                <img src={image} alt="itemImage" className={styles.hotelImg} />
                <div className={styles.locationRating}>
                    <h2 title={location}>{location}</h2>
                    <div className={styles.rating}><IoIosStar />{rating}</div>
                </div>

                <p title={title} className={styles.title}>{title}</p>


                <p className={styles.price}>{price.split('.')[0]}</p>
            </Link>


        </div>
    )
}
