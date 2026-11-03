// Cover images, rendered once at build: a paper sheet cut from the mat, the title, the buddy.
// The same PNG is the card picture on /read and the og:image when a link is shared.
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { readFileSync } from "node:fs";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";

const W = 1200;
const H = 630;
const font = (weight: number) =>
  readFileSync(
    `node_modules/@fontsource/geist/files/geist-latin-${weight}-normal.woff`,
  );
const fonts = [
  { name: "Geist", data: font(500), weight: 500 as const },
  { name: "Geist", data: font(700), weight: 700 as const },
];

const svg = (s: string) =>
  `data:image/svg+xml;base64,${Buffer.from(s).toString("base64")}`;

// the cutting mat: minor lines every 24px, major every 120px
let lines = "";
for (let x = 0; x <= W; x += 24)
  lines += `<path d="M${x} 0V${H}" stroke="${x % 120 ? "#eeeeec" : "#dfdfdb"}"/>`;
for (let y = 0; y <= H; y += 24)
  lines += `<path d="M0 ${y}H${W}" stroke="${y % 120 ? "#eeeeec" : "#dfdfdb"}"/>`;
const mat = svg(
  `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">${lines}</svg>`,
);
const buddy = svg(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="260 204 560 560"><rect x="260" y="204" width="560" height="560" rx="122" fill="#151515"/><rect x="462" y="347" width="36" height="134" rx="12" fill="#fff"/><rect x="591" y="347" width="36" height="134" rx="12" fill="#fff"/></svg>`,
);

const el = (
  type: string,
  style: Record<string, unknown>,
  children?: unknown,
) => ({ type, props: { style, children } });

async function cover(label: string, title: string) {
  const size = title.length > 60 ? 56 : title.length > 40 ? 64 : 76;
  const tree = el(
    "div",
    {
      width: W,
      height: H,
      display: "flex",
      position: "relative",
      background: "#fff",
      fontFamily: "Geist",
    },
    [
      {
        type: "img",
        props: {
          src: mat,
          width: W,
          height: H,
          style: { position: "absolute", left: 0, top: 0 },
        },
      },
      el(
        "div",
        {
          position: "absolute",
          left: 56,
          top: 56,
          right: 56,
          bottom: 56,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "48px 56px",
          background: "#fafaf8",
          border: "2px dashed #c9c9c4",
        },
        [
          el("div", { fontSize: 26, fontWeight: 700, color: "#b04f2a" }, label),
          el(
            "div",
            {
              maxWidth: 820,
              fontSize: size,
              fontWeight: 700,
              lineHeight: 1.05,
              textWrap: "balance",
              letterSpacing: -2,
              color: "#151515",
            },
            title,
          ),
          el(
            "div",
            { fontSize: 24, fontWeight: 500, color: "#5e5e5a" },
            "prunelabsco.github.io",
          ),
        ],
      ),
      {
        type: "img",
        props: {
          src: buddy,
          width: 132,
          height: 132,
          style: { position: "absolute", right: 112, bottom: 104 },
        },
      },
    ],
  );
  const out = await satori(tree as never, { width: W, height: H, fonts });
  return new Resvg(out).render().asPng();
}

export async function getStaticPaths() {
  const articles = await getCollection("articles");
  return [
    {
      params: { slug: "home" },
      props: {
        label: "Prune Labs",
        title: "Developer and AI tools, tested on real projects.",
      },
    },
    ...articles.map((a) => ({
      params: { slug: a.id },
      props: { label: "Read", title: a.data.title },
    })),
  ];
}

export const GET: APIRoute = async ({ props }) =>
  new Response(await cover(props.label, props.title), {
    headers: { "Content-Type": "image/png" },
  });
