import { useState, type FormEvent, type ChangeEvent } from 'react'
import { EnvelopeSimple, MapPin, LinkedinLogo } from '@phosphor-icons/react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { useLanguage } from '../i18n/LanguageContext'
import { usePageMeta } from '../hooks/usePageMeta'
import './Contactos.css'

const copy = {
  pt: {
    eyebrow: 'Contactos',
    title: 'Fale com o Grupo Mestres',
    intro: 'Para questões, dúvidas ou oportunidades de parceria, estamos disponíveis através dos canais abaixo.',
    fields: { nome: 'Nome *', email: 'Email *', assunto: 'Assunto *', mensagem: 'Mensagem *' },
    send: 'Enviar',
    sending: 'A enviar...',
    fallback: 'Abrimos o seu cliente de email para concluir o envio.',
    sent: 'Mensagem enviada com sucesso.',
    error: 'Não foi possível enviar automaticamente. Abrimos o seu cliente de email.',
    office: 'Escritório Principal',
    careers: 'Carreiras',
    careersText: 'Junte-se a uma equipa dedicada a promover investimentos estratégicos e excelência empresarial em Angola. Envie o seu currículo e carta de apresentação para:',
    mapTitle: 'Localização do Grupo Mestres & Serviços',
    subjectFallback: 'Contacto via website',
  },
  en: {
    eyebrow: 'Contact',
    title: 'Speak with Grupo Mestres',
    intro: 'For questions, enquiries or partnership opportunities, we are available through the channels below.',
    fields: { nome: 'Name *', email: 'Email *', assunto: 'Subject *', mensagem: 'Message *' },
    send: 'Send',
    sending: 'Sending...',
    fallback: 'We opened your email client to complete the message.',
    sent: 'Message sent successfully.',
    error: 'Automatic submission was not possible. We opened your email client.',
    office: 'Main Office',
    careers: 'Careers',
    careersText: 'Join a team dedicated to strategic investment and business excellence in Angola. Send your CV and cover letter to:',
    mapTitle: 'Grupo Mestres & Serviços location',
    subjectFallback: 'Website enquiry',
  },
}

export default function Contactos() {
  const { lang } = useLanguage()
  const t = copy[lang]
  usePageMeta(t.title, t.intro)
  const [form, setForm] = useState({ nome: '', email: '', assunto: '', mensagem: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'fallback' | 'error'>('idle')

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function openMailFallback() {
    const body = encodeURIComponent(`Nome: ${form.nome}\nEmail: ${form.email}\n\n${form.mensagem}`)
    window.location.href = `mailto:info@grupomestres.com?subject=${encodeURIComponent(form.assunto || t.subjectFallback)}&body=${body}`
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT

    if (!endpoint) {
      openMailFallback()
      setStatus('fallback')
      return
    }

    setStatus('sending')
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, origem: 'grupomestres.com' }),
      })

      if (!response.ok) throw new Error('Contact submission failed')
      setStatus('sent')
      setForm({ nome: '', email: '', assunto: '', mensagem: '' })
    } catch {
      openMailFallback()
      setStatus('error')
    }
  }

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title}>
        <p>{t.intro}</p>
      </PageHero>

      <section className="section">
        <div className="container contactos-grid">
          <Reveal as="form" className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="nome">{t.fields.nome}</label>
              <input id="nome" name="nome" type="text" required value={form.nome} onChange={handleChange} />
            </div>
            <div className="form-row">
              <label htmlFor="email">{t.fields.email}</label>
              <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} />
            </div>
            <div className="form-row">
              <label htmlFor="assunto">{t.fields.assunto}</label>
              <input id="assunto" name="assunto" type="text" required value={form.assunto} onChange={handleChange} />
            </div>
            <div className="form-row">
              <label htmlFor="mensagem">{t.fields.mensagem}</label>
              <textarea id="mensagem" name="mensagem" rows={5} required value={form.mensagem} onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
              {status === 'sending' ? t.sending : t.send}
            </button>
            {status !== 'idle' && status !== 'sending' && (
              <p className="contact-form-status">
                {status === 'sent' ? t.sent : status === 'fallback' ? t.fallback : t.error}
              </p>
            )}
          </Reveal>

          <Reveal delay={100} className="contact-info">
            <div className="contact-info-block">
              <h3>{t.office}</h3>
              <p className="contact-line">
                <MapPin size={18} />
                Rua Comandante Gika, 191, R/C, Alvalade, 5944, Luanda, Angola
              </p>
              <a href="mailto:info@grupomestres.com" className="contact-line">
                <EnvelopeSimple size={18} />
                info@grupomestres.com
              </a>
              <a
                href="https://www.linkedin.com/company/grupo-mestres-servi%C3%A7os/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-line"
              >
                <LinkedinLogo size={18} />
                LinkedIn
              </a>
            </div>

            <div className="contact-info-block">
              <h3>{t.careers}</h3>
              <p>{t.careersText}</p>
              <a href="mailto:carreiras@grupomestres.com" className="contact-line">
                <EnvelopeSimple size={18} />
                carreiras@grupomestres.com
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="contact-map">
        <iframe
          title={t.mapTitle}
          src="https://www.google.com/maps?q=Rua+Comandante+Gika,+191,+Alvalade,+Luanda,+Angola&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  )
}
