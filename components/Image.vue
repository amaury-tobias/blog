<template lang="pug">
figure.image(:class='classes')
  img(v-lazy='src' :class="`${isRounded}`")
</template>

<script>
export default {
  name: 'VImg',
  props: {
    src: {
      type: String,
      default: ''
    },
    classes: {
      type: String,
      default: ''
    },
    rounded: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isRounded() {
      return this.rounded ? 'is-rounded' : ''
    }
  }
}
</script>

<style scoped lang="scss">
figure {
  margin-left: 4rem !important;
  margin-right: 4rem !important;
}

.image-placeholder {
  overflow: hidden;
  line-height: 0;
}

img {
  transition: all ease 0.3s;
  opacity: 1;

  &[lazy='loading'] {
    opacity: 1;
    filter: blur(15px);
  }
  &[lazy='loaded'] {
    opacity: 1;
  }
}
</style>
