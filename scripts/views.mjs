// Views per article from Candela's database, for "Must see" on the home page.
// An article counts the latest snapshot of every post it links (youtube + instagram in its frontmatter).
// Run: npm run views [-- path/to/candela.db], then commit src/data/views.json.
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { DatabaseSync } from "node:sqlite";

const dbPath = process.argv[2] ?? "../candela-run/candela/data/candela.db";
const db = new DatabaseSync(dbPath, { readOnly: true });
const latest = db.prepare(`
  select p.platform, p.platform_id, p.permalink, s.views
  from posts p join snapshots s on s.post_id = p.id
  where s.day = (select max(day) from snapshots where post_id = p.id)
`);

// key a post by the YouTube video id or the Instagram shortcode, the part both URLs share
const key = (url) => url?.match(/[?&]v=([\w-]+)/)?.[1] ?? url?.match(/\/(?:reel|p)\/([\w-]+)/)?.[1];
const viewsByKey = new Map();
for (const row of latest.all()) {
  const k = row.platform === "yt" ? row.platform_id : key(row.permalink);
  if (k) viewsByKey.set(k, row.views ?? 0);
}

const dir = "src/content/articles";
const out = {};
for (const file of readdirSync(dir).filter((f) => f.endsWith(".md")).sort()) {
  const front = readFileSync(`${dir}/${file}`, "utf8").split("---")[1];
  const urls = [...front.matchAll(/^(?:youtube|instagram): (\S+)/gm)].map((m) => m[1]);
  const views = urls.reduce((sum, url) => sum + (viewsByKey.get(key(url)) ?? 0), 0);
  if (views) out[file.slice(0, -3)] = views;
}

const sorted = Object.fromEntries(Object.entries(out).sort((a, b) => b[1] - a[1]));
writeFileSync("src/data/views.json", JSON.stringify(sorted, null, 2) + "\n");
console.log(sorted);
