// One layout for the Mac's desktop, in the screen's own 512 x 342 units.
// The isometric screen (SVG) and the flat desktop (HTML, in %) are both drawn from this.
export const DESK = {
  W: 512, H: 342, menu: 34,
  iconW: 120, figW: 100, figH: 87.5, labelH: 17, labelGap: 3,
  cols: [76, 196, 316, 436],      // icon centres
  rows: [50, 168],                // icon tops
  trash: { x: 401, y: 205, w: 70, h: 52 },
  hint: { x: 14, y: 306, h: 20 },
  dither: 8,
  colors: { light: '#cfe3d4', dark: '#9fb8a6', paper: '#f8f6f0' },
  rainbow: ['#ef6a4c', '#e9b43c', '#8fd3b6', '#4a63b8', '#a05fb5', '#5aa27f'],
}
export const iconAt = i => ({ cx: DESK.cols[i % 4], top: DESK.rows[Math.floor(i / 4)] })
export const labelW = name => Math.round(name.length * 7.5 + 16)
