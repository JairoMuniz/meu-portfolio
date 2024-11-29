import PropTypes from 'prop-types';

const ProjectCard = ({ project }) => (
  <div>
    <h2>{project.name}</h2>
    <p>{project.description}</p>
    <img src={project.image} alt={project.name} />
    <a href={project.link} target="_blank" rel="noopener noreferrer">Ver Projeto</a>
  </div>
);

ProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;