import { mapGetters, mapActions } from "vuex";

const CONFIG = (() => {
  const configs = {};
  const files = require.context("../$config/", false, /\.js$/);
  files.keys().forEach(key => {
    configs[key.replace(/(\.\/|\.js)/g, "")] = files(key).default;
  });
  return configs;
})();

const DATA = (() => {
  const datas = {};
  const files = require.context("../$data/", true, /\.md$/);
  files.keys().forEach(key => {
    const stripPath = key.replace(/(\.\/|\.md)/g, "");
    const matches = stripPath.match(/^([a-z\-A-Z]+)\/(.+)$/i);
    if (matches && matches.length > 2) {
      const locale = matches[1];
      const name = matches[2];
      if (locale in datas) {
        datas[locale].push({
          name,
          content: files(key).default
        });
      } else {
        datas[locale] = [];
        datas[locale].push({
          isPlaceholder: true
        });
        datas[locale].push({
          name,
          content: files(key).default
        });
      }
    }
  });
  return datas;
})();

export default {
  computed: {
    ...mapGetters({
      locale: "locale"
    }),
    config() {
      if (this.locale in CONFIG) {
        return CONFIG[this.locale];
      }
      return CONFIG[Object.keys(CONFIG)[0]];
    },
    data() {
      if (this.locale in DATA) {
        return DATA[this.locale];
      }
      return DATA[Object.keys(DATA)[0]];
    }
  },
  methods: {
    ...mapActions({
      toggleLocale: "toggleLocale"
    })
  }
};
