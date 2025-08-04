document.addEventListener("click", function (e) {
  if (e.target.classList.contains("copy-btn")) {
    const targetId = e.target.getAttribute("data-target");
    const code = document.getElementById(targetId).innerText;
    navigator.clipboard.writeText(code).then(() => {
      e.target.textContent = "Copied!";
      setTimeout(() => (e.target.textContent = "Copy"), 1500);
    });
  }
});

function copyUrl(url) {
  navigator.clipboard.writeText(url).then(() => {
    const btn = event.target;
    btn.textContent = "✅";
    setTimeout(() => (btn.textContent = "CC"), 800);
  });
}
function copyAssets() {
  const urls = Array.from(document.querySelectorAll("#stack-assets a"))
    .map((a) => a.href)
    .join("\n");
  navigator.clipboard.writeText(urls).then(() => {
    const btn = event.target;
    btn.textContent = "✅ Copied!";
    setTimeout(() => (btn.textContent = "CC Copy URLs"), 1200);
  });
}
document.getElementById("copyAllTools").addEventListener("click", () => {
  const urls = [
    "https://git-scm.com/",
    "https://nixos.org/",
    "https://docker.com/",
    "https://developer.hashicorp.com/terraform/",
    "https://kubernetes.io/",
    "https://argo-cd.readthedocs.io/en/stable/",
    "https://dspy.ai/",
    "https://www.openpolicyagent.org/",
  ].join("\n");
  navigator.clipboard.writeText(urls).then(() => {
    const btn = document.getElementById("copyAllTools");
    btn.textContent = "✅ Copied!";
    setTimeout(() => (btn.textContent = "CC All"), 1200);
  });
});

hljs.highlightAll();
