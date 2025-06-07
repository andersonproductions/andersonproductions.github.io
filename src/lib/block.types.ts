import type { WebPage } from "schema-dts";
export interface Footer {
  legalText: string;
  socialMeida: string;
  links: Array<FooterLink>;
}

export interface FooterLink {
  text: string | null;
  url: Link | null;
  items: Array<FooterLink>;
}

export interface Link {
  href: string;
  openInNewTab: boolean;
}

export interface Nav {
  items: Array<FooterLink>;
}

//PAGE TYPES
export interface CorePage {
  __typename: string;
  title: string;
  description: string;
  title_override: string | undefined;
  seo_image: string | "auto_gen";
  jsonLD: WebPage | null;
  url: string;
}

export interface markdown_page extends CorePage {
  fileName: string;
}
export interface about_page extends CorePage {
  mainContent: Array<Block>;
}
export interface portfolio_page extends CorePage {
  tags: Array<{ title: string; weight: number }>;
  date: Date;
  content: Array<Block>;
  mainImage: { service: ContentService };
}

export interface ContentService {
  name: "repo" | "youtube" | "href";
  id: string;
  alt: string;
}

export interface Block {}
export interface title extends Block {
  text: string;
  format: "html" | "plain-text";
  weight: "h1" | "h2" | "h3" | "h4";
}
export interface body_string extends Block {
  text: string;
  format: "html" | "plain-text";
  centered: boolean;
}
export interface body extends Block {
  items: Array<Block>;
}
export interface section extends Block {
  items: Array<Block>;
  tint: string | undefined;
}
export interface eyebrow_title extends Block {
  eyebrow_text: string;
  // CSS
  eyebrow_tint: string;
  text: Block;
}
export interface profile_card extends Block {
  name: string;
  role: string;
  description: string;
  image: ContentService;
}

export interface image_gallery extends Block {
  items: Array<ContentService>;
}

export interface details_section extends Block {
  col1: Array<Block>;
  col2: Array<Block>;
}
export interface section extends Block {
  items: Array<Block>;
}
export interface video_section extends Block {
  video: ContentService;
}
