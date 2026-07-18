import { GraduationCap, FirstAidKit, MusicNotes, Leaf, HandHeart, Palette, ArrowSquareOut } from '@phosphor-icons/react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { useLanguage } from '../i18n/LanguageContext'
import fundacaoLogo from '../assets/logos/fundacao-logo-hd.png'
import artCollection01 from '../assets/images/fundacao-art-collection-01.jpg'
import artCollection02 from '../assets/images/fundacao-art-collection-02.jpg'
import './Fundacao.css'

const copy = {
  pt: {
    eyebrow: 'Braço Social',
    title: 'Fundação Isaías Trindade',
    intro: 'Cultura, educação, saúde e ambiente: o compromisso do Grupo Mestres com o impacto humano, além do resultado económico.',
    about: 'Sobre a Fundação',
    aboutTitle: 'Um Legado de Inclusão e Impacto Humano',
    p1: 'A Fundação Isaías Trindade é o braço social do Grupo Mestres & Serviços, criada para dar corpo a um compromisso que atravessa toda a história do Grupo: o de que o crescimento económico só tem sentido quando se traduz em benefício directo para as comunidades.',
    p2: 'A Fundação perpetua ainda o legado das matriarcas da Família Trindade, mantendo viva a memória e os valores que deram origem ao Grupo, e preserva uma colecção cultural africana, com peças e esculturas tradicionais.',
    collectionEyebrow: 'Acervo Cultural',
    collectionTitle: 'Cultura Africana como Memória Viva',
    collectionBody: 'A colecção preservada pela Fundação reúne objectos, peças e esculturas que ajudam a contar histórias de identidade, ofício e continuidade cultural.',
    collectionAlt1: 'Peças da colecção cultural africana da Fundação Isaías Trindade',
    collectionAlt2: 'Detalhe de objectos culturais preservados pela Fundação Isaías Trindade',
    areas: 'Áreas de Actuação',
    impact: 'Onde Concentramos o Nosso Impacto',
    initiatives: 'Iniciativas',
    initiativesTitle: 'Projectos em Curso',
    festival: 'Festival Balumuka',
    festivalTitle: 'Baluarte da Música Angolana',
    festivalBody: 'A Fundação promove anualmente o Festival Balumuka, no Palácio de Ferro, uma plataforma de valorização da música ancestral angolana e africana.',
    videoTitle: 'Festival Balumuka: Baluarte da Música Angolana',
    videoLink: 'Ver Vídeo no Facebook',
    palaceLink: 'Ler Sobre o Palácio de Ferro em Visit Luanda',
    mwanaLink: 'A Fundação é Patrocinadora Oficial do Projecto Mwana África',
    pillars: [
      { icon: GraduationCap, title: 'Educação', desc: 'Apoio a projectos de educação, formação técnica e capacitação juvenil.' },
      { icon: FirstAidKit, title: 'Saúde', desc: 'Promoção da saúde comunitária em zonas rurais de Angola.' },
      { icon: Palette, title: 'Cultura', desc: 'Valorização de artefactos e tradições culturais africanas.' },
      { icon: Leaf, title: 'Ambiente', desc: 'Envolvimento activo em programas de preservação ambiental.' },
    ],
    projects: [
      { icon: MusicNotes, title: 'Orquestra Infantil', desc: 'Criação de uma orquestra com crianças de zonas menos favorecidas, dando acesso à formação musical e a um espaço de disciplina e pertença.' },
      { icon: HandHeart, title: 'Solidariedade e Apoio a Famílias Vulneráveis', desc: 'Acções directas de solidariedade junto de famílias em situação de maior vulnerabilidade social.' },
      { icon: Palette, title: 'Colecção Cultural Africana', desc: 'Preservação e divulgação de peças e esculturas tradicionais africanas, valorizando o património cultural do continente.' },
    ],
  },
  en: {
    eyebrow: 'Social Arm',
    title: 'Isaías Trindade Foundation',
    intro: 'Culture, education, health and environment: Grupo Mestres’ commitment to human impact beyond economic results.',
    about: 'About the Foundation',
    aboutTitle: 'A Legacy of Inclusion and Human Impact',
    p1: 'The Isaías Trindade Foundation is the social arm of Grupo Mestres & Serviços, created to give shape to a commitment that runs through the Group’s history: economic growth only has meaning when it translates into direct benefit for communities.',
    p2: 'The Foundation also perpetuates the legacy of the Trindade family matriarchs, keeping alive the memory and values that gave origin to the Group, and preserves an African cultural collection, with traditional pieces and sculptures.',
    collectionEyebrow: 'Cultural Collection',
    collectionTitle: 'African Culture as Living Memory',
    collectionBody: 'The collection preserved by the Foundation brings together objects, pieces and sculptures that help tell stories of identity, craft and cultural continuity.',
    collectionAlt1: 'Pieces from the Isaías Trindade Foundation African cultural collection',
    collectionAlt2: 'Detail of cultural objects preserved by the Isaías Trindade Foundation',
    areas: 'Areas of Action',
    impact: 'Where We Focus Our Impact',
    initiatives: 'Initiatives',
    initiativesTitle: 'Current Projects',
    festival: 'Balumuka Festival',
    festivalTitle: 'A Stronghold of Angolan Music',
    festivalBody: 'The Foundation promotes the annual Balumuka Festival at the Palácio de Ferro, a platform for valuing ancestral Angolan and African music.',
    videoTitle: 'Balumuka Festival: A Stronghold of Angolan Music',
    videoLink: 'Watch Video on Facebook',
    palaceLink: 'Read About Palácio de Ferro on Visit Luanda',
    mwanaLink: 'The Foundation is an Official Sponsor of the Mwana África Project',
    pillars: [
      { icon: GraduationCap, title: 'Education', desc: 'Support for education, technical training and youth empowerment projects.' },
      { icon: FirstAidKit, title: 'Health', desc: 'Promotion of community health in rural areas of Angola.' },
      { icon: Palette, title: 'Culture', desc: 'Valuing African cultural artefacts and traditions.' },
      { icon: Leaf, title: 'Environment', desc: 'Active involvement in environmental preservation programmes.' },
    ],
    projects: [
      { icon: MusicNotes, title: 'Children’s Orchestra', desc: 'Creation of an orchestra with children from less advantaged areas, giving access to musical training and a space of discipline and belonging.' },
      { icon: HandHeart, title: 'Solidarity and Support for Vulnerable Families', desc: 'Direct solidarity actions with families facing greater social vulnerability.' },
      { icon: Palette, title: 'African Cultural Collection', desc: 'Preservation and promotion of traditional African pieces and sculptures, valuing the continent’s cultural heritage.' },
    ],
  },
}

export default function Fundacao() {
  const { lang } = useLanguage()
  const t = copy[lang]

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title}>
        <p>{t.intro}</p>
      </PageHero>

      <section className="section">
        <div className="container fundacao-intro">
          <Reveal as="div" className="fundacao-intro-media">
            <img src={fundacaoLogo} alt="Fundação Isaías Trindade" />
          </Reveal>
          <Reveal as="div" delay={100} className="fundacao-intro-body">
            <span className="eyebrow eyebrow-dark">{t.about}</span>
            <h2>{t.aboutTitle}</h2>
            <p>{t.p1}</p>
            <p>{t.p2}</p>
          </Reveal>
        </div>
      </section>

      <section className="section fundacao-collection-section">
        <div className="container fundacao-collection">
          <Reveal className="fundacao-collection-copy">
            <span className="eyebrow eyebrow-dark">{t.collectionEyebrow}</span>
            <h2>{t.collectionTitle}</h2>
            <p>{t.collectionBody}</p>
          </Reveal>
          <Reveal delay={120} className="fundacao-collection-gallery">
            <figure className="collection-photo collection-photo-large">
              <img src={artCollection01} alt={t.collectionAlt1} loading="lazy" />
            </figure>
            <figure className="collection-photo collection-photo-small">
              <img src={artCollection02} alt={t.collectionAlt2} loading="lazy" />
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <Reveal className="section-heading">
            <span className="eyebrow eyebrow-dark">{t.areas}</span>
            <h2>{t.impact}</h2>
          </Reveal>
          <div className="pilares-fundacao-grid">
            {t.pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 80} className="pilar-fundacao-card">
                <p.icon size={26} weight="light" className="pilar-fundacao-icon" />
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-heading">
            <span className="eyebrow eyebrow-dark">{t.initiatives}</span>
            <h2>{t.initiativesTitle}</h2>
          </Reveal>
          <div className="iniciativas-list">
            {t.projects.map((project, i) => (
              <Reveal key={project.title} delay={i * 80} className="iniciativa-card">
                <project.icon size={22} weight="light" className="iniciativa-icon" />
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <Reveal className="section-heading">
            <span className="eyebrow eyebrow-dark">{t.festival}</span>
            <h2>{t.festivalTitle}</h2>
            <p className="section-lede">{t.festivalBody}</p>
          </Reveal>
          <Reveal delay={90} className="balumuka-video">
            <iframe
              title={t.videoTitle}
              src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fpalaciodeferropc%2Fvideos%2F1421297305257488%2F&show_text=false&width=560&t=0"
              width="100%"
              height="314"
              style={{ border: 'none', overflow: 'hidden', borderRadius: 8 }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen
            />
            <a
              href="https://www.facebook.com/palaciodeferropc/videos/1421297305257488/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow balumuka-fallback"
            >
              {t.videoLink} <ArrowSquareOut size={15} weight="bold" />
            </a>
          </Reveal>
          <Reveal delay={140} className="fundacao-links">
            <a
              href="https://visiteluanda.com/noticias-destaques/palacio-ferro-promove-actividades-para.html"
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow"
            >
              {t.palaceLink} <ArrowSquareOut size={15} weight="bold" />
            </a>
            <a
              href="https://mwanafrika.com/sobre-nos/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow"
            >
              {t.mwanaLink} <ArrowSquareOut size={15} weight="bold" />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
