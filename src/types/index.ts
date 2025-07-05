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

interface BaseContent {
  isSuspicious: boolean;
  difficulty: string;
  feedback: {
    image: string;
    number?: string;
    message?: string;
    subject?: string;
    sender?: string;
    email?: string;
    body?: string;
  };
}

export interface EmailContentData extends BaseContent {
  isSmishing: false;
  subject: string;
  sender: string;
  email: string;
  body: string;
  suspiciousItems: string[];
}

export interface SmsContentData extends BaseContent {
  isSmishing: true;
  number: string;
  message: string;
}

export type PhishingContent = EmailContentData | SmsContentData;

export interface Enemy {
  id: number;
  x: number;
  y: number;
  z: number;
}

export interface Coordinates {
  id: number;
  x: number;
  y: number;
  z: number;
}
