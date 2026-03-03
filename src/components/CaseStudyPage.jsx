import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const logoHoverStyles = [
  { fontFamily: "'Playfair Display', serif", fontWeight: 700, fontStyle: 'italic', letterSpacing: '0.02em' },
  { fontFamily: "'Courier New', monospace", fontWeight: 700, fontStyle: 'normal', letterSpacing: '-0.03em' },
  { fontFamily: "Impact, 'Arial Narrow', sans-serif", fontWeight: 900, fontStyle: 'normal', letterSpacing: '0.12em', textTransform: 'uppercase' },
  { fontFamily: "Georgia, serif", fontWeight: 400, fontStyle: 'italic', letterSpacing: '0.05em' },
  { fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive", fontWeight: 400, fontStyle: 'normal', letterSpacing: '0.03em' },
  { fontFamily: "'Arial Black', 'Arial Bold', sans-serif", fontWeight: 900, fontStyle: 'normal', letterSpacing: '-0.04em' },
  { fontFamily: "'Inter', sans-serif", fontWeight: 100, fontStyle: 'normal', letterSpacing: '0.25em', textTransform: 'uppercase' },
  { fontFamily: "'Times New Roman', serif", fontWeight: 700, fontStyle: 'italic', letterSpacing: '0.01em' },
  { fontFamily: "'Trebuchet MS', sans-serif", fontWeight: 400, fontStyle: 'normal', letterSpacing: '0.08em' },
  { fontFamily: "Palatino, 'Palatino Linotype', serif", fontWeight: 400, fontStyle: 'italic', letterSpacing: '0.04em' },
  { fontFamily: "'Inter', sans-serif", fontWeight: 900, fontStyle: 'normal', letterSpacing: '-0.06em', textTransform: 'lowercase' },
  { fontFamily: "'Courier New', monospace", fontWeight: 400, fontStyle: 'italic', letterSpacing: '0.06em' },
  { fontFamily: "Georgia, serif", fontWeight: 700, fontStyle: 'normal', letterSpacing: '-0.01em' },
  { fontFamily: "'Playfair Display', serif", fontWeight: 900, fontStyle: 'normal', letterSpacing: '-0.02em' },
  { fontFamily: "'Inter', sans-serif", fontWeight: 200, fontStyle: 'normal', letterSpacing: '0.28em', textTransform: 'uppercase' },
  { fontFamily: "Verdana, Geneva, sans-serif", fontWeight: 400, fontStyle: 'normal', letterSpacing: '-0.02em' },
  { fontFamily: "Monaco, 'Lucida Console', monospace", fontWeight: 400, fontStyle: 'normal', letterSpacing: '0.05em' },
  { fontFamily: "'Helvetica Neue', Helvetica, sans-serif", fontWeight: 300, fontStyle: 'italic', letterSpacing: '0.1em' },
  { fontFamily: "Arial, sans-serif", fontWeight: 900, fontStyle: 'italic', letterSpacing: '-0.03em' },
  { fontFamily: "'Inter', sans-serif", fontWeight: 500, fontStyle: 'normal', letterSpacing: '0.18em', textTransform: 'uppercase' },
]

const projects = [
  { slug: 'ethos', number: '01', title: 'Ethos', category: 'Learning Management Platform', tags: ['Platform Redesign', 'LMS', 'Design System', 'AI Workflow'] },
  { slug: 'splash', number: '02', title: 'Splash', category: 'Event Management · VEP Preview', tags: ['Product Design', 'UX Research', 'Enterprise', 'SaaS'] },
  { slug: 'thycotic', number: '03', title: 'Thycotic', category: 'Privileged Access Management', tags: ['UX Research', 'Enterprise', 'Mobile', 'Security'] },
  { slug: 'honest-paws', number: '04', title: 'Honest Paws', category: 'Ecommerce · Pet CBD', tags: ['Ecommerce', 'Conversion', 'DTC'] },
  { slug: 'floracracy', number: '05', title: 'Floracracy', category: 'Floral Arrangement Builder', tags: ['Product Design', 'Interactive', 'Builder'] },
  { slug: 'usana', number: '06', title: 'Usana', category: 'Dashboard Redesign', tags: ['Dashboard', 'Data Viz', 'B2B'] },
]

function Thycotic() {
  return (
    <>
      {/* Hero */}
      <div style={{ marginBottom: '5rem' }}>
        <p style={{ fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.5rem' }}>
          03 — Privileged Access Management
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
          04 — Ecommerce · Pet CBD
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
          05 — Floral Arrangement Builder
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
          06 — Dashboard Redesign
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

function Splash() {
  return (
    <>
      {/* Hero */}
      <div style={{ marginBottom: '5rem' }}>
        <p style={{ fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.5rem' }}>
          02 — Event Management · VEP Preview
        </p>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontFamily: "'Playfair Display', serif", fontWeight: 400, lineHeight: 1.1, color: 'var(--fg)', marginBottom: '1.5rem' }}>
          Giving event hosts confidence<br />with a live preview experience.
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--muted)', maxWidth: '580px', lineHeight: 1.8 }}>
          Splash is an event management platform used by enterprise teams worldwide. I designed the VEP Preview feature — a timeline-based preview that lets hosts see exactly what their attendees will experience at every stage of a virtual event.
        </p>
      </div>

      {/* Hero Image */}
      <div style={{ marginBottom: '5rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)' }}>
        <img
          src="/assets/splash/goals.png"
          alt="Splash VEP Preview — timeline mechanism showing event states"
          style={{ width: '100%', display: 'block', objectFit: 'cover' }}
        />
      </div>

      {/* Meta Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1px', backgroundColor: 'var(--border)', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden', marginBottom: '5rem' }}>
        {[
          { label: 'Role', value: 'Sr. Product Designer' },
          { label: 'Team', value: 'Hybrid Strategy' },
          { label: 'Products', value: 'Studios, Sessions, VF' },
          { label: 'Collaboration', value: '2 PMs, Devs (US, Spain, CA)' },
        ].map(item => (
          <div key={item.label} style={{ backgroundColor: 'var(--bg)', padding: '1.5rem' }}>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.5rem' }}>{item.label}</p>
            <p style={{ fontSize: '0.95rem', color: 'var(--fg)', fontWeight: 500 }}>{item.value}</p>
          </div>
        ))}
      </div>

      {/* Philosophy */}
      <div style={{ marginBottom: '5rem' }}>
        <div style={{ padding: '2rem', borderLeft: '3px solid var(--fg)', backgroundColor: 'var(--tag-bg)', borderRadius: '0 12px 12px 0', marginBottom: '2rem' }}>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontStyle: 'italic', color: 'var(--fg)', lineHeight: 1.6, marginBottom: '0.75rem' }}>
            "Design with purpose; solve for the user and the business."
          </p>
          <p style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>Design philosophy</p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {['Thought Partner', 'Build Fast Prototypes', 'Data Driven', 'MVP & Test', 'Accessibility', 'Inclusive Design', 'Simplify'].map(tag => (
            <span key={tag} style={{ fontSize: '0.75rem', padding: '0.3rem 0.85rem', borderRadius: '100px', backgroundColor: 'var(--tag-bg)', color: 'var(--muted)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: '1px solid var(--border)', marginBottom: '5rem' }} />

      {/* The Problem */}
      <div style={{ marginBottom: '5rem' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.5rem' }}>The Problem</p>
        <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontFamily: "'Playfair Display', serif", fontWeight: 400, lineHeight: 1.6, color: 'var(--fg)', maxWidth: '680px', marginBottom: '2rem' }}>
          Users couldn't see what their attendees would see. They were building events blind — and they were scared of breaking things.
        </p>
        <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '620px', lineHeight: 1.8, marginBottom: '2.5rem' }}>
          The event creation flow — Log In, Create Event, Select Touch Points, Virtual Event Page — had no preview capability. Users described feeling anxious they'd mess something up during creation, especially anything related to design or content. They wanted the ability to see what attendees would experience before going live.
        </p>

        {/* Problem visual */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2.5rem' }}>
          <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)' }}>
            <img src="/assets/splash/problem-statement-2.png" alt="No preview in the creation flow" style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
          </div>
          <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)' }}>
            <img src="/assets/splash/problem-statement-3.png" alt="Research findings — users afraid to break things" style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
          </div>
        </div>

        {/* OKR-driven problem statements */}
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.5rem' }}>Company OKRs Driving the Work</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: 'var(--border)', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden' }}>
          {[
            { num: '01', title: 'Remove friction that creates challenges for growth', desc: 'The lack of preview was a key friction point in the VEP adoption funnel. Users couldn\'t confidently build events without seeing the output.' },
            { num: '02', title: 'Re-establish confidence in Splash\'s in-person solutions', desc: 'As events shifted back to in-person and hybrid, users needed trust in the platform\'s ability to deliver polished attendee experiences.' },
            { num: '03', title: 'Solidify the enterprise segment', desc: 'Enterprise customers expected a professional-grade tool. A missing preview feature eroded trust with high-value accounts.' },
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
      </div>

      {/* Divider */}
      <div style={{ borderTop: '1px solid var(--border)', marginBottom: '5rem' }} />

      {/* The Solution */}
      <div style={{ marginBottom: '5rem' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.5rem' }}>The Solution</p>
        <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontFamily: "'Playfair Display', serif", fontWeight: 400, lineHeight: 1.6, color: 'var(--fg)', maxWidth: '680px', marginBottom: '2rem' }}>
          A timeline-based preview experience that shows every state of the attendee journey — from countdown to check-in to live stream.
        </p>
        <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '620px', lineHeight: 1.8, marginBottom: '2.5rem' }}>
          The preview gives hosts the ability to step through what their attendees will experience at each phase: Before Event, Day of Event (30 mins before), and Day of Event (Event Starts). Each state shows the corresponding touchpoint — Check In (Countdown), Check In (Open), and Studio Live Stream — so hosts can verify every detail before going live.
        </p>

        {/* Goal image */}
        <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)', marginBottom: '2.5rem' }}>
          <img src="/assets/splash/goals.png" alt="VEP Preview timeline with event states" style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
        </div>

        {/* User flow */}
        <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)' }}>
          <img src="/assets/splash/flows.png" alt="User flow for VEP design editing and preview" style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: '1px solid var(--border)', marginBottom: '5rem' }} />

      {/* Research & Testing */}
      <div style={{ marginBottom: '5rem' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.5rem' }}>Research & Testing</p>
        <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontFamily: "'Playfair Display', serif", fontWeight: 400, lineHeight: 1.6, color: 'var(--fg)', maxWidth: '680px', marginBottom: '2.5rem' }}>
          Leveraged the self-serve research framework to validate the design with real users — both internal and external.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2.5rem' }}>
          {[
            { title: 'Level 3 Design Testing', desc: 'Used the internal Self-Serve Research Framework to test high-fidelity designs. Level 3 required both external and internal validation.' },
            { title: '5 External Interviews', desc: 'Spoke directly with event hosts and enterprise customers to validate the preview concept and timeline mechanism.' },
            { title: '5 Internal Interviews', desc: 'Gathered feedback from Sales Engineers, Support, and GTM teams who hear user pain points firsthand.' },
            { title: 'Validated Hypothesis', desc: 'Minor UI requests, but overall users validated the VEP Preview and timeline mechanism. The core concept resonated strongly.' },
          ].map(item => (
            <div key={item.title} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--card)' }}>
              <p style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--fg)', marginBottom: '0.5rem' }}>{item.title}</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Testing image */}
        <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)' }}>
          <img src="/assets/splash/testing.png" alt="Testing methodology and results" style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: '1px solid var(--border)', marginBottom: '5rem' }} />

      {/* Development & Execution */}
      <div style={{ marginBottom: '5rem' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.5rem' }}>Development & Execution</p>
        <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontFamily: "'Playfair Display', serif", fontWeight: 400, lineHeight: 1.6, color: 'var(--fg)', maxWidth: '680px', marginBottom: '2.5rem' }}>
          Scoped the work into epics and Jira stories, coordinated with a cross-functional team across three countries.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2.5rem' }}>
          {[
            { title: 'Epic breakdown', desc: 'Translated design into actionable Jira tickets with clear scope: Preview eye button, timeline screen, card components, preview states, multi-session support, device breakpoints.' },
            { title: 'GTM & documentation', desc: 'Worked with Go-To-Market and technical writing teams to document changes for educational materials and the help center.' },
            { title: 'Feature flags', desc: 'Identified and planned feature flag rollout strategy for incremental release and safe testing in production.' },
            { title: 'Data tracking', desc: 'Defined how preview usage would be tracked to measure success against KPIs after launch.' },
          ].map(item => (
            <div key={item.title} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--card)' }}>
              <p style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--fg)', marginBottom: '0.5rem' }}>{item.title}</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Dev plan image */}
        <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)' }}>
          <img src="/assets/splash/development-plan.png" alt="Development plan with Jira epics and scope" style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: '1px solid var(--border)', marginBottom: '5rem' }} />

      {/* Business Impact */}
      <div style={{ marginBottom: '5rem' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.5rem' }}>Business Impact</p>
        <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontFamily: "'Playfair Display', serif", fontWeight: 400, lineHeight: 1.6, color: 'var(--fg)', maxWidth: '680px', marginBottom: '2.5rem' }}>
          A feature designed to remove friction — with measurable outcomes tied directly to company OKRs.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', backgroundColor: 'var(--border)', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden', marginBottom: '2.5rem' }}>
          {[
            { stat: '75%', label: 'LOE reduction', sub: '45 hrs → 11.25 hrs content production' },
            { stat: '25%', label: 'Support reduction', sub: 'target decrease in monthly hours' },
            { stat: '$974K', label: 'Annual education cost', sub: 'spend being optimized' },
          ].map(item => (
            <div key={item.stat} style={{ backgroundColor: 'var(--bg)', padding: '2rem 1.5rem' }}>
              <p style={{ fontSize: '2rem', fontFamily: "'Playfair Display', serif", fontWeight: 400, color: 'var(--fg)', marginBottom: '0.25rem' }}>{item.stat}</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--fg)', fontWeight: 500, marginBottom: '0.2rem' }}>{item.label}</p>
              <p style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{item.sub}</p>
            </div>
          ))}
        </div>

        {/* KPIs */}
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.5rem' }}>Success Metrics</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: 'var(--border)', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden' }}>
          {[
            { num: '01', title: 'Preview launch frequency', desc: 'Number of times Preview is launched during an editing session. More launches means the feature is providing value.' },
            { num: '02', title: 'VEP completion rate', desc: 'Number of users with real events on the VEP that go through all VEP states — indicating increased confidence.' },
            { num: '03', title: 'Ticket reduction', desc: 'Reduce number of support tickets relating to VEP issues — a direct measure of friction removed.' },
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
      </div>

      {/* Divider */}
      <div style={{ borderTop: '1px solid var(--border)', marginBottom: '5rem' }} />

      {/* What's Next */}
      <div style={{ marginBottom: '5rem' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.5rem' }}>What's Next</p>
        <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontFamily: "'Playfair Display', serif", fontWeight: 400, lineHeight: 1.6, color: 'var(--fg)', maxWidth: '680px', marginBottom: '2.5rem' }}>
          Ship, measure, iterate — the preview is just the beginning of building user confidence into every touchpoint.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {[
            { title: 'Monitor KPIs', desc: 'Track preview launch frequency, VEP completion rates, and support ticket volume. Target 25% increase in usage across the board.' },
            { title: 'Breakpoint support', desc: 'Continue improving the MVP by adding responsive breakpoint previews — letting hosts see how events render across devices.' },
          ].map(item => (
            <div key={item.title} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--card)' }}>
              <p style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--fg)', marginBottom: '0.5rem' }}>{item.title}</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

function Ethos() {
  const [activeOldImg, setActiveOldImg] = useState(0)
  const oldScreens = [
    { src: '/assets/ethos/old/frame-3.png', label: 'Course Management' },
    { src: '/assets/ethos/old/frame-10.png', label: 'Media Library' },
    { src: '/assets/ethos/old/analytics-_-quiz-results.png', label: 'Quiz Analytics' },
    { src: '/assets/ethos/old/frame-5.png', label: 'User Management' },
    { src: '/assets/ethos/old/grading-frame-7.png', label: 'Grading' },
    { src: '/assets/ethos/old/profile-main.png', label: 'User Profile' },
  ]
  return (
    <>
      {/* Hero */}
      <div style={{ marginBottom: '5rem' }}>
        <p style={{ fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.5rem' }}>
          01 — Learning Management Platform
        </p>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontFamily: "'Playfair Display', serif", fontWeight: 400, lineHeight: 1.1, color: 'var(--fg)', marginBottom: '1.5rem' }}>
          Redesigning an LMS from<br />admin tool to learning ecosystem.
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--muted)', maxWidth: '580px', lineHeight: 1.8, marginBottom: '2rem' }}>
          Ethos is a learning management platform built for organizations that train at scale. I led the complete redesign — transforming a traditional admin dashboard into a modern, dual-experience platform that serves both instructors and learners.
        </p>
        <a
          href="https://ethos-dashboard-master.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
            fontSize: '0.875rem', fontWeight: 500, color: 'var(--bg)',
            backgroundColor: 'var(--fg)', padding: '0.75rem 1.5rem',
            borderRadius: '8px', textDecoration: 'none', transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          <span style={{ fontSize: '1rem' }}>&#9889;</span>
          Explore the live prototype
          <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>&rarr;</span>
        </a>
      </div>

      {/* Hero Image — old vs new side by side */}
      <div style={{ marginBottom: '5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '1rem', left: '1rem', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.25rem 0.75rem', borderRadius: '100px', backgroundColor: 'var(--tag-bg)', color: 'var(--muted)', zIndex: 1 }}>Before</div>
          <img src="/assets/ethos/old/frame-3.png" alt="Old Ethos platform" style={{ width: '100%', display: 'block', objectFit: 'cover', aspectRatio: '4/3' }} />
        </div>
        <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '1rem', left: '1rem', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.25rem 0.75rem', borderRadius: '100px', backgroundColor: 'rgba(83,119,114,0.2)', color: '#537772', zIndex: 1 }}>After</div>
          <img src="/assets/ethos/ethos-after.png" alt="New Ethos platform" style={{ width: '100%', display: 'block', objectFit: 'cover', aspectRatio: '4/3' }} />
        </div>
      </div>

      {/* Meta Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1px', backgroundColor: 'var(--border)', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden', marginBottom: '5rem' }}>
        {[
          { label: 'Role', value: 'Lead Designer & Developer' },
          { label: 'Platform', value: 'Web (React SPA)' },
          { label: 'Duration', value: 'Ongoing' },
          { label: 'Tools', value: 'React, Tailwind, Vite, Claude' },
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
          The existing platform worked — but it felt like an admin tool, not a learning experience. The redesign had to serve two fundamentally different users without compromising either.
        </p>
        <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '620px', lineHeight: 1.8 }}>
          Instructors needed powerful content management, analytics, and grading tools. Learners needed an engaging, distraction-free experience that motivated progress. The old platform treated everyone as an admin — tables, sidebars, and data-dense screens that prioritized function over experience.
        </p>
      </div>

      {/* Divider */}
      <div style={{ borderTop: '1px solid var(--border)', marginBottom: '5rem' }} />

      {/* Old Platform Deep Dive */}
      <div style={{ marginBottom: '5rem' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.5rem' }}>The Old Platform</p>
        <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontFamily: "'Playfair Display', serif", fontWeight: 400, lineHeight: 1.6, color: 'var(--fg)', maxWidth: '680px', marginBottom: '2.5rem' }}>
          Functional, but one-dimensional. Every user got the same admin-centric experience regardless of their role.
        </p>

        {/* Interactive gallery */}
        <div style={{ marginBottom: '1.5rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)' }}>
          <img
            src={oldScreens[activeOldImg].src}
            alt={oldScreens[activeOldImg].label}
            style={{ width: '100%', display: 'block', objectFit: 'cover' }}
          />
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {oldScreens.map((s, i) => (
            <button
              key={s.label}
              onClick={() => setActiveOldImg(i)}
              style={{
                fontSize: '0.75rem', padding: '0.35rem 0.85rem', borderRadius: '100px', border: '1px solid var(--border)', cursor: 'pointer', transition: 'all 0.2s',
                backgroundColor: i === activeOldImg ? 'var(--fg)' : 'var(--bg)',
                color: i === activeOldImg ? 'var(--bg)' : 'var(--muted)',
              }}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Pain points */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {[
            { title: 'Single user paradigm', desc: 'No distinction between admin and learner experiences. Students navigated the same data-heavy interface as instructors.' },
            { title: 'Table-driven UI', desc: 'Course management, analytics, and grading all defaulted to dense table layouts with limited visual hierarchy.' },
            { title: 'Static content delivery', desc: 'Lessons were text-and-image only. No interactive card types, quizzes, or multimedia engagement.' },
            { title: 'No design system', desc: 'Inconsistent spacing, typography, and component patterns across pages. Dark mode was nonexistent.' },
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

      {/* Design Decisions */}
      <div style={{ marginBottom: '5rem' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.5rem' }}>Design Decisions</p>
        <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontFamily: "'Playfair Display', serif", fontWeight: 400, lineHeight: 1.6, color: 'var(--fg)', maxWidth: '680px', marginBottom: '3rem' }}>
          Every decision was guided by one question: does this make the learning experience better?
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: 'var(--border)', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden', marginBottom: '2.5rem' }}>
          {[
            { num: '01', title: 'Dual-mode architecture', desc: 'Separate admin and learner experiences that share a design system but optimize for completely different goals. Instructors get powerful management tools; learners get a focused, distraction-free interface.' },
            { num: '02', title: 'Card-based content system', desc: '12 interactive card types — from text and media to multiple choice, drawing responses, and expandable lists. Content creation became visual and modular instead of template-bound.' },
            { num: '03', title: 'Board + List dual views', desc: 'Replaced the single table layout with a Kanban board view for visual organization and a list view for quick operations. Instructors choose how they think.' },
            { num: '04', title: 'Zero-radius design language', desc: 'Sharp corners throughout — a deliberate choice for a clean, modern aesthetic. The minimalist design system uses Space Grotesk, Roboto, and a sage green accent (#537772).' },
            { num: '05', title: 'Gamified learner journey', desc: 'Five-milestone achievement system, progress visualization, "Up Next" recommendations, and onboarding tours. Learning became something to track and celebrate, not just complete.' },
            { num: '06', title: 'AI-assisted workflow', desc: 'Integrated Claude as a design and development partner — from component architecture to interaction design. The entire platform was built using an AI-first workflow.' },
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
      </div>

      {/* Divider */}
      <div style={{ borderTop: '1px solid var(--border)', marginBottom: '5rem' }} />

      {/* The New Platform */}
      <div style={{ marginBottom: '5rem' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.5rem' }}>The New Platform</p>
        <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontFamily: "'Playfair Display', serif", fontWeight: 400, lineHeight: 1.6, color: 'var(--fg)', maxWidth: '680px', marginBottom: '2.5rem' }}>
          A complete reimagining — not just a reskin. Every page, interaction, and data flow was rethought from the ground up.
        </p>

        {/* Design system showcase */}
        <div style={{ padding: '2.5rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: '#111827', marginBottom: '2rem' }}>
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#537772', marginBottom: '2rem' }}>Design System</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }}>
            {/* Typography */}
            <div>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.4rem', fontWeight: 500, color: '#f9fafb', marginBottom: '0.5rem' }}>Space Grotesk</p>
              <p style={{ fontFamily: "'Roboto', sans-serif", fontSize: '0.85rem', color: '#9ca3af' }}>Roboto for body text</p>
              <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', color: '#6b7280', marginTop: '0.25rem' }}>Space Mono — mono</p>
            </div>
            {/* Colors */}
            <div>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
                {['#111827', '#537772', '#DCFFF6', '#f9fafb'].map(c => (
                  <div key={c} style={{ width: '28px', height: '28px', backgroundColor: c, border: '1px solid #374151' }} />
                ))}
              </div>
              <p style={{ fontSize: '0.75rem', color: '#9ca3af' }}>Primary, Accent, Mint, Light</p>
            </div>
            {/* Radius */}
            <div>
              <div style={{ width: '48px', height: '48px', border: '2px solid #537772', marginBottom: '0.5rem' }} />
              <p style={{ fontSize: '0.75rem', color: '#9ca3af' }}>0px radius — sharp,<br />minimal, intentional</p>
            </div>
          </div>
        </div>

        {/* Feature highlights */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
          {[
            { title: 'Admin Dashboard', desc: 'At-risk learners, overdue training, completion rates, and quiz scores — all at a glance. Actionable insights, not just data.', color: '#537772' },
            { title: 'Learner Explore', desc: 'Personalized onboarding, progress cards, "Up Next" recommendations, and category-based course discovery.', color: '#537772' },
            { title: 'Card Editor', desc: '12 interactive card types with visual builder. Drag, arrange, preview — content creation that feels like design.', color: '#537772' },
            { title: 'Analytics Suite', desc: 'Progress, performance, retention, and compliance reporting. Interactive charts, export tools, and deep-dive modals.', color: '#537772' },
          ].map(item => (
            <div key={item.title} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--card)' }}>
              <div style={{ width: '6px', height: '6px', backgroundColor: item.color, marginBottom: '1rem' }} />
              <p style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--fg)', marginBottom: '0.5rem' }}>{item.title}</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Key insight callout */}
        <div style={{ padding: '2rem', borderLeft: '3px solid var(--fg)', backgroundColor: 'var(--tag-bg)', borderRadius: '0 12px 12px 0' }}>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontStyle: 'italic', color: 'var(--fg)', lineHeight: 1.6, marginBottom: '0.75rem' }}>
            "The biggest shift wasn't visual — it was conceptual. The old platform asked: how do we manage learners? The new one asks: how do we help people learn?"
          </p>
          <p style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>Design philosophy that guided the entire redesign</p>
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: '1px solid var(--border)', marginBottom: '5rem' }} />

      {/* Before & After Comparison */}
      <div style={{ marginBottom: '5rem' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.5rem' }}>Before & After</p>
        <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontFamily: "'Playfair Display', serif", fontWeight: 400, lineHeight: 1.6, color: 'var(--fg)', maxWidth: '680px', marginBottom: '3rem' }}>
          Side-by-side: the same platform, two different philosophies.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: 'var(--border)', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden' }}>
          {[
            { area: 'Navigation', before: 'Icon sidebar with text labels, always expanded. Single hierarchy for all users.', after: 'Collapsible icon sidebar with hover tooltips. Separate admin/learner nav with dropdown grouping.' },
            { area: 'Content Management', before: 'Flat table list with folder sidebar. No visual preview of content.', after: 'Kanban board + list dual view. Drag-and-drop organization with folder system.' },
            { area: 'Course Builder', before: 'Basic text/image lessons. Limited question types.', after: '12 card types including drawing, expandable lists, slideshows. Visual card editor with live preview.' },
            { area: 'Analytics', before: 'Single quiz results table with pagination. Basic export.', after: 'Multi-tab analytics dashboard with charts, scatter plots, compliance reporting, and fullscreen analysis.' },
            { area: 'Learner Experience', before: 'Same admin interface. No personalization or progress tracking.', after: 'Dedicated explore page, onboarding milestones, progress visualization, and achievement badges.' },
            { area: 'Design System', before: 'No formal system. Inconsistent spacing, rounded corners, basic palette.', after: 'Full token system: 90+ CSS variables, sharp corners, Space Grotesk/Roboto, dark mode, 50+ animations.' },
          ].map(item => (
            <div key={item.area} style={{ display: 'grid', gridTemplateColumns: '140px 1fr 1fr', backgroundColor: 'var(--bg)', alignItems: 'flex-start' }}>
              <div style={{ padding: '1.25rem', borderRight: '1px solid var(--border)' }}>
                <p style={{ fontSize: '0.8rem', fontWeight: 500, color: 'var(--fg)' }}>{item.area}</p>
              </div>
              <div style={{ padding: '1.25rem', borderRight: '1px solid var(--border)' }}>
                <p style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.35rem' }}>Before</p>
                <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.6 }}>{item.before}</p>
              </div>
              <div style={{ padding: '1.25rem' }}>
                <p style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#537772', marginBottom: '0.35rem' }}>After</p>
                <p style={{ fontSize: '0.8rem', color: 'var(--fg)', lineHeight: 1.6 }}>{item.after}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: '1px solid var(--border)', marginBottom: '5rem' }} />

      {/* How I Worked */}
      <div style={{ marginBottom: '5rem' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.5rem' }}>How I Worked</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {[
            { title: 'AI-first design process', desc: 'Used Claude as a design partner throughout — from initial architecture decisions to component implementation. Not just code generation, but collaborative problem-solving.' },
            { title: 'Design-to-code pipeline', desc: 'Designed directly in code. No Figma handoff, no translation loss. Every design decision was immediately testable in the browser.' },
            { title: 'Component-driven architecture', desc: 'Built a comprehensive design system with 90+ CSS variables, then composed pages from reusable patterns. Consistency by construction, not convention.' },
            { title: 'Iterative refinement', desc: 'Shipped working features fast, then refined. The card editor went through 4 major iterations. Each one informed by actually using it to create content.' },
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
          From admin tool to learning ecosystem — a platform that finally serves the people using it.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', backgroundColor: 'var(--border)', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
          {[
            { stat: '12', label: 'Card types', sub: 'interactive content blocks' },
            { stat: '90+', label: 'Design tokens', sub: 'CSS variables for consistency' },
            { stat: '2', label: 'Experiences', sub: 'admin + learner modes' },
          ].map(item => (
            <div key={item.stat} style={{ backgroundColor: 'var(--bg)', padding: '2rem 1.5rem' }}>
              <p style={{ fontSize: '2rem', fontFamily: "'Playfair Display', serif", fontWeight: 400, color: 'var(--fg)', marginBottom: '0.25rem' }}>{item.stat}</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--fg)', fontWeight: 500, marginBottom: '0.2rem' }}>{item.label}</p>
              <p style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{item.sub}</p>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', backgroundColor: 'var(--border)', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden' }}>
          {[
            { stat: '50+', label: 'Animations', sub: 'keyframes & transitions' },
            { stat: '20K+', label: 'Lines of code', sub: 'single cohesive component' },
            { stat: '1', label: 'AI partner', sub: 'Claude-assisted workflow' },
          ].map(item => (
            <div key={item.stat} style={{ backgroundColor: 'var(--bg)', padding: '2rem 1.5rem' }}>
              <p style={{ fontSize: '2rem', fontFamily: "'Playfair Display', serif", fontWeight: 400, color: 'var(--fg)', marginBottom: '0.25rem' }}>{item.stat}</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--fg)', fontWeight: 500, marginBottom: '0.2rem' }}>{item.label}</p>
              <p style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{item.sub}</p>
            </div>
          ))}
        </div>
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
  const [logoStyleIndex, setLogoStyleIndex] = useState(-1)
  const intervalRef = useRef(null)
  const counterRef = useRef(0)

  const startCycling = () => {
    counterRef.current = 0
    intervalRef.current = setInterval(() => {
      setLogoStyleIndex(counterRef.current % logoHoverStyles.length)
      counterRef.current++
    }, 65)
  }

  const stopCycling = () => {
    clearInterval(intervalRef.current)
    setLogoStyleIndex(-1)
  }

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
        <Link to="/" style={{ fontSize: '1rem', fontFamily: "'Playfair Display', serif", fontWeight: 400, fontStyle: 'normal', letterSpacing: '0', textTransform: 'none', color: 'var(--fg)', transition: 'none', userSelect: 'none', ...(logoStyleIndex >= 0 ? logoHoverStyles[logoStyleIndex] : {}) }}
          onMouseEnter={startCycling}
          onMouseLeave={stopCycling}
        >
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
        <AnimatePresence mode="wait">
        <motion.div key={slug} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
          {slug === 'ethos' ? <Ethos /> : slug === 'splash' ? <Splash /> : slug === 'thycotic' ? <Thycotic /> : slug === 'honest-paws' ? <HonestPaws /> : slug === 'floracracy' ? <Floracracy /> : slug === 'usana' ? <Usana /> : <Placeholder project={project} />}

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
        </AnimatePresence>
      </main>
    </div>
  )
}
