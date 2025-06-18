/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly DESIGNER_APP_BASE_URL: string;
  readonly DESIGNER_APP_API_PREFIX: string;
  readonly DESIGNER_APP_API_URL: string;
  readonly DESIGNER_APP_WEB_TITLE: string;
  readonly DESIGNER_APP_VERSION: string;
  readonly DESIGNER_APP_PORT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

