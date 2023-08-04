import Image from 'next/image'
import styles from './page.module.scss'
import backGroundImage from '@/assets/background.png'
import { PromoWindow } from '@/components/PromoWindow/PromoWindow'
import { CategorySlider } from '@/components/CategorySlider/CategorySlider'
import { Card } from '@/components/Card/Card'
import { ListCadr } from '@/components/ListCadr/ListCadr'
import { Button } from '@/components/Buttons/Button'
import { action } from './action'
import { RoomSection } from '@/components/RoomSection/RoomSection'
import PhotoGrid from '@/components/ImageGrid/PhotoGrid'
import { Photo } from '@/components/Temp/Photo'
import { FuniroFurniture } from '@/components/FuniroFurniture/FuniroFurniture'
const getTopics = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/category', {
      cache: 'force-cache',
    })
    console.log(res, '!!!!!!!!!!!!!!!!')
    if (!res.ok) {
      throw new Error('Failed to fetch topics')
    }

    return res.json()
  } catch (error) {
    console.log('Error loading topics: ', error)
  }
}

export default async function Home() {
  const data = await getTopics()
  console.log(data, '#########')
  return (
    <div className={styles.home}>
      <div className={styles.previewContainer}>
        <Image
          src={backGroundImage}
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          alt="some"
        />
        <PromoWindow />
      </div>
      <article className={styles.headingContainer}>
        <h2 className={styles.title}>Browse The Range</h2>
        <p className={styles.subTitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </article>
      <CategorySlider data={data} />
      <article className={styles.headingContainer}>
        <h2 className={styles.title}>Our Products</h2>
      </article>
      <ListCadr />
      <RoomSection />
      <FuniroFurniture />
    </div>
  )
}
