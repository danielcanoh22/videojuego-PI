import { Vector3 } from "three";

export interface CharacterProps {
  animation: string;
  scale?: number | [number, number, number];
  position?: Vector3;
}

export interface MapProps {
  model: string;
  scale?: number | [number, number, number];
  position?: [number, number, number];
}

// Phishing game

export interface EmailElementType {
  id: string;
  name: string;
}

export interface ContentData {
  subject: string;
  sender: string;
  email: string;
  body: string;
  isSuspicious: boolean;
  difficulty: string;
  suspiciousItems: string[];
  feedback: {
    subject: string;
    sender: string;
    email: string;
    body: string;
    image: string;
  };
}
