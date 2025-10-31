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
        date: "Oct 23, 2025",
        content: "I was honored to receive the Best Presentation Award🏆 at the Autumn Conference of the **Korean Society of Remote Sensing (KSRS) 2025**.",
        link: "#",
        linkText: "Best Presentation Award",
        image: "news/KakaoTalk_20251031_233354574.jpg"
    },

    {
        date: "Aug 07, 2025",
        content: "I delivered a presentation at the 2025 IEEE International Geoscience and Remote Sensing Symposium (IGARSS) entitled 'AI-DRIVEN HOURLY GPP MAPPING IN EAST ASIA INCORPORATING HIMAWARI-8 AHI AND AEROSOL-INDUCED RADIATION VARIABILITY'.",
        link: "https://2025.ieeeigarss.org/",
        linkText: "2025 IEEE International Geoscience and Remote Sensing Symposium (IGARSS)",
    },

    {
        date: "Jul 02, 2025",
        content: "I delivered a presentation at the 2025 CMAS-Asia-Pacific and Regional IUAPPA Conference entitled 'Unveiling the impact of aerosol-induced radiation dynamics on vegetation productivity: AI-driven hourly GPP mapping in East Asia using Himawari-8'.",
        link: "https://www.cmas-asia-pacific-2025.org/index.asp",
        linkText: "2025 CMAS-Asia-Pacific and Regional IUAPPA Conference",
    },

    {
        date: "Jun 01, 2025",
        content: "Our new paper entitled 'Advancing hourly gross primary productivity mapping over East Asia using Himawari-8 AHI and artificial intelligence: Unveiling the impact of aerosol-induced radiation dynamics' has been published in **Remote Sensing of Environment (IF: 11.4, JCR: 2.4%)**.",
        link: "https://doi.org/10.1016/j.rse.2025.114735",
        linkText: "Advancing hourly gross primary productivity mapping over East Asia using Himawari-8 AHI and artificial intelligence: Unveiling the impact of aerosol-induced radiation dynamics",
        image: "news/rse1.png"
    },    

    // {
    //     date: "Aug 1, 2024",
    //     content: "프로젝트 관련 소식입니다. 자세한 내용은",
    //     link: "#",
    //     linkText: "여기"
    // }
    // 새로운 News를 추가하려면 위 형식을 따라 아래에 추가하세요:
    // {
    //     date: "날짜",
    //     content: "내용",
    //     link: "링크 URL (선택사항)",
    //     linkText: "링크 텍스트 (선택사항)",
    //     image: "이미지 URL (선택사항)"
    // }
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



