import type { FC } from "react";
import { RiArrowRightUpLine } from "react-icons/ri";

interface Project {
	id: number;
	title: string;
	description: string;
	link: string;
	target?: string;
	tags?: string[];
}

interface ProjectCardProps {
	project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
	const colors = [
		"bg-emerald-100 text-emerald-700 border-emerald-700",
		"bg-yellow-100 text-yellow-700 border-yellow-700",
		"bg-orange-100 text-orange-700 border-orange-700",
		"text-slate-700 border-slate-700",
	];

	return (
		<div className="flex flex-col items-start pt-2">
			<a
				href={project.link}
				target={project.target || ""}
				rel={project.target === "_blank" ? "noopener noreferrer" : undefined}
				className="group relative -mx-3 w-full transform rounded-lg px-3 py-2 transition-all duration-300 ease-in-out md:hover:scale-105 md:hover:bg-hoverColor">
				<div className="flex items-center justify-between text-sm font-medium tracking-tight text-title md:group-hover:text-primary">
					<div className="flex flex-wrap items-center">
						<h3>{project.title}</h3>
						{project.tags &&
							project.tags.map((tag, index) => (
								<div
									key={index}
									className={`ml-2 rounded-full border px-1.5 py-0.5 text-xs font-medium ${colors[index % colors.length]}`}>
									<span>{tag}</span>
								</div>
							))}
					</div>
					<RiArrowRightUpLine className="ml-0.5 text-primary opacity-0 transition-opacity duration-150 md:group-hover:opacity-100" />
				</div>
				<p className="text-sm text-body">{project.description}</p>
			</a>
		</div>
	);
};

export default ProjectCard;
