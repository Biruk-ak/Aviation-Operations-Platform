async function request(method: string, url: string, options: any = {}) {
  const qs = options.params
    ? '?' + new URLSearchParams(Object.entries(options.params).filter(([, v]) => v != null) as any).toString()
    : '';
  const res = await fetch(url + qs, {
    method,
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    body: options.body ? JSON.stringify(options.body) : undefined,
  });
  const json = await res.json();
  if (!res.ok || json.success === false) {
    throw new Error(json.message || 'Request failed');
  }
  return json.data ?? json;
}

export const http = {
  get: (url: string, options?: any) => request('GET', url, options),
  post: (url: string, body?: any, options?: any) => request('POST', url, { ...options, body }),
  put: (url: string, body?: any, options?: any) => request('PUT', url, { ...options, body }),
  delete: (url: string, options?: any) => request('DELETE', url, options),
};
