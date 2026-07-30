import { Cow, Carrot, MapPin } from '@phosphor-icons/react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { useLanguage } from '../i18n/LanguageContext'
import { usePageMeta } from '../hooks/usePageMeta'
import agroPlaca from '../assets/images/agro-placa.jpg'
import agroCrop from '../assets/images/agro-crop.jpg'
import agroLivestock from '../assets/images/agro-livestock.jpg'
import './AreaOverview.css'

const copy = {
  pt: {
    eyebrow: 'Área de Actuação',
    title: 'Agrícola',
    intro: 'Criação de gado e produção hortícola na Fazenda Mestres & Serviços, uma frente que reforça a diversificação sectorial do Grupo Mestres.',
    placaAlt: 'Placa da Fazenda Mestres & Serviços, junto ao tronco de uma baobá',
    cropAlt: 'Talhão de cultivo na Fazenda Mestres & Serviços',
    livestockAlt: 'Gado na Fazenda Mestres & Serviços',
    overview: 'Visão Geral',
    heading: 'Fazenda Mestres & Serviços',
    body: 'A Fazenda Mestres & Serviços, localizada em Icolo e Bengo, desenvolve actividades de criação de gado e produção hortícola. Representa a presença do Grupo Mestres no sector agrícola e o seu compromisso com o desenvolvimento sustentável da agropecuária em Angola.',
    location: 'Icolo e Bengo, Estrada de Catete',
    production: 'Produção',
    productionTitle: 'O que Produzimos',
    items: [
      { icon: Cow, title: 'Criação de Gado', desc: 'Criação de bois e cabritos na Fazenda Mestres & Serviços.' },
      { icon: Carrot, title: 'Produção Hortícola', desc: 'Plantação de tomate, cenoura e alface para o mercado nacional.' },
    ],
  },
  en: {
    eyebrow: 'Business Area',
    title: 'Agriculture',
    intro: 'Livestock farming and vegetable production at Fazenda Mestres & Serviços, a front that reinforces Grupo Mestres’ sector diversification.',
    placaAlt: 'Fazenda Mestres & Serviços sign, mounted on a baobab trunk',
    cropAlt: 'Cultivated plot at Fazenda Mestres & Serviços',
    livestockAlt: 'Cattle at Fazenda Mestres & Serviços',
    overview: 'Overview',
    heading: 'Fazenda Mestres & Serviços',
    body: 'Fazenda Mestres & Serviços, located in Icolo e Bengo, carries out livestock farming and vegetable production. It represents Grupo Mestres’ presence in the agricultural sector and its commitment to the sustainable development of agribusiness in Angola.',
    location: 'Icolo e Bengo, Estrada de Catete',
    production: 'Production',
    productionTitle: 'What We Produce',
    items: [
      { icon: Cow, title: 'Livestock Farming', desc: 'Cattle and goat farming at Fazenda Mestres & Serviços.' },
      { icon: Carrot, title: 'Vegetable Production', desc: 'Tomato, carrot and lettuce cultivation for the national market.' },
    ],
  },
}

export default function Agricola() {
  const { lang } = useLanguage()
  const t = copy[lang]
  usePageMeta(t.title, t.intro)

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title}>
        <p>{t.intro}</p>
      </PageHero>

      <section className="section">
        <div className="container area-overview-intro">
          <Reveal as="div" className="area-overview-media area-overview-media-portrait">
            <img src={agroPlaca} alt={t.placaAlt} loading="lazy" />
          </Reveal>
          <Reveal as="div" delay={100} className="area-overview-body">
            <span className="eyebrow eyebrow-dark">{t.overview}</span>
            <h2>{t.heading}</h2>
            <p>{t.body}</p>
            <p className="area-overview-location">
              <MapPin size={16} weight="light" /> {t.location}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <Reveal className="section-heading">
            <span className="eyebrow eyebrow-dark">{t.production}</span>
            <h2>{t.productionTitle}</h2>
          </Reveal>
          <div className="frentes-grid">
            {t.items.map((p, i) => (
              <Reveal key={p.title} delay={i * 80} className="card frente-card">
                <p.icon size={26} weight="light" className="frente-icon" />
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="agro-collage">
            <figure className="agro-collage-photo agro-collage-photo-large">
              <img src={agroLivestock} alt={t.livestockAlt} loading="lazy" />
            </figure>
            <figure className="agro-collage-photo agro-collage-photo-small">
              <img src={agroCrop} alt={t.cropAlt} loading="lazy" />
            </figure>
          </Reveal>
        </div>
      </section>
    </>
  )
}
