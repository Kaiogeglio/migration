import { useEffect } from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';

import styles from '../../styles/components/Header.module.css';
import Image from 'next/image';

function Header() {

  async function handleLogout() {

    console.log("chegou aqui")
    await localStorage.clear();
    await Cookies.remove("over_token");
    handleAuthenticated();
  }

  async function handleAuthenticated() {
    let token = await localStorage.getItem("over_token");

    if (!token) {
      window.location = "/signin";
    }
  }

  useEffect(() => {
    handleAuthenticated();
  }, [])

  return(
    <div className={styles.header}>
      <div className={styles.imgLogo}>
        <Link href="/">
          <a>
            <Image 
              src="/images/logo.png"
              width={220}
              height={40}
            />
          </a>
        </Link>
      </div>
      <div className={styles.containerLinks}>
        <Link href="/courses">
          <a>
            Cursos
          </a>
        </Link>
        <a
          onClick={handleLogout}
        >Sair
        </a>
      </div>
    </div>
  )
}

export default Header;