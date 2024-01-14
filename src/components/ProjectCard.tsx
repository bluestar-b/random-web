import React from "react"

interface ProjectCardProps {
  linkHref: string
  linkAriaLabel: string
  title: string
  content: string
}

const ProjectCard = ({
  linkHref,
  linkAriaLabel,
  title,
  content,
}: ProjectCardProps) => {
  return (
    <div className="">
      <a href={linkHref} aria-label={linkAriaLabel}>
        <h2 className="text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-700 text-xl font-semibold mb-2 underline-offset-2 hover:underline">
          {title}
        </h2>
      </a>
      <p>{content}</p>
    </div>
  )
}

export default ProjectCard
