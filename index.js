// 노션톡 네비게이션 메뉴 — 단일 출처(Single Source of Truth).
// 랜딩(notiontalk-landing)·뉴스레터(newsletter-self-host) 두 Next 앱이 이 패키지를
// github: 의존성으로 공유한다. 각 앱의 SiteNav.tsx 는 이 NAV 를 map() 으로 렌더한다.
//
// ⚠️ 여기를 바꾸면 반드시:
//   1) 두 앱에서 `npm update @notiontalk/nav-config` + 재배포 (빌드 시점에 번들됨)
//   2) bullet.so 블로그 네비(notiontalk.com/contents/...)는 React가 아니라 별개 시스템 →
//      bullet.so 대시보드 네비 UI에서 수동으로 동일하게 갱신 (이 파일을 못 읽음)
//
// href 는 전부 절대 URL(www) — basePath:/newsletter 인 뉴스레터 앱에서도 zone 을 넘어
// 정확히 이동하려면 절대 URL 이어야 한다. 끝 슬래시 포함(trailingSlash 308 회피).

/**
 * 항목이 드롭다운인지 판별.
 * @param {import('./index').NavItem} item
 * @returns {item is import('./index').NavDropdown}
 */
export function isDropdown(item) {
  return Array.isArray(item.children);
}

/** @type {import('./index').NavItem[]} */
export const NAV = [
  {
    key: "tip",
    label: "노션+AI 꿀팁",
    children: [
      { label: "글 모아 보기", href: "https://www.notiontalk.com/contents/guide/" },
      { label: "강의 영상 보기", href: "https://www.notiontalk.com/contents/vod/" },
    ],
  },
  {
    key: "templates",
    label: "노션 템플릿",
    href: "https://www.notiontalk.com/contents/templates/",
  },
  {
    key: "toolkit",
    label: "툴킷",
    children: [
      { label: "AI 에이전트 스킬", href: "https://www.notiontalk.com/contents/tools/tags/agent-skill/" },
      { label: "업무 자동화 앱", href: "https://www.notiontalk.com/contents/tools/tags/app/" },
    ],
  },
  {
    key: "newsletter",
    label: "뉴스레터",
    href: "https://www.notiontalk.com/newsletter/",
  },
  {
    key: "community",
    label: "커뮤니티",
    href: "https://www.notiontalk.com/contents/community/",
  },
  {
    key: "about",
    label: "제작자 소개",
    href: "https://www.notiontalk.com/contents/about-us/",
  },
];
