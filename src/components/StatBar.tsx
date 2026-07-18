import { useLanguage } from '../i18n/LanguageContext'
import './StatBar.css'

const stats = {
  pt: [
    { value: '35', suffix: ' anos', label: 'de experiência' },
    { value: '30', suffix: '+', label: 'projectos desenvolvidos' },
    { value: '50', suffix: '+', label: 'parcerias na indústria' },
    { value: '100', suffix: '%', label: 'capital angolano' },
  ],
  en: [
    { value: '35', suffix: ' years', label: 'of experience' },
    { value: '30', suffix: '+', label: 'projects delivered' },
    { value: '50', suffix: '+', label: 'industry partnerships' },
    { value: '100', suffix: '%', label: 'angolan-owned' },
  ],
}

export default function StatBar() {
  const { lang } = useLanguage()
  return (
    <ul className="stat-bar">
      {stats[lang].map((s) => (
        <li key={s.label} className="stat-bar-item">
          <span className="stat-bar-value">
            {s.value}
            <span className="stat-bar-suffix">{s.suffix}</span>
          </span>
          <span className="stat-bar-label">{s.label}</span>
        </li>
      ))}
    </ul>
  )
}
