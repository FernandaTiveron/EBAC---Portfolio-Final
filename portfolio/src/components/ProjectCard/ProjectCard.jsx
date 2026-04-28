import "./ProjectCard.css"; 

function ProjectCard({ title, description, image, tech, link }) {
  return (
    <div className="card">
      {image && <img src={image} alt={title} />}

      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>

        {Array.isArray(tech) && (
          <div className="tech">
            {tech.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        )}

        {link && (
          <a href={link} target="_blank" rel="noreferrer">
            Ver projeto →
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;