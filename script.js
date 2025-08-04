// ================================
// Clipboard Utility Function
// ================================
function copyTextToClipboard(text, btn, successText = "Copied!", resetText = "Copy", timeout = 1200) {
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = successText;
    setTimeout(() => (btn.textContent = resetText), timeout);
  }).catch(err => console.error("Clipboard error:", err));
}

// ================================
// 1. Copy Code Buttons (Delegation)
// ================================
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("copy-btn")) {
    const targetId = e.target.getAttribute("data-target");
    const codeElement = document.getElementById(targetId);
    if (codeElement) {
      const code = codeElement.innerText;
      copyTextToClipboard(code, e.target, "Copied!", "Copy", 1500);
    }
  }
});

// ================================
// 2. Copy Single URL (Reusable)
// ================================
function copyUrl(url, event) {
  copyTextToClipboard(url, event.target, "✅", "CC", 800);
}

// ================================
// 3. Copy All Asset URLs
// ================================
function copyAssets(event) {
  const urls = Array.from(document.querySelectorAll("#stack-assets a"))
    .map((a) => a.href)
    .join("\n");
  copyTextToClipboard(urls, event.target, "✅ Copied!", "CC Copy URLs");
}

// ================================
// 4. Copy All Tool URLs
// ================================
document.addEventListener("DOMContentLoaded", () => {
  const copyAllToolsBtn = document.getElementById("copyAllTools");
  if (copyAllToolsBtn) {
    copyAllToolsBtn.addEventListener("click", (event) => {
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
      copyTextToClipboard(urls, event.target, "✅ Copied!", "CC All");
    });
  }
});

// ================================
// 5. Syntax Highlighting
// ================================
document.addEventListener("DOMContentLoaded", () => {
  if (typeof hljs !== "undefined") {
    hljs.highlightAll();
  } else {
    console.warn("Highlight.js is not loaded.");
  }
});

  let contextMenu;
  let selectedElement;

  document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    selectedElement = event.target;
    contextMenu = document.getElementById('customContextMenu');
    contextMenu.style.display = 'block';
    contextMenu.style.left = event.pageX + 'px';
    contextMenu.style.top = event.pageY + 'px';
  });

  document.addEventListener('click', function() {
    contextMenu.style.display = 'none';
  });

  function copyText() {
    if (selectedElement.tagName === 'P' || selectedElement.tagName === 'PRE') {
      navigator.clipboard.writeText(selectedElement.textContent);
    }
  }

  function openLinkNewTab() {
    if (selectedElement.tagName === 'A') {
      window.open(selectedElement.href, '_blank');
    }
  }

  function downloadAsset() {
    if (selectedElement.tagName === 'A' && selectedElement.download) {
      selectedElement.click();
    }
  }

  function copyURL() {
    if (selectedElement.tagName === 'A') {
      navigator.clipboard.writeText(selectedElement.href);
    }
  }

  function viewImage() {
    if (selectedElement.tagName === 'IMG') {
      window.open(selectedElement.src, '_blank');
    }
  }