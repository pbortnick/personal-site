import Image from 'next/image'
import s from './style.module.css'

const Hero = () => (
  <div className={s.hero}>
    <div className={s.heroInner}>
      <div className={s.imageContainer}>
        <Image src={require('./img/me.png')} width={200} height={200} alt="profile-image" />
      </div>
      <div className={s.textContainer}>
        <h2 className={s.pretitle}>Pamela Honey Bortnick</h2>
        <h1 className={s.title}>Welcome to my website</h1>
      </div>
    </div>
  </div>
)

export default Hero