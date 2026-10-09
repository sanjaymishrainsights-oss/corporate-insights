const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.site-nav');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');nav.classList.toggle('open',open)});nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation');nav.classList.remove('open')}))}
const cards=[...document.querySelectorAll('.insight-card')];
const filters=[...document.querySelectorAll('.filter-chip')];
const search=document.querySelector('#insight-search');
const count=document.querySelector('#results-count');
const empty=document.querySelector('#empty-state');
let activeFilter='all';
function updateInsights(){const term=(search?.value||'').trim().toLowerCase();let visible=0;cards.forEach(card=>{const topics=card.dataset.topics.split(' ');const searchable=(card.dataset.search+' '+card.textContent).toLowerCase();const match=(activeFilter==='all'||topics.includes(activeFilter))&&(!term||searchable.includes(term));card.hidden=!match;if(match)visible++});if(count)count.textContent=`${visible} insight${visible===1?'':'s'}`;if(empty)empty.hidden=visible!==0}
filters.forEach(button=>button.addEventListener('click',()=>{activeFilter=button.dataset.filter;filters.forEach(item=>{const selected=item===button;item.classList.toggle('active',selected);item.setAttribute('aria-pressed',String(selected))});updateInsights()}));
search?.addEventListener('input',updateInsights);
document.querySelector('#reset-search')?.addEventListener('click',()=>{search.value='';activeFilter='all';filters.forEach(item=>{const selected=item.dataset.filter==='all';item.classList.toggle('active',selected);item.setAttribute('aria-pressed',String(selected))});updateInsights();search.focus()});
