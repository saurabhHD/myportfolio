const SkillSection = ({ title, skills }) => {
  return (
    <div className="shadow-sm p-5 rounded">
      <p className="mb-3 text-[#556D91] text-xl font-semibold">{title}</p>
      <div className="grid md:grid-cols-2 gap-3">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col gap-2">
            <p className="flex items-center gap-2">
              <span className={`text-3xl ${skill.color}`}>{skill.icon}</span>
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
