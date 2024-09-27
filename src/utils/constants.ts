import { degToRad } from "three/src/math/MathUtils.js";

// Personaje y cámara
export const WALK_SPEED = 2.5;
export const RUN_SPEED = 1.6;
export const ROTATION_SPEED = degToRad(0.8);

// Phishing game
export const emailElements = {
  SUBJECT: "Asunto",
  SENDER: "Remitente",
  EMAIL: "Correo electrónico",
  BODY: "Mensaje",
};

export const difficulty = {
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
