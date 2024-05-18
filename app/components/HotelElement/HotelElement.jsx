import Link from "next/link"
import { IoIosStar } from "react-icons/io";
import styles from './styles.module.scss'
export default function HotelElement({ id, image, location, rating, title, price, pageStyle = '' }) {
    // console.log(price);
    let pageStyles = pageStyle === 'search' ? { flexDirection: "row" } : {}
    return (



        <Link key={id} href={`/${id}`} className={styles.element} style={pageStyles}>
            <img src={image} alt="itemImage" className={styles.hotelImg} />
            <div className={pageStyle ? styles.information : ''}>
                <div>
                    <div className={styles.locationRating}>
                        <h2 title={location}>{location}</h2>
                        <div className={styles.rating}><IoIosStar />{rating}</div>
                    </div>
                    <p title={title} className={styles.title}>{title}</p>
                </div>
                <p className={styles.price}>{price.split('.')[0]}</p>
            </div>
        </Link>



    )
}
