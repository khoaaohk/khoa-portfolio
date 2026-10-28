// One isometric object per case study. Front of each object is +y.
// Flags: shell (fades in see-through), inner (only shown in see-through),
// glass (always translucent), floor (always painted first), anim(t) -> {dx,dy,dz,dh,dr}.

const P = {
  tom: '#ef6a4c', mus: '#e9b43c', mint: '#8fd3b6', cob: '#4a63b8',
  blush: '#f3c3bd', cream: '#f8f6f0', ink: '#231e16', grey: '#cfc8b8', dark: '#3a342b',
}
const box = o => ({ t: 'box', ...o })
const cyl = o => ({ t: 'cyl', ...o })
const ball = o => ({ t: 'ball', ...o })

// 01 CheckPlay: arcade cabinet
const arcade = [
  box({ x: 0, y: 0, z: 0, w: 60, d: 62, h: 8, c: P.dark, shell: true }),
  box({ x: 0, y: 0, z: 8, w: 52, d: 56, h: 46, c: P.tom, shell: true }),
  box({ x: 0, y: -10, z: 54, w: 52, d: 36, h: 56, c: P.tom, shell: true }),
  box({ x: 0, y: 18, z: 54, w: 52, d: 20, h: 4, c: P.mus }),
  box({ x: 0, y: -10, z: 110, w: 54, d: 38, h: 10, c: P.mus }),
  box({ x: 0, y: 9.4, z: 111.5, w: 40, d: 0.8, h: 7, c: P.cream }),
  box({ x: 0, y: 8.4, z: 62, w: 44, d: 0.8, h: 40, c: P.ink }),
  box({ x: 0, y: 8.9, z: 66, w: 36, d: 0.8, h: 32, c: '#1d3557' }),
  box({ x: -10, y: 9.5, z: 90, w: 5, d: 0.6, h: 5, c: P.mint }),
  box({ x: 8, y: 9.5, z: 70, w: 4, d: 0.6, h: 4, c: P.mint }),
  box({ x: 14, y: 9.5, z: 70, w: 4, d: 0.6, h: 4, c: P.mint }),
  ball({ x: -6, y: 9.8, z: 78, r: 5, c: P.mus }),
  box({ x: 10, y: 9.5, z: 84, w: 7, d: 0.6, h: 7, c: P.tom }),
  cyl({ x: -12, y: 19, z: 58, r: 2, h: 9, c: P.ink }),
  ball({ x: -12, y: 19, z: 70, r: 5, c: P.blush }),
  cyl({ x: 6, y: 21, z: 58, r: 4, h: 2, c: P.cob }),
  cyl({ x: 17, y: 21, z: 58, r: 4, h: 2, c: P.mint }),
  box({ x: 0, y: 28.4, z: 14, w: 22, d: 0.8, h: 22, c: P.grey }),
  box({ x: 0, y: 28.9, z: 28, w: 5, d: 0.6, h: 7, c: P.ink }),
  box({ x: 0, y: -10, z: 64, w: 34, d: 26, h: 30, c: P.grey, inner: true }),
  box({ x: 0, y: -20, z: 14, w: 36, d: 3, h: 30, c: P.mint, inner: true }),
  box({ x: 0, y: 10, z: 9, w: 22, d: 18, h: 12, c: P.mus, inner: true }),
  cyl({ x: 0, y: 10, z: 40, r: 5, h: 1.6, c: P.mus, inner: true, anim: t => ({ dz: -((t * 14) % 19) }) }),
]

// 02 Ethos: books + graduation cap
function book(z, w, d, h, c, r, x = 0, y = 0) {
  return [
    box({ x, y, z, w, d, h: 2, c, r, shell: true }),
    box({ x, y, z: z + 2, w: w - 3, d: d - 3, h: h - 4, c: P.cream, r, shell: true }),
    box({ x, y, z: z + h - 2, w, d, h: 2, c, r, shell: true }),
  ]
}
const books = [
  ...book(0, 70, 50, 12, P.cob, 0.0),
  ...book(12, 62, 46, 11, P.mus, -0.14, 3),
  ...book(23, 58, 44, 12, P.tom, 0.1, -2),
  ...book(35, 52, 38, 9, P.mint, -0.06),
  cyl({ x: 0, y: 0, z: 44, r: 12, h: 8, c: P.ink }),
  box({ x: 0, y: 0, z: 52, w: 44, d: 44, h: 3, c: P.ink, r: Math.PI / 4 }),
  ball({ x: 0, y: 0, z: 56, r: 2.5, c: P.mus }),
  box({ x: 0, y: 27, z: 41, w: 1.6, d: 1.6, h: 12, c: P.mus }),
  ball({ x: 0, y: 27, z: 40, r: 3, c: P.mus }),
  ball({ x: 0, y: 0, z: 24, r: 7, c: P.mus, inner: true, anim: t => ({ dz: Math.sin(t * 1.6) * 3 }) }),
  box({ x: 25, y: 0, z: 12, w: 2, d: 36, h: 24, c: P.tom, inner: true }),
]

// 03 Splash: gumball machine
const gum = [P.tom, P.mus, P.mint, P.blush, P.cob]
const gumballs = Array.from({ length: 16 }, (_, k) => ball({
  x: Math.cos(k * 2.4) * ((k % 3) * 6 + 4),
  y: Math.sin(k * 2.4) * ((k % 3) * 6 + 4),
  z: 30 + (k % 5) * 8,
  r: 5.2, c: gum[k % 5],
  anim: t => ({ dz: Math.sin(t * 1.3 + k) * 1.4 }),
}))
const gumball = [
  box({ x: 0, y: 0, z: 0, w: 50, d: 50, h: 3, c: P.ink, shell: true }),
  box({ x: 0, y: 0, z: 3, w: 46, d: 46, h: 17, c: P.cob, shell: true }),
  box({ x: 0, y: 23.4, z: 3, w: 16, d: 1, h: 6, c: P.ink }),
  box({ x: 0, y: 23.4, z: 10, w: 20, d: 1, h: 8, c: P.mus }),
  ball({ x: 0, y: 25.4, z: 14, r: 4.5, c: P.tom }),
  cyl({ x: 0, y: 0, z: 20, r: 27, h: 3, c: P.cob }),
  ...gumballs,
  cyl({ x: 0, y: 0, z: 23, r: 26, h: 43, c: '#d9efe9', glass: true }),
  cyl({ x: 0, y: 0, z: 66, r: 22, h: 6, c: P.cob }),
  ball({ x: 0, y: 0, z: 76, r: 5, c: P.mus }),
  cyl({ x: 0, y: 0, z: 7, r: 15, h: 3, c: P.mus, inner: true }),
  ball({ x: 0, y: 14, z: 12, r: 4.5, c: P.mint, inner: true, anim: t => ({ dy: Math.sin(t * 2) * 3 }) }),
]

// 04 Thycotic: safe
const safe = [
  ...[[-24, -22], [24, -22], [-24, 22], [24, 22]].map(([x, y]) => box({ x, y, z: 0, w: 6, d: 6, h: 4, c: P.ink })),
  box({ x: 0, y: 0, z: 4, w: 62, d: 56, h: 66, c: P.cob, shell: true }),
  box({ x: 0, y: 29, z: 9, w: 50, d: 2, h: 56, c: '#6b86d9', shell: true }),
  box({ x: 0, y: 30.4, z: 14, w: 40, d: 0.8, h: 46, c: '#5873cc' }),
  ball({ x: 0, y: 31, z: 40, r: 9, c: P.cream }),
  ball({ x: 0, y: 36.7, z: 47, r: 2.2, c: P.tom, anim: t => ({ dx: 7 * Math.sin(t * 0.9), dz: 7 * (Math.cos(t * 0.9) - 1) }) }),
  box({ x: -18, y: 32, z: 20, w: 4, d: 4, h: 20, c: P.mus }),
  ball({ x: -18, y: 32, z: 42, r: 4, c: P.mus }),
  ...[[-21, 58], [21, 58], [-21, 14], [21, 14]].map(([x, z]) => ball({ x, y: 30.4, z, r: 2.4, c: P.ink })),
  box({ x: -27, y: 20, z: 24, w: 10, d: 4, h: 4, c: P.ink, inner: true, anim: t => ({ dx: Math.sin(t) * 3 }) }),
  box({ x: 27, y: 20, z: 24, w: 10, d: 4, h: 4, c: P.ink, inner: true, anim: t => ({ dx: -Math.sin(t) * 3 }) }),
  box({ x: -12, y: -8, z: 4, w: 16, d: 10, h: 4, c: P.mint, inner: true }),
  box({ x: -12, y: -8, z: 8, w: 16, d: 10, h: 4, c: P.mint, inner: true }),
  box({ x: 12, y: -8, z: 4, w: 14, d: 6, h: 5, c: P.mus, inner: true }),
  box({ x: 12, y: -8, z: 9, w: 12, d: 6, h: 5, c: P.mus, inner: true }),
]

// 05 Honest Paws: dropper bottle + bone treat
const bottle = [
  cyl({ x: 0, y: 0, z: 0, r: 20, h: 42, c: P.mint, shell: true }),
  cyl({ x: 0, y: 0, z: 12, r: 20.6, h: 18, c: P.cream }),
  ball({ x: 0, y: 21, z: 20, r: 4, c: P.ink }),
  ball({ x: -5.5, y: 21, z: 26, r: 2, c: P.ink }),
  ball({ x: 0, y: 21.5, z: 28, r: 2, c: P.ink }),
  ball({ x: 5.5, y: 21, z: 26, r: 2, c: P.ink }),
  cyl({ x: 0, y: 0, z: 42, r: 20, r2: 9, h: 6, c: P.mint, shell: true }),
  cyl({ x: 0, y: 0, z: 48, r: 9, h: 6, c: P.mint, shell: true }),
  cyl({ x: 0, y: 0, z: 54, r: 10, h: 8, c: P.mus }),
  cyl({ x: 0, y: 0, z: 62, r: 5, h: 14, c: P.blush }),
  ball({ x: 0, y: 0, z: 78, r: 6.5, c: P.blush }),
  box({ x: 40, y: -8, z: 0, w: 30, d: 7, h: 6, c: P.cream, r: 0.5 }),
  ball({ x: 51.3, y: 2.7, z: 5.5, r: 5, c: P.cream }),
  ball({ x: 55.1, y: -4.3, z: 5.5, r: 5, c: P.cream }),
  ball({ x: 28.7, y: -11.7, z: 5.5, r: 5, c: P.cream }),
  ball({ x: 24.9, y: -18.7, z: 5.5, r: 5, c: P.cream }),
  cyl({ x: 0, y: 0, z: 3, r: 17, h: 28, c: P.mus, inner: true }),
  cyl({ x: 0, y: 0, z: 10, r: 2, h: 55, c: P.cream, inner: true }),
  ball({ x: 5, y: 3, z: 16, r: 2.4, c: P.cream, inner: true, anim: t => ({ dz: ((t * 6) % 18) }) }),
  ball({ x: -6, y: -4, z: 12, r: 1.8, c: P.cream, inner: true, anim: t => ({ dz: ((t * 5 + 7) % 18) }) }),
]

// 06 Floracracy: vase + flowers
function flower(x, y, z, c) {
  return [
    ...Array.from({ length: 6 }, (_, k) => ball({
      x: x + 7 * Math.cos((k / 6) * Math.PI * 2),
      y: y + 7 * Math.sin((k / 6) * Math.PI * 2), z, r: 5.5, c,
    })),
    ball({ x, y, z: z + 1.5, r: 4.2, c: P.mus }),
  ]
}
const stem = (x, y, h) => box({ x, y, z: 44, w: 2, d: 2, h, c: '#5aa27f' })
const vase = [
  cyl({ x: 0, y: 0, z: 0, r: 14, r2: 22, h: 14, c: P.blush, shell: true }),
  cyl({ x: 0, y: 0, z: 14, r: 22, r2: 12, h: 22, c: P.blush, shell: true }),
  cyl({ x: 0, y: 0, z: 36, r: 10, h: 8, c: P.blush, shell: true }),
  cyl({ x: 0, y: 0, z: 36, r: 11, h: 2, c: P.tom }),
  stem(0, 0, 46), stem(-7, 4, 34), stem(8, -2, 38), stem(4, 8, 28),
  box({ x: 8, y: 8, z: 56, w: 12, d: 3, h: 1.5, c: '#5aa27f', r: 0.7 }),
  ...flower(0, 0, 91, P.tom),
  ...flower(-7, 4, 79, P.cob),
  ...flower(8, -2, 83, P.mus),
  ...flower(4, 8, 73, P.mint),
  cyl({ x: 0, y: 0, z: 6, r: 17, r2: 15, h: 24, c: P.cob, inner: true }),
  ball({ x: 6, y: 0, z: 14, r: 2, c: P.cream, inner: true, anim: t => ({ dz: (t * 5) % 16 }) }),
]

// 07 Usana: dashboard bar chart
const bars = [[-34, 22, P.cob], [-17, 36, P.mint], [0, 28, P.mus], [17, 52, P.tom], [34, 66, P.blush]]
const dash = [
  box({ x: 0, y: 0, z: 0, w: 92, d: 62, h: 6, c: P.cream, floor: true }),
  ...bars.map(([x, h, c], i) => box({
    x, y: -10, z: 6, w: 12, d: 12, h, c, shell: true,
    anim: t => ({ dh: Math.sin(t * 1.2 + i * 1.1) * 4 }),
  })),
  ...bars.map(([x, h], i) => ball({
    x, y: -10, z: 6 + h / 2, r: 3.4, c: P.ink, inner: true,
    anim: t => ({ dz: Math.sin(t * 1.2 + i * 1.1) * 2 }),
  })),
  cyl({ x: -28, y: 18, z: 6, r: 13, h: 5, c: P.tom }),
  cyl({ x: -28, y: 18, z: 6, r: 10, h: 5.6, c: P.cream }),
  box({ x: -28, y: 18, z: 11.8, w: 11, d: 1.6, h: 1, c: P.ink, anim: t => {
    const a = Math.sin(t * 0.8) * 1.1 - 0.6
    return { dr: a, dx: 4.5 * Math.cos(a), dy: 4.5 * Math.sin(a) }
  } }),
  box({ x: 0, y: 18, z: 6, w: 14, d: 10, h: 3, c: P.mus }),
  box({ x: 18, y: 18, z: 6, w: 14, d: 10, h: 3, c: P.mint }),
  box({ x: 36, y: 18, z: 6, w: 14, d: 10, h: 3, c: P.blush }),
]

// 08 Futbol Island: a football on a little island
const palm = [
  cyl({ x: -22, y: -10, z: 8, r: 2.2, h: 30, c: '#9b6a3f' }),
  box({ x: -22, y: -10, z: 38, w: 20, d: 4, h: 2, c: '#5aa27f', r: 0.4 }),
  box({ x: -22, y: -10, z: 38, w: 4, d: 20, h: 2, c: '#5aa27f', r: 0.4 }),
  ball({ x: -22, y: -10, z: 40, r: 3, c: P.mus }),
]
const dots = [[0, 15, 6], [12, 9, 14], [-11, 10, 12], [6, 13, -6], [-9, 12, -4], [0, 4, 21]]
const island = [
  cyl({ x: 0, y: 0, z: 0, r: 46, h: 3, c: P.mint, shell: true }),
  cyl({ x: 0, y: 0, z: 3, r: 38, r2: 34, h: 6, c: P.mus, shell: true }),
  cyl({ x: 0, y: 0, z: 9, r: 34, h: 3, c: '#5aa27f', shell: true }),
  ...palm,
  ball({ x: 6, y: 4, z: 31, r: 17, c: P.cream }),
  ...dots.map(([dx, dy, dz]) => ball({ x: 6 + dx * 0.95, y: 4 + dy * 0.95, z: 31 + dz * 0.95, r: 3.6, c: P.ink })),
]

// 09 FastWill: a will with a wax seal and a pen
const will = [
  box({ x: 0, y: 0, z: 0, w: 66, d: 80, h: 3, c: P.grey, shell: true }),
  box({ x: 0, y: 0, z: 3, w: 60, d: 74, h: 3, c: P.cream, shell: true }),
  ...[-26, -16, -6, 4, 14].map(y => box({ x: -6, y, z: 6, w: 38, d: 2.2, h: 0.8, c: P.ink })),
  box({ x: -14, y: 26, z: 6, w: 20, d: 1.4, h: 0.8, c: P.cob }),
  cyl({ x: 18, y: 26, z: 6, r: 8, r2: 7, h: 3, c: P.tom }),
  cyl({ x: 18, y: 26, z: 9, r: 4.5, h: 1, c: '#c4452b' }),
  box({ x: 24, y: -8, z: 8, w: 4, d: 40, h: 3, c: P.cob, r: 1.4 }),
  box({ x: 24, y: 14, z: 8, w: 3, d: 6, h: 3, c: P.mus }),
]

const allFigures = [
  { slug: 'futbol-island', number: '01', title: 'Futbol Island', object: 'Football on an island', category: 'Multiplayer Soccer World',
    description: 'Designed and built a 3D island world for phones where every mini-game, costume and story teaches something about football.', tags: ['Game Design', 'Multiplayer', 'Built with AI'], parts: island, scale: 0.95, extent: 52, bg: P.mint },
  { slug: 'fastwill', number: '02', title: 'FastWill', object: 'Will with a wax seal', category: 'Online Estate Planning',
    description: 'Designed the plan-picking funnel, marketing pages and advisor portal for an online estate planning product.', tags: ['Fintech', 'Legal Tech', 'Product Design'], parts: will, scale: 1.1, extent: 54, bg: P.blush },
  { slug: 'checkplay', number: '03', title: 'CheckPlay', object: 'Arcade cabinet', category: 'SaaS Product · Built with AI',
    description: "Designed, built and launched a full-stack SaaS platform from scratch with Warp and Claude as my engineering team: idea to live product with real users in weeks, not months.",
    tags: ['SaaS', 'AI-Assisted Dev', 'Full-Stack', 'Ongoing'], parts: arcade, scale: 0.9, extent: 52, bg: P.tom },
  { slug: 'ethos', number: '04', title: 'Ethos', object: 'Stack of books', category: 'Learning Management Platform',
    description: 'Led the complete redesign of an LMS, turning a traditional admin dashboard into a modern dual-experience platform for instructors and learners.',
    tags: ['Platform Redesign', 'LMS', 'Design System'], parts: books, scale: 1.25, extent: 50, bg: P.cob },
  { slug: 'splash', number: '05', title: 'Splash', object: 'Gumball machine', category: 'Event Management · VEP Preview',
    description: "Designed a timeline-based preview for Splash's Virtual Event Page, so hosts can see exactly what attendees will experience.",
    tags: ['Product Design', 'UX Research', 'Enterprise'], parts: gumball, scale: 1.1, extent: 46, bg: P.mus },
  { slug: 'thycotic', number: '06', title: 'Thycotic', object: 'Safe', category: 'Privileged Access Management',
    description: 'Redesigned the core PAM experience to reduce friction for enterprise security teams managing sensitive credentials at scale.',
    tags: ['UX Research', 'Enterprise', 'Security'], parts: safe, scale: 1.15, extent: 48, bg: P.mint },
  { slug: 'honest-paws', number: '07', title: 'Honest Paws', object: 'Dropper bottle', category: 'Ecommerce · Pet CBD',
    description: 'Improved conversion and trust for a DTC pet wellness brand, from product discovery through checkout and post-purchase.',
    tags: ['Ecommerce', 'Conversion', 'DTC'], parts: bottle, scale: 1.05, extent: 50, bg: P.blush },
  { slug: 'floracracy', number: '06x', title: 'Floracracy', object: 'Flower vase', category: 'Floral Arrangement Builder',
    description: 'Built an interactive floral configuration experience that lets customers express creativity while streamlining ordering.',
    tags: ['Product Design', 'Interactive', 'Builder'], parts: vase, scale: 1.05, extent: 44, bg: P.mint, hidden: true },
  { slug: 'usana', number: '08', title: 'Usana', object: 'Bar chart', category: 'Dashboard Redesign',
    description: 'Redesigned the distributor dashboard to surface key metrics and actions, improving daily engagement and reducing support requests.',
    tags: ['Dashboard', 'Data Viz', 'B2B'], parts: dash, scale: 1.2, extent: 54, bg: P.mus },
]

// hidden projects keep their page but are not offered as disks
export const figures = allFigures.filter(f => !f.hidden)
