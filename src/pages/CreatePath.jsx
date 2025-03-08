import { useState } from "react";

const CreatePath = () => {
  const [subject, setSubject] = useState("");
  const [difficulty, setDifficulty] = useState("Beginner");
  const [pathway, setPathway] = useState([]);
  const [progress, setProgress] = useState(0);

  const generatePath = () => {
    const topics = {
      Math: ["Algebra Basics", "Geometry Essentials", "Calculus Deep Dive"],
      Science: ["Physics Fundamentals", "Organic Chemistry", "Biology Insights"],
      Programming: ["JS Basics", "React Essentials", "Backend Development"],
    };

    setPathway(topics[subject] || []);
    setProgress(0);
  };

  const handleCheck = () => {
    const completed = document.querySelectorAll('input[type="checkbox"]:checked').length;
    const total = pathway.length;
    setProgress(total > 0 ? Math.round((completed / total) * 100) : 0);
  };

  return (
    <div className="p-6 bg-gray-900 text-white shadow-md rounded-lg max-w-lg mx-auto mt-10">
      <h2 className="text-3xl font-bold text-green-400 mb-4">🛤️ Create Your Learning Path</h2>

      {/* Subject Selection */}
      <div className="flex space-x-2 mb-3">
        <select className="w-1/2 p-2 border rounded bg-gray-700 text-white" value={subject} onChange={(e) => setSubject(e.target.value)}>
          <option value="">Select Subject</option>
          <option value="Math">Math</option>
          <option value="Science">Science</option>
          <option value="Programming">Programming</option>
        </select>

        {/* Difficulty Selection */}
        <select className="w-1/2 p-2 border rounded bg-gray-700 text-white" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>

        {/* Generate Path Button */}
        <button onClick={generatePath} className="bg-green-500 text-black px-3 py-2 rounded-lg hover:bg-green-400 transition">🚀 Generate Path</button>
      </div>

      {/* Progress Bar */}
      <div className="mt-4">
        <h3 className="text-lg font-bold text-green-300 mb-1">📊 Progress: {progress}%</h3>
        <div className="w-full bg-gray-700 rounded-full h-3">
          <div className="bg-green-400 h-3 rounded-full transition-all" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      {/* Learning Steps */}
      <ul className="mt-4 list-disc pl-5">
        {pathway.map((step, index) => (
          <li key={index} className="text-gray-300">
            <input type="checkbox" className="mr-2" onChange={handleCheck} />
            {step} ({difficulty} Level)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CreatePath;
