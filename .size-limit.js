module.exports = [
  {
    path: './packages/components/dist/polaris-components.*.js',
    limit: '150 kB',
  },
  {
    path: './packages/components/dist/style.css',
    webpack: false,
    limit: '40 kB',
  },
];
