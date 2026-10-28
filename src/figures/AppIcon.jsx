import { INK } from './engine'

// Desktop icons shared by the isometric screen and the flat desktop (viewBox 100 x 88).
export const APPS = [
  { id: 'about', name: 'About' },
  { id: 'resume', name: 'Résumé' },
]

export default function AppIcon({ id }) {
  const s = { stroke: INK, strokeWidth: 3, strokeLinejoin: 'round' }
  if (id === 'resume') {
    return (
      <g>
        <path d="M26 6 h34 l14 14 v62 h-48z" fill="#f8f6f0" {...s} />
        <path d="M60 6 v14 h14" fill="#e9b43c" {...s} />
        <rect x="33" y="30" width="16" height="5" fill="#ef6a4c" />
        {[42, 51, 60, 69].map(y => <path key={y} d={`M33 ${y} h34`} stroke={INK} strokeWidth="3" />)}
      </g>
    )
  }
  return (
    <g>
      <rect x="16" y="6" width="68" height="76" rx="8" fill="#e3d9c0" {...s} />
      <rect x="24" y="14" width="52" height="38" rx="3" fill="#cfe3d4" {...s} />
      <rect x="38" y="24" width="5" height="10" fill={INK} />
      <rect x="57" y="24" width="5" height="10" fill={INK} />
      <path d="M38 41 q12 8 24 0" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      <rect x="30" y="62" width="40" height="5" fill={INK} />
    </g>
  )
}
