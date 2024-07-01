/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname:"www.padoniavets.com",
            port: '',
           
          },
          {
            protocol: 'https',
            hostname:"randomuser.me",
            port: '',
           
          },

          {
            protocol: 'https',
            hostname:"www.mccanndogs.com",
            port: '',
           
          },
          {
            protocol: 'https',
            hostname:"encrypted-tbn0.gstatic.com",
            port: '',
           
          },
          {
            protocol: 'https',
            hostname:"media.istockphoto.com",
            port: '',
           
          },
          {
            protocol: 'https',
            hostname:"www.rover.com",
            port: '',
           
          },
          {
            protocol: 'https',
            hostname:"image.petmd.com",
            port: '',
           
          },
          {
            protocol: 'https',
            hostname:"goldenvet.pl",
            port: '',
           
          },
        ],
      },
};

export default nextConfig;
