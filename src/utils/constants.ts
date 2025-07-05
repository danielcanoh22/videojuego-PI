import { degToRad } from "three/src/math/MathUtils.js";

// Personaje y cámara
export const WALK_SPEED = 3;
export const RUN_SPEED = 4.2;
export const ROTATION_SPEED = degToRad(0.8);

// Phishing game
export const MIN_SCORE = 100;

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

// Character
export const PROXIMITY_THRESHOLD = 0.6;
export const PHISHING_TRIGGER_POSITION = { x: -9.51, y: -6.06, z: 1.27 };
export const PHISHING_SAFE_POSITION = { x: -8.56, y: -6.13, z: 2.66 };
export const TROJAN_TRIGGER_POSITION = { x: -16.91, y: -5.08, z: -11.99 };
