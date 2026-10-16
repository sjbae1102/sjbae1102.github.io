// News Data - 간단하게 날짜와 내용을 추가하세요
// 
// 방법 1: 간단한 텍스트 형식 (세미콜론으로 구분)
// 형식: '날짜; 내용'
// 예시: 'Oct 1, 2024; 새로운 논문이 발표되었습니다. 논문 제목이 Journal Name에 게재되었습니다.'
//
// 방법 2: 객체 형식 (더 많은 옵션 사용 가능)
// {
//     date: "날짜",
//     content: "내용",
//     link: "링크 URL (선택사항)",
//     linkText: "링크 텍스트 (선택사항)",
//     image: "이미지 URL (선택사항)"
// }
//
// Bold 처리 방법:
// content에서 **텍스트** 형식으로 감싸면 해당 텍스트가 bold 처리됩니다.
// 예시: "Our new paper **'Paper Title'** has been published."
// 예시: "I delivered a presentation entitled **'AI-DRIVEN HOURLY GPP MAPPING'**."

// 간단한 텍스트 형식의 News (자동으로 파싱됩니다)
// const simpleNewsText = [
//     'Oct 23, 2025; I was honored to receive the Best Presentation Award at the Autumn Conference of the Korean Society of Remote Sensing (KSRS) 2025.',
//     'Sep 15, 2024; Conference Name에서 발표를 진행했습니다.',
//     'Aug 1, 2024; 프로젝트 관련 소식입니다. 자세한 내용은 여기를 참고하세요.'
// ];

// 객체 형식의 News (더 많은 옵션 사용 가능)
const newsDataObjects = [
    {
        date: "Dec 29, 2025",
        content: "Our new paper entitled '**All-sky hourly estimation over East Asia using Himawari-8 AHI and multi-source data: investigating the main climatic drivers of afternoon depression and intraday variability in gross primary productivity**' has been published in **GIScience & Remote Sensing**, 63(1), 2609352.",
        contentKo: "새 논문 '**All-sky hourly estimation over East Asia using Himawari-8 AHI and multi-source data: investigating the main climatic drivers of afternoon depression and intraday variability in gross primary productivity**'이 **GIScience & Remote Sensing**, 63(1), 2609352에 게재되었습니다.",
        link: "#",
        linkText: "All-sky hourly estimation over East Asia using Himawari-8 AHI and multi-source data: investigating the main climatic drivers of afternoon depression and intraday variability in gross primary productivity",
        image: "news/gisrs.png"
    },

    {
        date: "Dec 15, 2025",
        content: "I attended the **25th American Geophysical Union (AGU) Fall Meeting** international conference.",
        contentKo: "**25th American Geophysical Union (AGU) Fall Meeting** 국제학회에 참석했습니다.",
        image: "news/agu2025.jpg"
    },

    {
        date: "Dec 03, 2025",
        content: "I attended the **The Korean Society of Climate Change Research** Autumn Conference.",
        contentKo: "**The Korean Society of Climate Change Research** 추계학술대회에 참석했습니다.",
        image: "news/climatechange2025.jpg"
    },

    {
        date: "Nov 06, 2025",
        content: "I attended the **2025 GeoAI Data Autumn Conference**.",
        contentKo: "**2025 GeoAI Data Autumn Conference**에 참석했습니다.",
        image: "news/geoai2025.jpg"
    },

    {
        date: "Nov 05, 2025",
        content: "I attended the **Korean Association of Geographic Information Studies (KAGIS) Autumn Conference**.",
        contentKo: "**Korean Association of Geographic Information Studies (KAGIS) Autumn Conference**에 참석했습니다.",
        image: "news/kagis_fall2025.jpg"
    },

    {
        date: "Oct 23, 2025",
        content: "I was honored to receive the Best Presentation Award🏆 at the Autumn Conference of the **Korean Society of Remote Sensing (KSRS) 2025**.",
        contentKo: "**Korean Society of Remote Sensing (KSRS) 2025** 추계학술대회에서 Best Presentation Award🏆를 수상했습니다.",
        link: "#",
        linkText: "Best Presentation Award",
        image: "news/KakaoTalk_20251031_233354574.jpg"
    },

    {
        date: "Aug 07, 2025",
        content: "I delivered a presentation at the **2025 IEEE International Geoscience and Remote Sensing Symposium (IGARSS)** international conference entitled 'AI-DRIVEN HOURLY GPP MAPPING IN EAST ASIA INCORPORATING HIMAWARI-8 AHI AND AEROSOL-INDUCED RADIATION VARIABILITY'.",
        contentKo: "**2025 IEEE International Geoscience and Remote Sensing Symposium (IGARSS)** 국제학회에서 'AI-DRIVEN HOURLY GPP MAPPING IN EAST ASIA INCORPORATING HIMAWARI-8 AHI AND AEROSOL-INDUCED RADIATION VARIABILITY' 제목으로 발표했습니다.",
        link: "https://2025.ieeeigarss.org/",
        linkText: "2025 IEEE International Geoscience and Remote Sensing Symposium (IGARSS)",
    },

    {
        date: "Jul 02, 2025",
        content: "I delivered a presentation at the **2025 CMAS-Asia-Pacific and Regional IUAPPA Conference** entitled 'Unveiling the impact of aerosol-induced radiation dynamics on vegetation productivity: AI-driven hourly GPP mapping in East Asia using Himawari-8'.",
        contentKo: "**2025 CMAS-Asia-Pacific and Regional IUAPPA Conference**에서 'Unveiling the impact of aerosol-induced radiation dynamics on vegetation productivity: AI-driven hourly GPP mapping in East Asia using Himawari-8' 제목으로 발표했습니다.",
        link: "https://www.cmas-asia-pacific-2025.org/index.asp",
        linkText: "2025 CMAS-Asia-Pacific and Regional IUAPPA Conference",
    },

    {
        date: "Jun 01, 2025",
        content: "Our new paper entitled '**Advancing hourly gross primary productivity mapping over East Asia using Himawari-8 AHI and artificial intelligence: Unveiling the impact of aerosol-induced radiation dynamics**' has been published in **Remote Sensing of Environment (IF: 11.4, JCR: 2.4%)**",
        contentKo: "새 논문 '**Advancing hourly gross primary productivity mapping over East Asia using Himawari-8 AHI and artificial intelligence: Unveiling the impact of aerosol-induced radiation dynamics**'이 **Remote Sensing of Environment (IF: 11.4, JCR: 2.4%)**에 게재되었습니다.",
        link: "https://doi.org/10.1016/j.rse.2025.114735",
        linkText: "Advancing hourly gross primary productivity mapping over East Asia using Himawari-8 AHI and artificial intelligence: Unveiling the impact of aerosol-induced radiation dynamics",
        image: "news/rse1.png"
    },

    {
        date: "May 30, 2025",
        content: "I delivered a presentation at the **Korean Association of Geographic Information Studies (KAGIS)** Spring Conference and received the **Outstanding Paper Presentation Award🏆**.",
        contentKo: "**Korean Association of Geographic Information Studies (KAGIS)** 춘계학술대회에서 발표하고 **Outstanding Paper Presentation Award🏆**를 수상했습니다.",
        link: "#",
        linkText: "Outstanding Paper Presentation Award",
        image: "news/kagis2025.jpg"
    },

    {
        date: "May 15, 2025",
        content: "I delivered a presentation at the **International Symposium on Remote Sensing (ISRS)** international conference.",
        contentKo: "**International Symposium on Remote Sensing (ISRS)** 국제학회에서 발표했습니다.",
    },

    {
        date: "Dec 31, 2024",
        content: "Our paper entitled '**SAMBA: Synthetic Data-Augmented Mamba-Based Change Detection Algorithm Using KOMPSAT-3A Imagery**' has been published in **Korean Journal of Remote Sensing**, 40(6_3), 1505-1521.",
        contentKo: "논문 '**SAMBA: Synthetic Data-Augmented Mamba-Based Change Detection Algorithm Using KOMPSAT-3A Imagery**'이 **Korean Journal of Remote Sensing**, 40(6_3), 1505-1521에 게재되었습니다.",
        link: "#",
        linkText: "SAMBA: Synthetic Data-Augmented Mamba-Based Change Detection Algorithm Using KOMPSAT-3A Imagery",
        image: "news/kjrs2.png"
    },

    {
        date: "Oct 17, 2024",
        content: "I delivered a presentation at the **Korean Society of Remote Sensing (KSRS)** Autumn Conference.",
        contentKo: "**Korean Society of Remote Sensing (KSRS)** 추계학술대회에서 발표했습니다.",
    },

    {
        date: "Jun 24, 2024",
        content: "I delivered a presentation at the **Asia Oceania Geosciences Society (AOGS)** international conference.",
        contentKo: "**Asia Oceania Geosciences Society (AOGS)** 국제학회에서 발표했습니다.",
    },

    {
        date: "Apr 26, 2024",
        content: "I delivered a presentation at the **Korean Association of Geographic Information Studies (KAGIS)** Spring Conference and received the **Outstanding Paper Presentation Award🏆**.",
        contentKo: "**Korean Association of Geographic Information Studies (KAGIS)** 춘계학술대회에서 발표하고 **Outstanding Paper Presentation Award🏆**를 수상했습니다.",
        link: "#",
        linkText: "Outstanding Paper Presentation Award",
        image: "news/kagis2024.jpg"
    },

    {
        date: "Oct 31, 2023",
        content: "Our paper entitled 'Estimation of Fractional Urban Tree Canopy Cover through Machine Learning Using Optical Satellite Images. (기계학습을 이용한 광학 위성 영상 기반의 도시 내 수목 피복률 추정)' has been published in **Korean Journal of Remote Sensing**, 39(5), 1009-1029.",
        contentKo: "논문 'Estimation of Fractional Urban Tree Canopy Cover through Machine Learning Using Optical Satellite Images. (기계학습을 이용한 광학 위성 영상 기반의 도시 내 수목 피복률 추정)'이 **Korean Journal of Remote Sensing**, 39(5), 1009-1029에 게재되었습니다.",
        link: "#",
        linkText: "Estimation of Fractional Urban Tree Canopy Cover through Machine Learning Using Optical Satellite Images. (기계학습을 이용한 광학 위성 영상 기반의 도시 내 수목 피복률 추정)",
        image: "news/kjrs1.png"
    },

    {
        date: "Nov 15, 2023",
        content: "I delivered a presentation at the **Korean Society of Remote Sensing (KSRS)** Autumn Conference.",
        contentKo: "**Korean Society of Remote Sensing (KSRS)** 추계학술대회에서 발표했습니다.",
    },

    {
        date: "Dec 31, 2021",
        content: "Analysis of deep learning research trends applied to remote sensing through paper review of Korean domestic journals. (국내학회지 논문 리뷰를 통한 원격탐사 분야 딥러닝 연구 동향 분석) has been published in **Journal of the Korean Society of Surveying, Geodesy, Photogrammetry and Cartography**, 39(6), 437-456.",
        contentKo: "논문 'Analysis of deep learning research trends applied to remote sensing through paper review of Korean domestic journals. (국내학회지 논문 리뷰를 통한 원격탐사 분야 딥러닝 연구 동향 분석)'이 **Journal of the Korean Society of Surveying, Geodesy, Photogrammetry and Cartography**, 39(6), 437-456에 게재되었습니다.",
        link: "#",
        linkText: "Analysis of deep learning research trends applied to remote sensing through paper review of Korean domestic journals. (국내학회지 논문 리뷰를 통한 원격탐사 분야 딥러닝 연구 동향 분석)",
        image: "news/ksgpc1.png"
    },
];

// 간단한 텍스트를 객체로 변환하는 함수
function parseSimpleNews(textArray) {
    return textArray.map(text => {
        const parts = text.split(';');
        if (parts.length >= 2) {
            return {
                date: parts[0].trim(),
                content: parts.slice(1).join(';').trim()
            };
        }
        return { date: '', content: text.trim() };
    });
}

// 최종 newsData: 간단한 텍스트와 객체를 합쳐서 사용
const newsData = [
    // ...parseSimpleNews(simpleNewsText),
    ...newsDataObjects
];



