/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects : async () => {
        return [
            {
                source:'/((?!images|_next|favicon.ico).+)',
                destination:'/',
                permanent:false
            }
        ]
    }
}

module.exports = nextConfig
