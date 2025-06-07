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
  title: string;
  description: string;
  title_override: string | undefined;
  seo_image: string | "auto_gen";
  jsonLD: WebPage | null;
}
export interface AboutPage extends CorePage {
  mainContent: Array<Block>;
}
export interface PortfolioPage extends CorePage {
  tags: Array<{ title: string; weight: number }>;
  date: Date;
  content: Array<Block>;
  mainImage: { service: ContentService };
}

let about: AboutPage = {
  title: "",
  description: "",
  title_override: "",
  seo_image: "",
  jsonLD: null,
  mainContent: [
    { text: "Meet the team", format: "plain-text", weight: "h2" } as title,
    {
      text: "A very small team allows us to connect directly with our customers, and keep up to date with everything simultaneously, sharing our ideas with each other as they come to us.",
    } as body_string,
  ],
};

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
  image: { service: ContentService };
}

export interface image_gallery extends Block {
  items: Array<{ service: ContentService }>;
}

export interface details_section extends Block {
  col1: Array<Block>;
  col2: Array<Block>;
}
export interface video_section extends Block {
  video: ContentService;
}
