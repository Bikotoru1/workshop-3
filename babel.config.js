module.exports = {
  presets: [
    ['@babel/preset-env', 
    { 
      modules: false,
      targets: { node: 'current' },
      useBuiltIns: 'usage',
      corejs: 3
    }]
  ]
}
