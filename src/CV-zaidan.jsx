import { teamData } from './data';

export default function CVZaidan() {
  const member = teamData.find(m => m.id === 'zaidan');

  if (!member) return <div className="text-white">Mengambil data...</div>;

  return (
    <div className="text-slate-200 space-y-8">

      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 border-b border-cyan-500/30 pb-6">
        <img
          src={member.photo}
          alt={member.name}
          className="w-32 h-32 rounded-full border-2 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.4)] object-cover"
        />
        <div className="text-center md:text-left flex-1">
          <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 mb-1">
            {member.name}
          </h2>
          <p className="text-cyan-400 font-mono tracking-widest mb-3 text-sm uppercase">{member.role}</p>
          <p className="text-slate-400 text-sm max-w-2xl leading-relaxed mb-4">
            {member.about}
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-2">

            {/* Tombol Email */}
            <a href={`mailto:${member.email}`} className="flex items-center bg-slate-900/60 hover:bg-cyan-900/40 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-300 text-xs px-4 py-2 rounded-full transition-all duration-300 group">
              <svg className="w-4 h-4 mr-2 text-slate-400 group-hover:text-cyan-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </a>

            {/* Tombol LinkedIn */}
            <a href={member.linkedin} target="_blank" rel="noreferrer" className="flex items-center bg-slate-900/60 hover:bg-cyan-900/40 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-300 text-xs px-4 py-2 rounded-full transition-all duration-300 group">
              <svg className="w-4 h-4 mr-2 text-slate-400 group-hover:text-cyan-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>

            {/* Tombol GitHub */}
            <a href={member.github} target="_blank" rel="noreferrer" className="flex items-center bg-slate-900/60 hover:bg-cyan-900/40 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-300 text-xs px-4 py-2 rounded-full transition-all duration-300 group">
              <svg className="w-4 h-4 mr-2 text-slate-400 group-hover:text-cyan-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>

            {/* Tombol Instagram */}
            <a href={`https://instagram.com/${member.ig}`} target="_blank" rel="noreferrer" className="flex items-center bg-slate-900/60 hover:bg-cyan-900/40 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-300 text-xs px-4 py-2 rounded-full transition-all duration-300 group">
              <svg className="w-4 h-4 mr-2 text-slate-400 group-hover:text-cyan-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              Instagram
            </a>

          </div>
        </div>
      </div>

      {/* Pengalaman Kerja */}
      <div className="bg-slate-900/60 border border-slate-700 hover:border-cyan-500/50 p-6 rounded-xl transition-colors">
        <h3 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">

          <span className="text-cyan-400">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </span>
          Pengalaman
        </h3>
        <div className="space-y-6">
          {member.exp.map((perusahaan, index) => (
            <div key={index} className="border-l-2 border-cyan-500/50 pl-4 relative group">
              <div className="absolute w-3 h-3 bg-cyan-500 rounded-full -left-[7px] top-1.5 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all"></div>
              <h4 className="text-lg font-bold text-slate-100">{perusahaan}</h4>
              <p className="text-cyan-400 text-xs mb-2 font-mono">{member.exp_period[index]}</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-3">{member.exp_desc[index]}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {member.exp_tech[index].split(', ').map((tech, i) => (
                  <span key={i} className="bg-cyan-950/50 border border-cyan-700/50 text-cyan-300 px-2 py-1 rounded text-xs font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pendidikan & Organisasi */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pendidikan */}
        <div className="bg-slate-900/60 border border-slate-700 hover:border-fuchsia-500/50 p-5 rounded-xl transition-colors">
          <h3 className="text-xl font-semibold mb-5 text-white flex items-center gap-2">

            <span className="text-fuchsia-400">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </span>
            Pendidikan
          </h3>
          <div className="space-y-4">
            {member.edu.map((sekolah, index) => (
              <div key={index} className="relative pl-4 border-l border-fuchsia-500/30">
                <p className="font-medium text-slate-100 text-sm md:text-base">{sekolah}</p>
                <p className="text-fuchsia-400/80 text-xs font-mono mt-1">{member.edu_period[index]}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Organisasi */}
        <div className="bg-slate-900/60 border border-slate-700 hover:border-fuchsia-500/50 p-5 rounded-xl transition-colors">
          <h3 className="text-xl font-semibold mb-5 text-white flex items-center gap-2">

            <span className="text-fuchsia-400">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </span>
            Organisasi
          </h3>
          <div className="space-y-4">
            {member.org.map((organisasi, index) => (
              <div key={index} className="relative pl-4 border-l border-fuchsia-500/30">
                <p className="font-medium text-slate-100 text-sm md:text-base">{organisasi}</p>
                <p className="text-fuchsia-400/80 text-xs font-mono mt-1">{member.org_period[index]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Proyek Portofolio */}
      <div className="bg-slate-900/60 border border-slate-700 hover:border-cyan-500/50 p-6 rounded-xl transition-colors">
        <h3 className="text-xl font-semibold mb-5 text-white flex items-center gap-2">

          <span className="text-cyan-400">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </span>
          Proyek Portofolio
        </h3>
        <div className="space-y-6">
          {member.proj.map((proyek, index) => (
            <div key={index} className="border-b border-slate-800 pb-5 last:border-0 last:pb-0">
              <h4 className="font-bold text-slate-100 text-lg flex items-center gap-2">
                <span className="text-cyan-500 text-sm">#</span> {proyek}
              </h4>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">{member.proj_desc[index]}</p>
              <p className="text-xs text-cyan-500/80 font-mono mt-3 bg-cyan-950/30 inline-block px-3 py-1.5 rounded-lg border border-cyan-800/50">
                Tech: {member.proj_tech[index]}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="bg-slate-900/60 border border-slate-700 hover:border-fuchsia-500/50 p-6 rounded-xl transition-colors">
        <h3 className="text-xl font-semibold mb-5 text-white flex items-center gap-2">

          <span className="text-fuchsia-400">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
          </span>
          Technical Skills
        </h3>
        <div className="flex flex-wrap gap-2.5">
          {member.skill.map((keahlian, index) => (
            <span
              key={index}
              className="bg-slate-800/80 border border-slate-600 text-slate-300 px-3.5 py-1.5 rounded-md text-xs font-medium hover:border-fuchsia-400 hover:text-fuchsia-300 transition-colors cursor-default shadow-sm"
            >
              {keahlian}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}