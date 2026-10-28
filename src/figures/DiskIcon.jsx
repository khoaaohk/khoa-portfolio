// A 3.5" floppy as a desktop icon; the label takes the project's colour.
export default function DiskIcon({ color = '#ef6a4c' }) {
  const ink = '#1c1a17'
  return (
    <svg viewBox="0 0 100 88" aria-hidden="true">
      <path d="M20 6h52l10 10v66H20z" fill="#35333a" stroke={ink} strokeWidth="4" strokeLinejoin="round" />
      <rect x="36" y="6" width="30" height="22" fill="#cfd2d6" stroke={ink} strokeWidth="3" />
      <rect x="55" y="10" width="7" height="14" fill="#5b5f66" stroke={ink} strokeWidth="2" />
      <rect x="27" y="44" width="48" height="34" fill={color} stroke={ink} strokeWidth="3" />
      <path d="M33 54h30M33 62h22M33 70h26" stroke={ink} strokeWidth="2.4" strokeLinecap="round" opacity=".55" />
    </svg>
  )
}
