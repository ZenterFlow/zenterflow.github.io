terraform {
  required_providers { aws = { source = "hashicorp/aws" } }
}

provider "aws" { region = "us-east-1" }

module "eks" {
  source  = "terraform-aws-modules/eks/aws"
  version = "~> 20.0"

  cluster_name    = "repro-cluster"
  cluster_version = "1.30"
  vpc_id          = "vpc-12345"
  subnet_ids      = ["subnet-1", "subnet-2"]

  node_groups = {
    default = {
      desired_capacity = 2
      max_capacity     = 3
      min_capacity     = 1
      instance_types   = ["t3.medium"]
    }
  }
}
