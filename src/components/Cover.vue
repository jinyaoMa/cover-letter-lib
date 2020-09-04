<template>
  <div class="Cover"></div>
</template>

<script>
export default {
  name: "Cover"
};
</script>

<style lang="stylus" scoped>
.Cover
  position absolute
  width 100%
  height 200vmax
  left 50vmin
  bottom 0
  background-color #006699
  box-shadow inset 0 0 2rem #003366
  transform-origin left bottom
  transform rotate(56deg)
  @media (max-width 1280px)
    left 13rem
  @media (max-width 1024px)
    left 0
    transform rotate(0deg)
    height calc(100vh - 20rem)
  @media (max-width 640px)
    display none
</style>
