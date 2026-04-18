import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Server, Code, Terminal, Cpu, Mail, Globe, ShieldCheck, Network, Box, Database, Activity, ExternalLink, Package, Layout, Download
} from 'lucide-react';
import './App.css';

const App = () => {
  const [lang, setLang] = useState('es');

  const content = {
    es: {
      role: "Administrador de TI | Especialista en Infraestructura",
      about: "Especialista en sistemas y seguridad perimetral. Experto en virtualización y desarrollo de aplicaciones web eficientes con enfoque en accesibilidad y rendimiento.",
      experience: "Trayectoria Profesional",
      infraProjects: "Sistemas y Homelab",
      devProjects: "Software y Desarrollo Web",
      skills: "Stack Tecnológico",
      contact: "Contacto",
      downloadCV: "Descargar CV",
      btnLang: "English Version",
      skillsList: [
        { icon: <Server color="#3b82f6" />, title: "Servidores y Sistemas", desc: "Linux (Avanzado), Proxmox, Docker, Windows Server, IIS." },
        { icon: <ShieldCheck color="#3b82f6" />, title: "Seguridad y Redes", desc: "Fortinet, Netgate, OpenWRT, M365 Security, Firewalling." },
        { icon: <Database color="#3b82f6" />, title: "Web y Datos", desc: "SQL, WordPress, PWA Development, LocalStorage API." },
        { icon: <Code color="#3b82f6" />, title: "Programación", desc: "C#, Java, PHP, JavaScript (ES6+), React (Básico)." }
      ],
      jobs: [
        { 
          company: "ProDominicana", 
          title: "Especialista en Soporte para Tecnología", 
          date: "Abril 2025 - Actualidad", 
          desc: "Administración de servidores críticos y servicios nube.",
          img: "/imagenes/prodominicana.png"
        },
        { 
          company: "Grupo Hospifar S.R.L.", 
          title: "Soporte Técnico", 
          date: "Feb 2024 - Abr 2025", 
          desc: "Gestión de firewalls Fortinet y redes corporativas.",
          img: "/imagenes/hospifar.png"
        },
        { 
          company: "VZ Controles Industriales", 
          title: "Soporte Técnico de Infraestructura", 
          date: "Ago 2022 - Feb 2024", 
          desc: "Configuración de Netgate y servidores web IIS.",
          img: "/imagenes/vzcontroles.png"
        }
      ],
      infraList: [
        { title: "Virtualización Proxmox", desc: "Hipervisor para nodos aislados y contenedores LXC.", tech: ["Proxmox", "LXC"], icon: <Server size={20} />, img: "/imagenes/proxmox.png" },
        { title: "Ecosistema Docker", desc: "Orquestación de microservicios y contenedores.", tech: ["Docker", "Compose"], icon: <Box size={20} />, img: "/imagenes/docker.png" },
        { title: "OpenWRT Networking", desc: "Segmentación de red y seguridad perimetral avanzada.", tech: ["OpenWRT", "Routing"], icon: <Network size={20} />, img: "/imagenes/openwrt.png" }
      ],
      devList: [
        { 
          title: "RutasDR (GuaguaTimeRD)", 
          desc: "PWA 100% offline para consulta de rutas de transporte en RD. Optimizada para rendimiento móvil.", 
          tech: ["PWA", "JSON", "Service Workers"], 
          link: "https://pascual30.github.io/GuaguaTimeRD/",
          icon: <Globe size={20} /> 
        },
        { 
          title: "BBX Courier Calc", 
          desc: "Calculadora de costos logísticos basada en peso y tarifas dinámicas.", 
          tech: ["JS", "CSS", "HTML"], 
          link: "https://pascual30.github.io/proyectobbxcourrier/",
          icon: <Package size={20} /> 
        },
        { 
          title: "Validador de Identidad", 
          desc: "Algoritmo de validación de Cédula Dominicana con interfaz responsiva.", 
          tech: ["JS", "RegEx", "Logic"], 
          link: "https://pascual30.github.io/githublab/",
          icon: <ShieldCheck size={20} /> 
        },
        { 
          title: "Plataforma Encuestas", 
          desc: "Sistema de recolección de datos con gestión de formularios dinámica.", 
          tech: ["JS", "UI/UX", "Forms"], 
          link: "https://pascual30.github.io/Plataformaencuestas/",
          icon: <Layout size={20} /> 
        }
      ]
    },
    en: {
      role: "IT Administrator | Infrastructure Specialist",
      about: "Systems and perimeter security specialist. Expert in virtualization and building efficient web apps with a focus on accessibility and performance.",
      experience: "Professional Experience",
      infraProjects: "Systems & Homelab",
      devProjects: "Software & Web Development",
      skills: "Tech Stack",
      contact: "Contact",
      downloadCV: "Download CV",
      btnLang: "Versión Español",
      skillsList: [
        { icon: <Server color="#3b82f6" />, title: "Servers & Systems", desc: "Linux (Advanced), Proxmox, Docker, Windows Server, IIS." },
        { icon: <ShieldCheck color="#3b82f6" />, title: "Security & Networking", desc: "Fortinet, Netgate, OpenWRT, M365 Security, Firewalling." },
        { icon: <Database color="#3b82f6" />, title: "Web & Data", desc: "SQL, WordPress, PWA Development, LocalStorage API." },
        { icon: <Code color="#3b82f6" />, title: "Programming", desc: "C#, Java, PHP, JavaScript (ES6+), React (Basic)." }
      ],
      jobs: [
        { company: "ProDominicana", title: "IT Support Specialist", date: "April 2025 - Present", desc: "Critical server and cloud services administration.", img: "/imagenes/prodominicana.png" },
        { company: "Grupo Hospifar S.R.L.", title: "Technical Support", date: "Feb 2024 - April 2025", desc: "Fortinet firewall and corporate network management.", img: "/imagenes/hospifar.png" },
        { company: "VZ Controles Industriales", title: "Infrastructure Support", date: "Aug 2022 - Feb 2024", desc: "Netgate and IIS web server configuration.", img: "/imagenes/vzcontroles.png" }
      ],
      infraList: [
        { title: "Proxmox Virtualization", desc: "Hypervisor for isolated nodes and LXC containers.", tech: ["Proxmox", "LXC"], icon: <Server size={20} />, img: "/imagenes/proxmox.png" },
        { title: "Docker Ecosystem", desc: "Microservices orchestration and container management.", tech: ["Docker", "Compose"], icon: <Box size={20} />, img: "/imagenes/docker.png" },
        { title: "OpenWRT Networking", desc: "Advanced network segmentation and perimeter security.", tech: ["OpenWRT", "Routing"], icon: <Network size={20} />, img: "/imagenes/openwrt.png" }
      ],
      devList: [
        { title: "RutasDR", desc: "100% offline PWA for transport routes in DR. Optimized for mobile performance.", tech: ["PWA", "JSON", "Service Workers"], link: "https://pascual30.github.io/GuaguaTimeRD/", icon: <Globe size={20} /> },
        { title: "BBX Courier Calc", desc: "Logistics cost calculator based on weight and dynamic rates.", tech: ["JS", "CSS", "HTML"], link: "https://pascual30.github.io/proyectobbxcourrier/", icon: <Package size={20} /> },
        { title: "Identity Validator", desc: "Dominican ID validation algorithm with responsive UI.", tech: ["JS", "RegEx", "Logic"], link: "https://pascual30.github.io/githublab/", icon: <ShieldCheck size={20} /> },
        { title: "Survey Platform", desc: "Data collection system with dynamic form management.", tech: ["JS", "UI/UX", "Forms"], link: "https://pascual30.github.io/Plataformaencuestas/", icon: <Layout size={20} /> }
      ]
    }
  };

  const t = content[lang];
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

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
              <img src="https://media.licdn.com/dms/image/v2/D4E03AQGOZG6jDye-dA/profile-displayphoto-shrink_200_200/B4EZPPdMcSGcAc-/0/1734352358021?e=1778112000&v=beta&t=lk-bxauM7_T6jJd_cETlEUGyZCazTlvCu-xTj0mfOQI" className="profile-pic" alt="Pascual" />
              <div className="status-badge"><Activity size={12} /> Online</div>
            </div>
            <h1>Pascual Pimentel Vicente</h1>
            <h2 className="gradient-text">{t.role}</h2>
            <p className="hero-bio">{t.about}</p>
            <div className="hero-links">
              <a href="https://www.linkedin.com/in/pascual-pimentel-vicente-bb8438247" target="_blank" rel="noreferrer" className="btn-primary">LinkedIn</a>
              
              <a href="/Pascual.pdf" download="CV_Pascual_Pimentel.pdf" className="btn-secondary">
                <Download size={20} /> {t.downloadCV}
              </a>

              <a href="mailto:tu-correo@ejemplo.com" className="btn-secondary"><Mail size={20} /> {t.contact}</a>
            </div>
          </div>
        </motion.section>

        {/* HABILIDADES */}
        <section className="section-block">
          <h3><Terminal size={22} /> {t.skills}</h3>
          <motion.div className="skills-grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {t.skillsList.map((skill, i) => (
              <motion.div key={i} className="skill-card-modern" variants={itemVariants}>
                <div className="skill-icon-bg">{skill.icon}</div>
                <h4>{skill.title}</h4>
                <p>{skill.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* PROYECTOS */}
        <section className="section-block">
          <h3><Server size={22} /> {t.infraProjects}</h3>
          <motion.div className="projects-grid-modern" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {t.infraList.map((p, i) => (
              <motion.div key={i} className="project-card-premium" variants={itemVariants}>
                {p.img && <div className="project-preview"><img src={p.img} alt={p.title} /><div className="img-overlay"></div></div>}
                <div className="project-body">
                  <div className="project-header">{p.icon} <h4>{p.title}</h4></div>
                  <p>{p.desc}</p>
                  <div className="tech-pills">{p.tech.map(tag => <span key={tag}>{tag}</span>)}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* WEB PROYECTOS */}
        <section className="section-block">
          <h3><Code size={22} /> {t.devProjects}</h3>
          <motion.div className="projects-grid-modern" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {t.devList.map((p, i) => (
              <a href={p.link} target="_blank" rel="noreferrer" key={i} style={{ textDecoration: 'none' }}>
                <motion.div className="project-card-premium" variants={itemVariants} whileHover={{ y: -10 }}>
                  <div className="project-body">
                    <div className="project-header" style={{ justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>{p.icon} <h4>{p.title}</h4></div>
                      <ExternalLink size={16} color="#3b82f6" />
                    </div>
                    <p>{p.desc}</p>
                    <div className="tech-pills">{p.tech.map(tag => <span key={tag}>{tag}</span>)}</div>
                  </div>
                </motion.div>
              </a>
            ))}
          </motion.div>
        </section>

        {/* EXPERIENCIA */}
        <section className="section-block">
          <h3><ShieldCheck size={22} /> {t.experience}</h3>
          <motion.div className="timeline-modern" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {t.jobs.map((job, i) => (
              <motion.div key={i} className="timeline-card" variants={itemVariants}>
                <div className="timeline-marker"></div>
                <div className="timeline-content" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  {job.img && (
                    <div style={{ 
                      width: '65px', 
                      height: '65px', 
                      backgroundColor: '#ffffff', 
                      borderRadius: '12px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      padding: '8px',
                      flexShrink: 0,
                      boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                    }}>
                      <img src={job.img} alt={job.company} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                    </div>
                  )}
                  <div style={{ flex: 1, minWidth: '200px' }}>
                    <h4>{job.title}</h4>
                    <span className="timeline-meta">{job.company} • {job.date}</span>
                    <p style={{ margin: 0 }}>{job.desc}</p>
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
