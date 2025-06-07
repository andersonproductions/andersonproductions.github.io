import type { Footer } from "$lib/block.types";
export let footerData: Footer = {
  legalText:
    '<span>Anderson Productions. All Rights Reserved. Use of this website (including any and all parts and components) constitutes your acceptance of these <a href="/legal/terms">Terms of Use</a> and <a href="/legal/privacy">Privacy Policy</a>.</span>',
  links: [
    {
      text: null,
      url: null,
      items: [
        {
          text: "Press Room",
          url: { href: "/press", openInNewTab: false },
          items: [],
        },
        {
          text: "FYC",
          url: { href: "/fyc", openInNewTab: false },
          items: [],
        },
      ],
    },
    {
      text: "Legal",
      url: {
        href: "/legal",
        openInNewTab: true,
      },
      items: [
        {
          text: "Privacy Policy",
          url: { href: "/legal/privacy", openInNewTab: true },
          items: [],
        },
        {
          text: "Terms & Condidtions",
          url: { href: "/legal/terms", openInNewTab: true },
          items: [],
        },
      ],
    },
    {
      text: "Company",
      url: {
        href: "/about",
        openInNewTab: true,
      },
      items: [
        {
          text: "Contact",
          url: {
            href: "/contact",
            openInNewTab: false,
          },
          items: [],
        },
        {
          text: "About",
          url: {
            href: "/about",
            openInNewTab: false,
          },
          items: [],
        },
        {
          text: "Comitment to sustainability",
          url: {
            href: "/sustainability",
            openInNewTab: true,
          },
          items: [],
        },
      ],
    },
  ],
  socialMeida: "",
};
