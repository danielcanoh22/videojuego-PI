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
