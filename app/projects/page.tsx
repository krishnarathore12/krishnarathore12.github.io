export default function Projects() {
  const projects = [
    {
      title: "Gloommy",
      tech: "Cross-Modal RAG, Gemini 2.5, Next.js",
      desc: "Pinterest for your AI. A platform enabling users to curate visual assets that actively guide the style and tone of new generations.",
      link: "https://github.com/krishnarathore12/gloommy", // Update if specific repo exists
    },
    {
      title: "Manimator",
      tech: "Agno AGI, Qwen-3, FastAPI",
      desc: "Automated Manim animation generator. Converts prompts into executable mathematical animation code using multi-agent systems.",
      link: "https://github.com/krishnarathore12/manimator",
    },
    {
      title: "M3C-TAC",
      tech: "PyTorch, CLIP, Continual Learning",
      desc: "Framework for multimodal meme classification achieving 82.27% accuracy on offensive content detection.",
      link: "https://drive.google.com/file/d/1pdLVleJA6pE3hmLlGpkUT72TNHOUOS7D/view",
    }
  ];

  return (
    <div>
      <h2 className="text-lg font-bold mb-6">_projects</h2>
      <div className="grid gap-6">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
              <h3 className="font-bold text-bold">{p.title}</h3>
              <span className="project-tech">
                {p.tech}
              </span>
            </div>
            <p className="text-sm text-muted mb-4">{p.desc}</p>
            <a href={p.link} target="_blank" className="project-link">
              view_source -&gt;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}