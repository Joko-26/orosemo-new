export function getAssetPath(path: string): string {
  const baseUrl = globalThis.__BASE_URL__ || import.meta.env.BASE_URL || '/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${baseUrl}${cleanPath}`;
}
