export default function Projects() {
  const projects = [
    {
      title: "Gloommy",
      tech: "Cross-Modal RAG, Gemini 2.5, Next.js",
      desc: "Pinterest for your AI. A platform enabling users to curate visual assets that actively guide the style and tone of new generations.",
      link: "https://github.com/krishnarathore12", // Update if specific repo exists
    },
    {
      title: "Manimator",
      tech: "Agno AGI, Qwen-3, FastAPI",
      desc: "Automated Manim animation generator. Converts prompts into executable mathematical animation code using multi-agent systems.",
      link: "#",
    },
    {
      title: "M3C-TAC",
      tech: "PyTorch, CLIP, Continual Learning",
      desc: "Framework for multimodal meme classification achieving 82.27% accuracy on offensive content detection.",
      link: "#",
    }
  ];

  return (
    <div>
      <h2 className="text-lg font-bold mb-6">_projects</h2>
      <div className="grid gap-6">
        {projects.map((p, i) => (
          <div key={i} className="border border-neutral-800 p-4 hover:border-neutral-600 transition-colors bg-black">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-white">{p.title}</h3>
              <span className="text-xs text-neutral-500 border border-neutral-800 px-2 py-0.5 rounded">
                {p.tech}
              </span>
            </div>
            <p className="text-sm text-neutral-400 mb-4">{p.desc}</p>
            <a href={p.link} target="_blank" className="text-xs text-white underline decoration-neutral-600 hover:decoration-white">
              view_source -&gt;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}