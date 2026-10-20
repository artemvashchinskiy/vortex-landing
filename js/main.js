const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.textContent = open ? '✕' : '☰';
  });
  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  }));
}

document.querySelector('#year').textContent = new Date().getFullYear();

// Uses the public bible-api.com endpoint. A local fallback keeps the section useful
// if the API is unavailable, blocked, or rate-limited.
const fallbackVerses = [
  { text: 'Commit your work to the Lord, and your plans will be established.', reference: 'Proverbs 16:3' },
  { text: 'Let all that you do be done in love.', reference: '1 Corinthians 16:14' },
  { text: 'Be strong and courageous. Do not be afraid; do not be discouraged.', reference: 'Joshua 1:9' },
  { text: 'Whatever you do, work at it with all your heart.', reference: 'Colossians 3:23' },
  { text: 'Your word is a lamp to my feet and a light to my path.', reference: 'Psalm 119:105' },
  { text: 'Do not grow weary in doing good.', reference: '2 Thessalonians 3:13' },
  { text: 'Trust in the Lord with all your heart.', reference: 'Proverbs 3:5' }
];
const verseText = document.querySelector('#verse-text');
const verseReference = document.querySelector('#verse-reference');
const verseStatus = document.querySelector('#verse-status');
const newVerseButton = document.querySelector('#new-verse');
const copyVerseButton = document.querySelector('#copy-verse');
let currentVerse = fallbackVerses[0];

function renderVerse(verse, sourceLabel = '') {
  currentVerse = verse;
  verseText.textContent = `“${verse.text}”`;
  verseReference.textContent = `${verse.reference} · ${sourceLabel || 'BIBLE VERSE'}`.toUpperCase();
}
function randomFallback() {
  let next = fallbackVerses[Math.floor(Math.random() * fallbackVerses.length)];
  if (fallbackVerses.length > 1 && next.reference === currentVerse.reference) {
    next = fallbackVerses[(fallbackVerses.findIndex(v => v.reference === next.reference) + 1) % fallbackVerses.length];
  }
  return next;
}
newVerseButton.addEventListener('click', async () => {
  newVerseButton.disabled = true;
  verseStatus.textContent = 'Finding a verse…';
  try {
    const response = await fetch('https://bible-api.com/?random=verse', { headers: { Accept: 'application/json' } });
    if (!response.ok) throw new Error('Verse API unavailable');
    const data = await response.json();
    if (!data.text || !data.reference) throw new Error('No verse returned');
    renderVerse({ text: data.text.trim(), reference: data.reference }, 'Bible API · WEB');
    verseStatus.textContent = 'A fresh passage, retrieved from the public Bible API.';
  } catch {
    renderVerse(randomFallback(), 'WORLD ENGLISH BIBLE · LOCAL FALLBACK');
    verseStatus.textContent = 'Showing a built-in verse because the live source could not be reached.';
  } finally {
    newVerseButton.disabled = false;
  }
});
copyVerseButton.addEventListener('click', async () => {
  const text = `${currentVerse.text} — ${currentVerse.reference}`;
  try {
    await navigator.clipboard.writeText(text);
    verseStatus.textContent = 'Verse copied to clipboard.';
  } catch {
    verseStatus.textContent = text;
  }
});
