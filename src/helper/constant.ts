export type NavItem = {
  href: string;
  key: string;
  children?: NavItem[];
};

export const NAVBAR: NavItem[] = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  {
    href: "/study-abroad",
    key: "studyAbroad",
    children: [
      { href: "/study-abroad/japan", key: "studyAbroadJapan" },
      { href: "/study-abroad/korea", key: "studyAbroadKorea" },
      { href: "/study-abroad/australia", key: "studyAbroadAustralia" },
    ],
  },
  { href: "/labor-export", key: "laborExport" },
  { href: "/contact", key: "contact" },
];
