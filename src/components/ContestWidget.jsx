import { useState } from 'react'

const Badge = ({ status }) => {
  const configs = {
    'ON-TRACK':  { color: '#2563eb', bg: 'transparent', border: '#2563eb' },
    'ACTIVE':    { color: '#2563eb', bg: 'transparent', border: '#2563eb' },
    'AT RISK':   { color: '#d97706', bg: 'transparent', border: '#d97706' },
    'ACT NOW':   { color: '#dc2626', bg: 'transparent', border: '#dc2626' },
    'CAPTURED':  { color: '#16a34a', bg: 'transparent', border: '#16a34a' },
  }
  const c = configs[status] || configs['ON-TRACK']
  return (
    <span style={{
      fontSize: '0.65rem',
      fontWeight: 600,
      letterSpacing: '0.06em',
      color: c.color,
      border: `1px solid ${c.border}`,
      borderRadius: '4px',
      padding: '2px 7px',
      whiteSpace: 'nowrap',
    }}>
      {status}
    </span>
  )
}

const ProgressBar = ({ percent }) => (
  <div style={{ height: '6px', borderRadius: '999px', background: '#e5e7eb', overflow: 'hidden' }}>
    <div style={{
      height: '100%',
      width: `${percent}%`,
      borderRadius: '999px',
      background: '#2563eb',
    }} />
  </div>
)

const StatCard = ({ label, badge, earned, total, percent, leftLabel, rightLabel, rightColor }) => (
  <div style={{
    background: '#fff',
    border: '1px solid #e5e7eb',
    borderRadius: '12px',
    padding: '20px 24px 20px',
    flex: 1,
  }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
      <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', color: '#6b7280', textTransform: 'uppercase' }}>
        {label}
      </span>
      <Badge status={badge} />
    </div>

    <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px', marginBottom: '12px' }}>
      <span style={{ fontSize: '3.5rem', fontWeight: 800, color: '#2563eb', lineHeight: 1 }}>
        {earned.toLocaleString()}
      </span>
      <span style={{ fontSize: '1.5rem', fontWeight: 400, color: '#9ca3af', marginLeft: '2px' }}>
        /{total.toLocaleString()}
      </span>
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
      <span style={{ fontSize: '0.8rem', color: '#6b7280' }}>{percent}% Complete</span>
      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: rightColor || '#111827' }}>{rightLabel}</span>
    </div>

    <ProgressBar percent={percent} />
  </div>
)

const SourceRow = ({ name, description, cvp, status, approx }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '14px 20px',
    border: '1px solid #e5e7eb',
    borderRadius: '10px',
    cursor: 'pointer',
  }}>
    <div>
      <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#111827', marginBottom: '2px' }}>{name}</div>
      <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>{description}</div>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0, marginLeft: '16px' }}>
      <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#111827', whiteSpace: 'nowrap' }}>
        {approx ? '~' : ''}{cvp} CVP
      </span>
      <Badge status={status} />
    </div>
  </div>
)

const sources = [
  { name: 'Business Centers 1',       description: 'Your CVP payout = 20% of your smaller leg',             cvp: 136, status: 'ON-TRACK', approx: true  },
  { name: 'Business Center 2',        description: 'Your CVP payout = 20% of your smaller leg',             cvp: 38,  status: 'AT RISK',  approx: true  },
  { name: 'Business Center 3',        description: 'Your CVP payout = 20% of your smaller leg',             cvp: 10,  status: 'ACT NOW',  approx: true  },
  { name: 'Preferred Customer Orders',description: '3 of 4 PCs ordered · 10% of their SVP = CVP',           cvp: 42,  status: 'ON-TRACK', approx: false },
  { name: 'Lifetime Matching Bonus',  description: '2 sponsored PaceSetters · you earn 15% of their weekly CVP', cvp: 15, status: 'CAPTURED', approx: false },
]

export default function ContestWidget() {
  const [sourcesOpen, setSourcesOpen] = useState(true)

  return (
    <div style={{
      background: '#f3f4f6',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: '40px 16px',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '780px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}>

        {/* Header card */}
        <div style={{
          background: '#fff',
          border: '1px solid #e5e7eb',
          borderRadius: '16px',
          padding: '20px 24px',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '16px',
        }}>
          {/* Left: image + title */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', flex: 1, minWidth: 0 }}>
            <div style={{
              width: '72px',
              height: '72px',
              borderRadius: '10px',
              overflow: 'hidden',
              flexShrink: 0,
              background: '#d1fae5',
            }}>
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=144&h=144&fit=crop"
                alt="Trip"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={e => { e.target.style.display = 'none' }}
              />
            </div>
            <div style={{ minWidth: 0 }}>
              <h1 style={{ fontSize: '1.375rem', fontWeight: 800, color: '#111827', lineHeight: 1.2, marginBottom: '8px' }}>
                Elevate Trip Level Progress (CVP)
              </h1>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <MetaItem icon={<CalendarIcon />} label="Jan 1 - Dec 31, 2026" />
                <MetaItem icon={<ClockIcon />} label="[X Weeks Remaining]" />
                <MetaItem icon={<ListIcon />} label="Contest Details" />
              </div>
            </div>
          </div>

          {/* Right: current reward */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            background: '#f9fafb',
            border: '1px solid #e5e7eb',
            borderRadius: '12px',
            padding: '12px 16px',
            flexShrink: 0,
            cursor: 'pointer',
          }}>
            <div style={{
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <GiftIcon />
            </div>
            <div>
              <div style={{ fontSize: '0.7rem', color: '#6b7280', marginBottom: '2px' }}>Current Reward</div>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#111827' }}>Level 1 - 5 day/4 night trip for 2</div>
            </div>
            <ChevronRightIcon />
          </div>
        </div>

        {/* Stats row */}
        <div style={{ display: 'flex', gap: '16px' }}>
          <StatCard
            label="Total CVP Earned"
            badge="ON-TRACK"
            earned={3850}
            total={5500}
            percent={70}
            leftLabel="70% Complete"
            rightLabel="1,650 CVP to go"
          />
          <StatCard
            label="This Week"
            badge="ACTIVE"
            earned={241}
            total={500}
            percent={48}
            leftLabel="48% Complete"
            rightLabel="+48 CVP at risk"
            rightColor="#dc2626"
          />
        </div>

        {/* Point sources */}
        <div style={{
          background: '#fff',
          border: '1px solid #e5e7eb',
          borderRadius: '16px',
          padding: '24px',
        }}>
          <div
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px', cursor: 'pointer' }}
            onClick={() => setSourcesOpen(o => !o)}
          >
            <div>
              <div style={{ fontSize: '0.875rem', fontWeight: 800, color: '#111827', letterSpacing: '0.02em', marginBottom: '4px' }}>
                THIS WEEK'S POINT SOURCES
              </div>
              <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>
                Where your CVP will come from — Tap a row to see what needs attention before Friday close
              </div>
            </div>
            <div style={{
              marginLeft: '16px',
              flexShrink: 0,
              color: '#6b7280',
              transform: sourcesOpen ? 'rotate(0deg)' : 'rotate(180deg)',
              transition: 'transform 0.2s',
            }}>
              <ChevronUpIcon />
            </div>
          </div>

          {sourcesOpen && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '16px' }}>
              {sources.map(s => (
                <SourceRow key={s.name} {...s} />
              ))}
            </div>
          )}
        </div>

        {/* Weekly tip */}
        <div style={{
          background: '#fefce8',
          border: '1px solid #fde68a',
          borderRadius: '16px',
          padding: '20px 24px',
          display: 'flex',
          gap: '16px',
          alignItems: 'flex-start',
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: '#fef08a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            <BulbIcon />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#111827' }}>Weekly Tip</span>
              <a href="#" style={{ fontSize: '0.8rem', fontWeight: 600, color: '#2563eb', textDecoration: 'none' }}>
                How CVP Growth Works?
              </a>
            </div>
            <p style={{ fontSize: '0.8rem', color: '#374151', lineHeight: 1.6 }}>
              Your CVP is determined by your limiting leg — the side with less Group Sales Volume. Focusing on the weaker leg of each Business Center is where your effort has the highest impact this week.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

function MetaItem({ icon, label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '0.78rem' }}>
      {icon}
      <span>{label}</span>
    </div>
  )
}

function CalendarIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="1" y="3" width="14" height="12" rx="2" />
      <path d="M1 7h14M5 1v4M11 1v4" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="8" cy="8" r="7" />
      <path d="M8 4v4l2.5 2.5" strokeLinecap="round" />
    </svg>
  )
}

function ListIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M3 4h10M3 8h10M3 12h10" />
    </svg>
  )
}

function GiftIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect x="2" y="7" width="20" height="5" />
      <line x1="12" y1="22" x2="12" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  )
}

function ChevronRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round">
      <path d="M6 4l4 4-4 4" />
    </svg>
  )
}

function ChevronUpIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M4 10l4-4 4 4" />
    </svg>
  )
}

function BulbIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ca8a04" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21h6M12 3a6 6 0 0 1 6 6c0 2.5-1.5 4.5-3 6H9c-1.5-1.5-3-3.5-3-6a6 6 0 0 1 6-6z" />
    </svg>
  )
}
