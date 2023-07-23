class Flip {
  read(elements) {
    (this.positions = []),
      elements.forEach((item, i) => {
        this.positions[i] = item.getBoundingClientRect();
      });
  }
  play(elements) {
    elements.forEach((item, i) => {
      const first = this.positions[i],
        last = item.getBoundingClientRect(),
        deltaY = first.top - last.top,
        deltaW = first.width / last.width,
        deltaH = first.height / last.height;
      (item.style.transition = ""),
        (item.style.transform = `translateY(px) scale(, )`),
        requestAnimationFrame(() => {
          (item.style.transition =
            "transform 300ms cubic-bezier(0.39, 0.7, 0.45, 1.13)"),
            (item.style.transform = "none");
        });
    });
  }
}
const items = document.querySelectorAll(".item"),
  stack = document.querySelector(".stack"),
  flip = new Flip();
document.querySelector(".item").addEventListener("click", () => {
  flip.read(items), stack.classList.toggle("stacked"), flip.play(items);
});
