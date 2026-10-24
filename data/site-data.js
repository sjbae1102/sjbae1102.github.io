/* eslint-disable no-unused-vars */
/**
 * Single source of truth for site content (GitHub Pages, no build step).
 * Edit this file only; pages render via js/site-render.js.
 */
const SITE_DATA = {
  lastUpdated: 'October 2026',
  copyrightYear: 2026,

  /** Home hero (index.html, rendered by js/home.js) */
  profile: {
    overline: 'Environmental Remote Sensing · Artificial Intelligence',
    overlineKo: '환경 원격탐사 · 인공지능',
    bio: 'I develop remote sensing and AI-driven approaches for quantifying terrestrial carbon flux and disaster monitoring.',
    // DRAFT (세정님 확인 필요)
    bioKo: '원격탐사와 인공지능을 활용해 육상 탄소 플럭스를 정량화하고 재난을 모니터링하는 방법을 연구합니다.',
    education: [
      { period: '2023 – Now', periodKo: '2023 – 현재', degree: 'Combined M.S. & Ph.D.', degreeKo: '석·박사통합과정', detail: 'Civil, Urban, Earth, and Environmental Engineering · UNIST', detailKo: 'UNIST 지구환경도시건설공학과' },
      { period: '2019 – 2023', degree: 'B.Eng. in Civil Engineering', degreeKo: '건설시스템공학 학사', detail: 'Seoul National University of Science and Technology', detailKo: '서울과학기술대학교' },
    ],
  },

  publications: {
    inProgress: [
      {
        id: 'inprogress-tgrs-landslide-2026',
        html:
          '<b>1.</b> <u>Bae, S</u>., & Im, J. (2026). Evaluating Integration Strategies of Multimodal Geospatial Foundation Model for Landslide Semantic Segmentation. <em>IEEE Transactions on Geoscience and Remote Sensing</em>. <span class="status-badge status-under-review">Under review</span>',
      },
      {
        id: 'inprogress-rse-transfer-2026',
        html:
          '<b>2.</b> <u>Bae, S</u>., Chung, I., Lee, G., Kim, Y., Im, J., Kim, Y., Choi, H., Hwang, S., Lee, G., & Yun, S. (2026). Process-guided global-to-regional transfer learning for hourly gross primary productivity mapping with geostationary satellite observations. <em>Remote Sensing of Environment</em>. <span class="status-badge status-under-review">Under review</span>',
      },
      {
        id: 'inprogress-sciadv-enso-2026',
        html:
          '<b>3.</b> <u>Bae, S</u>., & Im, J. (2026). Contrasting diurnal pathways shape ENSO-driven land carbon uptake. <em>Science Advances</em>. <span class="status-badge status-under-review">Under review</span>',
      },
    ],
    international: [
      {
        id: 'pub-adapt-isprs-2026',
        year: 2026,
        image: 'news/isprs_adapt.png',
        imageAlt: 'ADAPT ISPRS Journal article',
        doi: 'https://doi.org/10.1016/j.isprsjprs.2026.09.024',
        authorsHtml:
          '<u>Bae, S</u>., Lee, G., Chung, I., Kim, Y., Kim, Y., Im, J., Hwang, S., Son, B., & Sung, T.',
        title:
          'An Adaptive Dynamic AI-driven ParameTerization (ADAPT) framework for global hourly gross primary productivity estimation',
        journal: 'ISPRS Journal of Photogrammetry and Remote Sensing',
        volume: '242',
        pages: '648–664',
        datasetUrl: 'https://doi.org/10.57760/sciencedb.37163',
        metrics: { value: '12.9', year: 2025, rank: '2/66', top: '3.0' },
      },
      {
        id: 'pub-helios-isprs-2026',
        year: 2026,
        image: 'news/isprs_helios.png',
        imageAlt: 'HELIOS-Net ISPRS Journal article',
        doi: 'https://doi.org/10.1016/j.isprsjprs.2026.09.028',
        authorsHtml:
          'Kim, Y., Cho, D., Bae, D., Lee, Y., Lee, S., <u>Bae, S</u>., & Im, J.',
        title:
          'HELIOS-Net: Hourly daytime estimation of land surface temperature with integration of observational solar-cloud-satellite geometry and deep neural network',
        journal: 'ISPRS Journal of Photogrammetry and Remote Sensing',
        volume: '242',
        pages: '760–777',
        metrics: { value: '12.9', year: 2025, rank: '2/66', top: '3.0' },
      },
      {
        id: 'pub-unique-rse-2026',
        year: 2026,
        image: 'news/rse_unique.png',
        imageAlt: 'UNIQUE Remote Sensing of Environment article',
        doi: 'https://doi.org/10.1016/j.rse.2026.115636',
        authorsHtml:
          'Son, B., Sung, T., <u>Bae, S</u>., Choo, M., Im, J., Lee, Y., Rana, S. M. S., Cho, D., Yoo, C., Hong, J., Lee, H., & Kim, H. S.',
        title: 'UNIQUE: UNified, high-resolution Intelligent carbon QUantification and Explanation',
        journal: 'Remote Sensing of Environment',
        volume: '346',
        pages: '115636',
        metrics: { value: '12.3', year: 2025, rank: '4/66', top: '6.1' },
      },
      {
        id: 'pub-gisrs-2026',
        year: 2026,
        image: 'news/gisrs.png',
        imageAlt: 'GIScience and Remote Sensing paper',
        doi: 'https://doi.org/10.1080/15481603.2025.2609352',
        authorsHtml: '<u>Bae, S</u>., Son, B., Sung, T., Kim, Y., Kim, Y., & Im, J.',
        title:
          'All-sky hourly estimation over East Asia using Himawari-8 AHI and multi-source data: investigating the main climatic drivers of afternoon depression and intraday variability in gross primary productivity',
        journal: 'GIScience & Remote Sensing',
        volume: '63',
        issue: '1',
        pages: '2609352',
        metrics: { value: '6.8', year: 2025, rank: '11/66', top: '16.7' },
      },
      {
        id: 'pub-rse-gpp-2025',
        year: 2025,
        image: 'news/rse1.png',
        imageAlt: 'Remote Sensing of Environment GPP paper',
        doi: 'https://doi.org/10.1016/j.rse.2025.114735',
        authorsHtml: '<u>Bae, S</u>., Son, B., Sung, T., Kang, Y., & Im, J.',
        title:
          'Advancing hourly gross primary productivity mapping over East Asia using Himawari-8 AHI and artificial intelligence: Unveiling the impact of aerosol-induced radiation dynamics',
        journal: 'Remote Sensing of Environment',
        volume: '323',
        pages: '114735',
        metrics: { value: '12.3', year: 2025, rank: '4/66', top: '6.1' },
      },
    ],
    domestic: [
      {
        id: 'pub-samba-kjrs-2024',
        year: 2024,
        image: 'news/kjrs2.png',
        imageAlt: 'SAMBA change detection paper',
        authorsHtml: 'Tobias, R. R., <u>Bae, S</u>., Cho, H., & Im, J.',
        title: 'SAMBA: Synthetic Data-Augmented Mamba-Based Change Detection Algorithm Using KOMPSAT-3A Imagery',
        doi: 'https://doi.org/10.7780/kjrs.2024.40.6.3.11',
        journal: 'Korean Journal of Remote Sensing',
        volume: '40',
        issue: '6-3',
        pages: '1505–1521',
      },
      {
        id: 'pub-urban-tree-kjrs-2023',
        year: 2023,
        image: 'news/kjrs1.png',
        imageAlt: 'Urban tree canopy paper',
        authorsHtml: '<u>Bae, S</u>., Son, B., Sung, T., Lee, Y., Im, J., & Kang, Y.',
        title:
          'Estimation of Fractional Urban Tree Canopy Cover through Machine Learning Using Optical Satellite Images. 기계학습을 이용한 광학 위성 영상 기반의 도시 내 수목 피복률 추정',
        journal: 'Korean Journal of Remote Sensing',
        volume: '39',
        issue: '5',
        pages: '1009–1029',
      },
      {
        id: 'pub-dl-review-ksgpc-2021',
        year: 2021,
        image: 'news/ksgpc1.png',
        imageAlt: 'Deep learning remote sensing review paper',
        authorsHtml: 'Lee, C., Yun, Y., <u>Bae, S</u>., Eo, Y. D., Kim, C., Shin, S., ... & Han, Y.',
        title:
          'Analysis of deep learning research trends applied to remote sensing through paper review of Korean domestic journals. 국내학회지 논문 리뷰를 통한 원격탐사 분야 딥러닝 연구 동향 분석',
        journal: 'Journal of the Korean Society of Surveying, Geodesy, Photogrammetry and Cartography',
        volume: '39',
        issue: '6',
        pages: '437–456',
      },
    ],
  },

  conferences: {
    international: [
      {
        id: 'conf-acm2026',
        date: 'Oct 13, 2026',
        textEn: '5th Asian Conference on Meteorology (ACM2026)',
        textKo: '5th Asian Conference on Meteorology (ACM2026)',
        presentationType: 'Oral',
      },
      {
        id: 'conf-igarss2026',
        date: 'Aug 11, 2026',
        textEn: '2026 IEEE International Geoscience and Remote Sensing Symposium (IGARSS)',
        textKo: '2026 IEEE International Geoscience and Remote Sensing Symposium (IGARSS)',
        presentationType: 'Poster',
      },
      {
        id: 'conf-agu2025',
        date: 'Dec 15, 2025',
        textEn: '25th American Geophysical Union (AGU) Fall Meeting',
        textKo: '25th American Geophysical Union (AGU) Fall Meeting',
        presentationType: 'Oral',
      },
      {
        id: 'conf-igarss2025',
        date: 'Aug 07, 2025',
        textEn: '2025 IEEE International Geoscience and Remote Sensing Symposium (IGARSS)',
        textKo: '2025 IEEE International Geoscience and Remote Sensing Symposium (IGARSS)',
        presentationType: 'Oral',
      },
      {
        id: 'conf-cmas2025',
        date: 'Jul 02, 2025',
        textEn: '2025 CMAS-Asia-Pacific and Regional IUAPPA Conference',
        textKo: '2025 CMAS-Asia-Pacific and Regional IUAPPA Conference',
        presentationType: 'Oral',
      },
      {
        id: 'conf-isrs2025',
        date: 'May 15, 2025',
        textEn: 'International Symposium on Remote Sensing (ISRS)',
        textKo: 'International Symposium on Remote Sensing (ISRS)',
        presentationType: 'Oral',
      },
      {
        id: 'conf-aogs2024',
        date: 'Jun 24, 2024',
        textEn: 'Asia Oceania Geosciences Society (AOGS)',
        textKo: 'Asia Oceania Geosciences Society (AOGS)',
        presentationType: 'Oral',
      },
    ],
    domestic: [
      {
        id: 'conf-kcc-spring-2026',
        date: 'Jun 25, 2026',
        textEn: '2026 Korean Society of Climate Change Spring Conference',
        textKo: '2026 한국기후변화학회 춘계학술대회',
      },
      {
        id: 'conf-kcc-autumn-2025',
        date: 'Dec 03, 2025',
        textEn: 'The Korean Society of Climate Change Research Autumn Conference',
        textKo: '한국기후변화학회 추계학술대회',
      },
      {
        id: 'conf-geoai-2025',
        date: 'Nov 06, 2025',
        textEn: '2025 GeoAI Data Autumn Conference',
        textKo: '2025 GeoAI Data Autumn Conference',
      },
      {
        id: 'conf-kagis-fall-2025',
        date: 'Nov 05, 2025',
        textEn: 'Korean Association of Geographic Information Studies (KAGIS) Autumn Conference',
        textKo: '한국지리정보학회 추계학술대회',
      },
      {
        id: 'conf-ksrs-fall-2025',
        date: 'Oct 23, 2025',
        textEn: 'Korean Society of Remote Sensing (KSRS) Autumn Conference🏆',
        textKo: '대한원격탐사학회 추계학술대회🏆',
      },
      {
        id: 'conf-ksrs-fall-2024',
        date: 'Oct 17, 2024',
        textEn: 'Korean Society of Remote Sensing (KSRS) Autumn Conference',
        textKo: '대한원격탐사학회 추계학술대회',
      },
      {
        id: 'conf-kagis-spring-2025',
        date: 'May 30, 2025',
        textEn: 'Korean Association of Geographic Information Studies (KAGIS) Spring Conference🏆',
        textKo: '한국지리정보학회 춘계학술대회🏆',
      },
      {
        id: 'conf-kagis-spring-2024',
        date: 'Apr 26, 2024',
        textEn: 'Korean Association of Geographic Information Studies (KAGIS) Spring Conference🏆',
        textKo: '한국지리정보학회 춘계학술대회🏆',
      },
      {
        id: 'conf-ksrs-fall-2023',
        date: 'Nov 15, 2023',
        textEn: 'Korean Society of Remote Sensing (KSRS) Autumn Conference',
        textKo: '대한원격탐사학회 추계학술대회',
      },
      {
        id: 'conf-ksgpc-2021',
        date: 'Nov 05, 2021',
        textEn: 'Korean Society of Surveying, Geodesy, Photogrammetry and Cartography (KSGPC)',
        textKo: '한국측량학회 학술대회',
      },
    ],
  },

  about: {
    awards: [
      {
        id: 'award-molit-2026',
        year: '2026',
        textEn: 'Encouragement Award, Land, Infrastructure and Transport Technology Fair.',
        textKo: '장려상, 국토교통기술대전.',
      },
      {
        id: 'award-aoge-2026',
        year: '2026',
        textEn:
          'Selected Proposal, AOGEO Tasking Group International Cooperation Support Program (AOGEO).',
        textKo: '선정, AOGEO 태스킹 그룹 국제협력 지원 프로그램.',
      },
      {
        id: 'award-ksrs-2025',
        year: '2025',
        textEn: 'Best Presentation Award, Korean Society of Remote Sensing (KSRS).',
        textKo: '우수발표논문상, 대한원격탐사학회(KSRS).',
      },
      {
        id: 'award-kagis-2025',
        year: '2025',
        textEn:
          'Outstanding Paper Presentation Award, Korean Association of Geographic Information Studies (KAGIS).',
        textKo: '우수논문상, 한국지리정보학회(KAGIS).',
      },
      {
        id: 'award-kasa-2024',
        year: '2024',
        textEn:
          "Administrator's Award (Grand Prize), Satellite Information Application Contest, Korea Aerospace Administration (KASA).",
        textKo: '우주항공청장상(대상), 위성정보활용 경진대회, 우주항공청(KASA).',
      },
      {
        id: 'award-kagis-2024',
        year: '2024',
        textEn:
          'Outstanding Paper Presentation Award, Korean Association of Geographic Information Studies (KAGIS).',
        textKo: '우수논문상, 한국지리정보학회(KAGIS).',
      },
      {
        id: 'award-agri-2021',
        year: '2021',
        textEn: 'Encouragement Award, Agricultural and Forestry Satellite Idea Challenge.',
        textKo: '장려상, 농림위성 활용 아이디어 경진대회.',
      },
    ],
    grants: [
      {
        id: 'grant-nrf-ms-2024',
        year: '2024',
        textEn:
          "Research Scholarship for Master's Students, National Research Foundation of Korea",
        textKo: '2024 석사과정생 연구장려금 지원사업, 한국연구재단',
        detailKo: 'RS-2024-00465',
        detailEn: '2024 석사과정생 연구장려금 지원사업; RS-2024-00465',
      },
    ],
  },

  news: [
    {
      id: 'news-acm2026-oral',
      date: 'Oct 13, 2026',
      content:
        "I delivered an oral presentation at the **5th Asian Conference on Meteorology (ACM2026)** in Gyeongju, Korea entitled '**Hourly all-sky GPP across East Asia from Himawari-8 and multi-source observations: identifying the dominant climatic controls on afternoon decline and sub-daily variation**'.",
      contentKo:
        "경주에서 열린 **5th Asian Conference on Meteorology (ACM2026)**에서 '**Hourly all-sky GPP across East Asia from Himawari-8 and multi-source observations: identifying the dominant climatic controls on afternoon decline and sub-daily variation**' 제목으로 구두 발표를 진행했습니다.",
      image: 'news/acm2026.jpg',
    },
    {
      id: 'news-adapt-published',
      date: 'Sep 19, 2026',
      content:
        "Our new paper entitled '**An Adaptive Dynamic AI-driven ParameTerization (ADAPT) framework for global hourly gross primary productivity estimation**' has been published in **ISPRS Journal of Photogrammetry and Remote Sensing**, 242, 648–664.",
      contentKo:
        "새 논문 '**An Adaptive Dynamic AI-driven ParameTerization (ADAPT) framework for global hourly gross primary productivity estimation**'이 **ISPRS Journal of Photogrammetry and Remote Sensing**, 242, 648–664에 게재되었습니다.",
      link: 'https://doi.org/10.1016/j.isprsjprs.2026.09.024',
      linkText:
        'An Adaptive Dynamic AI-driven ParameTerization (ADAPT) framework for global hourly gross primary productivity estimation',
      image: 'news/isprs_adapt.png',
    },
    {
      id: 'news-helios-published',
      date: 'Sep 22, 2026',
      content:
        "Our new paper entitled '**HELIOS-Net: Hourly daytime estimation of land surface temperature with integration of observational solar-cloud-satellite geometry and deep neural network**' has been published in **ISPRS Journal of Photogrammetry and Remote Sensing**, 242, 760–777.",
      contentKo:
        "새 논문 '**HELIOS-Net: Hourly daytime estimation of land surface temperature with integration of observational solar-cloud-satellite geometry and deep neural network**'이 **ISPRS Journal of Photogrammetry and Remote Sensing**, 242, 760–777에 게재되었습니다.",
      link: 'https://doi.org/10.1016/j.isprsjprs.2026.09.028',
      linkText:
        'HELIOS-Net: Hourly daytime estimation of land surface temperature with integration of observational solar-cloud-satellite geometry and deep neural network',
      image: 'news/isprs_helios.png',
    },
    {
      id: 'news-unique-published',
      date: 'Aug 28, 2026',
      content:
        "Our new paper entitled '**UNIQUE: UNified, high-resolution Intelligent carbon QUantification and Explanation**' has been published in **Remote Sensing of Environment**, 346, 115636.",
      contentKo:
        "새 논문 '**UNIQUE: UNified, high-resolution Intelligent carbon QUantification and Explanation**'이 **Remote Sensing of Environment**, 346, 115636에 게재되었습니다.",
      link: 'https://doi.org/10.1016/j.rse.2026.115636',
      linkText: 'UNIQUE: UNified, high-resolution Intelligent carbon QUantification and Explanation',
      image: 'news/rse_unique.png',
    },
    {
      id: 'news-igarss2026-poster',
      date: 'Aug 11, 2026',
      content:
        "I presented a poster at **2026 IEEE IGARSS** in Washington, D.C., USA entitled '**All-sky hourly estimation over East Asia using Himawari-8 AHI and multi-source data: investigating the main climatic drivers of afternoon depression and intraday variability in gross primary productivity**'.",
      contentKo:
        "미국 워싱턴 D.C.에서 열린 **2026 IEEE IGARSS**에서 '**All-sky hourly estimation over East Asia using Himawari-8 AHI and multi-source data: investigating the main climatic drivers of afternoon depression and intraday variability in gross primary productivity**' 제목으로 포스터를 발표했습니다.",
      image: 'news/igarss2026_poster_photo.jpg',
    },
    {
      id: 'news-kcc-spring-2026',
      date: 'Jun 25, 2026',
      content:
        'I attended the **2026 Korean Society of Climate Change (한국기후변화학회) Spring Conference** at Sejong University (세종대학교).',
      contentKo: '**2026 한국기후변화학회 상반기학술대회**(세종대학교)에 참석했습니다.',
      image: 'news/climatechange2026.jpg',
    },
    {
      id: 'news-molit-award-2026',
      date: 'Jun 24, 2026',
      content:
        "I was honored to receive the **Encouragement Award (장려상)** for '**Top 20 Excellent Papers in National Land, Infrastructure and Transport R&D**' (국토교통R&D 우수논문 20선) at the **2026 Land, Infrastructure and Transport Technology Fair** (2026 국토교통기술대전) for the paper '**AI와 Himawari-8 정지궤도위성을 활용한 시간별 총일차생산량(GPP) 추정: 에어로졸의 영향 분석**'.",
      contentKo:
        "**2026 국토교통기술대전**에서 논문 '**AI와 Himawari-8 정지궤도위성을 활용한 시간별 총일차생산량(GPP) 추정: 에어로졸의 영향 분석**'이 **국토교통R&D 우수논문 20선**에 선정되어 **장려상**을 수상했습니다.",
      image: 'news/molit2026_award.jpg',
    },
    {
      id: 'news-gisrs-published',
      date: 'Dec 29, 2025',
      content:
        "Our new paper entitled '**All-sky hourly estimation over East Asia using Himawari-8 AHI and multi-source data: investigating the main climatic drivers of afternoon depression and intraday variability in gross primary productivity**' has been published in **GIScience & Remote Sensing**, 63(1), 2609352.",
      contentKo:
        "새 논문 '**All-sky hourly estimation over East Asia using Himawari-8 AHI and multi-source data: investigating the main climatic drivers of afternoon depression and intraday variability in gross primary productivity**'이 **GIScience & Remote Sensing**, 63(1), 2609352에 게재되었습니다.",
      link: 'https://doi.org/10.1080/15481603.2025.2609352',
      linkText:
        'All-sky hourly estimation over East Asia using Himawari-8 AHI and multi-source data: investigating the main climatic drivers of afternoon depression and intraday variability in gross primary productivity',
      image: 'news/gisrs.png',
    },
    {
      id: 'news-agu2025',
      date: 'Dec 15, 2025',
      content: 'I attended the **25th American Geophysical Union (AGU) Fall Meeting** international conference.',
      contentKo: '**25th American Geophysical Union (AGU) Fall Meeting** 국제학회에 참석했습니다.',
      image: 'news/agu2025.jpg',
    },
    {
      id: 'news-climate-2025',
      date: 'Dec 03, 2025',
      content: 'I attended the **The Korean Society of Climate Change Research** Autumn Conference.',
      contentKo: '**The Korean Society of Climate Change Research** 추계학술대회에 참석했습니다.',
      image: 'news/climatechange2025.jpg',
    },
    {
      id: 'news-geoai-2025',
      date: 'Nov 06, 2025',
      content: 'I attended the **2025 GeoAI Data Autumn Conference**.',
      contentKo: '**2025 GeoAI Data Autumn Conference**에 참석했습니다.',
      image: 'news/geoai2025.jpg',
    },
    {
      id: 'news-kagis-fall-2025',
      date: 'Nov 05, 2025',
      content: 'I attended the **Korean Association of Geographic Information Studies (KAGIS) Autumn Conference**.',
      contentKo: '**Korean Association of Geographic Information Studies (KAGIS) Autumn Conference**에 참석했습니다.',
      image: 'news/kagis_fall2025.jpg',
    },
    {
      id: 'news-ksrs-award-2025',
      date: 'Oct 23, 2025',
      content:
        'I was honored to receive the Best Presentation Award🏆 at the Autumn Conference of the **Korean Society of Remote Sensing (KSRS) 2025**.',
      contentKo: '**Korean Society of Remote Sensing (KSRS) 2025** 추계학술대회에서 Best Presentation Award🏆를 수상했습니다.',
      link: '#',
      linkText: 'Best Presentation Award',
      image: 'news/KakaoTalk_20251031_233354574.jpg',
    },
    {
      id: 'news-igarss2025',
      date: 'Aug 07, 2025',
      content:
        "I delivered a presentation at the **2025 IEEE International Geoscience and Remote Sensing Symposium (IGARSS)** international conference entitled 'AI-DRIVEN HOURLY GPP MAPPING IN EAST ASIA INCORPORATING HIMAWARI-8 AHI AND AEROSOL-INDUCED RADIATION VARIABILITY'.",
      contentKo:
        "**2025 IEEE International Geoscience and Remote Sensing Symposium (IGARSS)** 국제학회에서 'AI-DRIVEN HOURLY GPP MAPPING IN EAST ASIA INCORPORATING HIMAWARI-8 AHI AND AEROSOL-INDUCED RADIATION VARIABILITY' 제목으로 발표했습니다.",
      link: 'https://2025.ieeeigarss.org/',
      linkText: '2025 IEEE International Geoscience and Remote Sensing Symposium (IGARSS)',
    },
    {
      id: 'news-cmas2025',
      date: 'Jul 02, 2025',
      content:
        "I delivered a presentation at the **2025 CMAS-Asia-Pacific and Regional IUAPPA Conference** entitled 'Unveiling the impact of aerosol-induced radiation dynamics on vegetation productivity: AI-driven hourly GPP mapping in East Asia using Himawari-8'.",
      contentKo:
        "**2025 CMAS-Asia-Pacific and Regional IUAPPA Conference**에서 'Unveiling the impact of aerosol-induced radiation dynamics on vegetation productivity: AI-driven hourly GPP mapping in East Asia using Himawari-8' 제목으로 발표했습니다.",
      link: 'https://www.cmas-asia-pacific-2025.org/index.asp',
      linkText: '2025 CMAS-Asia-Pacific and Regional IUAPPA Conference',
    },
    {
      id: 'news-rse2025-published',
      date: 'Jun 01, 2025',
      content:
        "Our new paper entitled '**Advancing hourly gross primary productivity mapping over East Asia using Himawari-8 AHI and artificial intelligence: Unveiling the impact of aerosol-induced radiation dynamics**' has been published in **Remote Sensing of Environment (IF: 11.4, JCR: 2.4%)**",
      contentKo:
        "새 논문 '**Advancing hourly gross primary productivity mapping over East Asia using Himawari-8 AHI and artificial intelligence: Unveiling the impact of aerosol-induced radiation dynamics**'이 **Remote Sensing of Environment (IF: 11.4, JCR: 2.4%)**에 게재되었습니다.",
      link: 'https://doi.org/10.1016/j.rse.2025.114735',
      linkText:
        'Advancing hourly gross primary productivity mapping over East Asia using Himawari-8 AHI and artificial intelligence: Unveiling the impact of aerosol-induced radiation dynamics',
      image: 'news/rse1.png',
    },
    {
      id: 'news-kagis-award-2025',
      date: 'May 30, 2025',
      content:
        'I delivered a presentation at the **Korean Association of Geographic Information Studies (KAGIS)** Spring Conference and received the **Outstanding Paper Presentation Award🏆**.',
      contentKo:
        '**Korean Association of Geographic Information Studies (KAGIS)** 춘계학술대회에서 발표하고 **Outstanding Paper Presentation Award🏆**를 수상했습니다.',
      link: '#',
      linkText: 'Outstanding Paper Presentation Award',
      image: 'news/kagis2025.jpg',
    },
    {
      id: 'news-isrs2025',
      date: 'May 15, 2025',
      content: 'I delivered a presentation at the **International Symposium on Remote Sensing (ISRS)** international conference.',
      contentKo: '**International Symposium on Remote Sensing (ISRS)** 국제학회에서 발표했습니다.',
    },
    {
      id: 'news-samba-published',
      date: 'Dec 31, 2024',
      content:
        "Our paper entitled '**SAMBA: Synthetic Data-Augmented Mamba-Based Change Detection Algorithm Using KOMPSAT-3A Imagery**' has been published in **Korean Journal of Remote Sensing**, 40(6_3), 1505-1521.",
      contentKo:
        "논문 '**SAMBA: Synthetic Data-Augmented Mamba-Based Change Detection Algorithm Using KOMPSAT-3A Imagery**'이 **Korean Journal of Remote Sensing**, 40(6_3), 1505-1521에 게재되었습니다.",
      link: '#',
      linkText: 'SAMBA: Synthetic Data-Augmented Mamba-Based Change Detection Algorithm Using KOMPSAT-3A Imagery',
      image: 'news/kjrs2.png',
    },
    {
      id: 'news-ksrs-fall-2024',
      date: 'Oct 17, 2024',
      content: 'I delivered a presentation at the **Korean Society of Remote Sensing (KSRS)** Autumn Conference.',
      contentKo: '**Korean Society of Remote Sensing (KSRS)** 추계학술대회에서 발표했습니다.',
    },
    {
      id: 'news-aogs2024',
      date: 'Jun 24, 2024',
      content: 'I delivered a presentation at the **Asia Oceania Geosciences Society (AOGS)** international conference.',
      contentKo: '**Asia Oceania Geosciences Society (AOGS)** 국제학회에서 발표했습니다.',
    },
    {
      id: 'news-kagis-award-2024',
      date: 'Apr 26, 2024',
      content:
        'I delivered a presentation at the **Korean Association of Geographic Information Studies (KAGIS)** Spring Conference and received the **Outstanding Paper Presentation Award🏆**.',
      contentKo:
        '**Korean Association of Geographic Information Studies (KAGIS)** 춘계학술대회에서 발표하고 **Outstanding Paper Presentation Award🏆**를 수상했습니다.',
      link: '#',
      linkText: 'Outstanding Paper Presentation Award',
      image: 'news/kagis2024.jpg',
    },
    {
      id: 'news-urban-tree-published',
      date: 'Oct 31, 2023',
      content:
        "Our paper entitled 'Estimation of Fractional Urban Tree Canopy Cover through Machine Learning Using Optical Satellite Images. (기계학습을 이용한 광학 위성 영상 기반의 도시 내 수목 피복률 추정)' has been published in **Korean Journal of Remote Sensing**, 39(5), 1009-1029.",
      contentKo:
        "논문 'Estimation of Fractional Urban Tree Canopy Cover through Machine Learning Using Optical Satellite Images. (기계학습을 이용한 광학 위성 영상 기반의 도시 내 수목 피복률 추정)'이 **Korean Journal of Remote Sensing**, 39(5), 1009-1029에 게재되었습니다.",
      link: '#',
      linkText:
        'Estimation of Fractional Urban Tree Canopy Cover through Machine Learning Using Optical Satellite Images. (기계학습을 이용한 광학 위성 영상 기반의 도시 내 수목 피복률 추정)',
      image: 'news/kjrs1.png',
    },
    {
      id: 'news-ksrs-fall-2023',
      date: 'Nov 15, 2023',
      content: 'I delivered a presentation at the **Korean Society of Remote Sensing (KSRS)** Autumn Conference.',
      contentKo: '**Korean Society of Remote Sensing (KSRS)** 추계학술대회에서 발표했습니다.',
    },
    {
      id: 'news-dl-review-published',
      date: 'Dec 31, 2021',
      content:
        'Analysis of deep learning research trends applied to remote sensing through paper review of Korean domestic journals. (국내학회지 논문 리뷰를 통한 원격탐사 분야 딥러닝 연구 동향 분석) has been published in **Journal of the Korean Society of Surveying, Geodesy, Photogrammetry and Cartography**, 39(6), 437-456.',
      contentKo:
        "논문 'Analysis of deep learning research trends applied to remote sensing through paper review of Korean domestic journals. (국내학회지 논문 리뷰를 통한 원격탐사 분야 딥러닝 연구 동향 분석)'이 **Journal of the Korean Society of Surveying, Geodesy, Photogrammetry and Cartography**, 39(6), 437-456에 게재되었습니다.",
      link: '#',
      linkText:
        'Analysis of deep learning research trends applied to remote sensing through paper review of Korean domestic journals. (국내학회지 논문 리뷰를 통한 원격탐사 분야 딥러닝 연구 동향 분석)',
      image: 'news/ksgpc1.png',
    },
  ],
};

window.SITE_DATA = SITE_DATA;


/* Single citation format for every page: authors (year). title. journal, volume(issue), pages. DOI */
window.SITE_CITE = {
  citation(p, opts = {}) {
    const vi = [p.volume ? `${p.volume}${p.issue ? `(${p.issue})` : ''}` : '', p.pages].filter(Boolean).join(', ');
    const doi = p.doi && !opts.noDoi
      ? ` <a class="pub-doi" href="${p.doi}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation();">${p.doi.replace(/^https?:\/\//, '')}</a>`
      : '';
    const au = p.authorsHtml.replace(/<u>(.*?)<\/u>\.?/g, '<b class="me">$1.</b>');
    return `<span class="pub-au">${au}</span> (${p.year}). <span class="pub-title">${p.title}.</span> <em>${p.journal}</em>${vi ? `, ${vi}` : ''}.${doi}`;
  },
  dataset(p) {
    return p.datasetUrl
      ? `<a class="publication-inline-link" href="${p.datasetUrl}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation();">Dataset: ${p.datasetUrl.replace(/^https?:\/\//, '')}</a>`
      : '';
  },
  badge(p) {
    const m = p.metrics;
    if (!m) return '';
    const tip = `Journal Impact Factor ${m.value} (JCR ${m.year}) · Remote Sensing ${m.rank}`;
    return `<span class="ifm ifm-b" title="${tip}"><span><b>${m.value}</b> Impact Factor</span><span><b>Top ${m.top}%</b> Remote Sensing</span><span>JCR ${m.year}</span></span>`;
  },
  subtle(p) {
    return p.metrics ? ` <span class="if-subtle" title="JCR ${p.metrics.year}">Impact Factor ${p.metrics.value}</span>` : '';
  },
};
