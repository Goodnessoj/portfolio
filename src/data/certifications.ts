export type Certification = {
  name: string;
  level: string;
  issuer: string;
  image: string;
  credentialUrl: string;
  description: string;
  capabilities: string[];
};

export const certifications: Certification[] = [
  {
    name: 'AWS Certified Solutions Architect Associate',
    level: 'Associate',
    issuer: 'Amazon Web Services Training and Certification',
    image: '/images/certifications/aws-solutions-architect-associate.png',
    credentialUrl:
      'https://www.credly.com/badges/6ec0af32-fab1-4e0c-b36f-ca4ee83445b8',
    description:
      'Validates the ability to design secure, resilient, efficient, and fault-tolerant distributed systems on AWS using well-architected design principles.',
    capabilities: [
      'AWS architecture',
      'Secure design',
      'Resilient systems',
      'Cost-aware solutions',
    ],
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    level: 'Foundational',
    issuer: 'Amazon Web Services Training and Certification',
    image: '/images/certifications/aws-cloud-practitioner.png',
    credentialUrl:
      'https://www.credly.com/badges/e9c9f66b-b188-48cb-aa8f-a6696b91efbb',
    description:
      'Validates foundational AWS knowledge, cloud fluency, and an understanding of the essential services used to support AWS projects.',
    capabilities: [
      'Cloud concepts',
      'AWS services',
      'Security basics',
      'Cloud economics',
    ],
  },
];

export type TrainingCredential = {
  name: string;
  category: string;
  issuer: string;
  year: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  description: string;
  capabilities: string[];
};

export const trainingCredentials: TrainingCredential[] = [
  {
    name: 'Diploma in Cloud Engineering',
    category: 'Diploma',
    issuer: 'AltSchool Africa, School of Engineering',
    year: '2024',
    image: '/images/certifications/altschool-cloud-engineering.png',
    imageWidth: 995,
    imageHeight: 740,
    description:
      'Completed AltSchool Africa’s Cloud Engineering track, developing applied foundations in Linux, networking, cloud infrastructure, automation, and deployment practices.',
    capabilities: [
      'Cloud engineering',
      'Linux & networking',
      'Infrastructure automation',
      'Deployment practices',
    ],
  },
  {
    name: 'DevOps Micro-Internship with Agentic AI',
    category: 'Micro-Internship',
    issuer: 'The CloudAdvisory',
    year: '2026',
    image: '/images/certifications/cloudadvisory-devops-micro-internship.png',
    imageWidth: 2000,
    imageHeight: 1414,
    description:
      'A hands-on DevOps program integrating agentic AI concepts with Linux, Git, CI/CD, AWS, Azure, Terraform, Ansible, Docker, and Kubernetes through 50+ practical assignments and projects.',
    capabilities: [
      'CI/CD',
      'Terraform & Ansible',
      'Containers & Kubernetes',
      'Agentic AI workflows',
    ],
  },
  {
    name: 'Cloud Computing Programme',
    category: '6-month Programme',
    issuer: 'ALX Africa',
    year: '2025',
    image: '/images/certifications/alx-cloud-computing.png',
    imageWidth: 1280,
    imageHeight: 720,
    description:
      'Completed a six-month cloud computing program combining technical cloud foundations with professional development and applied problem-solving for modern infrastructure roles.',
    capabilities: [
      'Cloud foundations',
      'AWS services',
      'Infrastructure concepts',
      'Professional development',
    ],
  },
];
