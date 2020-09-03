<template>
  <div id="app">
    <div class="header">
      <Cover />
      <Brand />
      <Info />
    </div>
    <div class="main"></div>
    <div class="btn" @click="toggleLocale">
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
  &:hover
    box-shadow 0 0 1rem #ffffff
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
