<template>
  <div class="Brand">
    <div class="avatar" :style="avatarStyle"></div>
    <div class="control">
      <div class="name">{{ config.name }}</div>
      <div class="date">{{ date }}</div>
      <div class="options">
        <select @change="handleSelect" ref="pos">
          <option
            v-for="(item, i) in data"
            :key="i"
            :value="item.isPlaceholder ? false : item.content"
            :disabled="item.isPlaceholder"
            :selected="item.isPlaceholder"
          >
            {{ item.isPlaceholder ? config.selectPlaceholder : item.name }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

let dateLooper = null;

export default {
  name: "Brand",
  data() {
    return {
      date: ""
    };
  },
  computed: {
    avatarStyle() {
      return {
        backgroundImage: `url('${this.config.avatar}')`
      };
    }
  },
  watch: {
    locale() {
      this.startDate();
    }
  },
  methods: {
    startDate() {
      window.clearInterval(dateLooper);
      this.date = moment()
        .locale(this.locale)
        .format(this.config.dateFormat);
      dateLooper = window.setInterval(() => {
        this.date = moment()
          .locale(this.locale)
          .format(this.config.dateFormat);
      }, 1000);
    },
    handleSelect() {
      this.$parent.setContent(this.$refs.pos.value);
      this.$parent.handleScroll();
    }
  },
  mounted() {
    this.startDate();
  }
};
</script>

<style lang="stylus" scoped>
.Brand
  padding-top 5rem
  padding-left 5rem
  height 50vh
  display flex
  white-space nowrap
  position relative

.avatar
  width calc(50vmin - 5rem)
  height min-content
  background-size contain
  border-radius 50%
  &:before
    content ''
    display block
    padding-top 100%

.control
  margin-left 5rem
  color #ffffff
  display flex
  flex-direction column

.name
  font-size 3.5rem
  line-height 1
  margin-top 5rem

.date
  font-size 1.5rem
  line-height 4.5rem

.options
  position relative
  height 3.25rem
  width min-content
  &:before
    content ''
    pointer-events none
    position absolute
    width 0
    height 0
    border 0.5rem solid transparent
    border-top-color #000000
    top 1.375rem
    right 1rem

select
  min-width 20rem
  border-radius 0.25rem
  border none
  background-image none
  -webkit-appearance none
  -moz-appearance none
  line-height 1
  font-size 1.25rem
  padding 1rem 3rem 1rem 1rem
  &:focus
    outline none

@media (max-width 1024px)
  .Brand
    height auto
    padding 5rem
    flex-direction column
  .avatar
    display none
  .control
    margin-left 0
  .name
    margin-top 0

@media (max-width 640px)
  .Brand
    padding 1rem
  .name
    font-size 2rem
  .date
    font-size 1rem
    line-height 3rem
  .options
    height 2.5rem
    &:before
      top 1rem
      right 0.75rem
  select
    min-width auto
    font-size 1rem
    padding 0.75rem 2.5rem 0.75rem 0.75rem
    &:focus
      outline none
</style>
