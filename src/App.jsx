import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Server, Code, Terminal, Cpu, Mail, Globe, ShieldCheck, HardDrive, Network, Box, Database 
} from 'lucide-react';
import './App.css';

const App = () => {
  const [lang, setLang] = useState('es');

  const content = {
    es: {
      role: "Administrador de TI | Especialista en Infraestructura",
      about: "Especialista en administración de servidores y seguridad perimetral. Experto en virtualización, contenedores y gestión de infraestructura crítica para entornos corporativos e industriales.",
      experience: "Trayectoria Profesional",
      projects: "Arquitectura y Homelab",
      skills: "Stack Tecnológico",
      contact: "Contacto",
      btnLang: "English Version",
      skillsList: [
        { icon: <Server color="#3b82f6" />, title: "Servidores y Sistemas", desc: "Linux (Avanzado), Windows Server, Proxmox, Docker, IIS." },
        { icon: <ShieldCheck color="#3b82f6" />, title: "Seguridad y Redes", desc: "Fortinet, Netgate, Routing, Firewalling, M365 Security." },
        { icon: <Database color="#3b82f6" />, title: "Web y Datos", desc: "SQL, WordPress, Gestión de Bases de Datos, Apache." },
        { icon: <Code color="#3b82f6" />, title: "Programación", desc: "C#, C++, Java, PHP (Intermedio), React (Básico)." }
      ],
      jobs: [
        { 
          company: "ProDominicana", 
          title: "Especialista en Soporte para Tecnología", 
          date: "Abril 2025 - Actualidad",
          desc: "Administración de servidores críticos, servicios en la nube (M365) y soporte avanzado para el CRM institucional." 
        },
        { 
          company: "Grupo Hospifar S.R.L.", 
          title: "Soporte Técnico", 
          date: "Febrero 2024 - Abril 2025",
          desc: "Gestión de redes, administración de firewalls Fortinet y mantenimiento preventivo de infraestructura IT." 
        },
        { 
          company: "VZ Controles Industriales", 
          title: "Soporte Técnico de Infraestructura", 
          date: "Agosto 2022 - Febrero 2024",
          desc: "Configuración y gestión de firewalls Netgate. Administración de servidores web IIS, WordPress y mantenimiento de bases de datos SQL." 
        }
      ],
      projectList: [
        { 
          title: "Virtualización con Proxmox VE", 
          desc: "Implementación de hipervisores para servicios aislados mediante contenedores LXC y VMs de alta disponibilidad.", 
          tech: ["Proxmox", "LXC", "Hypervisor"],
          icon: <Server size={20} />
        },
        { 
          title: "Ecosistema Docker", 
          desc: "Orquestación de servicios locales y automatización de despliegues mediante Docker Compose.", 
          tech: ["Docker", "Containers", "Self-hosting"],
          icon: <Box size={20} />
        },
        { 
          title: "Almacenamiento NAS (OMV)", 
          desc: "Gestión de almacenamiento en red con OpenMediaVault y segmentación de red segura vía Router OS.", 
          tech: ["OMV", "RAID", "Networking"],
          icon: <HardDrive size={20} />
        },
        { 
          title: "Reconstrucción RAID 6", 
          desc: "Recuperación de datos de 10TB en NAS Thecus mediante gestión avanzada de mdadm.", 
          tech: ["mdadm", "CLI", "Data Recovery"],
          icon: <Terminal size={20} />
        }
      ]
    },
    en: {
      role: "IT Administrator | Infrastructure Specialist",
      about: "Server administration and perimeter security specialist. Expert in virtualization, containers, and critical infrastructure management for corporate and industrial environments.",
      experience: "Professional Experience",
      projects: "Architecture & Homelab",
      skills: "Tech Stack",
      contact: "Contact",
      btnLang: "Versión Español",
      skillsList: [
        { icon: <Server color="#3b82f6" />, title: "Servers & Systems", desc: "Linux (Advanced), Windows Server, Proxmox, Docker, IIS." },
        { icon: <ShieldCheck color="#3b82f6" />, title: "Security & Networking", desc: "Fortinet, Netgate, Routing, Firewalling, M365 Security." },
        { icon: <Database color="#3b82f6" />, title: "Web & Data", desc: "SQL, WordPress, Database Management, Apache." },
        { icon: <Code color="#3b82f6" />, title: "Programming", desc: "C#, C++, Java, PHP (Intermediate), React (Basic)." }
      ],
      jobs: [
        { 
          company: "ProDominicana", 
          title: "IT Support Specialist", 
          date: "April 2025 - Present",
          desc: "Critical server administration, cloud services (M365), and advanced support for institutional CRM." 
        },
        { 
          company: "Grupo Hospifar S.R.L.", 
          title: "Technical Support", 
          date: "Feb 2024 - April 2025",
          desc: "Network management, Fortinet firewall administration, and IT infrastructure maintenance." 
        },
        { 
          company: "VZ Controles Industriales", 
          title: "Infrastructure Support", 
          date: "August 2022 - February 2024",
          desc: "Netgate firewall configuration and management. Administration of IIS, WordPress web servers, and SQL database maintenance." 
        }
      ],
      projectList: [
        { 
          title: "Proxmox VE Virtualization", 
          desc: "Hypervisor implementation for isolated services using LXC containers and high-availability VMs.", 
          tech: ["Proxmox", "LXC", "Hypervisor"],
          icon: <Server size={20} />
        },
        { 
          title: "Docker Ecosystem", 
          desc: "Local service orchestration and automated deployment through Docker Compose.", 
          tech: ["Docker", "Containers", "Self-hosting"],
          icon: <Box size={20} />
        },
        { 
          title: "NAS Storage (OMV)", 
          desc: "Network storage management with OpenMediaVault and secure network segmentation.", 
          tech: ["OMV", "RAID", "Networking"],
          icon: <HardDrive size={20} />
        },
        { 
          title: "RAID 6 Reconstruction", 
          desc: "10TB data recovery on Thecus NAS via advanced mdadm management.", 
          tech: ["mdadm", "CLI", "Data Recovery"],
          icon: <Terminal size={20} />
        }
      ]
    }
  };

  const t = content[lang];
  const scrollVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="app-wrapper">
      <nav className="glass-nav">
        <span className="logo">PASCUAL.PIMENTEL</span>
        <button onClick={() => setLang(lang === 'es' ? 'en' : 'es')} className="lang-toggle">
          <Globe size={18} /> {t.btnLang}
        </button>
      </nav>

      <main className="container">
        {/* HERO */}
        <motion.section className="hero-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="hero-content">
            <div className="profile-wrapper">
              <img 
                src="https://media.licdn.com/dms/image/v2/D4E03AQGOZG6jDye-dA/profile-displayphoto-shrink_200_200/B4EZPPdMcSGcAc-/0/1734352358021?e=1778112000&v=beta&t=lk-bxauM7_T6jJd_cETlEUGyZCazTlvCu-xTj0mfOQI" 
                className="profile-pic" alt="Pascual"
              />
            </div>
            <h1>Pascual Pimentel Vicente</h1>
            <h2 className="gradient-text">{t.role}</h2>
            <p className="hero-bio">{t.about}</p>
            <div className="hero-links">
              <a href="https://www.linkedin.com/in/pascual-pimentel-vicente-bb8438247" target="_blank" rel="noreferrer" className="btn-primary">LinkedIn</a>
              <a href="mailto:tu-correo@ejemplo.com" className="btn-secondary"><Mail size={20} /> {t.contact}</a>
            </div>
          </div>
        </motion.section>

        {/* SKILLS - AHORA TOTALMENTE BILINGÜE */}
        <motion.section className="skills-section" initial="hidden" whileInView="visible" variants={scrollVariant} viewport={{ once: true }}>
          <h3><Terminal size={24} /> {t.skills}</h3>
          <div className="skills-grid">
            {t.skillsList.map((skill, i) => (
              <div key={i} className="skill-card">
                {skill.icon}
                <h4>{skill.title}</h4>
                <p>{skill.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* EXPERIENCE */}
        <motion.section className="experience-section" initial="hidden" whileInView="visible" variants={scrollVariant} viewport={{ once: true }}>
          <h3><ShieldCheck size={24} /> {t.experience}</h3>
          <div className="timeline">
            {t.jobs.map((job, i) => (
              <div key={i} className="timeline-item">
                <div className="time-dot"></div>
                <h4>{job.title}</h4>
                <h5>{job.company} | <small>{job.date}</small></h5>
                <p>{job.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* PROJECTS */}
        <motion.section className="projects-section" initial="hidden" whileInView="visible" variants={scrollVariant} viewport={{ once: true }}>
          <h3><Cpu size={24} /> {t.projects}</h3>
          <div className="projects-grid">
            {t.projectList.map((p, i) => (
              <motion.div key={i} className="project-card" whileHover={{ translateY: -5 }}>
                <div style={{ display: 'flex', gap: '10px', color: '#3b82f6' }}>{p.icon} <h4>{p.title}</h4></div>
                <p>{p.desc}</p>
                <div className="tech-tags">{p.tech.map(tag => <span key={tag}>{tag}</span>)}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default App;