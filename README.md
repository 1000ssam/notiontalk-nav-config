# @notiontalk/nav-config

노션톡 사이트 **네비게이션 메뉴의 단일 출처(SSoT)**. 랜딩(`notiontalk-landing`)과
뉴스레터(`newsletter-self-host`) 두 Next 앱이 이 패키지를 git 의존성으로 공유한다.

빌드 스텝 없는 순수 ESM 데이터 모듈(`index.js`) + 수기 타입(`index.d.ts`)이라
어떤 번들러에서도 별도 `transpilePackages` 설정 없이 바로 import 된다.

## 설치 (각 소비 앱에서)

```bash
npm i github:1000ssam/notiontalk-nav-config
```

`package.json` 에 다음이 추가된다:

```json
"@notiontalk/nav-config": "github:1000ssam/notiontalk-nav-config"
```

## 사용

```ts
import { NAV, isDropdown } from "@notiontalk/nav-config";

NAV.map((item) =>
  isDropdown(item)
    ? /* 드롭다운 렌더 (item.children) */
    : /* 링크 렌더 (item.href) */
);
```

각 앱의 `app/_components/SiteNav.tsx` 가 `NAV` 를 map 으로 렌더한다.
마크업·스타일은 앱마다 자체 보유(브랜드 로고 링크 방식만 다름) — **데이터만 공유**.

## 메뉴를 바꿀 때 (체크리스트)

1. `index.js` 의 `NAV` 수정 → 커밋 + push.
2. 소비 앱마다 `npm update @notiontalk/nav-config` → 커밋 → **재배포**
   (빌드 시점에 번들되므로 재배포 없이는 반영 안 됨).
3. ⚠️ **bullet.so 블로그 네비**(`notiontalk.com/contents/...`)는 React가 아니라
   Notion 블로그(bullet) 네이티브 컴포넌트 → 이 파일을 못 읽는다. **bullet.so
   대시보드 네비 UI에서 동일하게 수동 갱신**해야 함.

## 메뉴 항목 형태

- 링크: `{ key, label, href }`
- 드롭다운: `{ key, label, children: [{ label, href }] }`

`href` 는 전부 절대 URL(`https://www.notiontalk.com/...`, 끝 슬래시 포함).
`basePath:/newsletter` 인 뉴스레터 앱에서 zone 을 넘어 정확히 이동하려면 절대 URL 이어야 한다.
