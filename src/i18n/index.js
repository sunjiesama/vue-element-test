import Vue from "vue";
import VueI18n from "vue-i18n";
Vue.use(VueI18n);

import zh from "./config/zh-CN";
import en from "./config/en-US";
import ja from "./config/ja-JP";
import de from "./config/de-DE";

const i18n = new VueI18n({
  locale: localStorage.getItem("locale") || "ja",
  messages: {
    zh,
    en,
    ja,
    de
  },
  /* 如果报Value of key xxxx is not string 则添加下面属性 */
  silentTranslationWarn: true
});

export default i18n;
