export default function Home() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-lg font-bold mb-4">_hello</h2>
        <p className="text-neutral-300 leading-relaxed">
          I am a final-year undergraduate at <span className="text-white font-bold">IIT Patna</span>. 
          I build systems at the intersection of <span className="text-white">AI Agents</span>, <span className="text-white">RAG</span>, and <span className="text-white">Full-stack Engineering</span>.
        </p>
        <p className="mt-4 text-neutral-300">
          Currently exploring Physics-Informed Neural Networks and Cross-Modal generation.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold mb-4">_experience</h2>
        <ul className="space-y-4 text-sm">
          <li>
            <span className="text-neutral-500">[2025]</span> <strong className="text-white">Hawky.ai</strong> — Product Intern
            <br/><span className="text-neutral-400 pl-14 block">Designed sales outreach automation using RAG.</span>
          </li>
          <li>
            <span className="text-neutral-500">[2025]</span> <strong className="text-white">myHQ (ANAROCK)</strong> — SDE Intern
            <br/><span className="text-neutral-400 pl-14 block">Integrated Storybook & resolved critical payment migrations.</span>
          </li>
          <li>
            <span className="text-neutral-500">[2024]</span> <strong className="text-white">AI-NLP-ML Lab</strong> — Research Assistant
            <br/><span className="text-neutral-400 pl-14 block">Developed M3C-TAC for multimodal meme classification.</span>
          </li>
        </ul>
      </section>
    </div>
  );
}