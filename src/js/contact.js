import emailjs from '@emailjs/browser';
import { EMAIL } from './constants.js';

export function initContact() {
  const form = document.getElementById('contactForm');
  const btn = document.getElementById('btnSend');
  if (!form || !btn) return;

  emailjs.init({ publicKey: EMAIL.PUBLIC_KEY });

  form.addEventListener('submit', async e => {
    e.preventDefault();
    if (!validateForm(form)) return;

    const originalText = btn.textContent;
    btn.textContent = 'Enviando...';
    btn.disabled = true;

    try {
      await emailjs.sendForm(EMAIL.SERVICE_ID, EMAIL.TEMPLATE_ID, form);
      btn.textContent = 'Mensaje enviado ✓';
      btn.classList.add('btn-send--success');
      form.reset();
    } catch {
      btn.textContent = 'Error al enviar. Intenta de nuevo.';
      btn.classList.add('btn-send--error');
    } finally {
      setTimeout(() => {
        btn.textContent = originalText;
        btn.disabled = false;
        btn.classList.remove('btn-send--success', 'btn-send--error');
      }, 3500);
    }
  });
}

function validateForm(form) {
  clearErrors(form);
  let valid = true;

  const fields = [
    {
      el: form.querySelector('#fieldName'),
      msg: 'El nombre es requerido',
    },
    {
      el: form.querySelector('#fieldEmail'),
      msg: 'Ingresa un correo válido',
      check: el => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value),
    },
    {
      el: form.querySelector('#fieldProject'),
      msg: 'Selecciona el tipo de proyecto',
    },
    {
      el: form.querySelector('#fieldMessage'),
      msg: 'Cuéntanos sobre tu proyecto',
    },
  ];

  fields.forEach(({ el, msg, check }) => {
    const isEmpty = !el.value.trim();
    const isInvalid = check ? !check(el) : false;
    if (isEmpty || isInvalid) {
      showError(el, msg);
      valid = false;
    }
  });

  return valid;
}

function showError(field, message) {
  const error = document.createElement('span');
  error.className = 'f-error';
  error.textContent = message;
  field.classList.add('f-input--error');
  field.parentNode.appendChild(error);
}

function clearErrors(form) {
  form.querySelectorAll('.f-error').forEach(el => el.remove());
  form.querySelectorAll('.f-input--error').forEach(el => el.classList.remove('f-input--error'));
}
