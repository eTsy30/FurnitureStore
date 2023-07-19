import Image from 'next/image'
import styles from './page.module.scss'
import backGroundImage from '@/assets/background.png'
import { PromoWindow } from '@/components/PromoWindow/PromoWindow'
import { CategirySlider } from '@/components/CategirySlider/CategirySlider'
const getTopics = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/category', {
      cache: 'force-cache',
    })

    if (!res.ok) {
      throw new Error('Failed to fetch topics')
    }

    return res.json()
  } catch (error) {
    console.log('Error loading topics: ', error)
  }
}
export default async function Home() {
  // const handleSubmit = async () => {
  //   console.log('ddd')
  //   const res = await fetch('http://localhost:3000/api/category').json()
  //   console.log(res)
  //   return
  // }
  const data = await getTopics()
  console.log(data, 'fdddddddd')
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
      <CategirySlider data={data} />
    </div>
  )
}
// export async function getServerSideProps() {
//   const response = await fetch('http://localhost:3000/api/category') // Замените на вашу конечную точку API
//   const data = await response.json()

//   return {
//     props: {
//       data,
//     },
//   }
// }
