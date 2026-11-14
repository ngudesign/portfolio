// Builds links that keep working if the site is later served from a
// sub-path (for example GitHub Pages at /portfolio/).
// Usage: url('/about/') → '/about/' locally, '/portfolio/about/' on Pages.
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}
