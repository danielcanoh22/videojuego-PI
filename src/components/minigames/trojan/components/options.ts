interface Question {
    id: number;
    question: string;
    options: string[];
    correct: number;
  }
  
  export const ansOption: Question[] = [
    {
        "id": 1,
        "question": "¿Qué es un ataque DDoS?",
        "options": [
          "Un ataque de denegación de servicio distribuido.",
          "Un ataque dirigido a la base de datos.",
          "Un ataque que utiliza virus para infiltrarse en sistemas.",
          "Un tipo de ataque de phishing."
        ],
        "correct": 0
      },
      {
        "id": 2,
        "question": "¿Cuál es la función de un firewall?",
        "options": [
          "Proteger contra virus y malware.",
          "Filtrar el tráfico de red y controlar el acceso.",
          "Monitorear el uso de la red.",
          "Almacenar datos de forma segura."
        ],
        "correct": 1
      },
      {
        "id": 3,
        "question": "¿Qué es el phishing?",
        "options": [
          "Un método para proteger contraseñas.",
          "Un tipo de ataque que engaña a las personas para que revelen información sensible.",
          "Un virus que afecta el correo electrónico.",
          "Una técnica de encriptación."
        ],
        "correct": 1
      },
      {
        "id": 4,
        "question": "¿Qué es el malware?",
        "options": [
          "Software diseñado para dañar o infiltrarse en sistemas.",
          "Software antivirus.",
          "Un tipo de sistema operativo.",
          "Un método de autenticación."
        ],
        "correct": 0
      },
      {
        "id": 5,
        "question": "¿Qué es un certificado SSL?",
        "options": [
          "Un documento que garantiza la privacidad en la red.",
          "Un protocolo para la transferencia de datos.",
          "Un tipo de malware.",
          "Una forma de autenticación de dos factores."
        ],
        "correct": 0
      },
      {
        "id": 6,
        "question": "¿Qué significa la autenticación de dos factores (2FA)?",
        "options": [
          "Usar dos contraseñas para acceder a una cuenta.",
          "Requerir dos formas diferentes de verificar la identidad del usuario.",
          "Un tipo de ataque de hacking.",
          "Un método para encriptar datos."
        ],
        "correct": 1
      },
      {
        "id": 7,
        "question": "¿Qué es un exploit?",
        "options": [
          "Un tipo de firewall.",
          "Un software diseñado para aprovechar vulnerabilidades de seguridad.",
          "Una herramienta de antivirus.",
          "Un tipo de ataque DDoS."
        ],
        "correct": 1
      },
      {
        "id": 8,
        "question": "¿Cuál es la principal función de un antivirus?",
        "options": [
          "Monitorear el tráfico de red.",
          "Eliminar y prevenir malware en el sistema.",
          "Almacenar contraseñas de manera segura.",
          "Controlar el acceso a los datos."
        ],
        "correct": 1
      },
      {
        "id": 9,
        "question": "¿Qué es un ataque de fuerza bruta?",
        "options": [
          "Un ataque que utiliza un diccionario de palabras.",
          "Un ataque que prueba todas las combinaciones posibles de contraseñas.",
          "Un tipo de malware.",
          "Un método de autenticación."
        ],
        "correct": 1
      },
      {
        "id": 10,
        "question": "¿Cuál es el propósito de la encriptación?",
        "options": [
          "Hacer que los datos sean ilegibles para usuarios no autorizados.",
          "Acelerar la transferencia de datos.",
          "Aumentar la capacidad de almacenamiento.",
          "Proteger contra ataques DDoS."
        ],
        "correct": 0
      }
  ];
  
  export default ansOption;
  