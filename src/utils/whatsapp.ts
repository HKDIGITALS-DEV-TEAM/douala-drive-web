export const openWhatsApp = (service: string) => {
  // Replace this with your actual WhatsApp number
  const phoneNumber = "237000000000";
  const message = encodeURIComponent(
    `Bonjour, je souhaite réserver un véhicule pour le service : ${service}`
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappUrl, '_blank');
};