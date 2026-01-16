export default function Contact() {
  return (
    <div>
      <h2 className="text-lg font-bold mb-6">_contact_me</h2>
      <p className="text-neutral-300 mb-8">
        I am currently open to roles in AI Engineering and Backend Development.
      </p>
      
      <div className="space-y-2 text-sm font-mono">
        <div className="flex gap-4">
          <span className="w-24 text-neutral-500">Email:</span>
          <a href="mailto:krishnarathore393@gmail.com" className="hover:text-neutral-300">krishnarathore393@gmail.com</a>
        </div>
        <div className="flex gap-4">
          <span className="w-24 text-neutral-500">GitHub:</span>
          <a href="https://github.com/krishnarathore12" target="_blank" className="hover:text-neutral-300">github.com/krishnarathore12</a>
        </div>
        <div className="flex gap-4">
          <span className="w-24 text-neutral-500">LinkedIn:</span>
          <a href="https://linkedin.com/in/kr005" target="_blank" className="hover:text-neutral-300">linkedin.com/in/kr005</a>
        </div>
      </div>
    </div>
  );
}