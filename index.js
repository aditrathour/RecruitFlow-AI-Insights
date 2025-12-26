import React, { useState } from 'react';

// Mock Data - Simulates what an AI backend would return
const initialCandidates = [
  { id: 1, name: "Adit Rathour", role: "Python Developer", score: 94, status: "Shortlisted", email: "adit@example.com" },
  { id: 2, name: "Aryan Khan", role: "React Intern", score: 82, status: "Interviewing", email: "aryan@example.com" },
  { id: 3, name: "Sanya Gupta", role: "Data Scientist", score: 45, status: "Rejected", email: "sanya@example.com" },
  { id: 4, name: "Vijay Pratap", role: "Backend Engineer", score: 88, status: "Shortlisted", email: "vijay@example.com" },
];

function App() {
  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', padding: '40px', fontFamily: 'Inter, sans-serif' }}>
      <header style={{ marginBottom: '30px', borderBottom: '2px solid #e2e8f0', paddingBottom: '20px' }}>
        <h1 style={{ color: '#1e293b', fontSize: '28px', fontWeight: 'bold' }}>Hello Recruiter™ | AI Insights</h1>
        <p style={{ color: '#64748b' }}>Managing 24 Active Candidates with Autonomous Screening</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {initialCandidates.map((candidate) => (
          <div key={candidate.id} style={{
            background: 'white', padding: '24px', borderRadius: '16px', 
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', border: '1px solid #f1f5f9'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h3 style={{ margin: 0, color: '#0f172a', fontSize: '18px' }}>{candidate.name}</h3>
                <p style={{ margin: '4px 0', color: '#64748b', fontSize: '14px' }}>{candidate.role}</p>
              </div>
              <div style={{ 
                backgroundColor: candidate.score > 80 ? '#dcfce7' : '#fee2e2', 
                color: candidate.score > 80 ? '#166534' : '#991b1b',
                padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold'
              }}>
                {candidate.score}% Match
              </div>
            </div>
            
            <div style={{ marginTop: '20px', fontSize: '14px' }}>
              <div style={{ color: '#475569' }}>Status: <b>{candidate.status}</b></div>
              <div style={{ color: '#475569', marginTop: '4px' }}>Contact: {candidate.email}</div>
            </div>

            <button style={{
              marginTop: '20px', width: '100%', padding: '10px', borderRadius: '8px',
              border: 'none', backgroundColor: '#4f46e5', color: 'white', fontWeight: '600',
              cursor: 'pointer'
            }}>
              View Full Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
