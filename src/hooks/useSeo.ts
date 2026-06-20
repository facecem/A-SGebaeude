import { useEffect } from "react";

const SITE_URL = "https://www.as-gebaeudetechnik.de";
const SITE_NAME = "A&S Gebäudetechnik GmbH";

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(path: string) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", `${SITE_URL}${path}`);
}

/**
 * Sets per-page <title>, meta description and Open Graph/Twitter tags,
 * and the canonical link. Falls back to the default index.html values
 * when a page doesn't call this (none currently — every route sets it).
 */
export function useSeo(opts: { title: string; description: string; path: string }) {
  const { title, description, path } = opts;

  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    document.title = fullTitle;
    setMeta("name", "description", description);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", `${SITE_URL}${path}`);
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setCanonical(path);
  }, [title, description, path]);
}
