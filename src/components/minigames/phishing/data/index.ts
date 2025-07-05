import { PhishingContent } from "../../../../types";

export const emailsData: PhishingContent[] = [
  {
    isSmishing: true,
    number: "+57 315 4241122",
    message:
      "¡Felicitaciones! Ganaste un iPhone 15 gratis. Haz clic aquí para reclamar tu premio ahora: http://bit.ly/freephone",
    isSuspicious: true,
    difficulty: "Fácil",
    feedback: {
      number:
        "El número del remitente parece ser un número móvil común. No es un número asociado a una entidad oficial 🤔",
      message:
        "El mensaje ofrece un premio irreal, lo cual es una táctica común en smishing. Además, contiene un enlace abreviado ('bit.ly'), que suele utilizarse para ocultar el destino real del enlace 😣",
      image: "/assets/img/smishing/message-smishing1.png",
    },
  },
  {
    isSmishing: false,
    subject: "Actualizar método de pago de Netflix",
    sender: "raul ruiz",
    email: "netfl1x-soporte@gmail.com",
    body: "Tu suscripcion a netflix ha sido suspendida debido a un problema con tu metodo de pago, ingresa aqui para actualizar tu metodo de pago http://netfl1x-cuenta.com",
    isSuspicious: true,
    suspiciousItems: ["Remitente", "Correo electrónico", "Mensaje"],
    difficulty: "Fácil",
    feedback: {
      subject: "está escrito de manera profesional y clara ❌",
      sender:
        "no es un nombre oficial de Netflix como 'Netflix Support', es el nombre de una persona común ✅",
      email:
        "está mal escrito y no tiene un dominio oficial de Netflix como '@netflix.com' ✅",
      body: "tiene muchos errores ortográficos y adjuntan un enlace extraño al que te piden ingresar ✅",
      image: "/assets/img/phishing/email1-phishing.png",
    },
  },
  {
    isSmishing: false,
    subject: "Actualización de seguridad de PayPal",
    sender: "PayPal Security",
    email: "security@paypa1.com",
    body: "Estimado cliente, estamos realizando una actualización en nuestros sistemas de seguridad. Para garantizar la seguridad de tu cuenta, te pedimos que verifiques tu información. 🔹Verificar mi cuenta🔹. ",
    isSuspicious: true,
    suspiciousItems: ["Correo electrónico", "Mensaje"],
    difficulty: "Media",
    feedback: {
      subject: "está escrito de manera profesional y clara ❌",
      sender: "nombre común en correos automáticos de PayPal ❌",
      email: "no tiene un dominio oficial de PayPal, como '@paypal.com' ✅",
      body: "está bien escrito, no tiene errores ortográficos o gramaticales, pero te piden ingresar a un enlace que no se ve explícitamente ✅",
      image: "/assets/img/phishing/email3-phishing.png",
    },
  },
  {
    isSmishing: true,
    number: "890505",
    message:
      "Rappi: ¡Toc, Toc! Llegaron los infaltables, hasta 50% y desde 15% OFF para un hogar impecable. https://rappi.com/123456789/",
    isSuspicious: false,
    difficulty: "Media",
    feedback: {
      number:
        "El número del remitente parece ser un número oficial asociado a una empresa 😁",
      message:
        "El mensaje está bien escrito y el enlace que se adjunta pertenece al dominio oficial de Rappi 😁",
      image: "/assets/img/smishing/message-smishing2.png",
    },
  },
  {
    isSmishing: false,
    subject: "Confirmación de tu pedido en Amazon",
    sender: "Amazon Support",
    email: "noreply@amazon.com",
    body: "Tu pedido #CHFD231506 ha sido confirmado y será enviado en los próximos días. Puedes revisar los detalles de tu compra y hacer seguimiento de tu pedido en este enlace https://amazon.com/orders.",
    isSuspicious: false,
    suspiciousItems: [],
    difficulty: "Difícil",
    feedback: {
      subject: "está escrito de manera profesional y clara ❌",
      sender: "nombre común en correos automáticos de Amazon ❌",
      email: "tiene una dirección legítima de Amazon (@amazon.com) ❌",
      body: "no tiene errores ortográficos o gramaticales, y el enlace adjunto pertenece al dominio oficial de Amazon ❌",
      image: "/assets/img/phishing/email2-phishing.png",
    },
  },
];
