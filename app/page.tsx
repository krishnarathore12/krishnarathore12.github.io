export default function Home() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-lg font-bold mb-4">_hello</h2>
        <p className="text-muted leading-relaxed">
          I am a final-year undergraduate at <span className="text-bold">IIT Patna</span>. 
          I build systems at the intersection of <span className="text-bold">AI Agents</span>, <span className="text-bold">RAG</span>, and <span className="text-bold">Full-stack Engineering</span>.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold mb-4">_experience</h2>
        <ul className="space-y-4 text-sm">
          <li>
            <span className="text-date">[2025]</span> <strong className="text-bold">Hawky.ai</strong> — Product Intern
            <br/><span className="text-muted pl-14 block">Designed sales outreach automation using RAG.</span>
          </li>
          <li>
            <span className="text-date">[2025]</span> <strong className="text-bold">myHQ (ANAROCK)</strong> — SDE Intern
            <br/><span className="text-muted pl-14 block">Integrated Storybook & resolved critical payment migrations.</span>
          </li>
          <li>
            <span className="text-date">[2024]</span> <strong className="text-bold">AI-NLP-ML Lab</strong> — Research Assistant
            <br/><span className="text-muted pl-14 block">Developed M3C-TAC for multimodal meme classification.</span>
          </li>
        </ul>
      </section>
    </div>
  );
}