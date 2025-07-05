import { degToRad } from "three/src/math/MathUtils.js";

// Personaje y cámara
export const WALK_SPEED = 3;
export const RUN_SPEED = 4.2;
export const ROTATION_SPEED = degToRad(0.8);

// Phishing game
export const MIN_SCORE = 100;

// export const emailElements = {
//   SUBJECT: "Asunto",
//   SENDER: "Remitente",
//   EMAIL: "Correo electrónico",
//   BODY: "Mensaje",
// };

export const DIFFICULTY = {
  EASY: "Fácil",
  MID: "Media",
  HARD: "Difícil",
};

export const EMAIL_PARTS = {
  subject: "Asunto",
  sender: "Remitente",
  email: "Correo electrónico",
  body: "Mensaje",
};
