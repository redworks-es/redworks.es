const MESSAGES = {
  es: {
    sending: 'Enviando...',
    success: 'Gracias, tu mensaje ha sido enviado. Te responderemos lo antes posible.',
    error_generic: 'Ha ocurrido un error.',
  },
  fr: {
    sending: 'Envoi en cours...',
    success: 'Merci, votre message a bien été envoyé. Nous vous répondrons dans les meilleurs délais.',
    error_generic: 'Une erreur est survenue.',
  },
} as const;

const lang = document.documentElement.lang === 'fr' ? 'fr' : 'es';
const t = MESSAGES[lang];

const form = document.querySelector<HTMLFormElement>('#contact-form');
const status = document.querySelector<HTMLElement>('#contact-form-status');

form?.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!status) return;
  status.textContent = t.sending;

  const response = await fetch('/api/contact', { method: 'POST', body: new FormData(form) });
  const result = (await response.json()) as { ok: boolean; errors?: string[] };

  if (result.ok) {
    status.textContent = t.success;
    form.reset();
  } else {
    status.textContent = (result.errors ?? [t.error_generic]).join(' ');
  }
});
