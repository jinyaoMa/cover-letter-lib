<template>
  <div class="Info">
    <div v-for="(item, i) in config.info" :key="i">
      <span v-if="!item.isLink" v-html="item.text"></span>
      <a
        v-if="item.isLink"
        target="_blank"
        :href="item.url"
        :title="item.url"
        v-html="item.text"
      ></a>
      <span v-html="item.icon"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Info"
};
</script>

<style lang="stylus" scoped>
.Info
  padding-bottom 5rem
  padding-right 5rem
  max-height calc(50vmin - 5rem)
  position absolute
  bottom 0
  right 0
  text-align right
  color #ffffff
  font-size 1.25rem
  > div
    line-height 1
    padding 0.625rem 0
>>> i
  margin-left 1rem

a
  color #ffffff
  text-decoration none
  position relative
  &:before
    content ''
    position absolute
    right 0
    bottom -4px
    height 2px
    background-color #ffffff
    width 0
  &:hover:before
    width 100%

@media (max-width 800px)
  .Info
    position relative
    padding 5rem
    padding-bottom 0
    max-height calc(100vh - 34rem)
    text-align left
    white-space nowrap
    > div
      position relative
      span, a
        margin-left 2.5rem
  a:before
    right auto
    left 0
  >>> i
    margin-left 0
    position absolute
    top 0
    left 0
    padding 0.5rem 0
  span
    display block

@media (max-width 640px)
  .Info
    padding 1rem
    font-size 1rem
    white-space normal
    > div
      padding 0.5rem 0
  a
    display inline-block
</style>
