function Error({ statusCode }) {

  return (
    <p style={{ fontSize: '12', color: 'red'}}>
      {statusCode
        ? `Ocorreu o erro: ${statusCode} no servidor`
        : 'Ocorreu um erro no cliente'}
    </p>
  )
}

Error.getInitialProps = ({ res, err }) => {

  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode }
}

export default Error;