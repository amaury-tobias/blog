<template lang="pug">
figure.image(:class='classes')
  img(v-lazy='imageURL' :class="`${isRounded}`")
</template>

<script>
export default {
  props: {
    imageURL: {
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
