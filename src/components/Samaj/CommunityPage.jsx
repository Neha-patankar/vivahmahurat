import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { communities } from './communities';

const CommunityPage = () => {
  const { name } = useParams();
  const community = communities.find(c => c.name === name);

  if (!community) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl text-red-500">Community not found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 p-10 text-center">
      <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-2xl p-8 border border-pink-200">
        <div className={`text-6xl mb-4 animate-pulse`}>{community.icon}</div>
        <h1 className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${community.gradient}`}>
          {community.name}
        </h1>
        <p className="text-gray-600 mt-2 mb-6">({community.english})</p>
        <p className="text-gray-700 leading-relaxed">
          This is a detailed page for <strong>{community.name}</strong>. You can show more community info here.
        </p>
        <Link to="/" className="mt-6 inline-block text-sm text-pink-600 hover:underline">← Back to Communities</Link>
      </div>
    </div>
  );
};

export default CommunityPage;
