import React, { useEffect, useState } from 'react'
import styles from '../../styles/Carousel.module.css'
import { IKImage, IKContext } from 'imagekitio-react'

const Carousel = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState('0')
    const [width, setWidth] = useState(0)
    const handleClick = (i) => {
        setCurrentSlide(String(i))
    }
    useEffect(() => {
        const browserWidth = window.innerWidth
        if (browserWidth > 500) setWidth(1000)
        else setWidth(400)
    }, [])
    return (
            <IKContext urlEndpoint='https://ik.imagekit.io/oqrgl5cil3a'>
                {images && width && images.length > 0 && <div className={styles.frame}>
                    <div className={styles.slide} style={{ left: `-${currentSlide}00%`, minWidth: `${images.length}00%` }} >
                        {images && images.map((src, index) => (
                            <div key={index} className={styles.item} style={{ opacity: `${index == currentSlide ? '1' : '.3'}` }}>
                                <IKImage className='image-fit-contain image-blend' path={src.replace('https://ik.imagekit.io/oqrgl5cil3a', '').replace('.jfif', '').replace('&','_')} transformation={[{
                                    width: width,
                                    height: width
                                }]} />
                            </div>
                        ))}
                    </div>
                    <div className={styles.navSlide}>
                        {images && images.map((src, index) => (
                            <div alt='image-thumbnail' key={index} className={styles.navItem} onClick={() => handleClick(index)} >
                                <IKImage className='image-fit-contain image-blend' path={src.replace('https://ik.imagekit.io/oqrgl5cil3a', '').replace('.jfif', '').replace('&','_')} transformation={[{
                                    width: 50,
                                    height: 50
                                }]} />
                            </div>
                        ))}
                    </div>
                </div>
                }
            </IKContext>
    )
}
export default Carousel