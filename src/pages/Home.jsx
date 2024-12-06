import '/src/Home.css';
const Home = () => (
  <div className="text-center d-flex flex-column align-items-center justify-content-center min-vh-100">
    <h1 className="home-title">Bem-vindo ao meu Portfólio</h1>
    <p className="home-description">Sou Jairo, um desenvolvedor web com habilidades em programação.</p>
    <nav className="mb-4 d-flex justify-content-center">
      <a className="btn btn-primary me-2 nav-link" href="/">Home</a>
      <a className="btn btn-primary me-2 nav-link" href="/portfolio">Portfólio</a>
      <a className="btn btn-primary nav-link" href="/contact">Contato</a>
    </nav>
    <img src="/assets/fotocurriculo.jpg" alt="Jairo" className="foto-curriculo" />
  </div>
);

export default Home;