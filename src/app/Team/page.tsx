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
      { name: "Alice Johnson", image: "/media/alice.jpg", role: "Photographer", designation: "Media Coordinator" },
      { name: "Bob Smith", image: "/media/bob.jpg", role: "Videographer", designation: "Media Lead" },
      { name: "Cathy Brown", image: "/media/cathy.jpg", role: "Content Writer", designation: "Media Assistant" },
      { name: "David Lee", image: "/media/david.jpg", role: "Graphic Designer", designation: "Creative Head" },
      { name: "Emma Wilson", image: "/media/emma.jpg", role: "Social Media Manager", designation: "Outreach" },
    ],
  },
  {
    title: "Hackathon Team",
    members: [
      { name: "John Doe", image: "/hackathon/john.jpg", role: "Mentor", designation: "Tech Lead" },
      { name: "Jane Smith", image: "/hackathon/jane.jpg", role: "Participant", designation: "Developer" },
      { name: "Sam Green", image: "/hackathon/sam.jpg", role: "Organizer", designation: "Hackathon Coordinator" },
      { name: "Lucy Gray", image: "/hackathon/lucy.jpg", role: "Volunteer", designation: "Support Staff" },
      { name: "Tom White", image: "/hackathon/tom.jpg", role: "Judge", designation: "Tech Expert" },
    ],
  },
  {
    title: "Tech Talk Team",
    members: [
      { name: "Chris Black", image: "/techtalk/chris.jpg", role: "Speaker", designation: "Industry Expert" },
      { name: "Sophia Blue", image: "/techtalk/sophia.jpg", role: "Panelist", designation: "Researcher" },
      { name: "Liam Brown", image: "/techtalk/liam.jpg", role: "Host", designation: "Event Moderator" },
      { name: "Emily Green", image: "/techtalk/emily.jpg", role: "Coordinator", designation: "Event Manager" },
      { name: "Mia Red", image: "/techtalk/mia.jpg", role: "Assistant", designation: "Support Staff" },
    ],
  },
  {
    title: "Gaming Team",
    members: [
      { name: "Alex Gold", image: "/gaming/alex.jpg", role: "Game Developer", designation: "Game Coordinator" },
      { name: "Jamie Silver", image: "/gaming/jamie.jpg", role: "Streamer", designation: "Media Outreach" },
      { name: "Jordan Black", image: "/gaming/jordan.jpg", role: "Tester", designation: "QA Specialist" },
      { name: "Taylor White", image: "/gaming/taylor.jpg", role: "Support", designation: "Tech Support" },
      { name: "Morgan Green", image: "/gaming/morgan.jpg", role: "Organizer", designation: "Event Planner" },
    ],
  },
  {
    title: "Floating Admin Team",
    members: [
      { name: "Olivia Yellow", image: "/admin/olivia.jpg", role: "Manager", designation: "Admin Lead" },
      { name: "Ethan Brown", image: "/admin/ethan.jpg", role: "Assistant", designation: "Support Staff" },
      { name: "Isabella Blue", image: "/admin/isabella.jpg", role: "Coordinator", designation: "Logistics" },
      { name: "Aiden Gray", image: "/admin/aiden.jpg", role: "Volunteer", designation: "Event Support" },
      { name: "Charlotte Green", image: "/admin/charlotte.jpg", role: "Planner", designation: "Operations Head" },
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
                      e.currentTarget.style.transform = "scale(1.05)";
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
                        width: "40px", // Updated width
                        height: "40px", // Updated height
                        borderRadius: "50%",
                        marginBottom: "10px",
                        objectFit: "cover",
                        border: "2px solid white",
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