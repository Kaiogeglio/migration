import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';
import Lottie from 'react-lottie';
import Cookies from 'js-cookie';

//Falta criar as classes
import styles from '../../styles/pages/Signin.module.css';

import api from '../../services/api';

import SigninValidation from '../../utils/validation/SigninValidation';
import Message from '../../components/Message';

import checkAnimation from '../../assets/animation/9953-loading-round.json';
// import logo from '../../assets/images/logo-overstack-novo.png';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: checkAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  async function HandleSubmit() {
    setLoading(true);
    const data = { email, password };

    let validation = await SigninValidation(data);

    if (validation) {
      await api.post('/signin', data)
        .then(response => {
          localStorage.setItem("over_name", response.data.user.name);
          localStorage.setItem("over_token", response.data.token);
          Cookies.set("over_token", response.data.token);
          Message(response);
          setTimeout(() => {
            setLoading(false);
            handleAuthenticated()
          }, 2000);
        })
        .catch(error => {
          Message(error.response.data.message)
          setTimeout(() => {
            setLoading(false);
          }, 2000);
        })
    } else {
      Message("Preencha um email válido e uma senha de no mínimo 6 caracteres!")
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }

  async function handleAuthenticated() {
    let token = await localStorage.getItem("over_token");

    if (token) {
      window.location = "/";
    }
  }

  useEffect(() => {
    handleAuthenticated();
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <ToastContainer />
        <div className={styles.imgContainer}>
          <Image
            src="/images/logo.png"
            width={220}
            height={40}
          />
        </div>
        <input
          className={styles.input}
          type="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className={styles.input}
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Link
          href="/forgot-password"
        >
          <a className={styles.forgotPassword}>
            Esqueceu sua senha?
          </a>
        </Link>

        <button
          className={styles.button}
          onClick={HandleSubmit}
        >
          {loading ?
            <div className={styles.animation}>
              <Lottie options={defaultOptions} />
            </div>

            :
            "Entrar"
          }
        </button>
        <Link
          href="/signup"
        >
          <a className={styles.signin}>Ainda não tem cadastro?
            <span className={styles.span}>Cadastra-se!</span>
          </a>
        </Link>

      </div>
    </div>
  )
}

export default SignIn;
