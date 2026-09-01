import { Link } from 'react-router-dom';
import { teamData } from './data';

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50 p-10">
            <h1 className="text-4xl font-bold text-center text-blue-900 mb-10">Tim Developer Hebat</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {teamData.map((member) => (
                    <div key={member.id} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
                        <img src={member.photo} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
                        <h2 className="text-xl font-semibold">{member.name}</h2>
                        <p className="text-gray-500 mb-4">{member.role}</p>
                        <Link to={`/cv/${member.id}`} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                            Lihat CV Lengkap
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}