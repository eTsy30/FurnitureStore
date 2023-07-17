import Link from 'next/link'
import { links } from './data'
import styles from './style.module.scss'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()
  return (
    <nav>
      <div className={styles.containerLink}>
        {links.map((link) => (
          <Link
            className={`${styles.link} ${
              pathname === link.url ? styles.active : ''
            }`}
            key={link.id}
            href={link.url}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
