import styles from '../styles/pages/Home.module.css';
import Header from '../components/Header';
import Link from 'next/link';

function home() {

  return (
    <div className={styles.structure}>
      <Header />
      <div className={styles.container}>
        <h1>Seja bem vindo</h1>
        <div className={styles.cardContainer}>
          <Link
            href="/courses"
          >
            <div className={styles.card}>
              <h2>Cursos</h2>
              <p>Acesse e edite os cursos.</p>
            </div>
          </Link>
          <Link
            href="/users"
          >
            <div className={styles.card}>
              <h2>Usuários</h2>
              <p>Gerencie os usuários da aplicação.</p>
            </div>
          </Link>
          <Link
            href="/users"
          >
            <div className={styles.card}>
              <h2>Usuários</h2>
              <p>Gerencie os usuários da aplicação.</p>
            </div>
          </Link>
          <Link
            href="/users"
          >
            <div className={styles.card}>
              <h2>Usuários</h2>
              <p>Gerencie os usuários da aplicação.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default home;