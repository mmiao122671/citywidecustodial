/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL?: string;
  /** Web3Forms access key (public form id). https://web3forms.com */
  readonly VITE_WEB3FORMS_ACCESS_KEY?: string;
  /**
   * Optional extra notification recipients (Web3Forms Pro: `ccemail`).
   * Multiple addresses: separate with semicolons, e.g. a@x.com;b@y.com
   */
  readonly VITE_WEB3FORMS_CC_EMAIL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
