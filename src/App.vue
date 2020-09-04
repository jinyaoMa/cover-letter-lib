<template>
  <div id="app">
    <div class="header">
      <Cover />
      <Brand ref="brand" />
      <Info />
      <div
        v-if="!!content && content !== 'false'"
        class="scroll"
        @click="handleScroll"
      >
        <i class="fas fa-chevron-down"></i>
      </div>
    </div>
    <div v-if="!!content && content !== 'false'" class="main">
      <mavon-editor
        class="me"
        ref="me"
        v-model="content"
        :language="locale"
        :toolbars="toolbars"
        defaultOpen="edit"
        fontSize="16px"
        :autofocus="false"
        :tabSize="2"
      />
    </div>
    <div class="btn" @click="handleBtn">
      <i class="fas fa-language"></i>
    </div>
  </div>
</template>

<script>
import Brand from "./components/Brand";
import Cover from "./components/Cover";
import Info from "./components/Info";

export default {
  name: "App",
  components: {
    Brand,
    Cover,
    Info
  },
  data() {
    return {
      content: "",
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: false, // 全屏编辑
        readmodel: false, // 沉浸式阅读
        htmlcode: false, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: false, // 清空
        save: false, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: false, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: false, // 单双栏模式
        preview: true // 预览
      }
    };
  },
  methods: {
    setContent(content) {
      this.content = content;
    },
    handleBtn() {
      this.toggleLocale().then(() => {
        this.$refs.brand.handleSelect();
      });
    },
    handleScroll() {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
      });
    }
  },
  mounted() {
    console.log(this);
  }
};
</script>

<style lang="stylus" scoped>
.header
  min-height 100vh
  background-color #003366
  position relative
  overflow hidden

.btn
  position fixed
  left 5rem
  bottom 5rem
  background-color #ffffff
  border-radius 0.25rem
  font-size 1.5rem
  line-height 3rem
  width 3rem
  text-align center
  cursor pointer
  color #003366
  &:hover
    box-shadow 0 0 1rem #ffffff
  @media (max-width 640px)
    left auto
    right 1rem
    bottom 1rem

@keyframes pointDown
  from
    transform translate3d(0, -0.25rem, 0)
  to
    transform translate3d(0, 0.25rem, 0)

.scroll
  position absolute
  bottom 0
  width 100%
  text-align center
  color #ffffff
  line-height 3rem
  cursor pointer
  i
    animation pointDown 0.6s infinite

.main
  padding 5rem 13rem
  @media (max-width 1280px)
    padding 0

.me
  min-height calc(100vh - 10rem)
  max-width 1280px
  margin 0 auto
  @media (max-width 1280px)
    min-height 100vh
</style>

<style lang="stylus">
:root
  font-size 16px
  line-height 2

body, div, :before, :after
  margin 0
  padding 0
  box-sizing border-box
  transition all 0.3s

#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  overflow hidden
  color #000000
  min-width 320px

select
  font normal 1rem Avenir, Helvetica, Arial, sans-serif
</style>
