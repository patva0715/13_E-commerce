import { Box } from '@mui/material'
import React, { useState } from 'react'
import styles from '../../styles/Carousel.module.css'
import { IKImage, IKContext, IKUpload } from 'imagekitio-react'

const Carousel = ({ images }) => {
    console.log(images)
    const [currentSlide, setCurrentSlide] = useState('0')
    const handleClick = (e) => {
        console.log(e.target.value)
        setCurrentSlide(String(e.target.value))
    }
    return (
        <>
            <IKContext urlEndpoint='https://ik.imagekit.io/oqrgl5cil3a'>
                {images && images.length > 0 && <div className={styles.frame}>
                    <div className={styles.slide} style={{ left: `-${currentSlide}00%`, minWidth: `${images.length}00%` }} >
                        {images && images.map((src,index) => (
                            <div className={styles.item} style={{opacity:`${index==currentSlide?'1':'.3'}`}}>
                                <IKImage className='image-fit-contain image-blend' path={src.replace('https://ik.imagekit.io/oqrgl5cil3a', '').replace('.jfif', '')}  transformation={[{
                                   width:1000,
                                   height:1000
                                }]}/>
                                {/* <IKImage className='image-fit-contain image-blend' urlEndpoint='https://ik.imagekit.io/oqrgl5cil3a' path='/groovemade/walnutdeskshelf/0'/> */}
                                {/* {src} */}
                            </div>
                        ))}
                    </div>
                    <div className={styles.navSlide}>
                        {images && images.map((src, index) => (
                            <button className={styles.navItem} onClick={handleClick} value={index}>
                                <IKImage className='image-fit-contain image-blend' path={src.replace('https://ik.imagekit.io/oqrgl5cil3a', '').replace('.jfif', '')} transformation={[{
                                //    width:120,
                                //    height:100
                                }]} />
                            </button>
                        ))}
                    </div>
                </div>
                }
            </IKContext>

        </>
    )
}
export default Carousel