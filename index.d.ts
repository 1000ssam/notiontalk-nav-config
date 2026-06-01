// 노션톡 네비게이션 메뉴 공유 타입.

export type NavKey =
  | "tip"
  | "templates"
  | "toolkit"
  | "newsletter"
  | "community"
  | "about"
  | null;

/** 활성 메뉴 강조용 키(드롭다운/링크 공통). null = 강조 없음. */
export type ActiveNavKey = NavKey;

export interface NavDropdownChild {
  label: string;
  href: string;
}

/** 단순 링크 메뉴 항목. */
export interface NavLink {
  key: Exclude<NavKey, null>;
  label: string;
  href: string;
}

/** 드롭다운(자식 링크 묶음) 메뉴 항목. */
export interface NavDropdown {
  key: Exclude<NavKey, null>;
  label: string;
  children: NavDropdownChild[];
}

export type NavItem = NavLink | NavDropdown;

/** 항목이 드롭다운인지 판별하는 타입 가드. */
export declare function isDropdown(item: NavItem): item is NavDropdown;

export declare const NAV: NavItem[];
