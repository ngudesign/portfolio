// Turns each link label (.ul) into two stacked copies of its text, one letter
// per element: the regular word on top and an italic copy waiting below.
// On hover the letters roll up one after another and the italic copy rolls in.
(function () {
  function letters(text) {
    const frag = document.createDocumentFragment();
    [...text].forEach((ch, i) => {
      const el = document.createElement("i");
      el.style.setProperty("--d", i);
      el.textContent = ch === " " ? " " : ch;
      frag.appendChild(el);
    });
    return frag;
  }

  document.querySelectorAll(".ul").forEach(ul => {
    const text = ul.textContent;
    ul.textContent = "";
    ul.classList.add("roll");

    const front = document.createElement("span");
    front.className = "roll-a";
    front.appendChild(letters(text));

    const back = document.createElement("span");
    back.className = "roll-b";
    back.setAttribute("aria-hidden", "true");
    back.appendChild(letters(text));

    ul.append(front, back);
  });
})();
