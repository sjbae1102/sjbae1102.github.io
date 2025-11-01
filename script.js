// Language translation data
const translations = {
    en: {
        nav: {
            home: 'Home',
            about: 'Biography',
            news: 'News',
            publications: 'Publications',
            conference: 'Conference',
            others: 'Others'
        },
        social: {
            googleScholar: 'Google Scholar',
            orcid: 'ORCID',
            researchGate: 'ResearchGate',
            linkedIn: 'LinkedIn'
        },
        home: {
            affiliation: 'Affiliation',
            researchInterests: 'Research Interests',
            southKorea: 'South Korea',
            studentStatus: 'Combined M.S. & Ph.D. Student',
            university: 'UNIST, Ulsan National Institute of Science and Technology',
            instructor: 'Instructor: Prof. Jungho Im',
            labMember: 'Member of the Intelligent Remote sensing and geospatial Information Science (IRIS) Lab',
            link: '[Link]',
            research1: 'Environmental Remote Sensing',
            research2: 'Terrestrial Carbon Flux',
            research3: 'Artificial Intelligence',
            research4: 'Machine Learning / Deep Learning',
            externalNews: 'External News'
        },
        tabs: {
            publications: 'Publications',
            conference: 'Conference',
            news: 'News'
        },
        publications: {
            title: 'Publications',
            inProgress: 'In progress publications',
            international: 'International Journal Articles',
            domestic: 'Domestic Journal Articles'
        },
        about: {
            title: 'Biography',
            name: 'SEJEONG BAE',
            university: 'UNIST',
            email: 'Email:',
            status: 'Status:',
            studentStatus: 'Combined M.S. and Ph.D. Student',
            major: 'Major:',
            majorName: 'Environmental Science and Engineering',
            department: 'Department:',
            departmentName: 'Civil, Urban, Earth, and Environmental Engineering',
            education: 'Education',
            present: 'Present',
            education1: 'Combined M.S. & Ph.D - Department of Civil, Urban, Earth, and Environmental Engineering, Ulsan National Institute of Science and Technology',
            education2: 'Bachelor of Engineering - Department of Civil Engineering, Seoul National University of Science and Technology',
            awards: 'Awards',
            award1: 'Best Presentation Award, Korean Society of Remote Sensing',
            award2: 'Outstanding Paper Presentation Award, Korean Association of Geographic Information Studies',
            award3: 'Korea Aerospace Administration (KASA) Administrator\'s Award (Grand Prize), 2024 Satellite Information Application Contest - [Division 2] Development of a Change Detection Algorithm Based on Multi-temporal Images',
            award3Ko: '우주항공청장상, 2024 위성정보활용 경진대회 - [부문2] 다시기 영상 기반 변화탐지 알고리즘 개발',
            award4: 'Outstanding Paper Presentation Award, Korean Association of Geographic Information Studies',
            grants: 'Grants',
            grant1: 'Research Scholarship for Master\'s Students, National Research Foundation of Korea',
            grant1Ko: '2024 석사과정생 연구장려금 지원사업; RS-2024-00465'
        },
        conference: {
            title: 'Conference',
            international: 'International',
            domestic: 'Domestic'
        },
        contact: {
            title: 'Contact',
            description: 'Please contact me using the information below.',
            office: 'Office:',
            email: 'Email:',
            address: 'Address:'
        },
        news: {
            title: 'News'
        }
    },
    ko: {
        nav: {
            home: '홈',
            about: '소개',
            news: '소식',
            publications: '논문',
            conference: '학회',
            others: '기타'
        },
        social: {
            googleScholar: 'Google Scholar',
            orcid: 'ORCID',
            researchGate: 'ResearchGate',
            linkedIn: 'LinkedIn'
        },
        home: {
            affiliation: '소속',
            researchInterests: '연구 분야',
            southKorea: '대한민국',
            studentStatus: '석박사통합과정',
            university: 'UNIST, 울산과학기술원',
            instructor: '지도교수: 울산과학기술원 임정호 교수',
            labMember: 'Intelligent Remote sensing and geospatial Information Science (IRIS) 연구실 소속',
            link: '[링크]',
            research1: '환경 원격탐사',
            research2: '육상 탄소 모니터링',
            research3: '인공지능',
            research4: '머신러닝/딥러닝',
            externalNews: '외부 소식'
        },
        tabs: {
            publications: '논문',
            conference: '학회',
            news: '소식'
        },
        publications: {
            title: '논문',
            inProgress: '진행 중인 논문',
            international: '국제 학술지 논문',
            domestic: '국내 학술지 논문'
        },
        about: {
            title: '소개',
            name: 'SEJEONG BAE',
            university: 'UNIST',
            email: '메일:',
            status: '학위:',
            studentStatus: '석박사통합과정',
            major: '전공:',
            majorName: '환경과학공학',
            department: '학과:',
            departmentName: '지구환경도시건설공학과',
            education: '학력',
            present: '현재',
            education1: '석박사통합과정 - 울산과학기술원 지구환경도시건설공학과',
            education2: '공학사 - 서울과학기술대학교 건설시스템공학과',
            awards: '수상',
            award1: '우수발표논문상, 대한원격탐사학회',
            award2: '우수논문상, 한국지리정보학회',
            award3: '우주항공청장상 (대상), 2024 위성정보활용 경진대회 - [부문2] 다시기 영상 기반 변화탐지 알고리즘 개발',
            award4: '우수논문상, 한국지리정보학회',
            grants: '장학',
            grant1: '석사과정생 연구장려금 지원사업 2024, 한국연구재단',
            grant1Ko: 'RS-2024-00465'
        },
        conference: {
            title: '학회',
            international: '국제',
            domestic: '국내'
        },
        contact: {
            title: '연락처',
            description: '연락을 원하시면 아래 정보를 통해 문의해주세요.',
            office: '사무실:',
            email: '이메일:',
            address: '주소:'
        },
        news: {
            title: '소식'
        }
    }
};

// Language switching functionality
let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update navigation links and tab buttons
    document.querySelectorAll('[data-i18n^="nav."]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translationKey = key.split('.')[1];
        if (translations[lang] && translations[lang].nav && translations[lang].nav[translationKey]) {
            element.textContent = translations[lang].nav[translationKey];
        }
    });
    
    // Update social links (skip as requested)
    // Social links remain unchanged
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let translation = translations[lang];
        
        for (let i = 0; i < keys.length; i++) {
            if (translation && translation[keys[i]]) {
                translation = translation[keys[i]];
            } else {
                translation = null;
                break;
            }
        }
        
        if (translation) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.value = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Update research interests list items
    const researchItems = document.querySelectorAll('.research-list li');
    if (researchItems.length >= 4) {
        if (translations[lang] && translations[lang].home) {
            researchItems[0].textContent = translations[lang].home.research1 || researchItems[0].textContent;
            researchItems[1].textContent = translations[lang].home.research2 || researchItems[1].textContent;
            researchItems[2].textContent = translations[lang].home.research3 || researchItems[2].textContent;
            researchItems[3].textContent = translations[lang].home.research4 || researchItems[3].textContent;
        }
    }
}

// Initialize language from localStorage or default to 'en'
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);
    
    // Add event listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
    
    // News 렌더링 및 Conference 정렬
    renderNews();
    sortConferenceLists();
    
    // External news 렌더링
    if (typeof externalNewsData !== 'undefined') {
        renderExternalNews();
    }
    
    // Check URL parameters for tab
    const urlParams = new URLSearchParams(window.location.search);
    const tabParam = urlParams.get('tab');
    
    // Check hash
    const hash = window.location.hash;
    
    if (tabParam) {
        const tabButton = document.querySelector(`.tab-button[data-tab="${tabParam}"]`);
        if (tabButton) {
            setTimeout(() => {
                tabButton.click();
                const target = document.querySelector('#tabs-section');
                if (target) {
                    const offsetTop = target.offsetTop - 70;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }, 300);
        }
    } else if (hash === '#home') {
        const target = document.querySelector('#home');
        if (target) {
            setTimeout(() => {
                const offsetTop = target.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }, 300);
        }
    } else if (hash === '#tabs-section') {
        const target = document.querySelector('#tabs-section');
        if (target) {
            setTimeout(() => {
                const offsetTop = target.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }, 300);
        }
    }
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        
        // Don't prevent default for links with target="_blank" - let them open in new tab
        if (link.getAttribute('target') === '_blank') {
            return;
        }
        
        // If link has data-tab attribute, switch to that tab
        const tabName = link.getAttribute('data-tab');
        if (tabName) {
            const tabButton = document.querySelector(`[data-tab="${tabName}"]`);
            if (tabButton) {
                tabButton.click();
            }
        }
    });
});

// Tab functionality
const tabButtons = document.querySelectorAll('.tab-button');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-tab');
        
        // Remove active class from all buttons and panels
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanels.forEach(panel => panel.classList.remove('active'));
        
        // Add active class to clicked button and corresponding panel
        button.classList.add('active');
        document.getElementById(`${targetTab}-tab`).classList.add('active');
        
        // Update nav link active state
        updateActiveNav();
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        const tabName = this.getAttribute('data-tab');
        
        // Don't prevent default for links with target="_blank"
        if (this.getAttribute('target') === '_blank') {
            return;
        }
        
        if (href === '#home' || href === '#tabs-section') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // If navigating to tabs section with a specific tab, switch to that tab after scrolling
                if (href === '#tabs-section' && tabName) {
                    setTimeout(() => {
                        const tabButton = document.querySelector(`.tab-button[data-tab="${tabName}"]`);
                        if (tabButton) {
                            tabButton.click();
                        }
                    }, 500);
                }
            }
        }
    });
});

// Update active nav link on scroll and tab change
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.content-section');

function updateActiveNav() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        const tabName = link.getAttribute('data-tab');
        
        if (href === '#home' && current === 'home') {
            link.classList.add('active');
        } else if (href === '#tabs-section' && current === 'tabs-section') {
            // For tabs section, check if the active tab matches this nav link
            const activeTabButton = document.querySelector('.tab-button.active');
            if (activeTabButton && activeTabButton.getAttribute('data-tab') === tabName) {
                link.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// Update current year in footer
const currentYearElement = document.getElementById('current-year');
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

// Update last updated date
const lastUpdatedElement = document.getElementById('last-updated');
if (lastUpdatedElement) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                   'July', 'August', 'September', 'October', 'November', 'December'];
    const now = new Date();
    lastUpdatedElement.textContent = `${months[now.getMonth()]} ${now.getFullYear()}`;
}

// Initialize active nav on page load
updateActiveNav();

// 날짜 문자열을 Date 객체로 변환하는 함수
function parseDate(dateString) {
    // "Oct 23, 2025" 형식을 파싱
    const months = {
        'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
        'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
    };
    
    const parts = dateString.split(' ');
    if (parts.length === 3) {
        const month = months[parts[0]];
        const day = parseInt(parts[1].replace(',', ''));
        const year = parseInt(parts[2]);
        
        if (month !== undefined && !isNaN(day) && !isNaN(year)) {
            return new Date(year, month, day);
        }
    }
    
    return new Date(0); // 파싱 실패 시 최소 날짜 반환
}

// Render News from news-data.js
function renderNews() {
    const newsTimeline = document.getElementById('news-timeline');
    if (!newsTimeline || !window.newsData) return;
    
    newsTimeline.innerHTML = '';
    
    // 날짜순으로 정렬 (최신순 - 내림차순)
    const sortedNews = [...window.newsData].sort((a, b) => {
        const dateA = parseDate(a.date);
        const dateB = parseDate(b.date);
        return dateB - dateA;
    });
    
    sortedNews.forEach(item => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';
        
        const dateDiv = document.createElement('div');
        dateDiv.className = 'news-date';
        dateDiv.textContent = item.date;
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'news-content';
        
        // 텍스트 컨테이너
        const textContainer = document.createElement('div');
        textContainer.className = 'news-text';
        
        const paragraph = document.createElement('p');
        
        // Content 처리 함수: bold 처리 및 링크 변환
        function processContent(content, link, linkText) {
            // 먼저 마크다운 스타일 bold (**text**)를 HTML로 변환
            let processedContent = content.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
            
            // HTML 태그가 포함되어 있는지 확인
            const hasHTML = processedContent !== content;
            
            if (link && linkText) {
                const parts = processedContent.split(linkText);
                if (parts.length === 2) {
                    // 링크 텍스트 앞뒤로 분리
                    if (hasHTML) {
                        // HTML이 포함된 경우 innerHTML 사용
                        paragraph.innerHTML = parts[0];
                        const linkElement = document.createElement('a');
                        linkElement.href = link;
                        linkElement.textContent = linkText;
                        linkElement.target = "_blank";
                        linkElement.rel = "noopener noreferrer";
                        paragraph.appendChild(linkElement);
                        const tempDiv = document.createElement('div');
                        tempDiv.innerHTML = parts[1];
                        while (tempDiv.firstChild) {
                            paragraph.appendChild(tempDiv.firstChild);
                        }
                    } else {
                        // 일반 텍스트인 경우
                        paragraph.appendChild(document.createTextNode(parts[0]));
                        const linkElement = document.createElement('a');
                        linkElement.href = link;
                        linkElement.textContent = linkText;
                        linkElement.target = "_blank";
                        linkElement.rel = "noopener noreferrer";
                        paragraph.appendChild(linkElement);
                        paragraph.appendChild(document.createTextNode(parts[1]));
                    }
                } else {
                    // 링크 텍스트가 없거나 다른 위치에 있는 경우
                    if (hasHTML) {
                        paragraph.innerHTML = processedContent;
                        const linkElement = document.createElement('a');
                        linkElement.href = link;
                        linkElement.textContent = linkText;
                        linkElement.target = "_blank";
                        linkElement.rel = "noopener noreferrer";
                        paragraph.appendChild(document.createTextNode(' '));
                        paragraph.appendChild(linkElement);
                    } else {
                        paragraph.textContent = processedContent;
                        const linkElement = document.createElement('a');
                        linkElement.href = link;
                        linkElement.textContent = linkText;
                        linkElement.target = "_blank";
                        linkElement.rel = "noopener noreferrer";
                        paragraph.appendChild(document.createTextNode(' '));
                        paragraph.appendChild(linkElement);
                    }
                }
            } else {
                // 링크가 없는 경우
                if (hasHTML) {
                    paragraph.innerHTML = processedContent;
                } else {
                    paragraph.textContent = processedContent;
                }
            }
        }
        
        processContent(item.content, item.link, item.linkText);
        
        textContainer.appendChild(paragraph);
        contentDiv.appendChild(textContainer);
        
        // 이미지가 있으면 오른쪽에 추가
        if (item.image) {
            const imageContainer = document.createElement('div');
            imageContainer.className = 'news-image-container';
            const image = document.createElement('img');
            
            // 이미지 경로 조정: 현재 페이지가 news/ 디렉토리에 있으면 상대 경로 조정
            let imagePath = item.image;
            if (window.location.pathname.includes('/news/')) {
                // news/ 디렉토리 안에 있으면 ../ 제거하고 파일명만 사용
                imagePath = item.image.replace('news/', '');
            }
            
            image.src = imagePath;
            image.alt = item.content.substring(0, 50) + '...';
            image.className = 'news-image';
            imageContainer.appendChild(image);
            contentDiv.appendChild(imageContainer);
        }
        
        newsItem.appendChild(dateDiv);
        newsItem.appendChild(contentDiv);
        newsTimeline.appendChild(newsItem);
    });
}

// News 데이터를 전역 변수로 설정
if (typeof newsData !== 'undefined') {
    window.newsData = newsData;
}

// Render external news
async function renderExternalNews() {
    const externalNewsList = document.getElementById('external-news-list');
    if (!externalNewsList || typeof externalNewsData === 'undefined') return;
    
    externalNewsList.innerHTML = '';
    
    for (const item of externalNewsData) {
        const newsItem = document.createElement('a');
        newsItem.href = item.url;
        newsItem.target = '_blank';
        newsItem.rel = 'noopener noreferrer';
        newsItem.className = 'external-news-item';
        
        const thumbnail = document.createElement('div');
        thumbnail.className = 'external-news-thumbnail';
        
        // 썸네일 자동 로드: 사용자 제공 썸네일 또는 자동 생성
        let thumbnailUrl = item.thumbnail;
        if (!thumbnailUrl) {
            thumbnailUrl = await fetchThumbnailFromUrl(item.url);
        }
        
        if (thumbnailUrl) {
            const img = document.createElement('img');
            img.src = thumbnailUrl;
            img.alt = item.title;
            img.loading = 'lazy';
            img.onerror = function() {
                // 썸네일 로드 실패 시 기본 이미지 또는 빈 상태 유지
                this.style.display = 'none';
            };
            thumbnail.appendChild(img);
        }
        
        const title = document.createElement('div');
        title.className = 'external-news-title';
        title.textContent = item.title;
        
        newsItem.appendChild(thumbnail);
        newsItem.appendChild(title);
        externalNewsList.appendChild(newsItem);
    }
}

// URL에서 썸네일 가져오기 (og:image 메타 태그 읽기)
async function fetchThumbnailFromUrl(url) {
    try {
        // CORS 프록시를 사용하거나, 직접 fetch 시도
        // 실제로는 서버 사이드에서 처리하는 것이 좋지만, 클라이언트 사이드에서 시도
        const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
        
        const response = await fetch(proxyUrl);
        const data = await response.json();
        const html = data.contents;
        
        // og:image 메타 태그 찾기
        const ogImageMatch = html.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i);
        if (ogImageMatch && ogImageMatch[1]) {
            return ogImageMatch[1];
        }
        
        // og:image가 없으면 generateThumbnailUrl 사용
        return generateThumbnailUrl(url);
    } catch (e) {
        console.error('Error fetching thumbnail:', e);
        // 실패 시 기본 생성 함수 사용
        return generateThumbnailUrl(url);
    }
}

// UNIST 뉴스 URL에서 썸네일 URL 생성 (fallback)
function generateThumbnailUrl(url) {
    try {
        // URL 패턴: https://news.unist.ac.kr/kor/YYYYMMDD/ 또는 https://news.unist.ac.kr/kor/YYYYMMDD-X/
        const urlMatch = url.match(/\/kor\/(\d{8})(?:-(\d+))?/);
        if (urlMatch) {
            const dateStr = urlMatch[1];
            const year = dateStr.substring(0, 4);
            const month = dateStr.substring(4, 6);
            
            // UNIST 뉴스 썸네일 URL 패턴 추정
            const baseUrl = `https://news.unist.ac.kr/wp-content/uploads/${year}/${month}/`;
            
            // 일반적인 파일명 패턴
            const possibleNames = [
                `news-${dateStr}.jpg`,
                `thumbnail-${dateStr}.jpg`,
                `featured-${dateStr}.jpg`
            ];
            
            return baseUrl + possibleNames[0];
        }
    } catch (e) {
        console.error('Error generating thumbnail URL:', e);
    }
    return null;
}

// Conference 리스트를 날짜순으로 정렬하는 함수
function sortConferenceLists() {
    const conferenceLists = document.querySelectorAll('.conference-list');
    
    conferenceLists.forEach(list => {
        const items = Array.from(list.querySelectorAll('li'));
        
        // 각 아이템을 날짜를 기준으로 정렬
        items.sort((a, b) => {
            const dateA = a.querySelector('.conference-date');
            const dateB = b.querySelector('.conference-date');
            
            if (!dateA || !dateB) return 0;
            
            // 날짜 문자열을 Date 객체로 변환
            const dateAObj = parseDate(dateA.textContent.trim());
            const dateBObj = parseDate(dateB.textContent.trim());
            
            // 최신순으로 정렬 (내림차순)
            return dateBObj - dateAObj;
        });
        
        // 정렬된 아이템을 다시 DOM에 추가
        items.forEach(item => list.appendChild(item));
    });
}

// Initialize language from localStorage or default to 'en'
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);
    
    // Add event listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
    
    // News 렌더링 및 Conference 정렬
    renderNews();
    sortConferenceLists();
    
    // External news 렌더링
    if (typeof externalNewsData !== 'undefined') {
        renderExternalNews();
    }
    
    // Check URL parameters for tab
    const urlParams = new URLSearchParams(window.location.search);
    const tabParam = urlParams.get('tab');
    
    // Check hash
    const hash = window.location.hash;
    
    if (tabParam) {
        const tabButton = document.querySelector(`.tab-button[data-tab="${tabParam}"]`);
        if (tabButton) {
            setTimeout(() => {
                tabButton.click();
                const target = document.querySelector('#tabs-section');
                if (target) {
                    const offsetTop = target.offsetTop - 70;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }, 300);
        }
    } else if (hash === '#home') {
        const target = document.querySelector('#home');
        if (target) {
            setTimeout(() => {
                const offsetTop = target.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }, 300);
        }
    } else if (hash === '#tabs-section') {
        const target = document.querySelector('#tabs-section');
        if (target) {
            setTimeout(() => {
                const offsetTop = target.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }, 300);
        }
    }
});
