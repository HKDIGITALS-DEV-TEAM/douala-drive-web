export const formatDate = (date: string | Date | null | undefined): string => {
  if (!date) {
    return "Date invalide"; // Gérer les valeurs null ou undefined
  }

  const parsedDate = new Date(date);
  if (isNaN(parsedDate.getTime())) {
    return "Date invalide"; // Gérer les dates non valides
  }

  return parsedDate.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
