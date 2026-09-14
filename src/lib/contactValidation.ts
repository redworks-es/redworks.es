import { ui, defaultLang, type Lang } from '../i18n/ui';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export type ValidationResult = { valid: true; data: ContactFormData } | { valid: false; errors: string[] };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(formData: Record<string, string>, lang: Lang = defaultLang): ValidationResult {
  const t = ui[lang];
  const errors: string[] = [];
  const name = (formData.name || '').trim();
  const email = (formData.email || '').trim();
  const phone = (formData.phone || '').trim();
  const message = (formData.message || '').trim();
  const accepted = formData.accepted === 'on' || formData.accepted === 'true';

  if (!name) errors.push(t['validation.name']);
  if (!email || !EMAIL_RE.test(email)) errors.push(t['validation.email']);
  if (!phone) errors.push(t['validation.phone']);
  if (!message) errors.push(t['validation.message']);
  if (!accepted) errors.push(t['validation.accepted']);

  if (errors.length > 0) return { valid: false, errors };
  return { valid: true, data: { name, email, phone, message } };
}
