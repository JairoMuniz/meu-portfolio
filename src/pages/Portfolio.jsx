import '/src/Portfolio.css'; 

const projects = [
  {
    name: 'Pokedex',
    description: 'Feito para mostrar todos os pokemons',
    video: '/assets/videopokedex.mp4', // Caminho relativo a partir da pasta public
    link: 'https://github.com/JairoMuniz/pokedex'
  },
  {
    name: 'Lista de Tarefas',
    description: 'Aplicativo para gerenciar suas tarefas diárias',
    video: '/assets/videolistadetarefas.mp4', // Caminho relativo a partir da pasta public
    link: 'https://github.com/JairoMuniz/to-do-list.React'
  },
  {
    name: 'Pesquisa de Animais',
    description: 'Ferramenta para pesquisar informações sobre animais',
    video: '/assets/videopesquisadeanimais.mp4', // Caminho relativo a partir da pasta public
    link: 'https://github.com/JairoMuniz/Pesquisa_animais_projeto'
  },
  // Adicione mais projetos conforme necessário
];

const Portfolio = () => (
  <div className="portfolio-container">
    <h1 className="portfolio-title">Portfólio</h1>
    <div className="projects-wrapper">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h2 className="project-title">{project.name}</h2>
          <p className="project-description">{project.description}</p>
          <video 
            src={project.video} 
            alt={project.name}
            className="project-video"
            controls
          />
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">Ver Projeto</a>
        </div>
      ))}
    </div>
  </div>
);

export default Portfolio;