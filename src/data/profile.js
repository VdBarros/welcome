import { Smartphone, Cpu, Database, Layers, Globe, Code, Server, Linkedin, Github, Mail, Phone } from 'lucide-react';

export const TERMINAL_COMMANDS = [
  { cmd: 'whoami', output: 'vinibarros', color: 'text-secondary' },
  { cmd: 'cat about.txt', output: 'Mobile & Front End Developer', color: 'text-white' },
  { cmd: 'cat status.txt', output: 'Currently @ Lab2Dev', color: 'text-accent' },
  { cmd: 'cat skills.json', output: '[Android, iOS, KMP, Flutter, React Native, SAP...]', color: 'text-primary' },
  { cmd: 'cat experience.log', output: '🏆 6+ years building apps for 150k+ users', color: 'text-secondary' },
  { cmd: 'cat passion.txt', output: '"Making technology impact lives"', color: 'text-accent italic' },
];

export const SKILLS_CONSTELLATION = [
  { name: 'Android', icon: Smartphone, color: '#3DDC84', size: 'lg', x: 0, y: 0 },
  { name: 'iOS', icon: Cpu, color: '#000000', size: 'lg', x: 150, y: 0 },
  { name: 'KMP', icon: Database, color: '#7F52FF', size: 'md', x: -150, y: 0 },
  { name: 'Flutter', icon: Layers, color: '#02569B', size: 'md', x: 75, y: 130 },
  { name: 'React Native', icon: Globe, color: '#61DAFB', size: 'md', x: -75, y: 130 },
  { name: 'Kotlin', icon: Code, color: '#7F52FF', size: 'sm', x: 180, y: 100 },
  { name: 'Swift', icon: Cpu, color: '#F05138', size: 'sm', x: -180, y: 100 },
  { name: 'SAP', icon: Server, color: '#0FAAFF', size: 'sm', x: 100, y: -120 },
  { name: 'Fiori', icon: Globe, color: '#00A1E0', size: 'sm', x: -100, y: -120 },
];

export const PROJECTS = [
  {
    title: 'Farmácias APP',
    description: 'Full-stack delivery app serving 150k+ users with real-time tracking, payment integration, and pharmacy management.',
    tech: ['Android', 'Kotlin', 'iOS', 'Swift', 'Firebase'],
    impact: '150k+ users',
    color: '#10B981',
    link: 'https://play.google.com/store/apps/details?id=com.pharmacysa.farmaciasapp&hl=pt_BR'
  },
  {
    title: 'BTP XP',
    description: 'SAP Business Technology Platform experience app with mobile services and enterprise integration.',
    tech: ['KMP', 'Android', 'iOS', 'SAP'],
    impact: 'SAP Project',
    color: '#6366F1',
    link: 'https://play.google.com/store/apps/details?id=com.sap.btpxp&hl=pt_BR'
  },
  {
    title: 'RS Pedidos',
    description: 'Freelance Java/Kotlin application with advanced reporting, PDF export, and complex data visualization.',
    tech: ['Kotlin', 'Java', 'Spring Boot'],
    impact: 'Freelance',
    color: '#F59E0B',
    link: 'https://play.google.com/store/apps/details?id=br.com.coderealm.rspedidos&hl=pt_BR'
  },
  {
    title: 'Jera Chat App',
    description: 'Real-time messaging application with Socket.io integration for instant communication.',
    tech: ['Android', 'Kotlin', 'Vue.js', 'Socket.io'],
    impact: 'First Experience',
    color: '#EC4899',
    link: null
  }
];

export const EXPERIENCES = [
  {
    title: 'Senior Mobile Developer',
    company: 'Lab2Dev',
    period: 'Sep 2023 - Present',
    description: 'Creating and maintaining SAP Mobile Services with end-to-end development cycle.',
    highlights: ['SAP Mobile Services', 'Offline First', 'SVG Maps', 'KMP'],
    color: '#10B981'
  },
  {
    title: 'Main Android Developer',
    company: 'RS10 Consultoria (Freelance)',
    period: 'Jan 2022 - Present',
    description: 'Part-time freelance work on Java/Kotlin application improvements and optimization.',
    highlights: ['Java → Kotlin migration', 'PDF & Reports', 'Freelance'],
    color: '#6366F1'
  },
  {
    title: 'Senior Android Developer',
    company: 'Farmácias APP | GrupoSC',
    period: 'Mar 2023 - Jul 2023',
    description: 'Achieved 30% error reduction and eliminated crashes/ANRs for 150k+ users.',
    highlights: ['30% fewer errors', 'Zero ANRs', 'Strategic decisions'],
    color: '#F59E0B'
  },
  {
    title: 'Tech Lead Mobile',
    company: 'Farmácias APP | GrupoSC',
    period: 'Aug 2021 - Mar 2023',
    description: 'Led multidisciplinary team, drove OKRs, and planned V3 application development.',
    highlights: ['Team leadership', 'OKR framework', 'Performance boost'],
    color: '#EC4899'
  },
  {
    title: 'Android Developer',
    company: 'Farmácias APP | GrupoSC',
    period: 'Mar 2021 - Aug 2021',
    description: 'Contributed to app development, login system, and deployment processes.',
    highlights: ['Login system', 'Navigation flow', 'Production deployment'],
    color: '#8B5CF6'
  },
  {
    title: 'Software Development Intern',
    company: 'Jera',
    period: 'Jul 2020 - Mar 2021',
    description: 'First experience in mobile development with real-time chat implementation.',
    highlights: ['Android/Kotlin', 'Real-time chat', 'Socket.io', 'Vue.js'],
    color: '#14B8A6'
  }
];

export const SOCIAL_LINKS = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/vini-barros/', icon: Linkedin, color: '#0A66C2' },
  { name: 'GitHub', url: 'https://github.com/VdBarros/', icon: Github, color: '#fff' },
  { name: 'Email', url: 'mailto:vinibarros.sp@gmail.com', icon: Mail, color: '#EA4335' },
  { name: 'Phone', url: 'tel:+5567996483388', icon: Phone, color: '#25D366' },
];

export const TECH_CATEGORIES = [
  { name: 'Native', items: ['Android (Kotlin/Java)', 'iOS (Swift)'] },
  { name: 'Hybrid', items: ['KMP', 'Flutter', 'React Native'] },
  { name: 'Web', items: ['Fiori', 'Vue.js'] },
  { name: 'Backend/SAP', items: ['SAP CAP', 'Mobile Services', 'Build Apps', 'Firebase'] },
];
