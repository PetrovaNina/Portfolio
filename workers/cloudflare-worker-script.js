addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const nextAppUrl = 'https://ninatech.pro';
  const staticFilesDir = '/.vercel/output/static';

  // Construct the URL to forward the request to
  const targetUrl = new URL(request.url);
  targetUrl.host = new URL(nextAppUrl).host;

  const response = await fetch(targetUrl.toString(), {
    cf: {
      cacheEverything: true,
      cacheTtl: 60,
      cacheKey: `${request.method}-${request.url}`,
    },
  });

  if (!response.ok) {
    return new Response('Not Found', {
      status: 404,
      headers: { 'Content-Type': 'text/plain' },
    });
  }

  return response;
}
