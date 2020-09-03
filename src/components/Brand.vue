<template>
  <div class="Brand">
    <div class="avatar" :style="avatarStyle"></div>
    <div class="control">
      <div class="name">{{ config.name }}</div>
      <div class="date">{{ date }}</div>
      <div class="options">
        <select>
          <option
            v-for="(item, i) in data"
            :key="i"
            :value="item.content"
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
  font-size calc((50vmin - 15rem) / 4)
  line-height 1
  margin-top 5rem

.date
  font-size calc((50vmin - 15rem) / 10)
  line-height calc((50vmin - 15rem) / 3)

.options
  position relative
  height calc((50vmin - 15rem) / 4)
  width min-content
  &:before
    content ''
    position absolute
    width 0
    height 0
    border 0.5rem solid transparent
    border-top-color #000000
    top calc((50vmin - 15rem) / 14 * 1.5)
    right 1rem

select
  min-width 20rem
  border-radius 0.25rem
  border none
  background-image none
  -webkit-appearance none
  -moz-appearance none
  line-height 1
  font-size calc((50vmin - 15rem) / 10)
  padding calc((50vmin - 15rem) / 14) calc((50vmin - 15rem) / 7 + 1rem) calc((50vmin - 15rem) / 14) calc((50vmin - 15rem) / 14)
  &:focus
    outline none
</style>
