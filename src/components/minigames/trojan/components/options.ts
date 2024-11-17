import { Enemy } from "../../../../types";

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  isAnswered: boolean;
  coordinates: Enemy;
}

export const ansOption: Question[] = [
  {
    id: 1,
    question: "Estás en una cafetería y necesitas usar el WiFi público para revisar un correo urgente del trabajo. ¿Qué deberías hacer para proteger tu información?",
    options: [
      "Conectar sin más, la red WiFi pública es segura.",
      "Usar una VPN para cifrar tu conexión.",
      "Desactivar el antivirus, ya que podría ralentizar la conexión.",
      "Solo usar el WiFi si tiene contraseña.",
    ],
    correct: 1,
    isAnswered: false,
    coordinates: {
      "id":1,
      "x": -22.76,
      "y": -5.15,
      "z": -14.87,
    },
  },
  {
    id: 2,
    question: "Recibes un correo de tu banco solicitándote confirmar tus datos personales haciendo clic en un enlace. ¿Qué harías?",
    options: [
      "Abrir el enlace para confirmar tus datos.",
      "Responder el correo solicitando más información.",
      "Contactar a tu banco a través de su sitio web oficial o app.",
      "Ignorar el correo, los bancos nunca se comunican por email.",
    ],
    correct: 2,
    isAnswered: false,
    coordinates: {
      "id": 2,
      "x": -11.78,
      "y": -6.12,
      "z": -9.55
    },
  },
  {
    id: 3,
    question: "Ves una oferta increíble en línea, pero el sitio web no tiene 'https' en la URL. ¿Cómo procederías?",
    options: [
      "Ingresar tus datos, es una oferta demasiado buena para dejar pasar.",
      "Revisar si el sitio tiene certificado SSL antes de ingresar datos.",
      "Pedir a un amigo que verifique si el sitio es seguro.",
      "Compartir la oferta en redes sociales antes de comprar.",
    ],
    correct: 1,
    isAnswered: false,
    coordinates: {
      "id": 3,
      "x": -8.26,
      "y": -6.12,
      "z": -14.01
    },
  },
  {
    id: 4,
    question: "Estás descargando una aplicación gratuita y te pide acceso a tus fotos, contactos y ubicación. ¿Qué harías?",
    options: [
      "Dar acceso, es necesario para que la app funcione.",
      "Negar los permisos y buscar una alternativa.",
      "Solo darle acceso a la ubicación, es lo único necesario.",
      "Instalar la app en otro dispositivo para evitar riesgos.",
    ],
    correct: 1,
    isAnswered: false,
    coordinates: {
    "id": 4,
    "x": 4.36,
    "y": -6.12,
    "z": -14.35

    },
  },
  {
    id: 5,
    question: "Un amigo te pide que le envíes tu contraseña para revisar algo en tu cuenta desde su dispositivo. ¿Cuál es la mejor respuesta?",
    options: [
      "Enviar la contraseña por mensaje de texto.",
      "Llamarle para dictarle la contraseña.",
      "Decirle que no compartes contraseñas y ofrecerte a ayudar en persona.",
      "Cambiar tu contraseña temporalmente y luego compartirla.",
    ],
    correct: 2,
    isAnswered: false,
    coordinates: {
    "id": 5,
    "x": -8.12,
    "y": -6.12,
    "z": -4.5
    },
  },
  {
    id: 6,
    question: "Recibes un archivo adjunto en un correo desconocido con el título 'Factura pendiente'. ¿Qué deberías hacer?",
    options: [
      "Abrir el archivo, podría ser una factura legítima.",
      "Eliminar el correo sin abrir el archivo.",
      "Responder al remitente para confirmar la factura.",
      "Descargar el archivo en tu móvil por seguridad.",
    ],
    correct: 1,
    isAnswered: false,
    coordinates: {
      "id":6,
      "x": -2.74,
      "y": -6.12,
      "z": -10.96
    },
  },
  {
    id: 7,
    question: "Encuentras una memoria USB en el estacionamiento de tu oficina. ¿Qué haces con ella?",
    options: [
      "Conectarla en tu computadora para ver a quién pertenece.",
      "Entregarla al equipo de TI de tu empresa.",
      "Llevarla a casa y revisarla con tu antivirus.",
      "Guardarla en tu cajón para usarla después.",
    ],
    correct: 1,
    isAnswered: false,
    coordinates: {
      "id":7,
      "x": -5.23,
      "y": -6.12,
      "z": -10.10
    },
  },
  {
    id: 8,
    question: "Tu jefe te pide que compartas datos confidenciales por mensaje de texto. ¿Qué deberías hacer?",
    options: [
      "Enviar los datos, es tu jefe quien los solicita.",
      "Decirle que prefieres enviarlos por correo seguro o encriptado.",
      "Enviar solo una parte de los datos para evitar riesgos.",
      "Llamarlo y decirle que no tienes los datos disponibles.",
    ],
    correct: 1,
    isAnswered: false,
    coordinates: {
      "id":8,
      "x": -12.98,
      "y": -5.92,
      "z": -11.86
    },
  },
  {
    id: 9,
    question: "Quieres proteger tus cuentas en redes sociales. ¿Cuál de las siguientes es la mejor práctica?",
    options: [
      "Usar la misma contraseña en todas para recordarlas fácilmente.",
      "Activar la autenticación de dos factores.",
      "Escribir las contraseñas en un papel y guardarlo en tu escritorio.",
      "Cambiar de contraseña cada año.",
    ],
    correct: 1,
    isAnswered: false,
    coordinates: {
      "id":9,
      "x": -16.84,
      "y": -5.15,
      "z": -14.39
    },
  },
  {
    id: 10,
    question: "Notas actividad inusual en tu cuenta bancaria en línea. ¿Qué deberías hacer primero?",
    options: [
      "Cambiar tu contraseña y revisar todas las transacciones.",
      "Cerrar la sesión y esperar a que pase el día.",
      "Informar a tu banco y congelar tu cuenta temporalmente.",
      "Eliminar la app del banco y reinstalarla.",
    ],
    correct: 2,
    isAnswered: false,
    coordinates: {
      "id":10,
      "x": -19.02,
      "y": -5.15,
      "z": -9.83
    },
  },
  {
    id: 11,
    question: "Alguien te envía un mensaje pidiéndote que descargues una 'herramienta de seguridad' para proteger tu computadora. ¿Qué haces?",
    options: [
      "Descargarla, ya que es una herramienta de seguridad.",
      "Ignorar el mensaje, podría ser una estafa.",
      "Responder para pedir más información.",
      "Buscar el nombre de la herramienta en internet antes de descargar.",
    ],
    correct: 1,
    isAnswered: false,
    coordinates: {
      "id":11,
      "x": -18.20,
      "y": -5.15,
      "z": -12.41
    },
  },
  {
    id: 12,
    question: "Te llega una notificación de que alguien ha intentado acceder a tu cuenta desde otro país. ¿Qué haces?",
    options: [
      "Ignorar la notificación si no usaste esa cuenta.",
      "Cambiar la contraseña y activar la autenticación de dos factores.",
      "Llamar al soporte técnico del país de origen.",
      "Solo revisar si tienes un correo de cambio de contraseña.",
    ],
    correct: 1,
    isAnswered: false,
    coordinates: {
      "id":12,
      "x": 1.19,
      "y": -6.12,
      "z": -9.55
    },
  },
  {
    id: 13,
    question: "Al navegar en internet, encuentras un anuncio que ofrece descargar software caro de forma gratuita. ¿Qué deberías hacer?",
    options: [
      "Aprovechar y descargar el software gratuito.",
      "Ignorar el anuncio, podría tratarse de un malware.",
      "Descargarlo, pero solo en un dispositivo secundario.",
      "Solicitar recomendaciones de amigos antes de descargarlo.",
    ],
    correct: 1,
    isAnswered: false,
    coordinates: {
      "id":13,
      "x": -1.79,
      "y": -6.12,
      "z": -8.44
    },
  },
];

export default ansOption;

