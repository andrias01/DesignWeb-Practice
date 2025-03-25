import { Link } from "react-router-dom"

function ErrorPage() {
  return (
    <section id="error_page">
        <h1>ERROR</h1>
        <h2>No puedes entrar aqui</h2>
        <Link to="/">Ir a HOME</Link>
    </section>
  )
}

export default ErrorPage
