export const createRipple = (e: MouseEvent, color: string = "rgba(255, 255, 255, 0.7)", speed: string = "600") => {
  const button = e.currentTarget as HTMLButtonElement;

  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${e.clientX - (button.offsetLeft + radius)}px`;
  circle.style.top = `${e.clientY - (button.offsetTop + radius)}px`;
  circle.classList.add("ripple"); 
  circle.style.backgroundColor = color;
  circle.style.animationDuration = `${speed}ms`;

  button.getElementsByClassName("ripple")[0]?.remove();

  button.appendChild(circle);
}