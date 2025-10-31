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

// Handle tab parameter from URL query string and hash (for new tab opens)
window.addEventListener('DOMContentLoaded', () => {
    // Check URL parameters
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
            }, 100);
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
            }, 100);
        }
    }
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

// 페이지 로드 시 News 렌더링 및 Conference 정렬
window.addEventListener('DOMContentLoaded', () => {
    renderNews();
    sortConferenceLists();
});
