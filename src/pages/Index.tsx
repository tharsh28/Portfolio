import { useEffect, useState } from "react";
import { Mail, Phone, Linkedin, ExternalLink, Filter, Palette } from "lucide-react";
import profileColor from "@/assets/profile-color.jpg";

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [selectedFilter, setSelectedFilter] = useState("All");

  // Scroll spy for navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "education", "certifications", "languages", "projects", "leadership", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "PrintHub — Smart Campus Printing App",
      description: "Mobile app UI designed to simplify student printing in hostels with no nearby photocopy facilities. Features document upload flows, auto-calculated cost & time estimates, print status tracking, and online payment interfaces. Prototype testing showed faster access and reduced printing wait times.",
      tags: ["Mobile", "Figma", "UI/UX Design", "Prototyping", "Automation Integration"],
      figma: "https://www.figma.com/design/yyBvX5zKgTKuk0Vt69eKbw/Printhub?node-id=0-1&t=EROB5V7XrHKEChhH-1",
      type: "Mobile",
    },
    {
      title: "UniBuzz — Student Networking & Events",
      description: "Mobile app solving event discovery issues. Mobile-first flows with calendar, RSVP, club discovery, and notifications increased participation based on prototype tests.",
      tags: ["Mobile", "Figma", "Prototyping", "UX Research"],
      demo: "https://drive.google.com/file/d/1Y61qmOTDlPAtJ1SdgWP9MaAmd4vy0b9f/view?usp=sharing",
      type: "Mobile",
    },
    {
      title: "Fresh Fruits — E-commerce UI",
      description: "Mobile app reducing cart abandonment with clean cards and one-page checkout. Simplified purchase flow from 6 to 3 steps with clear CTAs and stock states.",
      tags: ["Mobile", "E-commerce", "Responsive", "IA"],
      figma: "https://www.figma.com/design/XxAAS3AIujlGkxASkZ2KQg/John-Fresh-Fruits?node-id=0-1",
      type: "Mobile",
    },
    {
      title: "NRS Repair — Service Booking & Tracking",
      description: "Mobile app with guided booking and live status tracking. Improved visibility reduced support calls and shortened booking time in scenario tests.",
      tags: ["Mobile", "Dashboard", "UX Writing"],
      figma: "https://www.figma.com/design/arY7yZ7nJceIMN11zVCl8J/NRS-Repair?node-id=0-1",
      type: "Mobile",
    },
    {
      title: "Account Manager — Personal Finance UI",
      description: "Mobile app for financial tracking with category tagging, filters, and monthly insights. Usability tests showed faster retrieval and better budgeting decisions.",
      tags: ["Mobile", "Data Viz", "Fintech", "Accessibility"],
      figma: "https://www.figma.com/design/cLc34AQJc0Nk98Izdcn2Ve/Account-Manager?node-id=0-1",
      type: "Mobile",
    },
  ];

  const filters = ["All", "Mobile"];
  const filteredProjects = selectedFilter === "All" 
    ? projects 
    : projects.filter(p => p.type === selectedFilter);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Fixed Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => scrollToSection("hero")}
              className="text-xl font-bold text-primary hover:text-glow transition-all active:text-primary/90 active:scale-95"
            >
              Portfolio
            </button>
            
            <div className="hidden md:flex gap-6">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  data-state={activeSection === item.toLowerCase() ? "on" : "off"}
                  aria-pressed={activeSection === item.toLowerCase()}
                  className={`text-sm font-medium transition-all hover:text-primary active:text-primary/90 active:scale-95 ${
                    activeSection === item.toLowerCase() 
                      ? "text-primary data-[state=on]:text-primary" 
                      : "text-foreground/80"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="reveal space-y-6">
                <div className="inline-block px-4 py-2 glass-card text-sm text-primary">
                  UI/UX Designer
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                  Tharshan<br />
                  <span className="text-primary">Mahalingam</span>
                </h1>
                <p className="text-lg text-foreground/80 max-w-lg">
                  Creative, detail-oriented designer crafting user-centered, accessible experiences. 
                  Building clean interfaces with Figma and passion.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => scrollToSection("projects")}
                    className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:shadow-glow transition-all active:bg-primary/90 active:scale-[0.98]"
                  >
                    View Projects
                  </button>
                  <button 
                    onClick={() => scrollToSection("contact")}
                    className="px-8 py-3 glass-card rounded-full font-medium hover:border-primary transition-all active:bg-primary/10 active:scale-[0.98]"
                  >
                    Get in Touch
                  </button>
                </div>
              </div>

              <div className="reveal relative flex justify-center">
                <div className="relative">
                  {/* Rotating glow ring */}
                  <div className="absolute inset-0 -m-4">
                    <div className="w-full h-full rounded-full bg-gradient-to-r from-primary/40 via-transparent to-primary/40 animate-rotate-glow blur-2xl" />
                  </div>
                  
                  {/* Profile image */}
                  <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20">
                    <img 
                      src={profileColor} 
                      alt="Tharshan Mahalingam - UI/UX Designer in black shirt"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="reveal space-y-6">
                <h2 className="text-4xl sm:text-5xl font-bold">
                  About <span className="text-primary">Me</span>
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  I'm a 3rd-year ICT undergraduate at the University of Colombo, Faculty of Technology, 
                  with a strong grasp of user-centered design, wireframing, prototyping, and responsive 
                  interfaces.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Skilled in Figma and passionate about building clean, accessible, intuitive experiences. 
                  Currently seeking an internship to collaborate, learn, and contribute to real products 
                  that make a difference.
                </p>
              </div>

              <div className="reveal flex justify-center md:justify-end">
                <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-primary/20 glass-card p-2">
                  <img 
                    src={profileColor} 
                    alt="Tharshan Mahalingam profile photo"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <h2 className="reveal text-4xl sm:text-5xl font-bold mb-12 text-center">
              Skills & <span className="text-primary">Expertise</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Core UI/UX */}
              <div className="reveal glass-card p-8 space-y-4">
                <h3 className="text-2xl font-bold text-primary">Core UI/UX</h3>
                <div className="flex flex-wrap gap-2">
                  {["UI Design", "UX Research", "Wireframing", "Prototyping", "Responsive Design", "Mobile-first Design", "Accessibility Design", "Visual Storytelling", "Design Thinking", "Color Theory", "Typography", "Visual Hierarchy"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools & Methods */}
              <div className="reveal glass-card p-8 space-y-4">
                <h3 className="text-2xl font-bold text-primary">Tools & Methods</h3>
                <div className="flex flex-wrap gap-2">
                  {["Figma", "Adobe XD", "FigJam", "Usability Testing", "Heuristic Evaluation", "Design Systems", "Component Libraries", "User Flows", "Information Architecture"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Professional */}
              <div className="reveal glass-card p-8 space-y-4">
                <h3 className="text-2xl font-bold text-primary">Professional</h3>
                <div className="flex flex-wrap gap-2">
                  {["Content Creation", "Event Coordination", "Time Management", "Leadership", "Project Management", "Communication", "Team Collaboration", "Independent Thinking"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <h2 className="reveal text-4xl sm:text-5xl font-bold mb-12 text-center">
              <span className="text-primary">Education</span>
            </h2>

            <div className="max-w-4xl mx-auto space-y-6">
              {/* Bachelor's Degree */}
              <div className="reveal glass-card p-8 space-y-4">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <h3 className="text-2xl font-bold">B.ICT (Hons)</h3>
                    <p className="text-primary">University of Colombo, Faculty of Technology</p>
                  </div>
                  <span className="text-sm text-foreground/60">2023 – Reading (3rd Year)</span>
                </div>
                <p className="text-foreground/80">
                  The Faculty of Technology at University of Colombo is Sri Lanka's premier institution for 
                  applied technology education, known for its industry-aligned curriculum and strong emphasis 
                  on practical skills in software development, networking, and emerging technologies.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Software Engineering", "Networking", "Databases", "UI/UX Design"].map((focus) => (
                    <span key={focus} className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm">
                      {focus}
                    </span>
                  ))}
                </div>
              </div>

              {/* A/L */}
              <div className="reveal glass-card p-8 space-y-4">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <h3 className="text-2xl font-bold">GCE A/L (Bio-Systems Technology)</h3>
                    <p className="text-primary">Z-Score: 1.952</p>
                  </div>
                  <span className="text-sm text-foreground/60">2019 – 2021</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm">
                    BST — A
                  </span>
                  <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm">
                    SFT — A
                  </span>
                  <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm">
                    ICT — B
                  </span>
                </div>
              </div>

              {/* Diploma */}
              <div className="reveal glass-card p-8 space-y-4">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <h3 className="text-2xl font-bold">Diploma in English</h3>
                    <p className="text-primary">ESOFT Metro Campus</p>
                  </div>
                  <span className="text-sm text-foreground/60">2022</span>
                </div>
                <p className="text-foreground/80">
                  Gained fluency in English communication, advanced grammar, and spoken language skills.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <h2 className="reveal text-4xl sm:text-5xl font-bold mb-12 text-center">
              <span className="text-primary">Certifications</span>
            </h2>

            <div className="max-w-4xl mx-auto space-y-6">
              {/* Python Certificate */}
              <div className="reveal glass-card p-8 space-y-4">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <h3 className="text-2xl font-bold">Python for Beginners</h3>
                    <p className="text-primary">University of Moratuwa</p>
                  </div>
                </div>
                <p className="text-foreground/80">
                  Gained a solid foundation in Python programming, covering syntax, logic building, 
                  and problem-solving for real-world applications.
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-foreground/60">Code: IvKFd53WYq</span>
                  <a 
                    href="https://open.uom.lk/lms/mod/customcert/verify_certificate.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline text-sm"
                  >
                    Verify Credential <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* Figma Certificate */}
              <div className="reveal glass-card p-8 space-y-4">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <h3 className="text-2xl font-bold">User Interface Design with Figma</h3>
                    <p className="text-primary">Alison</p>
                  </div>
                </div>
                <p className="text-foreground/80">
                  Learned to design intuitive and visually appealing interfaces using Figma, 
                  focusing on layout, prototyping, and user experience principles.
                </p>
                <a 
                  href="https://alison.com/certification/check/cf29e131fd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline text-sm"
                >
                  Verify Credential <ExternalLink size={14} />
                </a>
              </div>

              {/* SEO Certificate */}
              <div className="reveal glass-card p-8 space-y-4">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <h3 className="text-2xl font-bold">The Ultimate SEO Blueprint</h3>
                    <p className="text-primary">Alison</p>
                  </div>
                </div>
                <p className="text-foreground/80">
                  Mastered search engine optimization strategies, including keyword research, 
                  on-page optimization, and analytics to improve website visibility and rankings.
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-foreground/60">Code: 4146-47127065</span>
                  <a 
                    href="https://alison.com/certification/check/a60a055cd6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline text-sm"
                  >
                    Verify Credential <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Languages Section */}
        <section id="languages" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <h2 className="reveal text-4xl sm:text-5xl font-bold mb-12 text-center">
              <span className="text-primary">Languages</span>
            </h2>

            <div className="max-w-2xl mx-auto space-y-6">
              <div className="reveal glass-card p-6">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Tamil</span>
                  <span className="text-primary">Native</span>
                </div>
                <div className="w-full h-2 bg-foreground/10 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-full" />
                </div>
              </div>

              <div className="reveal glass-card p-6">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">English</span>
                  <span className="text-primary">Intermediate</span>
                </div>
                <div className="w-full h-2 bg-foreground/10 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[70%]" />
                </div>
              </div>

              <div className="reveal glass-card p-6">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Sinhala</span>
                  <span className="text-primary">Limited</span>
                </div>
                <div className="w-full h-2 bg-foreground/10 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[40%]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <h2 className="reveal text-4xl sm:text-5xl font-bold mb-8 text-center">
              Featured <span className="text-primary">Projects</span>
            </h2>

            {/* Filter Buttons */}
            <div className="reveal flex justify-center gap-3 mb-12 flex-wrap">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  data-state={selectedFilter === filter ? "on" : "off"}
                  aria-pressed={selectedFilter === filter}
                  className={`px-6 py-2 rounded-full font-medium transition-all active:scale-[0.98] ${
                    selectedFilter === filter
                      ? "bg-primary text-primary-foreground shadow-glow active:bg-primary/90 data-[state=on]:bg-primary/90 aria-pressed:bg-primary/90"
                      : "glass-card hover:border-primary active:bg-primary/10"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Project Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <div key={index} className="reveal glass-card p-8 space-y-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-foreground/80">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium hover:shadow-glow transition-all"
                      >
                        Demo <ExternalLink size={16} />
                      </a>
                    )}
                    {project.figma && (
                      <a
                        href={project.figma}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-2 glass-card rounded-full font-medium hover:border-primary transition-all"
                      >
                        Figma <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section id="leadership" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <h2 className="reveal text-4xl sm:text-5xl font-bold mb-12 text-center">
              Leadership & <span className="text-primary">Experience</span>
            </h2>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="reveal glass-card p-8 space-y-4">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-primary">President</h3>
                    <p className="text-lg">Hindu Society</p>
                  </div>
                  <span className="text-sm text-foreground/60">2025 – Present</span>
                </div>
                <p className="text-foreground/80">
                  Leading fundraising and sponsorship initiatives, planning cultural events, and 
                  fostering collaboration across university societies. Overseeing executive team 
                  and managing society operations.
                </p>
              </div>

              <div className="reveal glass-card p-8 space-y-4">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-primary">Committee Member</h3>
                    <p className="text-lg">Student Union</p>
                  </div>
                  <span className="text-sm text-foreground/60">2025 – Present</span>
                </div>
                <p className="text-foreground/80">
                  Representing student interests, resolving issues, and contributing to faculty 
                  decision-making processes. Active participation in improving student experience 
                  and campus life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="reveal text-4xl sm:text-5xl font-bold mb-12 text-center">
              Get in <span className="text-primary">Touch</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="reveal space-y-6">
                <div className="glass-card p-6 space-y-4">
                  <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                  
                  <a 
                    href="mailto:tharsh0728@gmail.com"
                    className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors"
                  >
                    <Mail className="text-primary" size={20} />
                    tharsh0728@gmail.com
                  </a>

                  <a 
                    href="tel:+94759985580"
                    className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors"
                  >
                    <Phone className="text-primary" size={20} />
                    +94 75 998 5580
                  </a>

                  <a 
                    href="https://linkedin.com/in/tharshan0728"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors"
                  >
                    <Linkedin className="text-primary" size={20} />
                    linkedin.com/in/tharshan0728
                  </a>

                  <a 
                    href="https://www.behance.net/tharshan1/projects"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors"
                  >
                    <Palette className="text-primary" size={20} />
                    behance.net/tharshan1
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="reveal glass-card p-8">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-2 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-2 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      className="w-full px-4 py-2 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:shadow-glow transition-all active:bg-primary/90 active:scale-[0.98]"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border/50">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-foreground/60">
                © {new Date().getFullYear()} Tharshan Mahalingam. All rights reserved.
              </p>
              
              <div className="flex gap-6">
                <button 
                  onClick={() => scrollToSection("about")}
                  className="text-sm text-foreground/60 hover:text-primary transition-colors active:text-primary/90 active:scale-95"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection("projects")}
                  className="text-sm text-foreground/60 hover:text-primary transition-colors active:text-primary/90 active:scale-95"
                >
                  Projects
                </button>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-sm text-foreground/60 hover:text-primary transition-colors active:text-primary/90 active:scale-95"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
