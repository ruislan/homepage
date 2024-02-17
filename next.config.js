const securityHeaders = [
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
    { key: 'Content-Security-Policy', value: `default-src 'self'; script-src 'self' *.eu.umami.is *.googlesyndication.com 'unsafe-inline'; connect-src 'self' *.eu.umami.is *.googlesyndication.com 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src * blob: data:;` },
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
    // { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
    { key: 'X-Frame-Options', value: 'DENY' },
    // https://developer.mozilla.org/e
    { key: 'X-Content-Type-Options', value: 'nosniff' },
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
    { key: 'X-DNS-Prefetch-Control', value: 'on' },
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
    { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
    { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection
    { key: 'X-XSS-Protection', value: '1; mode=block' },
];

const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['api.dicebear.com']
    },
    headers() {
        return [
            { source: '/(.*)', headers: securityHeaders },
        ];
    },
};

export default nextConfig;