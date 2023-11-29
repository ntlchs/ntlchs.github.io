export const calculateCurrentSemester = (startDate: string) => {
  const start = new Date(startDate);
  const today = new Date();

  // Calcula a diferença em meses
  const months =
    (today.getFullYear() - start.getFullYear()) * 12 +
    (today.getMonth() - start.getMonth());

  // Converte a diferença em meses para semestres e arredonda para cima
  const semester = Math.ceil(months / 6);

  return semester;
};

export const getOrdinal = (n: number) => {
  var s = ["th", "st", "nd", "rd"],
    v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

export const unisinosDescription = () => {
  const currentSemester = calculateCurrentSemester("2023-01-01");

  const desc =
    currentSemester <= 10
      ? `Currently in the ${getOrdinal(
          currentSemester
        )} semester. Expected graduation in 2027`
      : `Graduated in 2027`;

  return desc;
};

export function copyToClipboard(id: string): void {
  const element = document.getElementById(id);
  const text = element?.innerText || "";

  const el = document.createElement("textarea");
  el.value = text.split(": ")[1]; // Remove a etiqueta "Email: " ou "Telefone: "
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);

  // Mostrar toast
  const toast = document.getElementById("toast");
  if (toast) {
    toast.classList.add("show-toast");
    setTimeout(() => toast.classList.remove("show-toast"), 3000);
  }
}
