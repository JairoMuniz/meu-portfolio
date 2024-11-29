
const projects = [
  {
    name: 'Projeto 1',
    description: 'Descrição breve do projeto 1',
    image: '/assets/projeto1.png',
    link: 'https://github.com/seu-usuario/projeto1'
  },
  // Adicione mais projetos conforme necessário
];

const Portfolio = () => (
  <div>
    <h1>Portfólio</h1>
    {projects.map((project, index) => (
      <div key={index}>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <img src={project.image} alt={project.name} />
        <a href={project.link} target="_blank" rel="noopener noreferrer">Ver Projeto</a>
      </div>
    ))}
  </div>
);

export default Portfolio;