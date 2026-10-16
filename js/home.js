(function(){
const D=window.SITE_DATA,R='';const PR=(D&&D.profile)||{};const m=document.getElementById('m');if(!m||!D)return;D.news.sort((a,b)=>new Date(b.date)-new Date(a.date));
const ic={s:'<path d="M12 3 2 9l10 6 10-6-10-6Zm-6 9v4c0 1.7 2.7 3 6 3s6-1.3 6-3v-4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',o:'<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M9 8v8M12.5 8H14a4 4 0 0 1 0 8h-1.5V8Z" fill="none" stroke="currentColor" stroke-width="1.8"/>',r:'<rect x="3" y="3" width="18" height="18" rx="4" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M9 16V8h3a2.5 2.5 0 0 1 0 5H9m3 0 3 3" fill="none" stroke="currentColor" stroke-width="1.8"/>',l:'<rect x="3" y="3" width="18" height="18" rx="4" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 10v6M8 7.5v.01M12 16v-6m0 2.5a2.5 2.5 0 0 1 5 0V16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',e:'<rect x="3" y="5" width="18" height="14" rx="3" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" stroke-width="1.8"/>'};
const L=[['Google Scholar','s','https://scholar.google.com/citations?user=F5TRe0oAAAAJ&hl=en'],['ORCID','o','https://orcid.org/0009-0002-4968-6878'],['ResearchGate','r','https://www.researchgate.net/profile/Bae-Sejeong'],['LinkedIn','l','https://www.linkedin.com/in/sejeong-bae-4babb5364/'],['Email','e','mailto:sjbae1102@unist.ac.kr']];
// split news into headline (first bold phrase) + context
const plain=s=>s.replace(/\*\*/g,'');
function head(n){const b=[...n.content.matchAll(/\*\*(.+?)\*\*/g)].map(x=>x[1].replace(/^'|'$/g,''));
 let kind=/new paper/i.test(n.content)?'New paper':/poster/i.test(n.content)?'Poster':/oral|presentation/i.test(n.content)?'Talk':/award|honored/i.test(n.content)?'Award':'Conference';
 const quoted=(plain(n.content).match(/'([^']+)'/)||[])[1];
 const venue=b.find(x=>x!==quoted&&!/^'/.test(x))||'';
 if(kind==='Award')return {kind,title:b[0],sub:quoted||''};
 const title=kind==='Conference'?venue:(quoted||venue||plain(n.content));
 return {kind,title,sub:kind==='Conference'?'Attended':(venue&&venue!==title?venue:'')}}
const N=D.news.slice(0,3);
const P=D.publications,C=D.conferences;
const HL=[[P.international.length+P.domestic.length,'Peer-reviewed journal articles'],[P.international.filter(p=>{const m=(p.metricsHtml||'').match(/JCR\s*([\d.]+)%/);return m&&+m[1]<=25}).length,'Q1 journal articles'],[C.international.length+C.domestic.length,'Conferences'],[D.about.awards.length,'Awards & honors']];
const EDU=(PR.education||[]).map(e=>[e.period,e.degree,e.detail]);
const AW=D.about.awards.map(a=>{const x=a.textEn.split(' — ')[0];const i=x.indexOf(', ');return {year:a.year,t:i>0?x.slice(0,i):x,o:i>0?x.slice(i+2):''}});
const metric=h=>(h||'').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim().replace(/^IF\s*/,'');

m.innerHTML=`
<div class="hero"><div class="in top"><img src="${R}profile.jpg" alt="Sejeong Bae"><div>
<p class="over">${PR.overline||''}</p><h1>Sejeong Bae</h1><p class="ko">배세정 · 裵勢正</p>
<p class="aff">Combined M.S. &amp; Ph.D. Student, UNIST<br>IRIS Lab · Advisor Prof. Jungho Im</p>
<p class="bio">${PR.bio||''}</p>
<div class="btns">${L.map(([t,k,u])=>`<a class="btn" href="${u}" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24">${ic[k]}</svg>${t}</a>`).join('')}</div></div></div><div class="in"><div class="hl">${HL.map(([n,l,x])=>`<div><b>${n}${x?`<em>${x}</em>`:''}</b><span>${l}</span></div>`).join('')}</div></div></div>
<section><div class="in"><div class="sh"><div><p class="over">Latest</p><h2>News</h2></div><a class="all" href="/news/">View all news →</a></div>
<div class="split"><div><div class="list">${N.map(n=>{const h=head(n);return `<a class="row" href="/news/"><span class="date">${n.date}</span><div class="th">${n.image?`<img src="${R+n.image}" alt="">`:''}</div><div><h3>${h.title}</h3><p>${h.kind}${h.sub?' · '+h.sub:''}</p></div><span class="ar">→</span></a>`}).join('')}</div></div><div><div class="press"><p class="over" style="margin:20px 0 0">In the press · External news</p>${(typeof externalNewsData!=='undefined'?externalNewsData:[]).map(e=>`<a class="pc" href="${e.url}" target="_blank" rel="noopener"><div class="im"><img src="${R+e.thumbnail}" alt=""></div><div><span class="date">UNIST News</span><h3>${e.title.replace(/^\[UNIST뉴스\]\s*/,'')}</h3></div></a>`).join('')}</div></div></div></div></section>
<section><div class="in"><div class="sh"><div><p class="over">Research</p><h2>Selected Publications</h2></div><a class="all" href="/publications/">All publications →</a></div>
<div class="pubs">${D.publications.international.slice(0,3).map(p=>`<div class="pub"><div class="th"><img src="${R+p.image}" alt=""></div><div><h3>${p.title.replace(/\.$/,'')}</h3><div class="pa">${p.authorsHtml.replace(/\s*\(\d{4}\)\s*$/,'')}</div><div class="pv">${p.venueHtml}</div>${p.metricsHtml?`<div class="pm"><b>IF</b> ${metric(p.metricsHtml)}</div>`:''}</div><span class="yr">${p.year}</span></div>`).join('')}</div></div></section>
<section><div class="in"><div class="sh"><div><p class="over">Presentations</p><h2>Conferences</h2></div><a class="all" href="/conference/">All conferences →</a></div><div class="two">${[['International',C.international],['Domestic',C.domestic]].map(([t,l])=>`<div><h3 class="sub2">${t}</h3><div class="cv">${[...l].sort((a,b)=>new Date(b.date)-new Date(a.date)).slice(0,4).map(c=>`<div class="ce"><span class="date">${c.date}</span><div><h3>${c.textEn.replace('🏆','')}</h3>${c.presentationType||/🏆/.test(c.textEn)?`<p>${[c.presentationType,/🏆/.test(c.textEn)?'Award':''].filter(Boolean).join(' · ')}</p>`:''}</div></div>`).join('')}</div></div>`).join('')}</div></div></section>
<section><div class="in"><div class="sh"><div><p class="over">Background</p><h2>Education &amp; Honors</h2></div><a class="all" href="/about/">Full biography →</a></div><div class="two"><div><h3 class="sub2">Education</h3><div class="cv">${EDU.map(([d,t,p])=>`<div class="ce"><span class="date">${d}</span><div><h3>${t}</h3><p>${p}</p></div></div>`).join('')}</div><h3 class="sub2" style="margin-top:40px">Grants</h3><div class="cv">${D.about.grants.map(g=>{const i=g.textEn.lastIndexOf(', ');return `<div class="ce"><span class="date">${g.year}</span><div><h3>${g.textEn.slice(0,i)}</h3><p>${g.textEn.slice(i+2)}</p></div></div>`}).join('')}</div></div><div><h3 class="sub2">Awards &amp; Honors</h3><div class="cv">${AW.slice(0,4).map(a=>`<div class="ce"><span class="date">${a.year}</span><div><h3>${a.t}</h3><p>${a.o}</p></div></div>`).join('')}</div></div></div></div></section>`;

})();
