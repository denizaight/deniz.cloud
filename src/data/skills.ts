export interface SkillInfo {
	name: string;
	icon: string;
	href: string;
	bg?: string;
}

export const skills: SkillInfo[] = [
	{
		name: "JavaScript",
		icon: "js",
		href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
		bg: "#ecdb4f"
	},
	{
		name: "HTML",
		icon: "html",
		href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
		bg: "#d55125"
	},
	{
		name: "CSS",
		icon: "css",
		href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
		bg: "#3076bd"
	},
	{
		name: "MongoDB",
		icon: "mongodb",
		href: "https://www.mongodb.com/",
		bg: "#0f3430"
	},
	{
		name: "Node.js",
		icon: "nodejs",
		href: "https://nodejs.org/en/"
	},
	{
		name: "GitHub",
		icon: "github",
		href: "https://github.com/"
	},
	{
		name: "Tailwind CSS",
		icon: "tailwind",
		href: "https://tailwindcss.com/"
	},
	{
		name: "React",
		icon: "react",
		href: "https://reactjs.org/"
	}
];
