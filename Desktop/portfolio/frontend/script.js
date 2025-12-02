// Name rotation is handled by CSS animation
// This script file can be used for other interactive features

  const text = document.getElementById("eyebrow");
  const letters = text.innerText.split("");

  text.innerHTML = letters
    .map(letter => `<span>${letter}</span>`)
    .join("");

