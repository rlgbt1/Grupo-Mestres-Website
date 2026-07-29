import { useLanguage } from '../i18n/LanguageContext'
import './StatBar.css'

const stats = {
  pt: [
    { value: '35', suffix: ' anos', label: 'de experiência' },
    { value: 'Diversos', suffix: '', label: 'projectos executados' },
    { value: 'Excelência', suffix: '', label: 'técnica' },
    { value: '100', suffix: '%', label: 'angolana' },
  ],
  en: [
    { value: '35', suffix: ' years', label: 'of experience' },
    { value: 'Multiple', suffix: '', label: 'projects delivered' },
    { value: 'Technical', suffix: '', label: 'excellence' },
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
