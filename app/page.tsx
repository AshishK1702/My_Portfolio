"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  Terminal, Cpu, Code, Database, Brain, Layers, Github, Linkedin, Mail, 
  X, Send, MessageSquare, Minimize2, ChevronRight, Download, ExternalLink, 
  Pause, Music, ChevronDown, Globe, Sparkles, Phone, Award, Lightbulb, 
  Server, Cloud, Layout, CheckCircle2, Zap, Monitor, Lock, ShieldCheck,
  Search, BarChart3, Binary, PenTool, Command, FileBadge, Medal, Rocket, Eye,
  Maximize2, BookOpen, Calendar, Clock, Loader2, CheckCircle, Copy, MapPin, ArrowUpRight,
  FileCode, Table, Box
} from 'lucide-react';
import { 
  motion, AnimatePresence, useScroll, useSpring, useTransform, 
  useMotionValue, useMotionTemplate, useAnimationFrame
} from 'framer-motion';

/**
 * --- DATA LAYER ---
 * UPDATE YOUR IMAGES HERE
 * Ensure files exist in the /public folder with these EXACT names.
 */
const DATA = {
  personal: {
    name: "Ashish Anil Khatavkar",
    roles: ["AI/ML Engineer", "Full Stack Engineer", "Data Strategist"],
    headline: "Engineering the Future of Intelligence.",
    bio: "I bridge the gap between abstract AI models and tangible software solutions. Specializing in predictive analytics, scalable neural architectures, and precision engineering at Tech Mahindra.",
    email: "ashishkhatavkar111@gmail.com",
    phone: "+91 7350213890",
    github: "github.com/AshishK1702",
    linkedin: "linkedin.com/in/ashish-khatavkar-b153a8290",
    location: "Pune, India",
    availability: "Open to Opportunities",
    
    // IMAGE PATH: /public/me.png
    photoUrl: "/ProfPic.jpg",
    // RESUME PATH: /public/resume.pdf
    resumeUrl: "/ASHISH__RESUME.pdf"
  },
  skills: {
    intelligence: [
      { name: "TensorFlow", icon: Brain, color: "#FF6F00" },
      { name: "PyTorch", icon: Brain, color: "#EE4C2C" },
      { name: "Scikit-Learn", icon: BarChart3, color: "#F7931E" },
      { name: "XGBoost", icon: Zap, color: "#7C4DFF" },
      { name: "NLP", icon: MessageSquare, color: "#00BFA5" },
      { name: "Pandas/NumPy", icon: Table, color: "#150458" },
    ],
    core: [
      { name: "Python", icon: Terminal, color: "#3776AB" },
      { name: "FastAPI", icon: Zap, color: "#009688" },
      { name: "JavaScript", icon: FileCode, color: "#F7DF1E" },
      { name: "HTML5/CSS3", icon: Layout, color: "#E34F26" },
      { name: "SQL", icon: Database, color: "#F29111" },
      { name: "MySQL", icon: Database, color: "#4479A1" },
    ],
    infrastructure: [
      { name: "Docker", icon: Layers, color: "#2496ED" },
      { name: "Git", icon: Code, color: "#F05032" },
      { name: "Postman", icon: Globe, color: "#FF6C37" },
      { name: "VS Code", icon: Monitor, color: "#007ACC" }
    ]
  },
  certifications: [
    {
      id: 1,
      title: "Prompt Design in Vertex AI",
      type: "Professional Cert",
      issuer: "Google",
      date: "2023",
      // IMAGE PATH: /public/cert1.png
      image: "/prompt-design-in-vertex-ai-skill-badge.png",
      desc: "End-to-end data analysis lifecycle mastery."
    },
    {
      id: 2,
      title: "Build Real World AI Applications with Gemini and Imagen",
      type: "Badge",
      issuer: "Google Cloud",
      date: "2024",
      // IMAGE PATH: /public/cert2.png
      image: "/Build Real World AI Applications with Gemini and Imagen.png",
      desc: "Mastering LLMs and generative models."
    },
    {
      id: 3,
      title: "Data Analytics and Job Simulation",
      type: "Badge",
      issuer: "Forage - Accenture North America",
      date: "2024",
      // IMAGE PATH: /public/cert2.png
      image: "/Data Analytics.png",
      desc: "Mastering LLMs and generative models."
    },
    {
      id: 4,
      title: "Next-Gen AI: Tools, Agents & Automation",
      type: "Certificate",
      issuer: "BeerBiceps SkillHouse",
      date: "2024",
      // IMAGE PATH: /public/cert2.png
      image: "/NextGenAI_Skillhouse.png",
      desc: "Mastering LLMs and generative models."
    },
    // Add more certificates here...
  ],
  projects: [
    // {
    //   id: 1,
    //   title: "Predictive Maintenance AI",
    //   tag: "Deep Learning",
    //   metric: "92% Accuracy",
    //   summary: "LSTM-based anomaly detection system for industrial IoT sensors.",
    //   // IMAGE PATH: /public/project1.png
    //   image: "/project1.png",
    //   star: {
    //     situation: "Factory downtime costing $50k/hr due to motor failures.",
    //     task: "Predict failures 24 hours in advance.",
    //     action: "Trained LSTM models on 2TB of sensor logs.",
    //     result: "Reduced downtime by 40% with 92% prediction accuracy."
    //   },
    //   tech: ["Python", "Keras", "IoT", "NumPy"],
    //   github: "https://github.com/AshishK1702",
    //   demo: "#"
    // },
    {
      id: 1,
      title: "SentinelAI",
      tag: "Deep Learning",
      metric: "92% Accuracy",
      summary: "The platform serves as a unified, production-grade SIEM solution designed to analyze the complete log dataset, regardless of volume, while maintaining smooth operation through optimized visualization. It successfully provides real-time security intelligence and compliance monitoring to drastically reduce manual analysis time and strengthen an organization's defensive posture.",
      // IMAGE PATH: /public/project1.png
      image: "/SentinelAI.png",
      star: {
        situation: "The continuous analysis of all ingested logs instantly identifies critical security threats, including SQL injection and XSS, alongside significant compliance risks such as GDPR and PCI-DSS data leakage. A global risk radar and detailed dashboards provide an immediate, comprehensive overview of the current threat landscape, including risk velocity and temporal threat heatmaps.",
        task: "Security analysts manage incidents directly using the Alert Triage Workflow to update the status of any log (New, Investigating, Blocked) for a clear audit trail.",
        action: "The Automation Engine independently executes pre-defined rules, allowing for immediate actions like IP blocking or automated notification upon detecting critical events.",
        result: "The effectiveness of the security program is measured through instant Key Performance Indicators (KPIs) like Compliance Score and Mean Time to Detect (MTTD). Comprehensive Executive Reports can be generated instantly, providing a strategic summary, a prioritized AI-driven remediation plan, and a list of high-risk assets (IPs) that require immediate blocking."
      },
      tech: ["Python", "Keras", "IoT", "NumPy"],
      github: "https://github.com/AshishK1702/sentinel-platform-prod-v2",
      demo: "https://sentinel-platform-prod-v2-7ovieajpe-ashish-khatavkars-projects.vercel.app/"
    },
    {
      id: 2,
      title: "MindCrafters",
      tag: "E-Learning Platform",
      metric: "100% Accuracy",
      summary: "MindCrafters is a scalable e-learning Single Page Application built with React.js and Firebase to provide structured lessons, real-time progress tracking, and automated digital certificates. The platform successfully delivers a responsive, user-friendly environment featuring secure authentication and dedicated dashboards for both student learning and administrative management.",
      // IMAGE PATH: /public/project1.png
      image: "/Mindcrafters.png",
      star: {
        situation: "The project was initiated in response to the significant growth of the e-learning sector and the rising demand for flexible, self-paced learning options . While research indicates that students prefer environments offering clear progress tracking and certificate-based motivation, existing platforms like Coursera and Udemy are often viewed as overly complex or inaccessible due to costs . To address the specific market need for simple, fast, and structured learning systems, the MindCrafters platform was conceptualized to provide lesson-wise learning, automated digital certificates, and a user-friendly interface tailored for technology learners.",
        task: "The development followed a seven-week timeline, progressing from requirement study and literature review to system design, backend setup, and final testing . The technical architecture was built as a Single Page Application (SPA) utilizing a modern tech stack, specifically React.js, Vite, and Tailwind CSS for a responsive frontend, integrated with Firebase for authentication, real-time Firestore database storage, and hosting . Key implementation milestones included the creation of role-based access control for admins and students, alongside core modules such as the course catalog, lesson player, student dashboard, and an automated certificate generator.",
        action: "",
        result: "The project successfully delivered a fully functional, scalable e-learning web application that achieves smooth navigation, secured login capabilities, and real-time progress tracking . The use of Firebase significantly improved system stability and reduced server overhead, resulting in a fast and reliable user interface that meets the objective of auto-generating certificates upon course completion . While the current iteration effectively demonstrates core competencies, the platform lays a solid foundation for future enhancements such as video lesson integration, payment gateways, and advanced analytics."
      },
      tech: ["React", "Vite", "Tailwind CSS", "Firebase Authentication", "Firestore Database", "GitHub"],
      github: "https://github.com/AshishK1702/mindcrafters-app",
      demo: "https://ashishk1702.github.io/mindcrafters-app/"
    },
    // {
    //   id: 4,
    //   title: "CodeRefactorAI",
    //   tag: "GenAI Tool",
    //   metric: "30% Faster Reviews",
    //   summary: "Automated security analysis engine using LLMs and AST parsing.",
    //   // IMAGE PATH: /public/project2.png
    //   image: "/project2.png",
    //   star: {
    //     situation: "Security vulnerabilities missed in manual reviews.",
    //     task: "Automate detection of injection attacks.",
    //     action: "Built AST parser + OpenAI API pipeline.",
    //     result: "30% reduction in code review cycle time."
    //   },
    //   tech: ["OpenAI", "AST", "FastAPI", "Python"],
    //   github: "https://github.com/AshishK1702",
    //   demo: "#"
    // },
    {
      id: 3,
      title: "Arundhati World Portal",
      tag: "Full Stack",
      metric: "40% Lead Growth",
      summary: "I developed a fully functional full-stack travel agency website for Arunndhati World Pvt. Ltd. using HTML, CSS, JavaScript, PHP, and MySQL. The platform is live, stable, and enables seamless tour browsing, booking, and customer interaction.",
      // IMAGE PATH: /public/project3.png
      image: "/Arunndhati.png",
      star: {
        situation: "The company required a modern, reliable, and user-friendly travel booking website that could handle real-time inquiries and streamline operations. Existing tools were insufficient, which created a need for a custom-built solution with better performance and full control over data.",
        task: "I designed and developed the website architecture end-to-end, implemented responsive UI/UX, integrated dynamic tour modules, booking forms, admin features, and connected the system to a secure MySQL database.",
        action: "Rigorous testing, optimization, and deployment ensured smooth functionality across devices and real-world usage.",
        result: "The website significantly improved customer engagement, reduced manual booking effort, and increased operational efficiency for the agency. With faster response times and a professional interface, it enhanced brand visibility and contributed to higher lead conversions."
      },
      tech: ["JavaScript", "PHP", "SQL", "HTML5", "CSS"],
      github: "https://github.com/AshishK1702",
      demo: "https://arunndhatiworld.com"
    }

  ],
  experience: [
    {
      id: 1,
      role: "Jr. Software Engineer",
      company: "Tech Mahindra",
      period: "Oct 2024 - Present",
      desc: "Architecting scalable backend systems.",
      achievements: [
        "Hands-on Data Science Work: Gained practical experience in data cleaning, preprocessing, model building, and performance evaluation using Python and statistical techniques.",
        "AIML Project Exposure: Worked on implementing machine learning workflows, automation scripts, and AI-driven solutions to solve real business problems.",
        "Industry-Ready Skills: Strengthened understanding of real-time datasets, cloud-based AI tools, and deployment practices while collaborating in an enterprise-level tech environment."
      ]
    },
    {
      id: 2,
      role: "Masters in Computer Applications (MCA)",
      company: "Parul University - Vadodara",
      period: "2024 - 2026",
      desc: "End-to-end web platform development.",
      achievements: [
        "Built MindCrafters (AI E-Learning Platform): Created a fully functional AI-powered e-learning platform within a day, showcasing fast development and strong full-stack skills.",
        "Strengthening Full-Stack & Data Skills: Actively improving in HTML, CSS, JS, PHP, MySQL, React, and analytics tools like SQL, Python, and Power BI.",
        "Advancing AI/ML & System Design: Exploring AI automation, ML concepts, and modern system architecture to build smarter and scalable applications."
      ]
    },
    {
      id: 3,
      role: "Full Stack Developer",
      company: "Arundhati World Pvt. Ltd.",
      period: "2024",
      desc: "End-to-end web platform development.",
      achievements: [
        "Built a responsive travel booking platform handling 500+ daily users.",
        "Integrated secure payment gateways and dynamic pricing algorithms.",
        "Reduced page load speeds by 40% through optimized static asset delivery."
      ]
    },
    {
      id: 4,
      role: "BSc Computer Science",
      company: "ATSS CBSCA",
      period: "2020 - 2024",
      desc: "Distinction. Research in AI Traffic Systems.",
      achievements: [
        "Graduated with Distinction (First Class with Honors).",
        "Led the capstone project on Criminal Face Detection System.",
      ]
    }
  ],
  blogs: [
    {
      id: 1,
      title: "Deconstructing Transformers: Attention is All You Need",
      summary: "A deep dive into self-attention mechanisms, multi-head attention, and how the Transformer architecture revolutionized Natural Language Processing beyond RNNs and LSTMs.",
      readTime: "8 min",
      tag: "AI Research",
      views: "1.2k",
      date: "Aug 15, 2024",
      content: `
        The Transformer model, introduced in the paper "Attention is All You Need", has fundamentally changed the landscape of NLP. unlike Recurrent Neural Networks (RNNs) that process data sequentially, Transformers use a mechanism called Self-Attention to process the entire input sequence in parallel.
        
        ### The Core Mechanism: Self-Attention
        Self-attention allows the model to weigh the importance of different words in a sentence regardless of their positional distance. For example, in the sentence "The animal didn't cross the street because it was too tired", self-attention allows the model to associate "it" with "animal".

        ### Multi-Head Attention
        By running the self-attention mechanism multiple times in parallel (heads), the model can focus on different aspects of the language simultaneously—one head might focus on syntactic structure, while another focuses on semantic meaning.

        ### Impact on Modern AI
        This architecture paves the way for models like BERT, GPT-4, and Claude. Understanding these fundamentals is crucial for any AI engineer looking to fine-tune or deploy Large Language Models today.
      `
    },
    {
      id: 2,
      title: "Scalable Microservices with FastAPI",
      summary: "Best practices for deploying high-performance Python services using serverless architecture, focusing on concurrency and data validation with Pydantic.",
      readTime: "5 min",
      tag: "DevOps",
      views: "850",
      date: "Sep 22, 2024",
      content: `
        When building modern backends, the shift from monolithic architectures to microservices is inevitable for scaling teams and technology. FastAPI has emerged as a top contender for Python-based services due to its speed and native async support.

        ### Why FastAPI?
        FastAPI is built on Starlette and Pydantic. It provides automatic data validation, serialization, and documentation (Swagger UI) out of the box. Its asynchronous nature makes it perfect for I/O bound operations common in AI inference APIs.

        ### Deployment Strategies
        Using Docker containers to orchestrate FastAPI services ensures consistency across environments.
        1. **Cost Efficiency**: Optimize container sizes for faster startup.
        2. **Scalability**: Horizontal scaling handled by orchestration tools.
      `
    },
    {
      id: 3,
      title: "The Art of Data Cleaning for Machine Learning",
      summary: "Why 80% of a Data Scientist's job is cleaning data. Techniques for handling missing values, outlier detection, and feature scaling to improve model accuracy.",
      readTime: "6 min",
      tag: "Data Science",
      views: "2.1k",
      date: "Oct 05, 2024",
      content: `
        Garbage In, Garbage Out. This adage holds truer than ever in the age of Deep Learning. No matter how sophisticated your model architecture is, it cannot learn effectively from noisy, inconsistent data.

        ### Missing Data Strategies
        - **Imputation**: Filling missing values with mean, median, or using KNN for more complex datasets.
        - **Dropping**: When the dataset is large enough, dropping rows with missing critical information might be safer than guessing.

        ### Outlier Detection
        Outliers can skew the learning process of algorithms like Linear Regression. Techniques like Z-Score analysis and IQR (Interquartile Range) are essential first steps in any EDA (Exploratory Data Analysis) phase.

        ### Normalization vs Standardization
        Understanding when to use Min-Max Scaling (Normalization) versus Z-Score Scaling (Standardization) depends heavily on the algorithm being used. Distance-based algorithms (KNN, SVM) require scaled data to function correctly.
      `
    }
  ]
};

/**
 * --- VISUAL EFFECTS COMPONENTS ---
 */

// CALM NEURAL BACKGROUND
const NeuralBackground = () => {
  // FIXED: Explicitly typed useRef for HTMLCanvasElement to satisfy TypeScript
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let particles = [];
    
    // Softer colors for background
    const colors = ['rgba(124, 77, 255, 0.3)', 'rgba(0, 191, 165, 0.3)', 'rgba(255, 64, 129, 0.3)'];

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    
    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });
    window.addEventListener('mousemove', handleMouseMove);

    class Node {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.3; // Slower movement
        this.vy = (Math.random() - 0.5) * 0.3; // Slower movement
        this.size = Math.random() * 2 + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Gentle Mouse Interaction
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        
        if (dist < 150) {
          const force = (150 - dist) / 150;
          this.x -= (dx / dist) * force * 0.5; // Very subtle repulsion
          this.y -= (dy / dist) * force * 0.5;
        }

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    for(let i=0; i<60; i++) particles.push(new Node()); // Reduced count

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update();
        p1.draw();
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            // Very subtle lines
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.05 * (1 - dist/120)})`; 
            ctx.lineWidth = 0.5;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animate);
    };
    
    animate();
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 bg-[#0A0A12]" />;
};

// FUTURISTIC LOGO COMPONENT
const FuturisticLogo = () => (
  <div className="relative w-10 h-10 flex items-center justify-center group cursor-pointer">
    <div className="absolute inset-0 rounded-lg border border-white/10 group-hover:border-[#7C4DFF] transition-colors" />
    <div className="relative z-10 font-black text-lg tracking-tighter text-white">
      <span className="text-[#00BFA5]">A</span>
      <span className="text-[#FF4081]">K</span>
    </div>
  </div>
);

// HOLOGRAPHIC CARD
const HoloCard = ({ children, className="", onClick }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div 
      onClick={onClick}
      className={`group relative border border-white/10 bg-[#1E1E27]/50 backdrop-blur-sm overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(124, 77, 255, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      <div>{children}</div>
      {/* Enhanced Hover Border */}
      <div className="absolute inset-0 rounded-xl border border-[#7C4DFF]/0 group-hover:border-[#7C4DFF]/30 transition-colors duration-500" />
    </div>
  );
};

// 3D TILT CARD (FOR CERTIFICATES)
const TiltCard = ({ children, className="", onClick }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [15, -15]);
    const rotateY = useTransform(x, [-100, 100], [-15, 15]);
  
    return (
      <motion.div
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.16}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: "grabbing" }}
        onClick={onClick}
        className={`relative transform-gpu preserve-3d cursor-pointer ${className}`}
      >
        {children}
      </motion.div>
    );
};

// MAGNETIC BUTTON (UPDATED: Supports 'href' and 'download' for files)
const MagneticButton = ({ children, className="", onClick, href, download }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.1, y: middleY * 0.1 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  const motionProps = {
    ref,
    animate: { x, y },
    transition: { type: "spring", stiffness: 150, damping: 15, mass: 0.1 },
    onMouseMove: handleMouse,
    onMouseLeave: reset,
    onClick,
    className
  };

  // If href is present, render as an anchor for downloads or external links
  if (href) {
    return (
      <motion.a 
        {...motionProps} 
        href={href} 
        download={download} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button {...motionProps}>
      {children}
    </motion.button>
  );
};

// CLEAN GRADIENT HEADER
const GradientHeader = ({ text }) => {
  return (
    <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
        {text}
      </span>
    </h1>
  );
};

// CLI TERMINAL
const TerminalOverlay = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', content: 'AshishOS v3.0 initialized...' },
    { type: 'system', content: 'Type "help" for command list.' }
  ]);
  const endRef = useRef(null);

  useEffect(() => {
    if (isOpen) endRef.current?.scrollIntoView();
  }, [history, isOpen]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      let response = '';
      
      switch(cmd) {
        case 'help': response = 'Available commands: whoami, stack, projects, contact, clear, exit'; break;
        case 'whoami': response = DATA.personal.bio; break;
        case 'stack': response = "Python, TensorFlow, MySQL, HTML5, Docker"; break;
        case 'projects': response = "Fetching project list... [1] Predictive Maintenance [2] CodeRefactorAI"; break;
        case 'contact': response = `Email: ${DATA.personal.email} | Phone: ${DATA.personal.phone}`; break;
        case 'clear': setHistory([]); setInput(''); return;
        case 'exit': onClose(); return;
        default: response = `Command not found: ${cmd}`;
      }
      
      setHistory(prev => [...prev, { type: 'user', content: cmd }, { type: 'system', content: response }]);
      setInput('');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-center justify-center p-4">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-3xl bg-[#0D0D16] border border-[#7C4DFF]/50 rounded-lg shadow-[0_0_50px_rgba(124,77,255,0.2)] overflow-hidden font-mono text-sm"
      >
        <div className="bg-[#1E1E27] px-4 py-2 flex justify-between items-center border-b border-[#7C4DFF]/30">
          <span className="text-[#00BFA5]">root@ashish-portfolio:~</span>
          <button onClick={onClose}><X size={16} className="text-[#FF4081] hover:text-white" /></button>
        </div>
        <div className="p-6 h-96 overflow-y-auto text-slate-300 space-y-2">
          {history.map((line, i) => (
            <div key={i}>
              {line.type === 'user' && <span className="text-[#7C4DFF] mr-2">➜ ~</span>}
              <span className={line.type === 'system' ? 'text-[#00BFA5]' : ''}>{line.content}</span>
            </div>
          ))}
          <div ref={endRef} />
        </div>
        <div className="p-4 border-t border-[#7C4DFF]/30 flex items-center bg-[#0D0D16]">
          <span className="text-[#7C4DFF] mr-2">➜ ~</span>
          <input 
            autoFocus
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            className="bg-transparent border-none outline-none text-white w-full"
            placeholder="Awaiting command..."
          />
        </div>
      </motion.div>
    </div>
  );
};

// AI CHAT WIDGET
const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [msgs, setMsgs] = useState([{ sender: 'ai', text: "Greetings. I am Ashish's virtual assistant. How may I help?" }]);
  const [query, setQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const processQuery = (q) => {
    setIsTyping(true);
    setTimeout(() => {
      let ans = "I can provide details on Skills, Projects, or Contact info.";
      const lower = q.toLowerCase();
      if (lower.includes('skill') || lower.includes('stack')) ans = "Ashish specializes in AI/ML (TensorFlow, Python) and Full Stack Development.";
      else if (lower.includes('project') || lower.includes('work')) ans = "Key projects include Predictive Maintenance AI and an automated security tool CodeRefactorAI.";
      else if (lower.includes('contact') || lower.includes('hire')) ans = `You can reach him at ${DATA.personal.email}. He is open to opportunities.`;
      
      setMsgs(prev => [...prev, { sender: 'ai', text: ans }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="bg-[#1E1E27] border border-white/10 w-80 h-96 rounded-2xl shadow-2xl mb-4 flex flex-col overflow-hidden backdrop-blur-xl"
          >
            <div className="bg-[#0D0D16] p-4 border-b border-white/10 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00BFA5] rounded-full animate-pulse" />
                <span className="text-white font-heading font-bold text-sm tracking-wide">Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)}><Minimize2 size={16} className="text-slate-400 hover:text-white" /></button>
            </div>
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#0A0A12]/50">
              {msgs.map((m, i) => (
                <div key={i} className={`p-3 rounded-lg text-xs max-w-[85%] leading-relaxed ${m.sender === 'user' ? 'bg-[#7C4DFF] text-white self-end ml-auto' : 'bg-[#1E1E27] border border-white/10 text-slate-300 self-start'}`}>
                  {m.text}
                </div>
              ))}
              {isTyping && <div className="text-xs text-[#00BFA5] animate-pulse">Processing...</div>}
            </div>
            <div className="p-3 bg-[#0D0D16] border-t border-white/10 flex gap-2">
              <input 
                className="bg-[#1E1E27] border border-white/10 text-white text-xs rounded px-3 py-2 flex-1 outline-none focus:border-[#00BFA5]"
                placeholder="Ask query..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={e => { if(e.key === 'Enter' && query) { setMsgs(prev => [...prev, { sender: 'user', text: query }]); processQuery(query); setQuery(''); }}}
              />
              <button onClick={() => { if(query) { setMsgs(prev => [...prev, { sender: 'user', text: query }]); processQuery(query); setQuery(''); }}} className="bg-[#00BFA5] p-2 rounded hover:bg-[#009688] text-white transition-colors"><Send size={14} /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="h-14 w-14 rounded-full bg-[#1E1E27] border border-white/10 flex items-center justify-center shadow-xl hover:scale-110 transition-transform z-50 text-white hover:text-[#00BFA5]"
      >
        {isOpen ? <X size={20} /> : <MessageSquare size={20} />}
      </button>
    </div>
  );
};

// CONTACT FORM WITH VALIDATION
const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); 
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const { name, email, message } = formData;
    const subject = `Portfolio Inquiry from ${name}`;
    const body = `Sender Name: ${name}%0D%0ASender Email: ${email}%0D%0A%0D%0A${message}`;
    
    window.location.href = `mailto:${DATA.personal.email}?subject=${subject}&body=${body}`;
    
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Contact Info Card */}
        <div className="space-y-8">
            <div>
                <h3 className="text-3xl font-heading font-bold mb-4 text-white">Let's Build the Future</h3>
                <p className="text-slate-400 leading-relaxed mb-8">
                    Currently accepting projects in AI/ML Architecture and Full Stack Development. 
                    Whether you have a question or just want to say hi, my inbox is open.
                </p>
            </div>

            <HoloCard className="p-6 rounded-2xl flex items-center gap-6 group hover:border-[#00BFA5]/50 transition-colors cursor-pointer bg-[#0A0A12]" onClick={handleCopyEmail}>
                <div className="w-12 h-12 rounded-full bg-[#00BFA5]/10 flex items-center justify-center text-[#00BFA5] group-hover:scale-110 transition-transform">
                    {copied ? <CheckCircle2 size={24} /> : <Mail size={24} />}
                </div>
                <div className="flex-1">
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block mb-1">Direct Neural Link</span>
                    <div className="text-lg font-bold text-white group-hover:text-[#00BFA5] transition-colors flex items-center gap-2">
                        {DATA.personal.email}
                        <Copy size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                </div>
            </HoloCard>

            <HoloCard className="p-6 rounded-2xl flex items-center gap-6 group hover:border-[#7C4DFF]/50 transition-colors bg-[#0A0A12]">
                <div className="w-12 h-12 rounded-full bg-[#7C4DFF]/10 flex items-center justify-center text-[#7C4DFF] group-hover:scale-110 transition-transform">
                    <MapPin size={24} />
                </div>
                <div>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block mb-1">Base of Operations</span>
                    <div className="text-lg font-bold text-white">{DATA.personal.location}</div>
                </div>
            </HoloCard>
        </div>

        {/* Contact Form */}
        <div className="bg-[#1E1E27]/50 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
            {status === 'success' && (
                <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="absolute inset-0 bg-[#1E1E27] z-20 flex flex-col items-center justify-center text-center p-8"
                >
                <div className="w-16 h-16 rounded-full bg-[#00BFA5]/20 flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-[#00BFA5]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Transmission Sent</h3>
                <p className="text-slate-400 text-sm">Thank you for connecting. I will respond to your coordinates shortly.</p>
                <button onClick={() => setStatus('idle')} className="mt-6 text-xs text-[#00BFA5] hover:underline">Send another message</button>
                </motion.div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-6">
                <div>
                    <label className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-2 block">Identity</label>
                    <input 
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-[#0D0D16] border border-white/10 rounded-lg p-3.5 text-[#FFFFFF] focus:border-[#7C4DFF] focus:ring-1 focus:ring-[#7C4DFF] outline-none transition-all placeholder:text-slate-600 focus:bg-[#1E1E27]" 
                    />
                </div>
                <div>
                    <label className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-2 block">Coordinates</label>
                    <input 
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-[#0D0D16] border border-white/10 rounded-lg p-3.5 text-[#FFFFFF] focus:border-[#7C4DFF] focus:ring-1 focus:ring-[#7C4DFF] outline-none transition-all placeholder:text-slate-600 focus:bg-[#1E1E27]" 
                    />
                </div>
                </div>
                <div>
                <label className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-2 block">Transmission Data</label>
                <textarea 
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4} 
                    placeholder="Describe your project or inquiry..." 
                    className="w-full bg-[#0D0D16] border border-white/10 rounded-lg p-3.5 text-[#FFFFFF] focus:border-[#7C4DFF] focus:ring-1 focus:ring-[#7C4DFF] outline-none transition-all placeholder:text-slate-600 focus:bg-[#1E1E27]" 
                />
                </div>
                <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full py-4 bg-gradient-to-r from-[#7C4DFF] to-[#FF4081] text-[#FFFFFF] rounded-lg font-bold hover:shadow-lg hover:shadow-[#7C4DFF]/30 transition-all transform hover:-translate-y-1 flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                {status === 'submitting' ? (
                    <>
                    <Loader2 size={18} className="animate-spin" /> Uplinking...
                    </>
                ) : (
                    <>
                    <Send size={18} /> Initialize Handshake
                    </>
                )}
                </button>
            </form>
        </div>
    </div>
  );
};

// IMAGE MODAL
const ImageModal = ({ image, onClose }) => {
    if (!image) return null;
    return (
        <div 
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
            >
                <img 
                    src={image} 
                    alt="Full View" 
                    className="w-full h-full object-contain rounded-lg shadow-2xl border border-white/20" 
                    onError={(e) => {
                        const target = e.target;
                        target.onerror = null; 
                        target.src = "https://via.placeholder.com/800x600?text=Image+Not+Found";
                    }}
                />
                <button 
                    onClick={onClose}
                    className="absolute -top-12 right-0 p-2 text-white hover:text-[#FF4081] transition-colors"
                >
                    <X size={32} />
                </button>
            </motion.div>
        </div>
    )
}

// BLOG MODAL
const BlogModal = ({ blog, onClose }) => {
    if (!blog) return null;
    return (
        <div 
            className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={onClose}
        >
            <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                className="bg-[#1E1E27] w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl border border-white/10 shadow-2xl"
                onClick={e => e.stopPropagation()}
            >
                <div className="p-8 md:p-12">
                    <div className="flex justify-between items-start mb-6">
                        <div className="flex items-center gap-3">
                            <span className="text-xs font-bold text-[#00BFA5] px-3 py-1 rounded-full bg-[#00BFA5]/10 border border-[#00BFA5]/20">{blog.tag}</span>
                            <span className="text-xs text-slate-500 flex items-center gap-1"><Clock size={12}/> {blog.readTime}</span>
                        </div>
                        <button onClick={onClose} className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><X size={20}/></button>
                    </div>
                    
                    <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">{blog.title}</h1>
                    <div className="flex items-center gap-4 text-xs text-slate-400 mb-8 border-b border-white/5 pb-8">
                        <span className="flex items-center gap-1"><Calendar size={12}/> {blog.date}</span>
                        <span className="flex items-center gap-1"><Eye size={12}/> {blog.views} views</span>
                        <span className="flex items-center gap-1"><PenTool size={12}/> Ashish K.</span>
                    </div>

                    <div className="prose prose-invert prose-lg max-w-none text-slate-300">
                        {blog.content.split('\n').map((paragraph, idx) => (
                            <p key={idx} className="mb-4 leading-relaxed">{paragraph}</p>
                        ))}
                    </div>
                    
                    <div className="mt-12 pt-8 border-t border-white/5 flex justify-center">
                        <button onClick={onClose} className="px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-slate-200 transition-colors">Close Article</button>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

/**
 * --- MAIN APP ---
 */
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [viewImage, setViewImage] = useState(null);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Force title update
    document.title = "Ashish Anil Khatavkar | Engineering the Future";
    
    // Force favicon update
    const link = document.querySelector("link[rel~='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = '/favicon.ico'; // Ensure this file exists in public/
    document.getElementsByTagName('head')[0].appendChild(link);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for the fixed header (80px is h-20)
      const offset = 80; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="relative min-h-screen text-slate-200 font-sans bg-[#0A0A12] selection:bg-[#7C4DFF]/30 overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700&family=Space+Grotesk:wght@400;600;700&display=swap');
        h1, h2, h3, .font-heading { font-family: 'Space Grotesk', sans-serif; }
        body, p, div { font-family: 'Outfit', sans-serif; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        html { scroll-behavior: smooth; }
        @keyframes scan { 0% { top: 0%; opacity: 0; } 50% { opacity: 1; } 100% { top: 100%; opacity: 0; } }
        .animate-scan { animation: scan 2s linear infinite; }
      `}</style>

      <NeuralBackground />
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none z-[1]"></div>
      
      <AIChat />
      <TerminalOverlay isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />
      <ImageModal image={viewImage} onClose={() => setViewImage(null)} />
      <AnimatePresence>
        {selectedBlog && <BlogModal blog={selectedBlog} onClose={() => setSelectedBlog(null)} />}
      </AnimatePresence>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-[#0A0A12]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div onClick={() => scrollTo('home')}>
            <FuturisticLogo />
          </div>

          <div className="hidden md:flex gap-8 items-center">
            {['Home', 'Skills', 'Projects', 'Timeline', 'Certifications', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-sm font-medium text-slate-400 hover:text-[#00BFA5] transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00BFA5] transition-all group-hover:w-full" />
              </button>
            ))}
            <button onClick={() => setTerminalOpen(true)} className="p-2 bg-white/5 rounded-lg hover:bg-white/10 text-[#7C4DFF] hover:text-[#FF4081] transition-colors" title="Open Terminal">
                <Command size={18} />
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="space-y-1.5">
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </div>
          </button>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0A0A12] border-b border-white/5 overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                {['Home', 'Skills', 'Projects', 'Timeline', 'Certifications', 'Contact'].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => scrollTo(item.toLowerCase())}
                    className="text-left text-lg font-medium text-slate-300 hover:text-[#00BFA5] transition-colors py-2 block w-full border-b border-white/5"
                  >
                    {item}
                  </button>
                ))}
                <button 
                  type="button"
                  onClick={() => { setTerminalOpen(true); setIsMenuOpen(false); }}
                  className="text-left text-lg font-medium text-[#7C4DFF] hover:text-[#FF4081] transition-colors flex items-center gap-2 py-2"
                >
                  <Command size={20} /> Open Terminal
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="relative z-10 pt-20">
        
        {/* HERO SECTION */}
        <section id="home" className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-xl text-[#00BFA5] font-medium mb-2">Hello, I'm {DATA.personal.name}</h2>
                <GradientHeader text="Architecting Intelligence." />
                <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-slate-500 opacity-50 -mt-2">
                  Building Future.
                </h1>
              </div>

              <p className="text-lg text-slate-400 leading-relaxed max-w-lg">
                {DATA.personal.bio}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <MagneticButton 
                  onClick={() => scrollTo('projects')} 
                  className="group relative px-8 py-4 bg-white text-[#0A0A12] font-bold rounded-full overflow-hidden transition-transform hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#7C4DFF] to-[#FF4081] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative z-10 group-hover:text-white flex items-center gap-2">
                    View Work <ChevronRight size={16} />
                  </span>
                </MagneticButton>
                <MagneticButton 
                  href={DATA.personal.resumeUrl}
                  download="ASHISH_RESUME.pdf"
                  className="px-8 py-4 border border-white/20 hover:border-white rounded-full font-bold transition-colors flex items-center gap-2 hover:bg-white/5"
                >
                  <Download size={18} /> Resume
                </MagneticButton>
              </div>
            </motion.div>

            {/* HERO VISUALIZATION - CLEAN PROFILE */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center items-center h-[500px]"
            >
              {/* Soft Glow Behind Profile */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#7C4DFF]/20 via-[#00BFA5]/20 to-[#FF4081]/20 blur-[100px] rounded-full opacity-60 animate-pulse" />
              
              {/* Clean Glass Pedestal for Profile */}
              <div className="relative w-80 h-80 rounded-full p-2 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-xl border border-white/10 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden relative group">
                    <img 
                      src={DATA.personal.photoUrl} 
                      alt="Profile" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }}
                    />
                    <div className="hidden absolute inset-0 bg-[#0A0A12] flex-col items-center justify-center text-center p-4">
                      <Binary className="text-[#00BFA5] mb-2" />
                      <span className="text-xs font-mono text-[#00BFA5]">IMAGE NOT<br/>AVAILABLE</span>
                    </div>
                </div>
                
                {/* Floating Card Detail */}
                <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-6 -right-6 bg-[#1E1E27] border border-white/10 p-4 rounded-xl shadow-xl flex items-center gap-3"
                >
                    <div className="w-3 h-3 bg-[#00BFA5] rounded-full animate-ping" />
                    <div className="text-xs font-bold text-white">
                        <div className="text-slate-400 text-[10px] tracking-wider">STATUS</div>
                        OPEN TO WORK
                    </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SKILLS CLOUD - CATEGORIZED */}
        <section id="skills" className="py-32 relative">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-20"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 flex items-center justify-center gap-3">
                <Sparkles className="text-[#00BFA5]" size={24} /> Technical Arsenal
              </h2>
              <p className="text-slate-400 max-w-lg mx-auto">Precision-engineered stack tailored for scalable AI solutions.</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="space-y-6">
                <h3 className="text-xl font-heading font-bold text-[#7C4DFF] text-center border-b border-[#7C4DFF]/30 pb-4">Intelligence</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {DATA.skills.intelligence.map((skill, i) => (
                    <motion.div whileHover={{ scale: 1.05 }} key={i} className="flex items-center gap-2 px-4 py-3 bg-[#1E1E27] border border-white/5 rounded-xl hover:border-[#7C4DFF] transition-colors cursor-default shadow-lg">
                      <skill.icon size={18} style={{ color: skill.color }} />
                      <span className="text-sm font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-heading font-bold text-[#00BFA5] text-center border-b border-[#00BFA5]/30 pb-4">Core</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {DATA.skills.core.map((skill, i) => (
                    <motion.div whileHover={{ scale: 1.05 }} key={i} className="flex items-center gap-2 px-4 py-3 bg-[#1E1E27] border border-white/5 rounded-xl hover:border-[#00BFA5] transition-colors cursor-default shadow-lg">
                      <skill.icon size={18} style={{ color: skill.color }} />
                      <span className="text-sm font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-heading font-bold text-[#FF4081] text-center border-b border-[#FF4081]/30 pb-4">Infrastructure</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {DATA.skills.infrastructure.map((skill, i) => (
                    <motion.div whileHover={{ scale: 1.05 }} key={i} className="flex items-center gap-2 px-4 py-3 bg-[#1E1E27] border border-white/5 rounded-xl hover:border-[#FF4081] transition-colors cursor-default shadow-lg">
                      <skill.icon size={18} style={{ color: skill.color }} />
                      <span className="text-sm font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS GRID - ENHANCED CARDS */}
        <section id="projects" className="py-32 bg-[#050508] relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-2">Project Database</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-[#7C4DFF] to-[#FF4081] rounded"></div>
              </div>
              <div className="text-right hidden md:block">
                <p className="text-slate-500 font-mono text-xs">/SELECT_ENTRY_FOR_ANALYSIS</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {DATA.projects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  layoutId={`card-${project.id}`}
                  onClick={() => setSelectedProject(project)}
                >
                  <HoloCard className="rounded-2xl cursor-pointer h-full hover:border-[#7C4DFF]/50 transition-colors bg-[#0A0A12] flex flex-col">
                    <div className="h-48 w-full relative overflow-hidden">
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                            onError={(e) => {
                                // Fallback logic inside card
                                const target = e.target;
                                target.onerror = null;
                                target.src = "https://via.placeholder.com/400x200?text=Project+Preview";
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A12] to-transparent opacity-80" />
                    </div>
                    <div className="p-8 flex flex-col h-full relative -mt-12">
                      {/* Metric Badge */}
                      <div className="absolute top-0 right-4 bg-white/5 border border-white/10 px-3 py-1 rounded-full backdrop-blur-md shadow-lg">
                        <span className="text-[10px] font-bold text-[#00BFA5]">{project.metric}</span>
                      </div>

                      <div className="flex justify-between items-start mb-6">
                        <span className="text-[#00BFA5] font-mono text-[10px] px-2 py-1 rounded border border-[#00BFA5]/20 bg-[#00BFA5]/5">
                          {project.tag}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-heading font-bold mb-4 group-hover:text-[#7C4DFF] transition-colors">{project.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{project.summary}</p>
                      
                      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                        {project.tech.slice(0,3).map(t => (
                          <span key={t} className="text-[10px] text-slate-400 border border-white/10 px-2 py-1 rounded bg-[#1E1E27]">
                            {t}
                          </span>
                        ))}
                        {project.tech.length > 3 && <span className="text-[10px] text-slate-500 px-1 py-1">+{project.tech.length - 3}</span>}
                      </div>
                    </div>
                  </HoloCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TIMELINE - ENRICHED */}
        <section id="timeline" className="py-32 px-6 relative overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-3xl font-heading font-bold mb-16 text-center">Execution Log</h2>
            
            <div className="space-y-16 relative border-l border-white/10 ml-4 md:ml-0 md:pl-0">
              {DATA.experience.map((exp, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-12 md:flex md:gap-12 md:pl-0 group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[-5px] top-2 w-[9px] h-[9px] rounded-full bg-[#0D0D16] border border-[#FF4081] md:left-1/2 md:-translate-x-[5px] group-hover:bg-[#FF4081] transition-colors" />
                  
                  <div className="md:w-1/2 md:text-right md:pr-12">
                    <span className="text-[#00BFA5] font-mono text-xs mb-1 block">{exp.period}</span>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#7C4DFF] transition-colors">{exp.company}</h3>
                    <h4 className="text-sm font-medium text-slate-400 mb-2">{exp.role}</h4>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12 mt-2 md:mt-0">
                    <ul className="list-disc list-outside text-slate-400 text-sm leading-relaxed space-y-2 marker:text-[#7C4DFF]">
                      {exp.achievements.map((ach, idx) => (
                        <li key={idx}>{ach}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS - INTERACTIVE */}
        <section id="certifications" className="py-32 px-6 relative bg-[#050508]">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-heading font-bold mb-16 text-center text-white flex items-center justify-center gap-3">
                    <Award className="text-[#FF4081]" /> Credentials & Badges
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {DATA.certifications.map((cert, i) => (
                        <TiltCard 
                            key={i}
                            className="h-full"
                            onClick={() => cert.image && setViewImage(cert.image)}
                        >
                            <HoloCard className="p-6 rounded-2xl flex flex-col gap-4 h-full hover:border-[#00BFA5]/50 transition-colors bg-[#0A0A12] relative group">
                                <div className="absolute top-2 right-2 text-white/20 group-hover:text-[#00BFA5] transition-colors z-10">
                                    <Maximize2 size={16} />
                                </div>
                                {/* INCREASED SIZE HERE: w-full h-48 (was w-20 h-20) */}
                                <div className="w-full h-48 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center self-center overflow-hidden relative group-hover:scale-105 transition-transform shadow-lg">
                                    {cert.image ? (
                                        <img src={cert.image} alt={cert.title} className="w-full h-full object-contain" 
                                            onError={(e) => {
                                                const target = e.target;
                                                target.onerror = null;
                                                // Fallback if local image missing
                                                target.src = "https://via.placeholder.com/300x200?text=Certificate";
                                            }} 
                                        />
                                    ) : (
                                        <Medal size={48} className="text-[#FF4081]" />
                                    )}
                                </div>
                                <div className="text-center mt-2">
                                    <span className="text-[9px] font-mono text-[#00BFA5] uppercase tracking-widest block mb-1">{cert.type}</span>
                                    <h3 className="text-sm font-bold text-white mb-1 leading-snug">{cert.title}</h3>
                                    <p className="text-[10px] text-slate-500">{cert.issuer}</p>
                                </div>
                            </HoloCard>
                        </TiltCard>
                    ))}
                </div>
            </div>
        </section>

        {/* BLOG SECTION */}
        <section id="blog" className="py-32 px-6 relative bg-[#0A0A12]">
            <div className="max-w-5xl mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <h2 className="text-3xl font-heading font-bold">Engineering Insights</h2>
                    <button className="text-[#7C4DFF] hover:text-[#FF4081] transition-colors text-sm font-mono flex items-center gap-2">View Archive <ChevronRight size={14} /></button>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {DATA.blogs.map((blog, i) => (
                        <div 
                            key={i} 
                            onClick={() => setSelectedBlog(blog)}
                            className="group p-8 border border-white/5 rounded-2xl hover:border-[#7C4DFF]/30 transition-colors cursor-pointer bg-[#0E0E15] hover:bg-[#15151E]"
                        >
                            <div className="flex gap-2 mb-4 justify-between">
                                <span className="text-[10px] uppercase font-bold text-[#FF4081] bg-[#FF4081]/10 px-2 py-1 rounded">{blog.tag}</span>
                                <div className="flex items-center gap-1 text-[10px] text-slate-500">
                                  <Eye size={12} /> {blog.views}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-[#7C4DFF] transition-colors">{blog.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">{blog.summary}</p>
                            <span className="text-white text-xs font-bold uppercase tracking-widest border-b border-[#00BFA5]/30 pb-1 hover:text-[#00BFA5] hover:border-[#00BFA5] transition-colors flex items-center gap-2 w-fit">
                                Read Article <ChevronRight size={12} />
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-32 px-6 border-t border-white/5 bg-[#050508]">
          <div className="max-w-7xl mx-auto">
            <ContactForm />
            
            {/* MEGA FOOTER */}
            <div className="mt-32 border-t border-white/5 pt-16">
              <div className="grid md:grid-cols-4 gap-12 mb-16">
                <div className="col-span-1 md:col-span-1">
                  <FuturisticLogo />
                  <p className="text-slate-500 text-sm mt-6 leading-relaxed">
                    Engineering intelligence through scalable architectures and predictive models. Building the future, one node at a time.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-white font-bold mb-6">Navigation</h4>
                  <ul className="space-y-4 text-sm text-slate-400">
                    <li><button onClick={() => scrollTo('home')} className="hover:text-[#00BFA5] transition-colors">Home</button></li>
                    <li><button onClick={() => scrollTo('projects')} className="hover:text-[#00BFA5] transition-colors">Projects</button></li>
                    <li><button onClick={() => scrollTo('skills')} className="hover:text-[#00BFA5] transition-colors">Skills</button></li>
                    <li><button onClick={() => scrollTo('blog')} className="hover:text-[#00BFA5] transition-colors">Insights</button></li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-bold mb-6">Socials</h4>
                  <ul className="space-y-4 text-sm text-slate-400">
                    <li><a href={`https://${DATA.personal.linkedin}`} target="_blank" className="hover:text-[#00BFA5] transition-colors flex items-center gap-2"><Linkedin size={14}/> LinkedIn</a></li>
                    <li><a href={`https://${DATA.personal.github}`} target="_blank" className="hover:text-[#00BFA5] transition-colors flex items-center gap-2"><Github size={14}/> GitHub</a></li>
                    <li><a href={`mailto:${DATA.personal.email}`} className="hover:text-[#00BFA5] transition-colors flex items-center gap-2"><Mail size={14}/> Email</a></li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-bold mb-6">Status</h4>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <div className="w-2 h-2 rounded-full bg-[#00BFA5] animate-pulse" />
                    System Online
                  </div>
                  <div className="mt-4 text-xs text-slate-600 font-mono">
                    V3.0.1 STABLE
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-slate-600">
                <p>&copy; {new Date().getFullYear()} Ashish Anil Khatavkar. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                  <span className="hover:text-slate-400 cursor-pointer">Privacy Protocol</span>
                  <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* PROJECT MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              layoutId={`card-${selectedProject.id}`}
              className="bg-[#1E1E27] w-full max-w-3xl rounded-3xl border border-white/10 overflow-hidden relative shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="h-64 w-full relative overflow-hidden">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover" 
                    onError={(e) => {
                        const target = e.target;
                        target.onerror = null;
                        target.src = "https://via.placeholder.com/800x400?text=Project+Image";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E27] to-transparent" />
                  
                  <button 
                    onClick={() => setSelectedProject(null)} 
                    className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-white hover:text-black transition-colors backdrop-blur-md z-10"
                  >
                    <X size={20} />
                  </button>

                  <div className="absolute bottom-8 left-8 right-8">
                    <h2 className="text-3xl font-heading font-bold text-white mb-2">{selectedProject.title}</h2>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-[#00BFA5] font-mono text-xs bg-[#00BFA5]/10 px-3 py-1 rounded-full border border-[#00BFA5]/20">
                            <Code size={14} /> {selectedProject.tag}
                        </div>
                    </div>
                  </div>
              </div>
              
              <div className="p-10 max-h-[50vh] overflow-y-auto">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-8">
                    <div>
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                        <Search size={14} /> Situation Analysis
                      </h4>
                      <p className="text-slate-300 leading-relaxed text-sm">{selectedProject.star.situation}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                        <Cpu size={14} /> Execution Protocol
                      </h4>
                      <p className="text-slate-300 leading-relaxed text-sm">{selectedProject.star.task} {selectedProject.star.action}</p>
                    </div>
                    <div className="p-5 bg-gradient-to-br from-[#7C4DFF]/10 to-transparent border border-[#7C4DFF]/30 rounded-xl">
                      <h4 className="text-xs font-bold text-[#7C4DFF] uppercase tracking-widest mb-2 flex items-center gap-2">
                        <BarChart3 size={14} /> Impact Assessment
                      </h4>
                      <p className="text-white text-base font-medium">{selectedProject.star.result}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map(t => (
                            <span key={t} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded text-xs text-slate-300">
                            {t}
                            </span>
                        ))}
                        </div>
                    </div>
                    
                    <div className="space-y-3">
                        <a href={selectedProject.github} target="_blank" className="w-full py-3 bg-white text-black font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors text-sm">
                            <Github size={18} /> View Code
                        </a>
                        <a href={selectedProject.demo} target="_blank" className="w-full py-3 border border-[#00BFA5] text-[#00BFA5] font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-[#00BFA5]/10 transition-colors text-sm">
                            <Globe size={18} /> Live Demo
                        </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
