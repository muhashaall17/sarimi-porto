import { useParams, Link } from 'react-router-dom';
import { teamData } from './data';

export default function Detail() {
    const { id } = useParams();
    const member = teamData.find(m => m.id === id);

    if (!member) return <h2 className="text-center mt-20">Anggota tidak ditemukan</h2>;

    return (
        <div className="max-w-3xl mx-auto p-10 bg-white shadow-lg mt-10 rounded-xl border border-gray-100">
            <Link to="/" className="text-blue-500 hover:underline mb-6 inline-block">← Kembali ke Tim</Link>
            <div className="flex items-center gap-6 border-b pb-6 mb-6">
                <img src={member.photo} alt={member.name} className="w-32 h-32 rounded-full shadow-sm" />
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">{member.name}</h1>
                    <p className="text-xl text-gray-500">{member.role}</p>
                </div>
            </div>
            <div className="space-y-4 text-gray-700">
                <p><strong>Pendidikan:</strong> {member.education}</p>
                <div>
                    <strong>Pengalaman Organisasi & Proyek:</strong>
                    <div className="pl-4 mt-2 border-l-4 border-blue-500 space-y-2">
                        {member.experience.map((exp, idx) => (
                            <p key={idx}>- {exp}</p>
                        ))}
                    </div>
                </div>
                <p className="mt-4 p-4 bg-blue-50 rounded-lg"><strong>Kelengkapan Dokumen:</strong> {member.documents}</p>
            </div>
        </div>
    );
}