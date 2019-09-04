addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Fetch and log a request
 * @param {Request} request
 */
async function handleRequest(request) {
  return getIP(request)
}

function getIP(request) {
  const ip = request.headers.get('cf-connecting-ip') + '\n'
  return new Response(ip)
}
