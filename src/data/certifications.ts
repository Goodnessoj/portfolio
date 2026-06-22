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
    name: 'AWS Certified Solutions Architect – Associate',
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
