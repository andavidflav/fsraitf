"use client";

import React from 'react';

type TeamMember = {
  name: string;
  image: string;
  role: string;
  designation: string;
};

type Team = {
  title: string;
  members: TeamMember[];
};

const teams: Team[] = [
    {
      title: "Media Team",
      members: [
        { name: "Alice Johnson", image: "/team2.jpg", role: "Photographer", designation: "Media Coordinator" }, // Female
        { name: "Bob Smith", image: "/team1.jpg", role: "Videographer", designation: "Media Lead" }, // Male
        { name: "Cathy Brown", image: "/team2.jpg", role: "Content Writer", designation: "Media Assistant" }, // Female
        { name: "David Lee", image: "/team1.jpg", role: "Graphic Designer", designation: "Creative Head" }, // Male
        { name: "Emma Wilson", image: "/team2.jpg", role: "Social Media Manager", designation: "Outreach" }, // Female
      ],
    },
    {
      title: "Hackathon Team",
      members: [
        { name: "John Doe", image: "/team1.jpg", role: "Mentor", designation: "Tech Lead" }, // Male
        { name: "Jane Smith", image: "/team2.jpg", role: "Participant", designation: "Developer" }, // Female
        { name: "Sam Green", image: "/team1.jpg", role: "Organizer", designation: "Hackathon Coordinator" }, // Male
        { name: "Lucy Gray", image: "/team2.jpg", role: "Volunteer", designation: "Support Staff" }, // Female
        { name: "Tom White", image: "/team1.jpg", role: "Judge", designation: "Tech Expert" }, // Male
      ],
    },
    {
      title: "Tech Talk Team",
      members: [
        { name: "Chris Black", image: "/team1.jpg", role: "Speaker", designation: "Industry Expert" }, // Male
        { name: "Sophia Blue", image: "/team2.jpg", role: "Panelist", designation: "Researcher" }, // Female
        { name: "Liam Brown", image: "/team1.jpg", role: "Host", designation: "Event Moderator" }, // Male
        { name: "Emily Green", image: "/team2.jpg", role: "Coordinator", designation: "Event Manager" }, // Female
        { name: "Mia Red", image: "/team2.jpg", role: "Assistant", designation: "Support Staff" }, // Female
      ],
    },
    {
      title: "Gaming Team",
      members: [
        { name: "Alex Gold", image: "/team1.jpg", role: "Game Developer", designation: "Game Coordinator" }, // Male
        { name: "Jamie Silver", image: "/team2.jpg", role: "Streamer", designation: "Media Outreach" }, // Female
        { name: "Jordan Black", image: "/team1.jpg", role: "Tester", designation: "QA Specialist" }, // Male
        { name: "Taylor White", image: "/team2.jpg", role: "Support", designation: "Tech Support" }, // Female
        { name: "Morgan Green", image: "/team1.jpg", role: "Organizer", designation: "Event Planner" }, // Male
      ],
    },
    {
      title: "Floating Admin Team",
      members: [
        { name: "Olivia Yellow", image: "/team2.jpg", role: "Manager", designation: "Admin Lead" }, // Female
        { name: "Ethan Brown", image: "/team1.jpg", role: "Assistant", designation: "Support Staff" }, // Male
        { name: "Isabella Blue", image: "/team2.jpg", role: "Coordinator", designation: "Logistics" }, // Female
        { name: "Aiden Gray", image: "/team1.jpg", role: "Volunteer", designation: "Event Support" }, // Male
        { name: "Charlotte Green", image: "/team2.jpg", role: "Planner", designation: "Operations Head" }, // Female
      ],
    },
  ];

const TeamPage: React.FC = () => {
    return (
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          margin: "0",
          padding: "0",
          lineHeight: "1.6",
          background: "linear-gradient(135deg, #4B0082, #000)",
          color: "white",
          minHeight: "100vh",
        }}
      >
        {/* Header Section */}
        <header
          style={{
            backgroundColor: "#6A0DAD",
            color: "white",
            padding: "20px",
            textAlign: "center",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          }}
        >
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>About the Team</h1>
          <p>
            Meet the amazing teams behind BTU Tech Fest! These dedicated individuals have worked tirelessly to make this
            event a success.
          </p>
        </header>
  
        {/* Teams Section */}
        <main style={{ padding: "20px 90px" }}>
          {teams.map((team, index) => (
            <section key={index} style={{ marginBottom: "40px" }}>
              <h2
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  borderBottom: "3px solid #6A0DAD",
                  display: "inline-block",
                  paddingBottom: "5px",
                }}
              >
                {team.title}
              </h2>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center", // Centers team members
                  gap: "20px",
                  marginTop: "20px",
                }}
              >
                {team.members.map((member, i) => (
                  <div
                    key={i}
                    style={{
                      width: "200px",
                      border: "1px solid #ddd",
                      borderRadius: "12px",
                      padding: "15px",
                      textAlign: "center",
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      boxShadow: "0 6px 10px rgba(0, 0, 0, 0.5)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.20)";
                      e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.7)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = "0 6px 10px rgba(0, 0, 0, 0.5)";
                    }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      style={{
                        width: "100px", // Updated width
                        height: "100px", // Updated height
                        borderRadius: "50%",
                        marginBottom: "10px",
                        objectFit: "cover",
                        border: "2px solid white",
                        display: "block", // Ensures block-level element
                        margin: "0 auto", // Centers the image horizontally
                      }}
                    />
                    <h3 style={{ margin: "10px 0 5px 0", fontSize: "1rem", fontWeight: "bold" }}>{member.name}</h3>
                    <p style={{ margin: "5px 0", fontWeight: "bold" }}>{member.role}</p>
                    <p style={{ margin: "0", color: "#bbb" }}>{member.designation}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </main>
      </div>
    );
  };
  
  export default TeamPage;