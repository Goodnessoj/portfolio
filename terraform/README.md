# Portfolio Website Infrastructure (Terraform)

Infrastructure as Code for deploying the portfolio website to AWS.

## Architecture

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   CloudFront    │     │       S3        │     │     Route53     │
│      CDN        │────▶│  Static Website │     │   (optional)    │
│                 │     │                 │     │                 │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

### Components
- **S3 Bucket**: Static website hosting with versioning
- **CloudFront**: Global CDN with HTTPS and cache invalidation
- **Route 53**: Custom domain DNS (optional)
- **ACM**: SSL/TLS certificate (optional)
- **DynamoDB**: Terraform state locking

## Prerequisites

- AWS CLI configured with credentials
- Terraform >= 1.5.0
- An S3 bucket for Terraform state (create manually first time)

## Usage

### Initialize
```bash
cd terraform
terraform init
```

### Plan
```bash
terraform plan -var="custom_domain=goodnessojonuba.dev"
```

### Apply
```bash
terraform apply -var="custom_domain=goodnessojonuba.dev"
```

### Destroy
```bash
terraform destroy
```

## State Management

State is stored in S3 with DynamoDB locking:
- **Bucket**: `portfolio-terraform-state-bucket`
- **Lock Table**: `portfolio-terraform-locks`

## Outputs

| Output | Description |
|--------|-------------|
| `cloudfront_domain_name` | CloudFront distribution URL |
| `cloudfront_distribution_id` | Distribution ID for cache invalidation |
| `s3_bucket_name` | S3 bucket name |
| `website_url` | Final website URL |

## CI/CD Integration

The GitHub Actions workflow uses these outputs for deployment:
- `s3_bucket_name` → `aws s3 sync` target
- `cloudfront_distribution_id` → cache invalidation target
