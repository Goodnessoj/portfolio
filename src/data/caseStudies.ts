export type ArchitectureStage = {
  label: string;
  detail: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  tech: string[];
  repositories: { label: string; url: string }[];
  demo?: { label: string; url: string };
  metrics: { value: string; label: string }[];
  problem: string;
  role: string;
  architectureLabel: string;
  architecture: ArchitectureStage[];
  decisions: { title: string; detail: string }[];
  evidence: {
    eyebrow: string;
    title: string;
    description: string;
    filename: string;
    language: string;
    code: string;
    sourceUrl: string;
  };
  outcomes: string[];
  currentState: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'book-review-terraform',
    title: 'Book Review: a modular three-tier AWS foundation',
    kicker: 'Terraform · AWS · Three-tier architecture',
    summary:
      'A Terraform scaffold that separates a Next.js frontend, Node.js API, and MySQL database across public and private network tiers, with controlled traffic paths between each layer.',
    tech: ['Terraform', 'AWS', 'EC2', 'RDS MySQL', 'ALB', 'Nginx'],
    repositories: [
      {
        label: 'Infrastructure repository',
        url: 'https://github.com/Goodnessoj/book-review-terraform-iac',
      },
    ],
    metrics: [
      { value: '5', label: 'Terraform modules' },
      { value: '6', label: 'purpose-built subnets' },
      { value: '3', label: 'isolated application tiers' },
      { value: '2', label: 'application load balancers' },
    ],
    problem:
      'The application needed more than a single public server. Web traffic, application traffic, and database access had to follow explicit paths while the infrastructure remained understandable enough to reproduce and extend.',
    role:
      'I designed the Terraform module boundaries, network topology, security-group relationships, load-balancer routing, EC2 bootstrap automation, and the RDS integration. The focus was infrastructure and deployment automation for an existing application codebase.',
    architectureLabel:
      'Traffic enters a public load balancer, reaches the web tier, crosses an internal load balancer to the private API tier, and reaches MySQL through a database-only security-group rule.',
    architecture: [
      { label: 'Internet', detail: 'HTTP entry point' },
      { label: 'Public ALB', detail: 'Spans two web subnets' },
      { label: 'Web EC2', detail: 'Nginx + Next.js frontend' },
      { label: 'Internal ALB', detail: 'Private API routing on :3001' },
      { label: 'App EC2', detail: 'Node.js API in a private subnet' },
      { label: 'RDS MySQL', detail: 'Database subnets; app-tier access only' },
    ],
    decisions: [
      {
        title: 'Module boundaries follow infrastructure concerns',
        detail:
          'Networking, security, compute, load balancing, and database resources live in five focused modules. Outputs form explicit contracts between them.',
      },
      {
        title: 'Security groups describe the traffic graph',
        detail:
          'The web tier accepts traffic from the public ALB, the API accepts traffic from the internal ALB, and MySQL accepts traffic only from the API security group.',
      },
      {
        title: 'Private tiers retain controlled outbound access',
        detail:
          'A NAT gateway supports package installation and application bootstrapping without assigning public addresses to the API or database tiers.',
      },
      {
        title: 'Instances bootstrap from infrastructure outputs',
        detail:
          'Terraform templates inject ALB and RDS endpoints into user-data scripts, reducing manual configuration after provisioning.',
      },
    ],
    evidence: {
      eyebrow: 'Terraform snapshot',
      title: 'Infrastructure outputs are wired into compute bootstrapping',
      description:
        'The root module composes the five infrastructure concerns and passes generated load-balancer and database endpoints into each EC2 tier.',
      filename: 'main.tf',
      language: 'hcl',
      code: `module "ec2" {
  source = "./modules/ec2"

  web_user_data = templatefile("scripts/frontend-userdata.sh.tpl", {
    public_alb_dns  = module.alb.public_alb_dns_name
    private_alb_dns = module.alb.private_alb_dns_name
  })

  app_user_data = templatefile("scripts/backend-userdata.sh.tpl", {
    db_host = split(":", module.database.db_endpoint)[0]
    db_name = var.db_name
  })
}`,
      sourceUrl:
        'https://github.com/Goodnessoj/book-review-terraform-iac/blob/main/main.tf',
    },
    outcomes: [
      'One Terraform root expresses five reusable modules, six subnets across two availability zones, two application load balancers, two compute tiers, and one managed database.',
      'The API and database have no direct internet ingress; access is chained through security-group references instead of broad CIDR rules.',
      'Frontend and backend installation, configuration, process supervision, and Nginx routing are automated through EC2 user data.',
      'The reusable module boundaries make the scaffold easier to extend without collapsing networking, security, compute, load balancing, and data resources into one file.',
    ],
    currentState:
      'This is an infrastructure scaffold rather than a continuously hosted demo. Before production use, I would add HTTPS, autoscaling groups, Secrets Manager, SSM-based administration, stronger RDS backup/encryption settings, and narrower SSH access.',
  },
  {
    slug: 'petclinic-eks-platform',
    title: 'Petclinic: an EKS platform with GitOps delivery',
    kicker: 'EKS · GitHub Actions · Argo CD',
    summary:
      'An AWS platform that builds selected Spring services, publishes immutable images, updates Git-managed Helm values, and lets Argo CD reconcile eight services across development and production environments.',
    tech: ['Terraform', 'EKS', 'Helm', 'Argo CD', 'GitHub Actions', 'Prometheus'],
    repositories: [
      {
        label: 'Platform repository',
        url: 'https://github.com/Goodnessoj/platform-petclinic',
      },
      {
        label: 'Application repository',
        url: 'https://github.com/Goodnessoj/spring-petclinic-microservices',
      },
    ],
    metrics: [
      { value: '8', label: 'deployable services' },
      { value: '2', label: 'environment roots' },
      { value: '4', label: 'platform workflows' },
      { value: '3', label: 'release quality gates' },
    ],
    problem:
      'A distributed Spring application has ordering, identity, secrets, networking, database, and observability requirements that cannot be solved by merely pushing eight containers to a cluster. The release path also needed to rebuild only what changed and preserve a reviewable deployment history.',
    role:
      'I built the infrastructure and GitOps platform around the Spring Petclinic microservices fork: Terraform modules and environment roots, AWS identity and secrets integration, reusable Helm charts, Argo CD applications, and the cross-repository CI/CD handoff. The original Spring Petclinic application is an open-source upstream project; my work here is the platform and delivery engineering.',
    architectureLabel:
      'Application CI builds changed services and publishes images to ECR. A repository dispatch updates Git-managed image tags, then Argo CD reconciles Helm releases on EKS and waits for service health.',
    architecture: [
      { label: 'Application CI', detail: 'Maven, Docker, Trivy' },
      { label: 'Amazon ECR', detail: 'Commit-SHA image tags' },
      { label: 'GitOps update', detail: 'Helm values committed to Git' },
      { label: 'Argo CD', detail: 'Sync, prune, and health gates' },
      { label: 'Amazon EKS', detail: 'Eight Spring services' },
      { label: 'Platform services', detail: 'RDS, secrets, ingress, observability' },
    ],
    decisions: [
      {
        title: 'Short-lived AWS access through OIDC',
        detail:
          'GitHub Actions assumes a bootstrap-managed IAM role instead of storing long-lived AWS access keys in repository secrets.',
      },
      {
        title: 'Selective builds with immutable image identity',
        detail:
          'CI detects changed service directories, runs a matrix only for those services, scans images, and tags successful builds with the commit SHA.',
      },
      {
        title: 'Git is the deployment source of truth',
        detail:
          'A dispatch updates service-specific Helm values and commits the new image tag. Argo CD owns reconciliation instead of CI directly mutating workloads.',
      },
      {
        title: 'Platform capabilities are installed with the cluster',
        detail:
          'Terraform provisions EKS, RDS, ECR, ingress and DNS, External Secrets, Argo CD, Prometheus, Grafana, Loki, Fluent Bit, Zipkin, and CloudWatch log groups.',
      },
    ],
    evidence: {
      eyebrow: 'CI/CD snapshot',
      title: 'A successful app build becomes a traceable GitOps change',
      description:
        'The application pipeline dispatches only the changed services and their commit SHA. The platform workflow writes those immutable tags into Helm values before triggering Argo CD.',
      filename: '.github/workflows/update-image-tags.yaml',
      language: 'yaml',
      code: `on:
  repository_dispatch:
    types: [app-image-built]

- name: Update image tags in helm-values
  run: |
    IMAGE_TAG="\${{ github.event.client_payload.sha }}"
    SERVICES="\${{ github.event.client_payload.services }}"

    for SERVICE in \${SERVICES}; do
      sed -i "s|tag: .*|  tag: \"\${IMAGE_TAG}\"|" \\
        "helm-values/\${SERVICE}.yaml"
    done`,
      sourceUrl:
        'https://github.com/Goodnessoj/platform-petclinic/blob/main/.github/workflows/update-image-tags.yaml',
    },
    outcomes: [
      'The release path handles eight services while building only service directories changed by a commit.',
      'Every deployed image is traceable to a short Git commit SHA recorded in the GitOps repository.',
      'A CRITICAL-severity Trivy gate blocks unsafe image publication; Argo CD then waits for selected applications to report both Synced and Healthy.',
      'One generic Helm chart plus service-specific values replaces duplicated workload templates across development and production.',
    ],
    currentState:
      'The repository documents public DNS endpoints, but no resolvable permanent demo was available during this portfolio update. The code, runbook, workflows, Helm charts, and Terraform modules remain available as implementation evidence.',
  },
  {
    slug: 'epicbook-azure-delivery',
    title: 'EpicBook: Dual-Pipeline Deployment with Azure DevOps',
    kicker: 'Azure · Terraform · Ansible',
    summary:
      'A pair of Azure DevOps pipelines that separates infrastructure provisioning from application configuration, handing dynamic VM and database outputs from Terraform to Ansible without committing environment values or secrets.',
    tech: ['Azure', 'Terraform', 'Azure Pipelines', 'Ansible', 'MySQL', 'Nginx'],
    repositories: [
      {
        label: 'Infrastructure repository',
        url: 'https://github.com/Goodnessoj/infra-epicbook',
      },
      {
        label: 'Application deployment repository',
        url: 'https://github.com/Goodnessoj/app-deploy-epicbook',
      },
    ],
    metrics: [
      { value: '2', label: 'linked delivery pipelines' },
      { value: '2', label: 'runtime outputs handed off' },
      { value: '3', label: 'Ansible roles' },
      { value: '7d', label: 'database backup retention' },
    ],
    problem:
      'The VM address and private database hostname are created at infrastructure runtime, while passwords and SSH keys must remain outside Git. The application deployment needed those values without duplicating infrastructure logic or relying on manual copy-and-paste.',
    role:
      'I designed and implemented the Terraform infrastructure, Azure DevOps artifact contract, runtime inventory generation, and Ansible roles for host preparation, Nginx configuration, database initialization, and PM2 application management.',
    architectureLabel:
      'The infrastructure pipeline provisions Azure resources and publishes a two-value artifact. A downstream pipeline consumes it, generates an Ansible inventory, configures the VM, and verifies the public endpoint.',
    architecture: [
      { label: 'Infra commit', detail: 'Triggers Azure Pipeline' },
      { label: 'Terraform', detail: 'VNet, VM, private MySQL, DNS' },
      { label: 'Output artifact', detail: 'VM IP + database host' },
      { label: 'App pipeline', detail: 'Secrets and SSH key injected' },
      { label: 'Ansible', detail: 'Common, Nginx, EpicBook roles' },
      { label: 'Verification', detail: 'HTTP check through Nginx' },
    ],
    decisions: [
      {
        title: 'Infrastructure and configuration have separate lifecycles',
        detail:
          'Terraform owns cloud resources; Ansible owns operating-system and application state. Each repository has one clear responsibility.',
      },
      {
        title: 'A small artifact is the handoff contract',
        detail:
          'Stage one publishes only the generated VM public IP and MySQL hostname. Stage two consumes them to create inventory and runtime configuration.',
      },
      {
        title: 'Secrets enter only at pipeline runtime',
        detail:
          'The database password comes from an Azure DevOps variable group, while SSH keys come from Secure Files. Neither is committed to either repository.',
      },
      {
        title: 'Database initialization is guarded',
        detail:
          'Ansible checks whether tables exist before applying the schema and seed data, allowing repeat runs without blindly reseeding the database.',
      },
    ],
    evidence: {
      eyebrow: 'Pipeline snapshot',
      title: 'Terraform outputs become dynamic Ansible inventory',
      description:
        'The downstream pipeline downloads the infrastructure artifact, promotes its values to pipeline variables, and builds the deployment inventory at runtime.',
      filename: 'azure-pipelines.yml',
      language: 'yaml',
      code: `- download: infra
  artifact: infra-outputs

- script: |
    source "$(Pipeline.Workspace)/infra/infra-outputs/infra-outputs.env"
    echo "##vso[task.setvariable variable=vmPublicIp]$vmPublicIp"
    echo "##vso[task.setvariable variable=db_host]$db_host"

- script: |
    ansible-playbook site.yml \\
      -e "db_host=$(db_host)" \\
      -e "db_password=$(db_password)"`,
      sourceUrl:
        'https://github.com/Goodnessoj/app-deploy-epicbook/blob/main/azure-pipelines.yml',
    },
    outcomes: [
      'Two independently maintained pipelines are connected through a stable two-value output contract.',
      'Three Ansible roles take a fresh VM from base configuration through reverse proxy and application deployment.',
      'The Azure MySQL server uses private VNet access and seven-day backup retention, while application database traffic requires TLS.',
      'Every deployment concludes with an automated HTTP request against the generated VM address instead of relying on a manual spot check.',
    ],
    currentState:
      'The deployment uses a generated VM address rather than a permanent public demo URL. Production hardening would add HTTPS, Key Vault integration, restricted administrative ingress, host-key verification, and immutable application artifacts.',
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
