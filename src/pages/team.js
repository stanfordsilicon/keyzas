'use client';

import Image from 'next/image';

const teamMembers = [
    { 
    name: 'Erin Dai',
    role: 'KeyZas Lead Researcher',
    image: '/erin_headshot.png',
    headshotWidth: 320,
    email: 'erindaish23@gmail.com',
    bio: [
      "I’m Antong (Erin) Dai, a senior at Stanford Online High School. Through fieldwork and research on the Naxi community and Dongba script, I learned how deeply language shapes identity and culture. My experiences developing a translation engine and open-source tools have strengthened my commitment to supporting digitally disadvantaged languages through technology. I’m very glad about KeyZas and being able to contribute to building better digital access for so many languages!"
    ]
  },
  {
    name: 'Samantha Leventis',
    role: 'KeyZas Full-Stack Engineer',
    image: '/headshot_zoom.jpg',
    headshotWidth: 320,           // individual headshot size
    resume: '/resume.pdf',
    resumeLabel: 'Resume',        // can change to 'CV' per person
    email: 'samanthaleventis@stanford.edu',
    linkedin: 'https://www.linkedin.com/in/samantha-leventis/',
    bio: [
      "Pursuing my M.Sc. in Computer Science at Stanford, I find inspiration in the ways technology can connect with — and transform — other fields. With a B.Sc. in Symbolic Systems, I’m drawn to the many ways knowledge takes form, from the structure of human language to the logic of computation, and how these perspectives can inform the design of AI and technical architectures.",
      "This passion has led me to Stanford SILICON, where I use my technical skills and linguistic knowledge to help expand digital support for underrepresented languages. Through projects like KeyZas, I’ve discovered the importance of inclusive design and the necessity of technological agency in all language communities.",
      "As I enter my final year at Stanford, I look ahead to a future where I can bring my educational background to think creatively and confront complex, large-scale problems — building technologies that are not only powerful, but also inclusive and transformative."
    ],
  },
  {
  name: 'Thomas S. Mullaney',
  role: 'Director of Stanford SILICON & KeyZas Advisor',
  image: '/mullaney_headshot.jpeg', // make sure you have this image
  headshotWidth: 320,
  resume: '/Mullaney CV.pdf',        // optional, can be null
  email: 'tsmullaney@stanford.edu',
  bio: [
    "Thomas S. Mullaney is a SILICON Co-PI and current Director. He is a Professor of Chinese History at Stanford University, Kluge Chair in Technology and Society at the Library of Congress, and a Guggenheim Fellow. He is the author or lead editor of 8 books, including The Chinese Computer: A Global History of the Information Age (MIT Press, 2024), Where Research Begins (University of Chicago Press, 2022, with Christopher Rea), The Chinese Typewriter: A History (MIT Press, 2017, winner of the Fairbank Prize), and Coming to Terms with the Nation: Ethnic Classification in Modern China (UC Press, 2010).",
    "He earned his BA and MA from the Johns Hopkins University, and his PhD from Columbia University. For the past 15 years, his research, publications, conference planning, and coursework have focused expressly on asymmetries in the global information and language technologies, with a keen focus on writing systems that have been systematically marginalized and excluded from the modern information age."
  ]
}

];

export default function TeamPage() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-12">
      <h1 className="text-4xl font-bold mb-12" style={{ marginTop: '5rem' }}>
        KeyZas' Team
      </h1>

      {teamMembers.map((member, idx) => (
        <div key={idx} className="team-card" style={{ marginTop: '4rem' }}>
          {/* Headshot */}
          <div
            className="team-card-image"
            style={{ width: member.headshotWidth }}
          >
            <Image
              src={member.image}
              alt={member.name}
              width={member.headshotWidth}
              height={member.headshotWidth} // preserves natural aspect ratio
              style={{ width: '100%', height: 'auto', borderRadius: 0 }}
            />
          </div>

          {/* Text */}
          <div className="team-card-text">
            <h2 className="text-2xl font-bold mb-1">{member.role}</h2>
            <h3 className="text-xl font-semibold mb-3">{member.name}</h3>

            <p className="mb-4">
              {member.resume && (
                <>
                  <a
                    href={member.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline mr-2"
                  >
                    {member.resumeLabel || 'Resume'}
                  </a>
                  &nbsp;|&nbsp;
                </>
              )}
              <a
                href={`mailto:${member.email}`}
                className="text-blue-500 underline mx-2"
              >
                {member.email.replace('@', ' [at] ')}
              </a>
              {member.linkedin && (
                <>
                  &nbsp;|&nbsp;
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline ml-2"
                  >
                    LinkedIn
                  </a>
                </>
              )}
            </p>

            {member.bio.map((paragraph, i) => (
              <p key={i} className="mb-4">{paragraph}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
