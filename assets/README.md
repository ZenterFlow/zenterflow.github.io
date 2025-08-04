# Reproducible Stack in 5 Steps

| Step | Tech        | One-liner Purpose                        |
|------|-------------|------------------------------------------|
| 1    | NixOS       | Immutable host OS                        |
| 2    | Terraform   | Provision K8s cluster                    |
| 3    | Docker      | Local dev parity                         |
| 4    | Argo CD     | GitOps continuous delivery               |
| 5    | OPA Gatekeeper | Policy guardrails                     |

## Quickstart
1. `nix develop` – drops you into a shell with Terraform, kubectl, Argo CD CLI.  
2. `terraform init && terraform apply` – spins up managed K8s.  
3. `kubectl apply -f argocd-app.yaml` – bootstraps Argo CD.  
4. `kubectl apply -f constraint-template.yaml` – sample “no latest tag” policy.  
