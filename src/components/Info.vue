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
</style>
