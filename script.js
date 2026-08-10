
const commentText = "Synth polaroid bitters chillwave pickled. Vegan disrupt tousled, Portland keffiyeh aesthetic food truck sriracha cornhole single-origin coffee church-key roof party.";

const comments = [
  { name: "Jelanee Uwaezuoke", img: 45 },
  { name: "Qiu Xun", img: 12, text: "Synth polaroid chillwave pickled 🔥" },
  { name: "Noell Blue", img: 8 },
  { name: "Diane Lansd", img: 25 },
  { name: "Malin Quist", img: 33 },
  { name: "Nayara Delai", img: 5 },
  { name: "Henk Fortuir", img: 15 },
];

const related = [
  { title: "Cranberry Macaroon Ice Cream Cake" },
  { title: "No Bake Cheesecake" },
  { title: "Double Thick Layered Sponge Cake" },
  { title: "Caramel Glaze Cake" },
  { title: "Strawberry Cream Cake Bites" },
  { title: "Homemade Mixed Berries Wedding Cake" },
  { title: "M&M's Chocolate Cake" },
  { title: "Almond Cinnamon Sponge Cake" },
];

// ---------- Render comments ----------
function renderComments(list) {
  const wrap = document.getElementById('commentList');
  list.forEach(c => {
    const el = document.createElement('div');
    el.className = 'comment';
    el.innerHTML = `
      <img src="https://i.pravatar.cc/88?img=${c.img}" alt="${c.name}">
      <div>
        <span class="comment-name">${c.name}</span>
        <span class="comment-time">45min ago</span>
        <p class="comment-text">${c.text || commentText}</p>
        <div class="comment-actions">
          <span>💬 Reply (2)</span>
          <span>♡ 48</span>
          <span>··· More</span>
        </div>
      </div>`;
    wrap.appendChild(el);
  });
}
renderComments(comments);

document.getElementById('loadMoreBtn').addEventListener('click', () => {
  // simulate loading 25 more by repeating the pool with fresh avatar ids
  const extra = comments.map((c, i) => ({ ...c, img: c.img + 50 + i }));
  renderComments(extra);
  document.getElementById('loadMoreBtn').textContent = 'No more comments';
  document.getElementById('loadMoreBtn').disabled = true;
});

// ---------- Render related recipes ----------
function renderRelated() {
  const grid = document.getElementById('relatedGrid');
  related.forEach((r, i) => {
    const el = document.createElement('div');
    el.className = 'related-card';
    el.innerHTML = `<div class="thumb" role="img" aria-label="${r.title}"></div><p>${r.title}</p>`;
    grid.appendChild(el);
  });
}
renderRelated();

// ---------- Post comment ----------
document.getElementById('postCommentBtn').addEventListener('click', () => {
  const textarea = document.querySelector('.write-comment textarea');
  if (!textarea.value.trim()) return;
  renderComments([{ name: 'Siz', img: 68, text: textarea.value.trim() }]);
  textarea.value = '';
});

// ---------- Newsletter form ----------
document.getElementById('joinForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const input = e.target.querySelector('input');
  alert(`Rahmat! ${input.value} obuna bo'ldi.`);
  input.value = '';
});
