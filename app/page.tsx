export default function Home() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-lg font-bold mb-4">_hello</h2>
        <p className="text-muted leading-relaxed">
          I am a final-year undergraduate at <span className="text-bold">IIT Patna</span>. 
          I am interested in tech, philosophy and design. 
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold mb-4">_experience</h2>
        <ul className="space-y-4 text-sm">
          <li>
            <span className="text-date">[2025]</span> <strong className="text-bold">myHQ (ANAROCK)</strong> — SDE Intern
   
          </li>
          <li>
            <span className="text-date">[2025]</span> <strong className="text-bold">Hawky.ai</strong> — Product Intern

          </li>
          
          <li>
            <span className="text-date">[2024]</span> <strong className="text-bold">AI-NLP-ML Lab</strong> — Research Assistant

          </li>
        </ul>
      </section>
    </div>
  );
}