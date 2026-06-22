export const GitStats = {
  repos: 39,
  followers: 19,
  following: 22,
  gists: 1,
};

export type Project = {
  id: number;
  name: string;
  description: string;
  tech: string[];
  forks: number;
  stars: number;
  url: string;
  featured: boolean;
  connectedTo?: string;
  caseStudySlug?: string;
  relatedRepositories?: { name: string; url: string }[];
};

export const projects: Project[] = [
  {
    id: 1,
    name: 'book-review-terraform-iac',
    description: 'A modular three-tier AWS scaffold with six subnets, public and internal load balancers, EC2 bootstrap automation, and private RDS connectivity.',
    tech: ['Terraform', 'AWS', 'EC2', 'RDS'],
    forks: 11,
    stars: 0,
    url: 'https://github.com/Goodnessoj/book-review-terraform-iac',
    featured: true,
    caseStudySlug: 'book-review-terraform',
  },
  {
    id: 2,
    name: 'platform-petclinic',
    description: 'An EKS platform for eight Spring services using Terraform, Helm, Argo CD, GitHub OIDC, RDS, External Secrets, and observability tooling.',
    tech: ['Terraform', 'EKS', 'Helm', 'Argo CD'],
    forks: 10,
    stars: 0,
    url: 'https://github.com/Goodnessoj/platform-petclinic',
    featured: true,
    connectedTo: 'spring-petclinic-microservices',
    caseStudySlug: 'petclinic-eks-platform',
  },
  {
    id: 3,
    name: 'spring-petclinic-microservices',
    description: 'Distributed Spring Petclinic built with Spring Cloud. Connects to the platform-petclinic infrastructure for service discovery and config management.',
    tech: ['Java', 'Spring Cloud', 'Microservices'],
    forks: 0,
    stars: 0,
    url: 'https://github.com/Goodnessoj/spring-petclinic-microservices',
    featured: false,
  },
  {
    id: 4,
    name: 'Dual-Pipeline Deployment with Azure DevOps',
    description: 'A two-stage Azure delivery system: Terraform provisions a VM and private MySQL, then a downstream pipeline hands runtime outputs to Ansible.',
    tech: ['Terraform', 'Azure', 'Ansible', 'Azure DevOps'],
    forks: 8,
    stars: 0,
    url: 'https://github.com/Goodnessoj/infra-epicbook',
    featured: true,
    connectedTo: 'app-deploy-epicbook',
    caseStudySlug: 'epicbook-azure-delivery',
    relatedRepositories: [
      {
        name: 'infra-epicbook',
        url: 'https://github.com/Goodnessoj/infra-epicbook',
      },
      {
        name: 'app-deploy-epicbook',
        url: 'https://github.com/Goodnessoj/app-deploy-epicbook',
      },
    ],
  },
  {
    id: 6,
    name: 'epicbook-iac-ansible',
    description: 'Ansible-based infrastructure as code for EpicBook. Server provisioning, configuration management, and application deployment playbooks.',
    tech: ['Ansible', 'YAML', 'AWS'],
    forks: 1,
    stars: 0,
    url: 'https://github.com/Goodnessoj/epicbook-iac-ansible',
    featured: false,
  },
  {
    id: 7,
    name: 'Ultimate-Agentic-DevOps-with-Claude-Code',
    description: 'Agentic DevOps workflow using Claude Code for automated infrastructure auditing, security scanning, and deployment validation.',
    tech: ['AI', 'DevOps', 'Automation'],
    forks: 0,
    stars: 0,
    url: 'https://github.com/Goodnessoj/Ultimate-Agentic-DevOps-with-Claude-Code',
    featured: false,
  },
];

export const skills = [
  { name: 'AWS', category: 'Cloud', icon: 'cloud' },
  { name: 'Azure', category: 'Cloud', icon: 'cloud' },
  { name: 'Terraform', category: 'IaC', icon: 'box' },
  { name: 'Ansible', category: 'IaC', icon: 'server' },
  { name: 'CloudFormation', category: 'IaC', icon: 'cloud' },
  { name: 'Docker', category: 'Containers', icon: 'box' },
  { name: 'Kubernetes', category: 'Containers', icon: 'grid' },
  { name: 'GitHub Actions', category: 'CI/CD', icon: 'git-branch' },
  { name: 'Jenkins', category: 'CI/CD', icon: 'settings' },
  { name: 'Python', category: 'Languages', icon: 'code' },
  { name: 'Bash', category: 'Languages', icon: 'terminal' },
  { name: 'HCL', category: 'Languages', icon: 'code' },
  { name: 'JavaScript', category: 'Languages', icon: 'code' },
  { name: 'Git', category: 'Tools', icon: 'git-branch' },
  { name: 'Linux', category: 'Tools', icon: 'terminal' },
  { name: 'Nginx', category: 'Tools', icon: 'server' },
];

export const devtoArticles = [
  {
    title: 'Agentic DevOps: Letting AI Subagents Audit Terraform Infrastructure',
    excerpt: 'How I built an agentic workflow using Claude Code to automatically audit Terraform infrastructure for security, cost, and best-practice compliance.',
    date: 'Mar 2026',
    readTime: '4 min read',
    tags: ['ai', 'terraform', 'devops'],
    url: 'https://dev.to/goodnessoj/agentic-devops-letting-ai-subagents-audit-terraform-infrastructure-1iin',
  },
  {
    title: 'Deploying a Static Website on Azure Using Blob Storage',
    excerpt: 'A complete guide to hosting static websites on Azure Blob Storage with CDN integration and custom domains.',
    date: 'Mar 2026',
    readTime: '4 min read',
    tags: ['azure', 'devops', 'staticwebapps'],
    url: 'https://dev.to/goodnessoj/deploying-a-static-website-on-azure-using-blob-storage-54ho',
  },
  {
    title: 'The Complete Guide: Deploying a Static Site on AWS using Nginx and User Data',
    excerpt: 'Automate static site deployment on AWS EC2 with Nginx, user data scripts, and CloudWatch monitoring.',
    date: 'Feb 2026',
    readTime: '3 min read',
    tags: ['nginx', 'automation', 'aws', 'devops'],
    url: 'https://dev.to/goodnessoj/the-complete-guide-deploying-a-static-site-on-aws-using-nginx-and-user-data-fbj',
  },
  {
    title: 'More Than Just a Board: Why My First Jira Sprint Was a Lesson in DevOps',
    excerpt: 'How Agile ceremonies in Jira taught me the fundamentals of DevOps mindset, collaboration, and continuous improvement.',
    date: 'Feb 2026',
    readTime: '4 min read',
    tags: ['devops', 'scrum', 'sdlc'],
    url: 'https://dev.to/goodnessoj/more-than-just-a-board-why-my-first-jira-sprint-was-a-lesson-in-devops-4n85',
  },
];

export const mediumArticles = [
  {
    title: 'Understanding Kubernetes Architecture: Control Plane, Worker Nodes, Pods, Services, and More',
    excerpt: 'A practical, beginner-friendly guide to how Kubernetes runs, scales, and keeps applications reliable.',
    date: 'Apr 27, 2026',
    readTime: '7 min read',
    tags: ['kubernetes', 'devops', 'cloud'],
    url: 'https://medium.com/@goodnessojonuba/understanding-kubernetes-architecture-control-plane-worker-nodes-pods-services-and-more-12a2c3e5899e',
  },
  {
    title: 'Containerizing a React App with Docker: From Single-Stage to Multi-Stage Builds',
    excerpt: 'Why multi-stage Docker builds are essential for production React applications and how to implement them.',
    date: 'Apr 22, 2026',
    readTime: '6 min read',
    tags: ['docker', 'react', 'devops'],
    url: 'https://medium.com/@goodnessojonuba/containerizing-a-react-app-with-docker-from-single-stage-to-multi-stage-builds-4fac22204b97',
  },
  {
    title: "From 'It Works on My Machine' to Reliable Deployments: My CI/CD Journey with Azure DevOps",
    excerpt: 'Lessons learned building reliable CI/CD pipelines with Azure DevOps, from environment parity to automated testing.',
    date: 'Apr 13, 2026',
    readTime: '8 min read',
    tags: ['ci-cd', 'azure-devops', 'devops'],
    url: 'https://medium.com/@goodnessojonuba/from-it-works-on-my-machine-to-reliable-deployments-my-ci-cd-journey-with-azure-devops-bf60db81b376',
  },
  {
    title: 'Setting Up Ansible the Right Way: From Quick Install to Production-Ready',
    excerpt: 'A comprehensive guide to installing, configuring, and structuring Ansible for production infrastructure management.',
    date: 'Apr 4, 2026',
    readTime: '6 min read',
    tags: ['ansible', 'devops', 'automation'],
    url: 'https://medium.com/@goodnessojonuba/setting-up-ansible-the-right-way-from-quick-install-to-production-ready-a8b1767a19e3',
  },
  {
    title: 'From ClickOps to Terraform: My First Real Experience with Infrastructure as Code',
    excerpt: 'How I moved from clicking around the AWS console to provisioning infrastructure with Terraform, and why I never looked back.',
    date: 'Mar 20, 2026',
    readTime: '5 min read',
    tags: ['terraform', 'aws', 'iac'],
    url: 'https://medium.com/@goodnessojonuba/from-clickops-to-terraform-my-first-real-experience-with-infrastructure-as-code-ec99048719fb',
  },
];
