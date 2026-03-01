import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

const projects = [
  { slug: 'ethos', number: '01', title: 'Ethos', category: 'New AI Workflow', tags: ['New AI Workflow'] },
  { slug: 'thycotic', number: '02', title: 'Thycotic', category: 'Privileged Access Management', tags: ['UX Research', 'Enterprise', 'Mobile', 'Security'] },
  { slug: 'honest-paws', number: '03', title: 'Honest Paws', category: 'Ecommerce · Pet CBD', tags: ['Ecommerce', 'Conversion', 'DTC'] },
  { slug: 'floracracy', number: '04', title: 'Floracracy', category: 'Floral Arrangement Builder', tags: ['Product Design', 'Interactive', 'Builder'] },
  { slug: 'usana', number: '05', title: 'Usana', category: 'Dashboard Redesign', tags: ['Dashboard', 'Data Viz', 'B2B'] },
]

function Thycotic() {
  return (
    <>
      {/* Hero */}
      <div style={{ marginBottom: '5rem' }}>
        <p style={{ fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.5rem' }}>
          02 — Privileged Access Management
        </p>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontFamily: "'Playfair Display', serif", fontWeight: 400, lineHeight: 1.1, color: 'var(--fg)', marginBottom: '1.5rem' }}>
          Redesigning enterprise<br />security for the mobile era.
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--muted)', maxWidth: '580px', lineHeight: 1.8 }}>
          Thycotic Secret Server is a leading Privileged Access Management platform used by enterprise security teams worldwide. I led the design of their mobile app from the ground up — translating complex desktop workflows into a focused, on-the-go experience for iOS and Android.
        </p>
      </div>

      {/* Hero Image */}
      <div style={{ marginBottom: '5rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)' }}>
        <img
          src="https://images.squarespace-cdn.com/content/v1/5c19a264e74940df765b8a67/1606133648673-XFB2625D863LOGFWFSG4/Thycotic+Image.jpg"
          alt="Thycotic mobile app overview"
          style={{ width: '100%', display: 'block', objectFit: 'cover' }}
        />
      </div>

      {/* Meta */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1px', backgroundColor: 'var(--border)', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden', marginBottom: '5rem' }}>
        {[
          { label: 'Role', value: 'Lead Mobile Designer' },
          { label: 'Platform', value: 'iOS & Android' },
          { label: 'Team', value: 'Cross-functional' },
          { label: 'Tools', value: 'Sketch, InVision, Azure DevOps' },
        ].map(item => (
          <div key={item.label} style={{ backgroundColor: 'var(--bg)', padding: '1.5rem' }}>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.5rem' }}>{item.label}</p>
            <p style={{ fontSize: '0.95rem', color: 'var(--fg)', fontWeight: 500 }}>{item.value}</p>
          </div>
        ))}
      </div>

      {/* The Challenge */}
      <div style={{ marginBottom: '5rem' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.5rem' }}>The Challenge</p>
        <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontFamily: "'Playfair Display', serif", fontWeight: 400, lineHeight: 1.6, color: 'var(--fg)', maxWidth: '680px', marginBottom: '2rem' }}>
          The existing mobile app was outdated and lacked the features enterprise teams needed in the field. The challenge wasn't just building new features — it was deciding what <em>not</em> to build.
        </p>
        <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '620px', lineHeight: 1.8 }}>
          Thycotic had 8+ products sharing a design language. A bad mobile experience risked fragmenting the brand and eroding trust with security-conscious enterprise buyers. Any new feature also had to work across both iOS and Android via a shared Xamarin codebase — meaning design decisions had real engineering cost.
        </p>
      </div>

      {/* Divider */}
      <div style={{ borderTop: '1px solid var(--border)', marginBottom: '5rem' }} />

      {/* Research */}
      <div style={{ marginBottom: '5rem' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.5rem' }}>Research & Discovery</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2.5rem' }}>
          {[
            { title: 'User Interviews', desc: 'Spoke directly with enterprise customers and security engineers to understand daily workflows and pain points in the field.' },
            { title: 'Sales Engineer Feedback', desc: 'Security products have limited telemetry by design. Sales Engineers became a critical proxy for user insight — they saw friction firsthand.' },
            { title: 'Persona Development', desc: 'Defined three distinct user types: the business user, the technical admin, and the security ops user — each with very different needs.' },
            { title: 'Competitive Analysis', desc: 'Evaluated how competitors handled mobile PAM to identify gaps and opportunities in the experience.' },
          ].map(item => (
            <div key={item.title} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--card)' }}>
              <p style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--fg)', marginBottom: '0.5rem' }}>{item.title}</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Persona images */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '2.5rem' }}>
          {[
            'https://images.squarespace-cdn.com/content/v1/5c19a264e74940df765b8a67/1606134981714-NJMNUIWFMJWXSV4GM9WN/PERSONA+TEMPLATES1.jpg',
            'https://images.squarespace-cdn.com/content/v1/5c19a264e74940df765b8a67/1606134993542-ZRUG7IIZ23N1Q6F4XRDZ/image-asset.jpeg',
            'https://images.squarespace-cdn.com/content/v1/5c19a264e74940df765b8a67/1606135000638-ULDD11AZCBVVCSO5PCRD/PERSONA+TEMPLATES3.jpg',
          ].map((src, i) => (
            <div key={i} style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border)', backgroundColor: '#fff' }}>
              <img src={src} alt={`User persona ${i + 1}`} style={{ width: '100%', display: 'block', objectFit: 'cover', mixBlendMode: 'multiply' }} />
            </div>
          ))}
        </div>

        {/* Key insight callout */}
        <div style={{ padding: '2rem', borderLeft: '3px solid var(--fg)', backgroundColor: 'var(--tag-bg)', borderRadius: '0 12px 12px 0' }}>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontStyle: 'italic', color: 'var(--fg)', lineHeight: 1.6, marginBottom: '0.75rem' }}>
            "Our research showed that business users were key to the success of the mobile app — not power users."
          </p>
          <p style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>Key research finding — shaped every design decision that followed</p>
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: '1px solid var(--border)', marginBottom: '5rem' }} />

      {/* Design Decisions */}
      <div style={{ marginBottom: '5rem' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.5rem' }}>Design Decisions</p>
        <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontFamily: "'Playfair Display', serif", fontWeight: 400, lineHeight: 1.6, color: 'var(--fg)', maxWidth: '680px', marginBottom: '3rem' }}>
          The guiding principle: prioritize the business user and ruthlessly simplify. Every screen had to justify its existence.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: 'var(--border)', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden', marginBottom: '2.5rem' }}>
          {[
            { num: '01', title: 'Visual consistency over reinvention', desc: 'Matched the desktop design language to prevent product fragmentation. Enterprise users switch between desktop and mobile — unfamiliarity kills trust.' },
            { num: '02', title: 'Simplify, don\'t replicate', desc: 'Focused on the 20% of features that drove 80% of mobile use cases. Technical admin flows stayed on desktop. Business users got what they needed to move fast.' },
            { num: '03', title: 'Mobile-native interactions', desc: 'Rebuilt micro-interactions from scratch for touch — not just scaled-down desktop patterns. Tap targets, gestures, and feedback were all designed specifically for mobile.' },
            { num: '04', title: 'Design-to-development lead time', desc: 'Maintained a 3-week design lead over engineering. This gave developers time to assess feasibility while I iterated — no wasted sprints on impossible designs.' },
            { num: '05', title: 'SAML + offline caching', desc: 'Designed secure enterprise login flows and offline access patterns — critical features for field use where connectivity can\'t be guaranteed.' },
          ].map(item => (
            <div key={item.num} style={{ display: 'flex', gap: '1.5rem', padding: '1.5rem', backgroundColor: 'var(--bg)', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '0.7rem', color: 'var(--muted)', minWidth: '1.5rem', paddingTop: '2px' }}>{item.num}</span>
              <div>
                <p style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--fg)', marginBottom: '0.35rem' }}>{item.title}</p>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Design images */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          {[
            { src: 'https://images.squarespace-cdn.com/content/v1/5c19a264e74940df765b8a67/1606138664436-7AGJ7EAQT02LF54SX4XM/image-asset.png', alt: 'Design screens' },
            { src: 'https://images.squarespace-cdn.com/content/v1/5c19a264e74940df765b8a67/1606139037230-O8NXNACQCRCW01AN14DF/ThycoticSketchDetails.jpg', alt: 'Sketch design details' },
          ].map((img, i) => (
            <div key={i} style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border)', backgroundColor: '#fff' }}>
              <img src={img.src} alt={img.alt} style={{ width: '100%', display: 'block', objectFit: 'cover', mixBlendMode: 'multiply' }} />
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: '1px solid var(--border)', marginBottom: '5rem' }} />

      {/* Process */}
      <div style={{ marginBottom: '5rem' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.5rem' }}>How I Worked</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {[
            { title: 'Agile sprints', desc: '2-week sprints in Azure DevOps. Design ran 3 weeks ahead of development — enough lead time to iterate without blocking engineers.' },
            { title: 'Monthly releases', desc: 'Each release shipped one main feature plus bug fixes. Predictable cadence kept stakeholders aligned and users receiving consistent value.' },
            { title: 'Cross-functional ownership', desc: 'Worked directly with PMs, offshore dev teams in Ukraine, Sales Engineers, and UI/UX. No handoff gaps — I was in every room.' },
            { title: 'iOS & Android', desc: 'Designed for both platforms simultaneously using Xamarin\'s shared core. Resolved OS-specific inconsistencies without fragmenting the experience.' },
          ].map(item => (
            <div key={item.title} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--card)' }}>
              <p style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--fg)', marginBottom: '0.5rem' }}>{item.title}</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: '1px solid var(--border)', marginBottom: '5rem' }} />

      {/* Outcome */}
      <div style={{ marginBottom: '5rem' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.5rem' }}>Outcome</p>
        <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontFamily: "'Playfair Display', serif", fontWeight: 400, lineHeight: 1.6, color: 'var(--fg)', maxWidth: '680px', marginBottom: '2.5rem' }}>
          The app shipped on both App Store and Google Play — a modern, focused mobile experience trusted by enterprise security teams.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', backgroundColor: 'var(--border)', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
          {[
            { stat: '2', label: 'Platforms shipped', sub: 'iOS & Android' },
            { stat: '3wk', label: 'Design lead time', sub: 'ahead of engineering' },
            { stat: '8+', label: 'Products aligned', sub: 'consistent design language' },
          ].map(item => (
            <div key={item.stat} style={{ backgroundColor: 'var(--bg)', padding: '2rem 1.5rem' }}>
              <p style={{ fontSize: '2rem', fontFamily: "'Playfair Display', serif", fontWeight: 400, color: 'var(--fg)', marginBottom: '0.25rem' }}>{item.stat}</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--fg)', fontWeight: 500, marginBottom: '0.2rem' }}>{item.label}</p>
              <p style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{item.sub}</p>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="https://apps.apple.com/us/app/thycotic-secret-server-mobile/id1509465103" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--fg)', borderBottom: '1px solid var(--fg)', paddingBottom: '2px' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.5'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            View on App Store ↗
          </a>
          <a href="https://play.google.com/store/apps/details?gl=US&hl=en_US&id=com.thycotic.SecretServerMobile" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--fg)', borderBottom: '1px solid var(--fg)', paddingBottom: '2px' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.5'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            View on Google Play ↗
          </a>
        </div>
      </div>
    </>
  )
}

function HonestPaws() {
  const imgStyle = { width: '100%', display: 'block', objectFit: 'cover', mixBlendMode: 'multiply' }
  const imgWrap = { borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border)', backgroundColor: '#fff' }

  return (
    <>
      {/* Hero */}
      <div style={{ marginBottom: '5rem' }}>
        <p style={{ fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.5rem' }}>
          03 — Ecommerce · Pet CBD
        </p>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontFamily: "'Playfair Display', serif", fontWeight: 400, lineHeight: 1.1, color: 'var(--fg)', marginBottom: '1.5rem' }}>
          Turning high-traffic pages<br />into high-converting ones.
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--muted)', maxWidth: '580px', lineHeight: 1.8 }}>
          Honest Paws' CBD Oil for Dogs page ranked at the top of Google — but it wasn't converting. I redesigned the page to serve three distinct user types, reduce bounce rates, and drive more customers through the purchase funnel without sacrificing the SEO content making it rank.
        </p>
      </div>

      {/* Hero image */}
      <div style={{ marginBottom: '5rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)' }}>
        <img src="https://images.squarespace-cdn.com/content/v1/5c19a264e74940df765b8a67/1606157851627-JB0FK8ZP8TQX1Z1NR9X6/image-asset.jpeg" alt="Honest Paws overview" style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
      </div>

      {/* Meta */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1px', backgroundColor: 'var(--border)', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden', marginBottom: '5rem' }}>
        {[
          { label: 'Role', value: 'Lead Designer' },
          { label: 'Platform', value: 'Web · Mobile-first' },
          { label: 'Traffic', value: '85% mobile' },
          { label: 'Tools', value: 'Adobe XD, Zeplin, Hotjar, GA' },
        ].map(item => (
          <div key={item.label} style={{ backgroundColor: 'var(--bg)', padding: '1.5rem' }}>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.5rem' }}>{item.label}</p>
            <p style={{ fontSize: '0.95rem', color: 'var(--fg)', fontWeight: 500 }}>{item.value}</p>
          </div>
        ))}
      </div>

      {/* The Problem */}
      <div style={{ marginBottom: '5rem' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.5rem' }}>The Problem</p>
        <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontFamily: "'Playfair Display', serif", fontWeight: 400, lineHeight: 1.6, color: 'var(--fg)', maxWidth: '680px', marginBottom: '2rem' }}>
          The page had strong organic traffic but a broken experience. Users were landing and leaving — and most of them were on mobile.
        </p>
        <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '620px', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          Google Analytics confirmed the CBD Oil for Dogs page was a top organic performer. But bounce rates and drop-off data told a different story — users weren't finding what they needed fast enough. With 85% of traffic on mobile, the existing layout failed to prioritize the right content at the right time.
        </p>
        <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '620px', lineHeight: 1.8 }}>
          The added constraint: we couldn't remove or restructure the existing SEO content below the fold — it was keeping the page ranked. The redesign had to work <em>around</em> it.
        </p>
      </div>

      <div style={{ borderTop: '1px solid var(--border)', marginBottom: '5rem' }} />

      {/* Research */}
      <div style={{ marginBottom: '5rem' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.5rem' }}>Research & Discovery</p>
        <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontFamily: "'Playfair Display', serif", fontWeight: 400, lineHeight: 1.6, color: 'var(--fg)', maxWidth: '680px', marginBottom: '3rem' }}>
          Before designing anything, I needed to understand who was actually landing on this page — and what they were looking for.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1px', backgroundColor: 'var(--border)', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden', marginBottom: '2.5rem' }}>
          {[
            { type: 'User type 01', label: 'The Explorer', desc: 'Brand new to CBD. No prior knowledge, curious but cautious. Needs education before they\'ll consider purchasing.' },
            { type: 'User type 02', label: 'The Researcher', desc: 'Knows about CBD, actively comparing options. Looking for trust signals, ingredient details, and third-party proof.' },
            { type: 'User type 03', label: 'The Buyer', desc: 'Ready to purchase. Returning visitor or high-intent newcomer. Needs to get to the product fast — don\'t slow them down.' },
          ].map(item => (
            <div key={item.type} style={{ backgroundColor: 'var(--bg)', padding: '1.5rem' }}>
              <p style={{ fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.5rem' }}>{item.type}</p>
              <p style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--fg)', marginBottom: '0.5rem' }}>{item.label}</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Research images */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2.5rem' }}>
          {[
            { src: 'https://images.squarespace-cdn.com/content/v1/5c19a264e74940df765b8a67/1606196876538-335YNIDCWKGUHUWCW1H2/HonestPawsResearch1.png', alt: 'Analytics research data' },
            { src: 'https://images.squarespace-cdn.com/content/v1/5c19a264e74940df765b8a67/1606196894821-525TGW1SGDER66UTWQZM/awsResearch2.png', alt: 'User research findings' },
          ].map((img, i) => (
            <div key={i} style={imgWrap}>
              <img src={img.src} alt={img.alt} style={imgStyle} />
            </div>
          ))}
        </div>

        <div style={{ padding: '2rem', borderLeft: '3px solid var(--fg)', backgroundColor: 'var(--tag-bg)', borderRadius: '0 12px 12px 0' }}>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontStyle: 'italic', color: 'var(--fg)', lineHeight: 1.6, marginBottom: '0.75rem' }}>
            "85% of our traffic is on mobile — and they're bouncing. We're not showing them what they need, fast enough."
          </p>
          <p style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>Data synthesis from Hotjar + Google Analytics — the brief that shaped everything</p>
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--border)', marginBottom: '5rem' }} />

      {/* Design Decisions */}
      <div style={{ marginBottom: '5rem' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.5rem' }}>Design Decisions</p>
        <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontFamily: "'Playfair Display', serif", fontWeight: 400, lineHeight: 1.6, color: 'var(--fg)', maxWidth: '680px', marginBottom: '3rem' }}>
          One page, three user intents. The design had to serve all of them without feeling bloated or generic.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: 'var(--border)', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden', marginBottom: '2.5rem' }}>
          {[
            { num: '01', title: 'Anchor navigation slider', desc: 'A sticky nav with smooth-scrolling anchor links lets users jump directly to what they need — education, comparison, or checkout. No more linear scrolling through irrelevant content.' },
            { num: '02', title: 'Card-based layout for three intents', desc: 'Informational banner cards for Explorers and Researchers. Product cards for Buyers. Each card type has a distinct visual weight and CTA — users self-select their path without realizing it.' },
            { num: '03', title: 'Mobile-first above the fold', desc: 'Critical content — trust signals, product options, and primary CTA — surfaced above the fold on mobile. Users get what they need in seconds, not after scrolling past a wall of text.' },
            { num: '04', title: 'SEO content preserved below fold', desc: 'The existing long-form content stayed in place. Redesigning around it rather than removing it protected organic rankings while improving the experience for real users.' },
            { num: '05', title: 'Data-informed hypothesis testing', desc: 'Worked directly with the product team to frame each design decision as a testable hypothesis — grounded in Hotjar heatmaps, GA drop-off data, and customer service insights.' },
          ].map(item => (
            <div key={item.num} style={{ display: 'flex', gap: '1.5rem', padding: '1.5rem', backgroundColor: 'var(--bg)', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '0.7rem', color: 'var(--muted)', minWidth: '1.5rem', paddingTop: '2px' }}>{item.num}</span>
              <div>
                <p style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--fg)', marginBottom: '0.35rem' }}>{item.title}</p>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Design images */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
          {[
            { src: 'https://images.squarespace-cdn.com/content/v1/5c19a264e74940df765b8a67/1606197146797-2CZA52EDVD8P8YA1QCPN/image-asset.png', alt: 'Design wireframes' },
            { src: 'https://images.squarespace-cdn.com/content/v1/5c19a264e74940df765b8a67/1606197166384-L0BJ4WKCFCGTMTRHOGMM/image-asset.png', alt: 'Mobile design screens' },
          ].map((img, i) => (
            <div key={i} style={imgWrap}>
              <img src={img.src} alt={img.alt} style={imgStyle} />
            </div>
          ))}
        </div>
        <div style={imgWrap}>
          <img src="https://images.squarespace-cdn.com/content/v1/5c19a264e74940df765b8a67/1606233174910-TL2H6HLQK8TEY9V9J8E7/CBDOilForDogsZeplin.png" alt="Zeplin design handoff specs" style={imgStyle} />
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--border)', marginBottom: '5rem' }} />

      {/* How I Worked */}
      <div style={{ marginBottom: '5rem' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.5rem' }}>How I Worked</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {[
            { title: '2-week sprints', desc: 'Managed design work in Asana across agile sprint cycles — staying aligned with product and development without losing design momentum.' },
            { title: 'Cross-geo dev teams', desc: 'Collaborated with development teams in Puerto Rico and South America. Used Zeplin for precise handoff specs to remove ambiguity across time zones.' },
            { title: 'Data-driven iteration', desc: 'Pulled insights directly from Hotjar heatmaps and Google Analytics to validate decisions and inform the next round of design hypotheses.' },
            { title: 'Full design system contribution', desc: 'Worked alongside UI/UX colleagues to extend Honest Paws\' design system — ensuring new components were reusable across the site.' },
          ].map(item => (
            <div key={item.title} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--card)' }}>
              <p style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--fg)', marginBottom: '0.5rem' }}>{item.title}</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--border)', marginBottom: '5rem' }} />

      {/* Outcome */}
      <div style={{ marginBottom: '5rem' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.5rem' }}>Outcome</p>
        <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontFamily: "'Playfair Display', serif", fontWeight: 400, lineHeight: 1.6, color: 'var(--fg)', maxWidth: '680px', marginBottom: '2.5rem' }}>
          A redesigned page that serves three distinct user types, prioritizes mobile, and protects organic search rankings.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', backgroundColor: 'var(--border)', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
          {[
            { stat: '85%', label: 'Mobile traffic', sub: 'redesigned mobile-first' },
            { stat: '3', label: 'User types served', sub: 'explorer, researcher, buyer' },
            { stat: '0', label: 'SEO impact', sub: 'rankings fully preserved' },
          ].map(item => (
            <div key={item.stat} style={{ backgroundColor: 'var(--bg)', padding: '2rem 1.5rem' }}>
              <p style={{ fontSize: '2rem', fontFamily: "'Playfair Display', serif", fontWeight: 400, color: 'var(--fg)', marginBottom: '0.25rem' }}>{item.stat}</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--fg)', fontWeight: 500, marginBottom: '0.2rem' }}>{item.label}</p>
              <p style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{item.sub}</p>
            </div>
          ))}
        </div>
        <a href="https://www.honestpaws.com/collections/cbd-oil-for-dogs/" target="_blank" rel="noopener noreferrer"
          style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--fg)', borderBottom: '1px solid var(--fg)', paddingBottom: '2px' }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.5'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          View live page ↗
        </a>
      </div>
    </>
  )
}

function Floracracy() {
  const imgStyle = { width: '100%', display: 'block', objectFit: 'cover', mixBlendMode: 'multiply' }
  const imgWrap = { borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border)', backgroundColor: '#fff' }
  const divider = <div style={{ borderTop: '1px solid var(--border)', marginBottom: '5rem' }} />

  return (
    <>
      {/* Hero */}
      <div style={{ marginBottom: '5rem' }}>
        <p style={{ fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.5rem' }}>
          04 — Floral Arrangement Builder
        </p>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontFamily: "'Playfair Display', serif", fontWeight: 400, lineHeight: 1.1, color: 'var(--fg)', marginBottom: '1.5rem' }}>
          Redesigning a floral studio<br />for creativity, not confusion.
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--muted)', maxWidth: '580px', lineHeight: 1.8 }}>
          Floracracy merges technology and personalized service to let customers design their own custom floral arrangements. The creation tool was the core of the product — but users found it clunky, confusing, and frustrating. I redesigned it from the ground up, alongside the marketing site, in a fast-moving startup environment.
        </p>
      </div>

      {/* Hero image */}
      <div style={{ marginBottom: '5rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)' }}>
        <img src="https://images.squarespace-cdn.com/content/v1/5c19a264e74940df765b8a67/1606139832770-HDDC4EI5NJPLJEUDBVMS/Floracracy+image+Main.png" alt="Floracracy creation tool" style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
      </div>

      {/* Meta */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1px', backgroundColor: 'var(--border)', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden', marginBottom: '5rem' }}>
        {[
          { label: 'Role', value: 'Lead Designer' },
          { label: 'Scope', value: 'Marketing site + Creation tool' },
          { label: 'Environment', value: 'Startup · Rapid iteration' },
          { label: 'Tools', value: 'Figma' },
        ].map(item => (
          <div key={item.label} style={{ backgroundColor: 'var(--bg)', padding: '1.5rem' }}>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.5rem' }}>{item.label}</p>
            <p style={{ fontSize: '0.95rem', color: 'var(--fg)', fontWeight: 500 }}>{item.value}</p>
          </div>
        ))}
      </div>

      {/* The Problem */}
      <div style={{ marginBottom: '5rem' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.5rem' }}>The Problem</p>
        <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontFamily: "'Playfair Display', serif", fontWeight: 400, lineHeight: 1.6, color: 'var(--fg)', maxWidth: '680px', marginBottom: '2rem' }}>
          Floracracy's core promise was creative freedom. The product wasn't delivering it.
        </p>
        <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '620px', lineHeight: 1.8 }}>
          The creation tool was the centerpiece of the experience — the place where customers could express themselves and build something personal. But user testing revealed it was doing the opposite. Themes felt arbitrary, customization was buried and clunky, and the overall flow left users more confused than inspired.
        </p>
      </div>

      {/* User quotes */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: 'var(--border)', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden', marginBottom: '5rem' }}>
        {[
          { quote: '"When selecting a theme, results didn\'t seem to differ based on theme choice."', context: 'User interview — theme selection confusion' },
          { quote: '"The process has been somewhat cumbersome."', context: 'User interview — overall flow feedback' },
          { quote: '"Very clunky, particularly when changing specific flowers."', context: 'User interview — customization pain point' },
        ].map((item, i) => (
          <div key={i} style={{ backgroundColor: 'var(--bg)', padding: '1.5rem 2rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '1.5rem', color: 'var(--border)', lineHeight: 1, marginTop: '-2px' }}>"</span>
            <div>
              <p style={{ fontSize: '0.95rem', fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: 'var(--fg)', lineHeight: 1.6, marginBottom: '0.5rem' }}>{item.quote}</p>
              <p style={{ fontSize: '0.75rem', color: 'var(--muted)', letterSpacing: '0.04em' }}>{item.context}</p>
            </div>
          </div>
        ))}
      </div>

      {divider}

      {/* Research */}
      <div style={{ marginBottom: '5rem' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.5rem' }}>Research & Discovery</p>
        <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontFamily: "'Playfair Display', serif", fontWeight: 400, lineHeight: 1.6, color: 'var(--fg)', maxWidth: '680px', marginBottom: '3rem' }}>
          We watched real users struggle with the tool in real time — then used those recordings to drive every design decision.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2.5rem' }}>
          {[
            { title: 'Recorded user interviews', desc: 'Observed users interacting with the product live. Watching where they hesitated, clicked wrong, or gave up revealed friction points no survey could capture.' },
            { title: 'Pain point documentation', desc: 'Catalogued every moment of confusion into a prioritized list. The creation tool topped the list by a wide margin — it was the most broken part of the experience.' },
            { title: 'Competitive analysis', desc: 'Audited 1-800-FLOWERS and boutique floral competitors to understand the category norms and identify where Floracracy could differentiate on experience.' },
            { title: 'Startup-speed synthesis', desc: 'Translated research into actionable design directions within days — not weeks. In a startup, slow research is no research.' },
          ].map(item => (
            <div key={item.title} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--card)' }}>
              <p style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--fg)', marginBottom: '0.5rem' }}>{item.title}</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Research images */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
          <div style={imgWrap}>
            <img src="https://images.squarespace-cdn.com/content/v1/5c19a264e74940df765b8a67/1606159230086-IWZGN3VLTWJMELGTI8A9/FloracracyResearch1.png" alt="Research findings" style={imgStyle} />
          </div>
          <div style={imgWrap}>
            <img src="https://images.squarespace-cdn.com/content/v1/5c19a264e74940df765b8a67/1606141690897-M9UU56FZCCKQEGF0BMRS/image-asset.png" alt="Research analysis" style={imgStyle} />
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div style={imgWrap}>
            <img src="https://images.squarespace-cdn.com/content/v1/5c19a264e74940df765b8a67/1606142097512-Y3GDTH0MHYNV74S9KOQT/Floracracy+User+Research_Page_05.jpg" alt="User research page 5" style={imgStyle} />
          </div>
          <div style={imgWrap}>
            <img src="https://images.squarespace-cdn.com/content/v1/5c19a264e74940df765b8a67/1606142203420-ID8KR0DIODUFXOPFSUA6/Floracracy+User+Research_Page_11.jpg" alt="User research page 11" style={imgStyle} />
          </div>
        </div>
      </div>

      {divider}

      {/* Design Decisions */}
      <div style={{ marginBottom: '5rem' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.5rem' }}>Design Decisions</p>
        <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontFamily: "'Playfair Display', serif", fontWeight: 400, lineHeight: 1.6, color: 'var(--fg)', maxWidth: '680px', marginBottom: '3rem' }}>
          The tool needed to feel like creative play — not a form you fill out to get flowers.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: 'var(--border)', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden', marginBottom: '2.5rem' }}>
          {[
            { num: '01', title: 'Meaningful theme differentiation', desc: 'Themes were the entry point to the creative process — but users couldn\'t feel the difference. Redesigned theme selection to visually communicate what each style means before a user commits.' },
            { num: '02', title: 'Surfaced customization controls', desc: 'Changing individual flowers was buried and clunky. Brought key controls to the surface with clear affordances — so the customization felt like the feature it was, not a hidden workaround.' },
            { num: '03', title: 'Step-by-step guided flow', desc: 'Replaced a confusing single-screen experience with a guided multi-step flow. Each question had a clear purpose and moved users forward — reducing cognitive load without removing creative control.' },
            { num: '04', title: 'Wireframes to testing in days', desc: 'No lengthy approval cycles. Wireframes were in front of real users within days of research synthesis. Feedback looped directly back into design — startup speed without sacrificing quality.' },
            { num: '05', title: 'Figma as the single source of truth', desc: 'Used Figma for feedback gathering, stakeholder reviews, and dev handoff. Kept product and engineering aligned without losing time to email chains and inconsistent specs.' },
          ].map(item => (
            <div key={item.num} style={{ display: 'flex', gap: '1.5rem', padding: '1.5rem', backgroundColor: 'var(--bg)', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '0.7rem', color: 'var(--muted)', minWidth: '1.5rem', paddingTop: '2px' }}>{item.num}</span>
              <div>
                <p style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--fg)', marginBottom: '0.35rem' }}>{item.title}</p>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Design images */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div style={imgWrap}>
            <img src="https://images.squarespace-cdn.com/content/v1/5c19a264e74940df765b8a67/1606159478266-KINZ96U6OFVLPMSNUGWD/Floracracy+image+1.jpg" alt="Floracracy design screens" style={imgStyle} />
          </div>
          <div style={imgWrap}>
            <img src="https://images.squarespace-cdn.com/content/v1/5c19a264e74940df765b8a67/1606159531691-101M4Q9T9RUQ67EPGY2B/Floracracy+image+2.jpg" alt="Floracracy creation tool screens" style={imgStyle} />
          </div>
        </div>
      </div>

      {divider}

      {/* Outcome */}
      <div style={{ marginBottom: '5rem' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.5rem' }}>Outcome</p>
        <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontFamily: "'Playfair Display', serif", fontWeight: 400, lineHeight: 1.6, color: 'var(--fg)', maxWidth: '680px', marginBottom: '2.5rem' }}>
          A redesigned creation experience that finally matched Floracracy's promise — personalized, premium, and intuitive.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', backgroundColor: 'var(--border)', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
          {[
            { stat: '2', label: 'Products delivered', sub: 'Marketing site + Creation tool' },
            { stat: 'Days', label: 'Research to wireframes', sub: 'startup-speed iteration' },
            { stat: 'Figma', label: 'Single source of truth', sub: 'design through handoff' },
          ].map(item => (
            <div key={item.stat} style={{ backgroundColor: 'var(--bg)', padding: '2rem 1.5rem' }}>
              <p style={{ fontSize: '2rem', fontFamily: "'Playfair Display', serif", fontWeight: 400, color: 'var(--fg)', marginBottom: '0.25rem' }}>{item.stat}</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--fg)', fontWeight: 500, marginBottom: '0.2rem' }}>{item.label}</p>
              <p style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{item.sub}</p>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          <a href="https://floracracy.com/" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--fg)', borderBottom: '1px solid var(--fg)', paddingBottom: '2px' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.5'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            View marketing site ↗
          </a>
          <a href="https://studio.floracracy.com/step2_whoQuestion.html?email=null&id=null&name=null" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--fg)', borderBottom: '1px solid var(--fg)', paddingBottom: '2px' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.5'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            View creation tool ↗
          </a>
        </div>
      </div>
    </>
  )
}

function Usana() {
  return (
    <>
      {/* Hero */}
      <div style={{ marginBottom: '5rem' }}>
        <p style={{ fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.5rem' }}>
          05 — Dashboard Redesign
        </p>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontFamily: "'Playfair Display', serif", fontWeight: 400, lineHeight: 1.1, color: 'var(--fg)', marginBottom: '1.5rem' }}>
          One portal. Three types<br />of users. Zero confusion.
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--muted)', maxWidth: '580px', lineHeight: 1.8 }}>
          Usana's associate portal — the Hub — was the command center for thousands of independent distributors managing their business. I led a full redesign to make it faster, clearer, and built around how people actually work.
        </p>
      </div>

      {/* Hero Image */}
      <div style={{ marginBottom: '5rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)' }}>
        <img
          src="https://images.squarespace-cdn.com/content/v1/5c19a264e74940df765b8a67/1606679162692-7PCWLWD2JYPVX0J2698Z/Usana+image.png"
          alt="Usana Hub portal overview"
          style={{ width: '100%', display: 'block', objectFit: 'cover' }}
        />
      </div>

      {/* Meta */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1px', backgroundColor: 'var(--border)', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden', marginBottom: '5rem' }}>
        {[
          { label: 'Role', value: 'Lead Designer' },
          { label: 'Duration', value: '2+ Years' },
          { label: 'Platform', value: 'Web · Responsive' },
          { label: 'Tools', value: 'Sketch, InVision, Jira' },
        ].map(item => (
          <div key={item.label} style={{ backgroundColor: 'var(--bg)', padding: '1.5rem' }}>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.5rem' }}>{item.label}</p>
            <p style={{ fontSize: '0.95rem', color: 'var(--fg)', fontWeight: 500 }}>{item.value}</p>
          </div>
        ))}
      </div>

      {/* The Challenge */}
      <div style={{ marginBottom: '5rem' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.5rem' }}>The Challenge</p>
        <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontFamily: "'Playfair Display', serif", fontWeight: 400, lineHeight: 1.6, color: 'var(--fg)', maxWidth: '680px', marginBottom: '2rem' }}>
          Associates were expected to manage auto-orders, track sales, monitor team growth, access news, and run their business — all from a portal that buried everything in nested navigation and data tables.
        </p>
        <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '620px', lineHeight: 1.8 }}>
          The Hub had grown organically over time — features bolted on, navigation bloated, mobile experience ignored. With the majority of traffic coming from mobile, we had a real usability problem on our hands. The challenge was to redesign from the inside out without disrupting an active user base.
        </p>
      </div>

      <div style={{ borderTop: '1px solid var(--border)', marginBottom: '5rem' }} />

      {/* Research */}
      <div style={{ marginBottom: '5rem' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.5rem' }}>Research & Discovery</p>
        <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '620px', lineHeight: 1.8, marginBottom: '2.5rem' }}>
          Working with a dedicated design researcher, we ran user interviews, usability tests, and behavioral analysis. Traffic data revealed that associates weren't a monolith — three distinct usage patterns emerged, each with radically different needs.
        </p>

        {/* User test image */}
        <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)', marginBottom: '2.5rem' }}>
          <img
            src="https://images.squarespace-cdn.com/content/v1/5c19a264e74940df765b8a67/1606240024765-PRB80ZY83EHO1LAV4EXO/UserTest1.jpg"
            alt="User testing session"
            style={{ width: '100%', display: 'block', objectFit: 'cover' }}
          />
        </div>

        {/* 3 user segments */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '2.5rem' }}>
          {[
            {
              type: 'New Associates',
              freq: 'First visit',
              pain: 'No onboarding direction. Didn\'t know where to start or what to do next.',
              fix: 'Contextual notification system guiding first steps; planned AppCues onboarding integration.',
            },
            {
              type: 'Returning Associates',
              freq: 'Weekly visitors',
              pain: 'Came primarily for promotions and personal site management. Too many clicks to get there.',
              fix: 'Quick links and a surfaced promotions widget on the home dashboard.',
            },
            {
              type: 'Power Users',
              freq: 'Daily visitors',
              pain: 'Needed to track business growth and manage their team. Data was buried in complex tables.',
              fix: 'At-a-glance dashboard widgets that reduced data access from 5+ clicks to one.',
            },
          ].map(seg => (
            <div key={seg.type} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--card)' }}>
              <p style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.5rem' }}>{seg.freq}</p>
              <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--fg)', marginBottom: '0.75rem' }}>{seg.type}</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '0.75rem' }}><strong style={{ color: 'var(--fg)', fontWeight: 500 }}>Pain:</strong> {seg.pain}</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.7 }}><strong style={{ color: 'var(--fg)', fontWeight: 500 }}>Solution:</strong> {seg.fix}</p>
            </div>
          ))}
        </div>

        {/* Key insight */}
        <div style={{ padding: '2rem', borderLeft: '3px solid var(--fg)', backgroundColor: 'var(--tag-bg)', borderRadius: '0 12px 12px 0' }}>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontStyle: 'italic', color: 'var(--fg)', lineHeight: 1.6, marginBottom: '0.75rem' }}>
            "Designing for one average user was the wrong model. We needed to design for three distinct mindsets — and make each feel like the portal was built for them."
          </p>
          <p style={{ fontSize: '0.75rem', color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Insight from user research synthesis</p>
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--border)', marginBottom: '5rem' }} />

      {/* Design System */}
      <div style={{ marginBottom: '5rem' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.5rem' }}>Design System</p>
        <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)', fontFamily: "'Playfair Display', serif", fontWeight: 400, lineHeight: 1.6, color: 'var(--fg)', maxWidth: '680px', marginBottom: '1.5rem' }}>
          A component strategy built to scale.
        </p>
        <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '620px', lineHeight: 1.8, marginBottom: '2.5rem' }}>
          As the team grew, so did inconsistency. We built a shared Sketch component library with documented usage guidelines — covering process optimization, component delivery, QA standards, and scalability. This cut design-to-dev handoff friction and gave engineers a single source of truth.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          {[
            {
              src: 'https://images.squarespace-cdn.com/content/v1/5c19a264e74940df765b8a67/1606678689181-7JUHET816KIW7QGIFMDV/image-asset.png',
              alt: 'Usana design system components',
            },
            {
              src: 'https://images.squarespace-cdn.com/content/v1/5c19a264e74940df765b8a67/1606678666218-8LW9J9L0T4VPGZE9YZ60/UsanaSystem2.png',
              alt: 'Usana design system documentation',
            },
          ].map((img, i) => (
            <div key={i} style={{ borderRadius: '10px', overflow: 'hidden', border: '1px solid var(--border)', backgroundColor: '#fff' }}>
              <img src={img.src} alt={img.alt} style={{ width: '100%', display: 'block', objectFit: 'cover', mixBlendMode: 'multiply' }} />
            </div>
          ))}
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--border)', marginBottom: '5rem' }} />

      {/* Design Decisions */}
      <div style={{ marginBottom: '5rem' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.5rem' }}>Design Decisions</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {[
            {
              n: '01',
              title: 'Navigation overhaul',
              desc: 'Collapsed a sprawling nav into clear, task-oriented groupings. Reduced visible nav items by 40% while making everything more findable — confirmed through card sorting sessions.',
            },
            {
              n: '02',
              title: 'Widgets over tables',
              desc: 'Replaced complex data tables with at-a-glance dashboard widgets for sales volume, team activity, and performance trends. Power users went from 5+ clicks to surface key data to one.',
            },
            {
              n: '03',
              title: 'Contextual notifications',
              desc: 'Built a smart notification layer that surfaced relevant next steps based on user type and account status — guiding new users, surfacing promotions for weekly visitors, and alerting power users to team activity.',
            },
            {
              n: '04',
              title: 'Mobile-first execution',
              desc: 'With the majority of traffic on mobile, we designed responsive-first. Every widget, nav pattern, and data visualization was tested on small screens before desktop.',
            },
            {
              n: '05',
              title: '2-week sprint cadence',
              desc: 'Worked in cross-functional sprints with daily scrums, bi-weekly sprint planning, and Jira-tracked delivery. Design handoff followed a structured QA checklist before any component went to engineering.',
            },
          ].map(item => (
            <div key={item.n} style={{ display: 'grid', gridTemplateColumns: '3rem 1fr', gap: '1.5rem', alignItems: 'start' }}>
              <span style={{ fontSize: '0.7rem', color: 'var(--muted)', fontVariantNumeric: 'tabular-nums', paddingTop: '0.15rem' }}>{item.n}</span>
              <div>
                <p style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--fg)', marginBottom: '0.4rem' }}>{item.title}</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--border)', marginBottom: '5rem' }} />

      {/* Final Screens */}
      <div style={{ marginBottom: '5rem' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.5rem' }}>Final Screens</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
          {[
            {
              src: 'https://images.squarespace-cdn.com/content/v1/5c19a264e74940df765b8a67/1606751385629-W6LZ0Q4226RCOJ5S3981/Data%2BWidgets.png',
              alt: 'Usana data widgets dashboard',
            },
            {
              src: 'https://images.squarespace-cdn.com/content/v1/5c19a264e74940df765b8a67/1606751514224-N59SDWID2JAEDTIHVBBG/Hub4WeekReport.jpg',
              alt: 'Usana Hub 4-week report',
            },
          ].map((img, i) => (
            <div key={i} style={{ borderRadius: '10px', overflow: 'hidden', border: '1px solid var(--border)', backgroundColor: '#fff' }}>
              <img src={img.src} alt={img.alt} style={{ width: '100%', display: 'block', objectFit: 'cover', mixBlendMode: 'multiply' }} />
            </div>
          ))}
        </div>
        <div style={{ borderRadius: '10px', overflow: 'hidden', border: '1px solid var(--border)', backgroundColor: '#fff' }}>
          <img
            src="https://images.squarespace-cdn.com/content/v1/5c19a264e74940df765b8a67/1606751673778-MM5UNROWARC7DEPEPUBM/image-asset.jpeg"
            alt="Usana Hub responsive design"
            style={{ width: '100%', display: 'block', objectFit: 'cover', mixBlendMode: 'multiply' }}
          />
        </div>
      </div>

      {/* Outcome */}
      <div style={{ padding: '3rem', backgroundColor: 'var(--tag-bg)', borderRadius: '16px' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '2rem' }}>Outcome</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '2rem' }}>
          {[
            { stat: '2+ yrs', label: 'Leading design across sprints and a growing team' },
            { stat: '3 types', label: 'Distinct user needs addressed in one unified portal' },
            { stat: '↓ 40%', label: 'Reduction in visible nav items with improved findability' },
          ].map(item => (
            <div key={item.stat}>
              <p style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontFamily: "'Playfair Display', serif", fontWeight: 400, color: 'var(--fg)', marginBottom: '0.4rem' }}>{item.stat}</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.6 }}>{item.label}</p>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.8, maxWidth: '580px' }}>
          The redesigned Hub gave Usana's associates a portal that worked for who they actually were — not a generic dashboard trying to serve everyone and serving no one well.
        </p>
      </div>
    </>
  )
}

function Placeholder({ project }) {
  return (
    <>
      <div style={{ marginBottom: '5rem' }}>
        <p style={{ fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.5rem' }}>
          {project.number} — {project.category}
        </p>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontFamily: "'Playfair Display', serif", fontWeight: 400, lineHeight: 1.1, color: 'var(--fg)', marginBottom: '1.5rem' }}>
          {project.title}
        </h1>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          {project.tags.map(tag => (
            <span key={tag} style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem', borderRadius: '100px', backgroundColor: 'var(--tag-bg)', color: 'var(--muted)' }}>{tag}</span>
          ))}
        </div>
      </div>
      <div style={{ border: '1px solid var(--border)', borderRadius: '12px', padding: '6rem 2rem', textAlign: 'center' }}>
        <p style={{ fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1rem' }}>Case Study</p>
        <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', color: 'var(--fg)', fontWeight: 400 }}>Full case study coming soon.</p>
      </div>
    </>
  )
}

export default function CaseStudyPage() {
  const { slug } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  const project = projects.find(p => p.slug === slug)
  const currentIndex = projects.findIndex(p => p.slug === slug)
  const prev = projects[currentIndex - 1]
  const next = projects[currentIndex + 1]

  const goToWork = () => {
    navigate('/')
    setTimeout(() => {
      document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
    }, 150)
  }


  if (!project) {
    return (
      <div style={{ padding: '8rem 2rem', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ color: 'var(--muted)', marginBottom: '1rem' }}>Project not found.</p>
        <Link to="/" style={{ color: 'var(--fg)', borderBottom: '1px solid var(--fg)' }}>← Back to home</Link>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg)' }}>
      {/* Nav */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 2rem', height: '64px',
        display: 'grid', gridTemplateColumns: '1fr auto 1fr',
        alignItems: 'center',
        backgroundColor: 'var(--bg)',
        borderBottom: '1px solid var(--border)',
      }}>
        <Link to="/" style={{ fontSize: '1rem', fontFamily: "'Playfair Display', serif", fontWeight: 400, color: 'var(--fg)' }}>
          Khoa
        </Link>
        <AnimatePresence mode="wait">
          <motion.div
            key={slug}
            style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            {prev && (
              <Link to={`/work/${prev.slug}`} style={{ fontSize: '0.8rem', color: 'var(--muted)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--fg)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
              >
                ← {prev.title}
              </Link>
            )}
            {next && (
              <Link to={`/work/${next.slug}`} style={{ fontSize: '0.8rem', color: 'var(--muted)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--fg)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
              >
                {next.title} →
              </Link>
            )}
          </motion.div>
        </AnimatePresence>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <span
            onClick={goToWork}
            style={{ fontSize: '0.8rem', color: 'var(--muted)', cursor: 'pointer' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--fg)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
          >
            All work
          </span>
        </div>
      </nav>

      {/* Content */}
      <main style={{ padding: '8rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {slug === 'thycotic' ? <Thycotic /> : slug === 'honest-paws' ? <HonestPaws /> : slug === 'floracracy' ? <Floracracy /> : slug === 'usana' ? <Usana /> : <Placeholder project={project} />}

          {/* Prev / Next */}
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {prev ? (
              <Link to={`/work/${prev.slug}`} style={{ textDecoration: 'none' }}>
                <span style={{ fontSize: '0.7rem', color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>← Previous</span>
                <p style={{ fontSize: '1rem', fontFamily: "'Playfair Display', serif", color: 'var(--fg)', marginTop: '0.25rem' }}>{prev.title}</p>
              </Link>
            ) : <div />}
            {next ? (
              <Link to={`/work/${next.slug}`} style={{ textDecoration: 'none', textAlign: 'right' }}>
                <span style={{ fontSize: '0.7rem', color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Next →</span>
                <p style={{ fontSize: '1rem', fontFamily: "'Playfair Display', serif", color: 'var(--fg)', marginTop: '0.25rem' }}>{next.title}</p>
              </Link>
            ) : <div />}
          </div>
        </motion.div>
      </main>
    </div>
  )
}
