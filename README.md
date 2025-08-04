# From Snowflake Servers to GitOps Nirvana
**8 open-source tools you can combine so that `git push` deploys your entire stack.**

---

## 🚀 Why This Exists
You’ve probably heard the buzzwords: **GitOps**, **NoOps**, **immutable infrastructure**.

This guide walks you step by step through:
- Why these concepts exist.
- How a small constellation of tools — **Git, NixOS, Docker, Terraform, Kubernetes, Argo CD, DSPy, and OPA** — fit together.
- How to create a platform that **deploys itself every time you hit merge**.

---

## 🗺 Quick Tool Map *(click to open)*

| Tool           | One-Sentence Job                                        | Why It Matters                                                              |
|----------------|----------------------------------------------------------|-----------------------------------------------------------------------------|
| **Git**       | Single source-of-truth for every line of code/config.    | Immutable history + pull requests = collaboration without chaos.           |
| **NixOS**     | An entire Linux distro expressed in one declarative file.| Reinstalls laptop or 1,000-server fleet with `nixos-rebuild`.              |
| **Terraform** | Describe cloud resources (VPCs, disks, IAM) in HCL.      | Recreates an entire region from scratch in 15 minutes after a coffee spill.|
| **Docker**    | Bundle the app and its libraries into an immutable image.| Same artifact runs on your Mac, in CI, and in prod.                         |
| **Argo CD**   | Watches Git and makes Kubernetes match it.               | Manual `kubectl apply` becomes a pull request review.                       |
| **Kubernetes**| Planet-scale scheduler that keeps containers healthy.    | Auto-heals, scales, and rolls out with zero downtime.                       |
| **DSPy**      | Prompt engineering as typed, testable code.              | Turns LLM prompts into reproducible pipelines.                              |
| **OPA/Kyverno**| Policy-as-code gatekeepers for every API call.          | Blocks `:latest` images or unencrypted buckets before they deploy.          |

---

## ❄ 1. The Problem We’re Solving
In the old world, a **server was a pet**:
- Lovingly hand-fed config files.
- Patched on Sundays.
- Inevitably different from every other server.

The result?
- “It works on my machine!”
- Snowflake drift and 3 a.m. pages.
- Scaling = more pets.

---

## ⭐ 2. The North Star: Everything as Code
Instead of pets, we want **cattle** — identical, replaceable, and **defined in text files that live in Git**.

If Git is the **single source of truth**, the rest of the stack becomes a **conveyor belt** that turns that truth into running software.

---

## 🎭 3. The Cast of Characters and Their Jobs
*(See the Quick Tool Map above)*

---

## 🔗 4. How the Characters Relate
**Declarative GitOps Workflow**

💡 Press `Ctrl + + / -` (or pinch-zoom on mobile) to enlarge the diagram.
Right-click to open full image in a new tab.

---

## 🔄 5. A Day in the Life of a Change
Let’s add a new feature: **real-time in-game leaderboards**.

1. **Code**
   - Write the leaderboard service in Go.
   - Add a DSPy pipeline to pre-aggregate stats.
   - Commit everything to Git.
2. **CI Gate**
   - Nix builds the Docker image (bit-for-bit reproducible).
   - Terraform dry-run shows a new Redis cache.
   - Tests pass → image signed & pushed.
3. **GitOps Sync**
   - Argo CD detects the new commit hash.
   - Kubernetes manifests applied; pods roll out blue-green.
   - OPA policy ensures the service can’t talk to the payments DB.
4. **Observe**
   - Prometheus sees p95 latency drop.
   - Grafana dashboard auto-updates.

✅ No humans touched a server.

---

## 🏁 6. Beginner Takeaways
- **Start small**: Put one service in Docker, store its manifest in Git, and let Argo CD sync it.
- **Lean on NixOS** for dev laptops — `nix develop` gives the exact same tools as prod.
- **Policies early**: A 15-line OPA rule today prevents a 3 a.m. breach tomorrow.
- **Celebrate merges**: Every green PR is a fully tested, policy-compliant, zero-downtime release.

---

## 📦 Grab the Configs
| File                         | Action                                   |
|-----------------------------|------------------------------------------|
| `README.md`                | [⬇ Download](assets/README.md)          |
| `flake.nix`                | [⬇ Download](assets/flake.nix)          |
| `main.tf`                  | [⬇ Download](assets/main.tf)            |
| `argocd-app.yaml`          | [⬇ Download](assets/argocd-app.yaml)    |
| `constraint-template.yaml` | [⬇ Download](assets/constraint-template.yaml)|

---

## 🌍 7. The Bigger Picture
Declarative, Git-driven stacks aren’t tools — **they’re a culture**.
When everything is code:
- Knowledge lives in the repo, not in someone’s head.
- Onboarding is faster.
- Refactors are fearless.
- And Friday deploys don’t ruin weekends.

**Welcome to the Declared World**: where robots do the toil, and we get back to building great things.

---
