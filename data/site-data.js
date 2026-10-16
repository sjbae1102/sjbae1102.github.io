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
    bio: 'I develop remote sensing and AI-driven approaches for quantifying terrestrial carbon flux and disaster monitoring.',
    education: [
      { period: '2023 – Now', degree: 'Combined M.S. & Ph.D.', detail: 'Civil, Urban, Earth, and Environmental Engineering · UNIST' },
      { period: '2019 – 2023', degree: 'B.Eng. in Civil Engineering', detail: 'Seoul National University of Science and Technology' },
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
          '<u>Bae, S</u>., Lee, G., Chung, I., Kim, Y., Kim, Y., Im, J., Hwang, S., Son, B., & Sung, T. (2026)',
        title:
          'An Adaptive Dynamic AI-driven ParameTerization (ADAPT) framework for global hourly gross primary productivity estimation.',
        venueHtml:
          '<em>ISPRS Journal of Photogrammetry and Remote Sensing</em>, 242, 648–664. <a href="https://doi.org/10.57760/sciencedb.37163" target="_blank" rel="noopener noreferrer" class="publication-inline-link" onclick="event.stopPropagation();">[Dataset]</a>',
        metricsHtml:
          '<span class="status-badge metric-badge"><span class="metric-label">IF</span>12.9 (2025) <span class="metric-dot">•</span> JCR 3.0%</span>',
      },
      {
        id: 'pub-helios-isprs-2026',
        year: 2026,
        image: 'news/isprs_helios.png',
        imageAlt: 'HELIOS-Net ISPRS Journal article',
        doi: 'https://doi.org/10.1016/j.isprsjprs.2026.09.028',
        authorsHtml:
          'Kim, Y., Cho, D., Bae, D., Lee, Y., Lee, S., <u>Bae, S</u>., & Im, J. (2026)',
        title:
          'HELIOS-Net: Hourly daytime estimation of land surface temperature with integration of observational solar-cloud-satellite geometry and deep neural network.',
        venueHtml: '<em>ISPRS Journal of Photogrammetry and Remote Sensing</em>, 242, 760–777.',
        metricsHtml:
          '<span class="status-badge metric-badge"><span class="metric-label">IF</span>12.9 (2025) <span class="metric-dot">•</span> JCR 3.0%</span>',
      },
      {
        id: 'pub-unique-rse-2026',
        year: 2026,
        image: 'news/rse_unique.png',
        imageAlt: 'UNIQUE Remote Sensing of Environment article',
        doi: 'https://doi.org/10.1016/j.rse.2026.115636',
        authorsHtml:
          'Son, B., Sung, T., <u>Bae, S</u>., Choo, M., Im, J., Lee, Y., Rana, S. M. S., Cho, D., Yoo, C., Hong, J., Lee, H., & Kim, H. S. (2026)',
        title: 'UNIQUE: UNified, high-resolution Intelligent carbon QUantification and Explanation.',
        venueHtml: '<em>Remote Sensing of Environment</em>, 346, 115636.',
        metricsHtml:
          '<span class="status-badge metric-badge"><span class="metric-label">IF</span>11.4 (2025) <span class="metric-dot">•</span> JCR 2.4%</span>',
      },
      {
        id: 'pub-gisrs-2026',
        year: 2026,
        image: 'news/gisrs.png',
        imageAlt: 'GIScience and Remote Sensing paper',
        doi: 'https://doi.org/10.1080/15481603.2025.2609352',
        authorsHtml: '<u>Bae, S</u>., Son, B., Sung, T., Kim, Y., Kim, Y., & Im, J. (2026)',
        title:
          'All-sky hourly estimation over East Asia using Himawari-8 AHI and multi-source data: investigating the main climatic drivers of afternoon depression and intraday variability in gross primary productivity.',
        venueHtml: '<em>GIScience & Remote Sensing</em>, 63(1), 2609352.',
        metricsHtml:
          '<span class="status-badge metric-badge"><span class="metric-label">IF</span>6.9 <span class="metric-dot">•</span> JCR 10.0%</span>',
      },
      {
        id: 'pub-rse-gpp-2025',
        year: 2025,
        image: 'news/rse1.png',
        imageAlt: 'Remote Sensing of Environment GPP paper',
        doi: 'https://doi.org/10.1016/j.rse.2025.114735',
        authorsHtml: '<u>Bae, S</u>., Son, B., Sung, T., Kang, Y., & Im, J. (2025)',
        title:
          'Advancing hourly gross primary productivity mapping over East Asia using Himawari-8 AHI and artificial intelligence: Unveiling the impact of aerosol-induced radiation dynamics.',
        venueHtml:
          '<em>Remote Sensing of Environment</em>, 323, 114735. <span class="publication-date">(2025.06.01)</span>',
        metricsHtml:
          '<span class="status-badge metric-badge"><span class="metric-label">IF</span>11.4 (2025) <span class="metric-dot">•</span> JCR 2.4%</span>',
        showPublicationDateOnHome: true,
      },
    ],
    domestic: [
      {
        id: 'pub-samba-kjrs-2024',
        year: 2024,
        image: 'news/kjrs2.png',
        imageAlt: 'SAMBA change detection paper',
        authorsHtml: 'Tobias, R. R., <u>Bae, S</u>., Cho, H., & Im, J. (2024)',
        title: 'SAMBA: Synthetic Data-Augmented Mamba-Based Change Detection Algorithm Using KOMPSAT-3A Imagery.',
        venueHtml:
          '<em>Korean Journal of Remote Sensing</em>, 40(6_3), 1505-1521. <span class="publication-date">(2024.12.31)</span>',
      },
      {
        id: 'pub-urban-tree-kjrs-2023',
        year: 2023,
        image: 'news/kjrs1.png',
        imageAlt: 'Urban tree canopy paper',
        authorsHtml: '<u>Bae, S</u>., Son, B., Sung, T., Lee, Y., Im, J., & Kang, Y. (2023)',
        title:
          'Estimation of Fractional Urban Tree Canopy Cover through Machine Learning Using Optical Satellite Images. 기계학습을 이용한 광학 위성 영상 기반의 도시 내 수목 피복률 추정.',
        venueHtml:
          '<em>Korean Journal of Remote Sensing</em>, 39(5), 1009-1029. <span class="publication-date">(2023.10.31)</span>',
      },
      {
        id: 'pub-dl-review-ksgpc-2021',
        year: 2021,
        image: 'news/ksgpc1.png',
        imageAlt: 'Deep learning remote sensing review paper',
        authorsHtml: 'Lee, C., Yun, Y., <u>Bae, S</u>., Eo, Y. D., Kim, C., Shin, S., ... & Han, Y. (2021)',
        title:
          'Analysis of deep learning research trends applied to remote sensing through paper review of Korean domestic journals. 국내학회지 논문 리뷰를 통한 원격탐사 분야 딥러닝 연구 동향 분석.',
        venueHtml:
          '<em>Journal of the Korean Society of Surveying, Geodesy, Photogrammetry and Cartography</em>, 39(6), 437-456. <span class="publication-date">(2021.12.31)</span>',
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
        textKo: 'The Korean Society of Climate Change Research 추계학술대회',
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
        textKo: 'Korean Association of Geographic Information Studies (KAGIS) Autumn Conference',
      },
      {
        id: 'conf-ksrs-fall-2025',
        date: 'Oct 23, 2025',
        textEn: 'Korean Society of Remote Sensing (KSRS) Autumn Conference🏆',
        textKo: 'Korean Society of Remote Sensing (KSRS) Autumn Conference🏆',
      },
      {
        id: 'conf-ksrs-fall-2024',
        date: 'Oct 17, 2024',
        textEn: 'Korean Society of Remote Sensing (KSRS) Autumn Conference',
        textKo: 'Korean Society of Remote Sensing (KSRS) Autumn Conference',
      },
      {
        id: 'conf-kagis-spring-2025',
        date: 'May 30, 2025',
        textEn: 'Korean Association of Geographic Information Studies (KAGIS) Spring Conference🏆',
        textKo: 'Korean Association of Geographic Information Studies (KAGIS) Spring Conference🏆',
      },
      {
        id: 'conf-kagis-spring-2024',
        date: 'Apr 26, 2024',
        textEn: 'Korean Association of Geographic Information Studies (KAGIS) Spring Conference🏆',
        textKo: 'Korean Association of Geographic Information Studies (KAGIS) Spring Conference🏆',
      },
      {
        id: 'conf-ksrs-fall-2023',
        date: 'Nov 15, 2023',
        textEn: 'Korean Society of Remote Sensing (KSRS) Autumn Conference',
        textKo: 'Korean Society of Remote Sensing (KSRS) Autumn Conference',
      },
      {
        id: 'conf-ksgpc-2021',
        date: 'Nov 05, 2021',
        textEn: 'Korean Society of Surveying, Geodesy, Photogrammetry and Cartography (KSGPC)🏆',
        textKo: 'Korean Society of Surveying, Geodesy, Photogrammetry and Cartography (KSGPC)🏆',
      },
    ],
  },

  about: {
    awards: [
      {
        id: 'award-molit-2026',
        year: '2026',
        textEn:
          "Encouragement Award (장려상), Top 20 Excellent Papers in National Land, Infrastructure and Transport R&D (국토교통R&D 우수논문 20선), 2026 Land, Infrastructure and Transport Technology Fair — paper: AI와 Himawari-8 정지궤도위성을 활용한 시간별 총일차생산량(GPP) 추정: 에어로졸의 영향 분석",
        textKo:
          '2026 국토교통기술대전 국토교통R&D 우수논문 20선 장려상 — 논문: AI와 Himawari-8 정지궤도위성을 활용한 시간별 총일차생산량(GPP) 추정: 에어로졸의 영향 분석',
      },
      {
        id: 'award-ksrs-2025',
        year: '2025',
        textEn: 'Best Presentation Award, Korean Society of Remote Sensing',
        textKo: '우수발표논문상, 대한원격탐사학회',
      },
      {
        id: 'award-kagis-2025',
        year: '2025',
        textEn: 'Outstanding Paper Presentation Award, Korean Association of Geographic Information Studies',
        textKo: '우수논문상, 한국지리정보학회',
      },
      {
        id: 'award-kasa-2024',
        year: '2024',
        textEn:
          "Korea Aerospace Administration (KASA) Administrator's Award (Grand Prize), 2024 Satellite Information Application Contest - [Division 2] Development of a Change Detection Algorithm Based on Multi-temporal Images",
        textKo:
          '우주항공청장상, 2024 위성정보활용 경진대회 - [부문2] 다시기 영상 기반 변화탐지 알고리즘 개발',
      },
      {
        id: 'award-kagis-2024',
        year: '2024',
        textEn: 'Outstanding Paper Presentation Award, Korean Association of Geographic Information Studies',
        textKo: '우수논문상, 한국지리정보학회',
      },
      {
        id: 'award-agri-2021',
        year: '2021',
        textEn: 'Encouragement Award, 2021 Agricultural and Forestry Satellite Idea Challenge',
        textKo: '2021 농림위성 활용 아이디어 경진대회 장려상',
      },
    ],
    grants: [
      {
        id: 'grant-nrf-ms-2024',
        year: '2024',
        textEn:
          "Research Scholarship for Master's Students, National Research Foundation of Korea",
        textKo: '석사과정생 연구장려금 지원사업 2024, 한국연구재단',
        detailKo: '2024 석사과정생 연구장려금 지원사업; RS-2024-00465',
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
