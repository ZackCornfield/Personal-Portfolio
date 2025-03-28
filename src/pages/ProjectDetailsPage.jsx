import React from "react";
import { useParams } from "react-router-dom";
import projects from "../data/projects";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import styles from "./ProjectDetailsPage.module.css"; // Import the CSS module

const ProjectDetailsPage = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className={`${styles.container} ${styles["text-center"]}`}>
        <h1 className={styles.title}>Project Not Found</h1>
        <p>The project you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <button
        className={styles["back-button"]}
        onClick={() => window.history.back()}
      >
        <ArrowLeft size={20} /> Back to Projects
      </button>

      <div className={styles.header}>
        <div>
          <h1 className={styles["project-title"]}>{project.title}</h1>
          <p className={styles.description}>{project.fullDescription}</p>
          <div className={styles.links}>
            {project.links.github ? (
              <button
                className={styles.button}
                onClick={() => window.open(project.links.github, "_blank")}
              >
                GitHub
              </button>
            ) : (
              <button
                className={styles.button + " " + styles.unavailable}
              >
                N/A
              </button>
            )}
            {project.links.demo ? (
              <button
                className={`${styles.button} ${styles.demo}`}
                onClick={() => window.open(project.links.demo, "_blank")}
              >
                <ExternalLink size={20} /> Live Demo
              </button>
            ) : (
              <button
                className={styles.button + " " + styles.unavailable}
              >
                N/A
              </button>
            )}
          </div>
        </div>
        <div className={styles["image-container"]}>
          <img
            src={project.image}
            alt={project.title}
            className={styles["project-image"]}
          />
        </div>
      </div>

      <div className={styles.details}>
        <section>
          <h2>Project Type</h2>
          <p>{project.type}</p>
        </section>

        <section>
          <h2>Last Updated</h2>
          <p>
            {new Date(project.lastUpdated).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </section>

        <section>
          <h2>Development Team</h2>
          {project.developmentTeam.map((member, index) => (
            <div key={index} className={styles["team-member"]}>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </section>

        <section>
          <h2>Project Planning and Tools</h2>
          <div className={styles.planning}>
            <p>
              <strong>Methodology:</strong> {project.projectPlanning.methodology}
            </p>
            <p>
              <strong>Tools:</strong>{" "}
              {project.projectPlanning.tools.join(", ")}
            </p>
          </div>
        </section>

        {project.trailer && (
          <section>
            <h2>Project Trailer</h2>
            <a
              href={project.trailer.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.trailer.thumbnail}
                alt="Project Trailer"
                className={styles["trailer-thumbnail"]}
              />
            </a>
          </section>
        )}

        <section>
          <h2>Features Developed By Me</h2>
          <div className={styles.features}>
            {project.featuresDeveloped.map((feature, index) => (
              <div key={index} className={styles["feature-card"]}>
                {feature.image && (
                  <img
                    src={feature.image}
                    alt={feature.name}
                    className={styles["feature-image"]}
                  />
                )}
                <div className={styles["feature-content"]}>
                  <h3>{feature.name}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;