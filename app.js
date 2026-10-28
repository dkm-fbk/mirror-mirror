const tabs = [...document.querySelectorAll('[data-condition]')];
function showCondition(index, focus = false) {
  const condition = window.paperConditions[index];
  tabs.forEach((tab, i) => { tab.setAttribute('aria-selected', i === index); tab.tabIndex = i === index ? 0 : -1; });
  document.querySelector('#condition-panel').setAttribute('aria-labelledby', `tab-${index}`);
  document.querySelector('#condition-id').textContent = `E${index + 1}`;
  document.querySelector('#condition-title').textContent = condition.title;
  document.querySelector('#condition-description').textContent = condition.text;
  const image = document.querySelector('#condition-image');
  image.src = `assets/e${index + 1}.webp`;
  document.querySelector("#condition-full").href = `assets/e${index + 1}-full.png`;
  image.alt = `E${index + 1}: ${condition.title}. First-person observation from the paper's simulated environment.`;
  if (focus) tabs[index].focus();
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => showCondition(index));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) { event.preventDefault(); showCondition(next, true); }
  });
});
function showResults(index) {
  const rows = window.paperResults[index];
  const best = Array.from({length:6}, (_, col) => (col === 1 || col === 5 ? Math.min : Math.max)(...rows.map(row => Number(row.values[col][0]))));
  document.querySelector('#results-body').replaceChildren(...rows.map(row => {
    const tr = document.createElement('tr');
    const name = document.createElement('td'); name.textContent = row.model; tr.append(name);
    row.values.forEach(([mean, se], col) => {
      const td = document.createElement('td'); td.textContent = mean + ' ';
      const error = document.createElement('small'); error.textContent = '± ' + se; td.append(error);
      if (Number(mean) === best[col]) td.classList.add('best'); tr.append(td);
    }); return tr;
  }));
}
document.querySelector('#result-condition').addEventListener('change', event => showResults(Number(event.target.value)));
document.querySelector('#copy-citation').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText(document.querySelector('#bibtex').textContent);
    status.textContent = 'Citation copied.';
    document.querySelector('#copy-citation').textContent = 'Copied ✓';
    setTimeout(() => { document.querySelector('#copy-citation').textContent = 'Copy citation'; }, 2500);
  } catch { status.textContent = 'Select and copy the BibTeX below, or download citation.bib.'; }
});
showCondition(0); showResults(0);

const episodeSelect = document.querySelector('#episode-select');
episodeSelect.addEventListener('change', () => {
  const player = document.querySelector('#episode-player');
  player.pause();
  player.src = `assets/videos/E1_gemini25pro_${episodeSelect.value}.mp4`;
  player.setAttribute('aria-label', `E1 Gemini 2.5 Pro: ${episodeSelect.value} episode`);
  player.load();
});
