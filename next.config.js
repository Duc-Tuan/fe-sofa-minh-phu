/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["localhost", "192.168.50.56", "*.local-origin.dev"],
  output: "standalone",
  images: {
    domains: [],
    unoptimized: true,
  },

  devIndicators: {
    autoPrerender: false,
  },

  transpilePackages: [
    'antd',
    '@ant-design',
    'rc-util',
    'rc-pagination',
    'rc-picker',
    'rc-tree',
    'rc-table',
    '@rc-component',
    'rc-select',
    'rc-tooltip',
    'rc-menu',
    'rc-dropdown',
    'rc-dialog',
    'rc-notification'
  ],

  experimental: {
    esmExternals: 'loose',
  },

  webpack(config) {
    // Tìm rule xử lý SVG hiện tại
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg"),
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: ["@svgr/webpack"],
      },
      // Xử lý tất cả JS files trong node_modules
      {
        test: /\.(js|mjs|jsx)$/,
        include: [
          /node_modules\/@ant-design/,
          /node_modules\/@rc-component/,
          /node_modules\/rc-util/,
          /node_modules\/antd/
        ],
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      }
    );

    fileLoaderRule.exclude = /\.svg$/i;

    // Thêm extension aliases
    config.resolve = {
      ...config.resolve,
      extensionAlias: {
        '.js': ['.js', '.ts', '.tsx', '.mjs'],
        '.mjs': ['.mjs', '.js'],
      },
    };

    return config;
  },

  pageExtensions: ['tsx', 'ts', 'jsx', 'js'].filter(ext => !['ts', 'js'].includes(ext)),

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "X-Requested-With, Content-Type, Accept",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;