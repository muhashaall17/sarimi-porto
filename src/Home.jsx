import { useState } from 'react';
import { Link } from 'react-router-dom';
import { teamData } from './data';

import CVFaishal from './CV-faishal';
import CVAgi from './CV-agi';
import CVZaidan from './CV-zaidan';

export default function Home() {

    const [activeModal, setActiveModal] = useState(null);

    const renderCVContent = () => {
        switch (activeModal) {
            case 'faishal':
                return <CVFaishal />;
            case 'agi':
                return <CVAgi />;
            case 'zaidan':
                return <CVZaidan />;
            default:
                return null;
        }
    };

    return (
        <>
            {/* 
        Container Utama Home. 
        Jika activeModal ada isinya, kita beri efek blur-md pada background ini.
      */}
            <div className={`min-h-screen bg-slate-950 text-slate-200 p-10 relative overflow-hidden transition-all duration-500 ${activeModal ? 'blur-md grayscale-[30%]' : ''}`}>

                {/* Ornamen Cahaya Neon di Belakang */}
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-cyan-600/20 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-fuchsia-600/20 rounded-full blur-[100px] pointer-events-none"></div>

                <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                    npm run Masak-Sarimi
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
                    {teamData.map((member) => (
                        <div key={member.id} className="bg-slate-900/40 backdrop-blur-md border border-white/10 p-8 rounded-2xl text-center transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] group">

                            <div className="relative inline-block mb-6">
                                <img src={member.photo} alt={member.name} className="w-32 h-32 rounded-full mx-auto object-cover border-2 border-slate-700 group-hover:border-cyan-400 transition-colors duration-500 relative z-10" />
                                <div className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.6)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            <h2 className="text-2xl font-bold text-slate-100 mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                                {member.name}
                            </h2>
                            <p className="text-cyan-500/80 mb-8 font-semibold tracking-widest uppercase text-xs">
                                {member.role}
                            </p>

                            {/* Tombol yang memicu munculnya modal */}
                            <button
                                onClick={() => setActiveModal(member.id)}
                                className="inline-block bg-transparent border border-cyan-500 text-cyan-400 px-6 py-2.5 rounded-full font-bold text-sm tracking-wide cursor-pointer transition-all duration-300 hover:bg-cyan-500 hover:text-slate-950 hover:shadow-[0_0_20px_rgba(34,211,238,0.8)]"
                            >
                                ACCESS DATA
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- KANVAS MODAL --- */}
            {/* Modal hanya muncul jika activeModal tidak null */}
            {activeModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-10 bg-slate-950/60 backdrop-blur-sm transition-opacity">

                    {/* Kotak Modal */}
                    <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-[0_0_50px_rgba(34,211,238,0.1)] custom-scrollbar">

                        {/* Tombol Close di pojok kanan atas modal */}
                        <button
                            onClick={() => setActiveModal(null)}
                            className="sticky top-4 right-4 float-right bg-slate-800 text-slate-400 hover:text-fuchsia-400 hover:bg-slate-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors z-10"
                        >
                            ✕
                        </button>

                        {/* Area Konten CV */}
                        <div className="p-8 sm:p-12">
                            {renderCVContent()}
                        </div>
                    </div>

                    {/* Area klik di luar kotak untuk menutup modal */}
                    <div
                        className="absolute inset-0 z-[-1]"
                        onClick={() => setActiveModal(null)}
                    ></div>
                </div>
            )}
        </>
    );
}