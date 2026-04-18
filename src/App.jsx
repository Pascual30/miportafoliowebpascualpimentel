import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Server, Code, Terminal, Cpu, Mail, Globe, ShieldCheck, HardDrive, Network, Box, Database, Activity 
} from 'lucide-react';
import './App.css';

// --- PLAN NUCLEAR: IMPORTACIÓN DIRECTA DE IMÁGENES ---
// Al importarlas así, Vercel está obligado a procesarlas sin errores de rutas.
import imgProxmox from './imagenes/proxmox.png';
import imgDocker from './imagenes/docker.png';
import imgOpenwrt from './imagenes/openwrt.png';

const App = () => {
  const [lang, setLang] = useState('es');

  const content = {
    es: {
      role: "Administrador de TI | Especialista en Infraestructura",
      about: "Especialista en administración de sistemas y seguridad perimetral. Enfocado en la implementación de entornos de alta disponibilidad, virtualización avanzada y microservicios.",
      experience: "Trayectoria Profesional",
      projects: "Homelab y Arquitectura de Sistemas",
      skills: "Stack Tecnológico",
      contact: "Contacto",
      btnLang: "English Version",
      skillsList: [
        { icon: <Server color="#3b82f6" />, title: "Servidores y Sistemas", desc: "Linux (Avanzado), Windows Server, Proxmox, Docker, IIS." },
        { icon: <ShieldCheck color="#3b82f6" />, title: "Seguridad y Redes", desc: "Fortinet, Netgate, OpenWRT, Firewalling, M365 Security." },
        { icon: <Database color="#3b82f6" />, title: "Web y Datos", desc: "SQL, WordPress, Gestión de Bases de Datos, Apache." },
        { icon: <Code color="#3b82f6" />, title: "Programación", desc: "C#, C++, Java, PHP (Intermedio), React (Básico)." }
      ],
      jobs: [
        { 
          company: "ProDominicana", title: "Especialista en Soporte para Tecnología", date: "Abril 2025 - Actualidad",
          desc: "Administración de servidores críticos, servicios en la nube (M365) y optimización del CRM institucional." 
        },
        { 
          company: "Grupo Hospifar S.R.L.", title: "Soporte Técnico", date: "Febrero 2024 - Abril 2025",
          desc: "Gestión de redes corporativas, administración de firewalls Fortinet y mantenimiento de infraestructura IT." 
        },
        { 
          company: "VZ Controles Industriales", title: "Soporte Técnico de Infraestructura", date: "Agosto 2022 - Febrero 2024",
          desc: "Configuración de firewalls Netgate, gestión de servidores web IIS y mantenimiento de bases de datos SQL." 
        }
      ],
      projectList: [
        { 
          title: "Virtualización con Proxmox VE", 
          desc: "Gestión de hipervisor Proxmox para el despliegue de nodos aislados, contenedores LXC y máquinas virtuales.", 
          tech: ["Proxmox", "LXC", "Hypervisor"],
          icon: <Server size={20} />,
          img: imgProxmox // Usamos la variable importada
        },
        { 
          title: "Infraestructura en Contenedores", 
          desc: "Despliegue y orquestación de microservicios utilizando Docker y Docker Compose para optimización de recursos.", 
          tech: ["Docker", "Containers", "Self-hosting"],
          icon: <Box size={20} />,
          img: imgDocker // Usamos la variable importada
        },
        { 
          title: "Redes Avanzadas con OpenWRT", 
          desc: "Configuración de enrutamiento avanzado y seguridad perimetral mediante firmware personalizado OpenWRT.", 
          tech: ["OpenWRT", "Networking", "Routing"],
          icon: <Network size={20} />,
          img: imgOpenwrt // Usamos la variable importada
        },
        { 
          title: "Recuperación RAID 6", 
          desc: "Rescate de datos de un arreglo de 10TB degradado en NAS Thecus mediante gestión avanzada de terminal.", 
          tech: ["mdadm", "RAID 6", "Linux"],
          icon: <Terminal size={20} />,
          img: null
        }
      ]
    },
    en: {
      role: "IT Administrator | Infrastructure Specialist",
      about: "Server administration and perimeter security specialist. Focused on deploying high-availability environments, advanced virtualization, and microservices.",
      experience: "Professional Experience",
      projects: "Homelab & Systems Architecture",
      skills: "Tech Stack",
      contact: "Contact",
      btnLang: "Versión Español",
      skillsList: [
        { icon: <Server color="#3b82f6" />, title: "Servers & Systems", desc: "Linux (Advanced), Windows Server, Proxmox, Docker, IIS." },
        { icon: <ShieldCheck color="#3b82f6" />, title: "Security & Networking", desc: "Fortinet, Netgate, OpenWRT, Firewalling, M365 Security." },
        { icon: <Database color="#3b82f6" />, title: "Web & Data", desc: "SQL, WordPress, Database Management, Apache." },
        { icon: <Code color="#3b82f6" />, title: "Programming", desc: "C#, C++, Java, PHP (Intermediate), React (Basic)." }
      ],
      jobs: [
        { company: "ProDominicana", title: "IT Support Specialist", date: "April 2025 - Present", desc: "Critical server administration, cloud services (M365), and institutional CRM optimization." },
        { company: "Grupo Hospifar S.R.L.", title: "Technical Support", date: "Feb 2024 - April 2025", desc: "Corporate network management, Fortinet firewall administration, and IT infrastructure maintenance." },
        { company: "VZ Controles Industriales", title: "Infrastructure Support", date: "August 2022 - February 2024", desc: "Netgate firewall configuration, IIS web server management, and SQL database maintenance." }
      ],
      projectList: [
        { title: "Proxmox VE Virtualization", desc: "Proxmox hypervisor management for deploying isolated nodes, LXC containers, and virtual machines.", tech: ["Proxmox", "LXC", "Hypervisor"], icon: <Server size={20} />, img: imgProxmox },
        { title: "Containerized Infrastructure", desc: "Microservices deployment and orchestration using Docker and Docker Compose for resource optimization.", tech: ["Docker", "Containers", "Self-hosting"], icon: <Box size={20} />, img: imgDocker },
        { title: "Advanced Networking (OpenWRT)", desc: "Advanced routing configuration and perimeter security using custom OpenWRT firmware.", tech: ["OpenWRT", "Networking", "Routing"], icon: <Network size={20} />, img: imgOpenwrt },
        { title: "RAID 6 Recovery", desc: "Data rescue from a degraded 10TB array on Thecus NAS via advanced terminal management.", tech: ["mdadm", "RAID 6", "Linux"], icon: <Terminal size={20} />, img: null }
      ]
    }
  };

  const t = content[lang];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="app-wrapper">
      <nav className="glass-nav">
        <motion.span 
          className="logo"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          PASCUAL.PIMENTEL
        </motion.span>
        <button onClick={() => setLang(lang === 'es' ? 'en' : 'es')} className="lang-toggle">
          <Globe size={18} /> {t.btnLang}
        </button>
      </nav>

      <main className="container">
        <motion.section 
          className="hero-section"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="hero-content">
            <div className="profile-wrapper">
              <img 
                src="https://media.licdn.com/dms/image/v2/D4E03AQGOZG6jDye-dA/profile-displayphoto-shrink_200_200/B4EZPPdMcSGcAc-/0/1734352358021?e=1778112000&v=beta&t=lk-bxauM7_T6jJd_cETlEUGyZCazTlvCu-xTj0mfOQI" 
                className="profile-pic" alt="Pascual Pimentel"
              />
              <div className="status-badge"><Activity size={12} /> Online</div>
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

        <section className="section-block">
          <h3><Terminal size={22} /> {t.skills}</h3>
          <motion.div className="skills-grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {t.skillsList.map((skill, i) => (
              <motion.div key={i} className="skill-card-modern" variants={itemVariants} whileHover={{ y: -5 }}>
                <div className="skill-icon-bg">{skill.icon}</div>
                <h4>{skill.title}</h4>
                <p>{skill.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="section-block">
          <h3><ShieldCheck size={22} /> {t.experience}</h3>
          <motion.div className="timeline-modern" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {t.jobs.map((job, i) => (
              <motion.div key={i} className="timeline-card" variants={itemVariants}>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h4>{job.title}</h4>
                  <span className="timeline-meta">{job.company} • {job.date}</span>
                  <p>{job.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="section-block">
          <h3><Cpu size={22} /> {t.projects}</h3>
          <motion.div className="projects-grid-modern" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {t.projectList.map((p, i) => (
              <motion.div key={i} className="project-card-premium" variants={itemVariants} whileHover={{ y: -10 }}>
                {p.img && (
                  <div className="project-preview">
                    <img src={p.img} alt={p.title} />
                    <div className="img-overlay"></div>
                  </div>
                )}
                <div className="project-body">
                  <div className="project-header">
                    {p.icon} <h4>{p.title}</h4>
                  </div>
                  <p>{p.desc}</p>
                  <div className="tech-pills">
                    {p.tech.map(tag => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default App;
