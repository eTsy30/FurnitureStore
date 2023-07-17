import Image from 'next/image'
import styles from './page.module.css'
import backGroundImage from '@/assets/background.png'
import { PromoWindow } from '@/components/PromoWindow/PromoWindow'
import { CategirySlider } from '@/components/CategirySlider/CategirySlider'

export default function Home() {
  // const handleSubmit = async () => {
  //   console.log('ddd')
  //   const res = await fetch('http://localhost:3000/api/category').json()
  //   console.log(res)
  //   return
  // }
  return (
    <div className={styles.home}>
      {/* <button onClick={() => handleSubmit()}>cccc</button> */}
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
      <CategirySlider />
    </div>
  )
}
