import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import autoprefixer from 'autoprefixer';
import path, { resolve } from 'path';
import colors from 'picocolors';
import { defineConfig, loadEnv } from 'vite';
import checker from 'vite-plugin-eslint2';
import legacy from 'vite-plugin-legacy-swc';
import progress from 'vite-plugin-progress';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const configEnv = loadEnv(mode, pathResolve('env'), 'DESIGNER');
  const port = Number.parseInt(configEnv.DESIGNER_APP_PORT);

  return {
    base: configEnv.DESIGNER_APP_BASE_URL,
    envDir: './env',
    envPrefix: 'DESIGNER_APP',
    plugins: [
      react(),
      checker({
        fix: true,
      }),
      tailwindcss(),
      legacy({
        targets: ['defaults', 'not IE 11'],
      }),
      progress({
        format: `${colors.green(colors.bold('Bouilding'))} ${colors.cyan('[:bar]')} :percent`,
        total: 200,
        width: 60,
        complete: '=',
        incomplete: '',
      }),
      {
        name: 'html-transform',
        transformIndexHtml(html) {
          return html.replace(/<%= __APP__TITLE__ %>/g, configEnv.DESIGNER_APP_WEB_TITLE);
        },
      },
    ],
    css: {
      postcss: {
        plugins: [
          autoprefixer({
            overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8'],
          }),
        ],
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      proxy: {
        [configEnv.DESIGNER_APP_API_PREFIX]: {
          target: configEnv.DESIGNER_APP_API_PREFIX,
          changeOrigin: true,
          rewrite: path => path.replace(configEnv.DESIGNER_APP_API_PREFIX, ''),
        },
      },
      port,
    },
  };
});
