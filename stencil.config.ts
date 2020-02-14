import { Config } from '@stencil/core';
import nodePolyfills from 'rollup-plugin-node-polyfills';
// https://stenciljs.com/docs/config

export const config: Config = {
  outputTargets: [{
    type: 'www'
  }],
  globalScript: 'src/global/app.ts',
  globalStyle: 'src/global/app.css',
  copy: [
    {
      src: 'services/workers',
      dest: 'workers'
    },
    {
      src: '/Users/estebanmorales/Projects/Millefollium/node_modules/lokijs/build/',
      dest: 'loki'
    },
    {
      src: '/Users/estebanmorales/Projects/Millefollium/node_modules/@ericblade/quagga2/dist/',
      dest: 'quagga'
    },
    {
      src: '/Users/estebanmorales/Projects/Millefollium/node_modules/localforage/dist',
      dest: 'localforage'
    }
  ],
  plugins: [
    nodePolyfills(),
  ]
};
