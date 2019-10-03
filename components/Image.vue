<template lang="pug">
.image-container(:style='$justify')
  img.image.js(v-lazy='src' :style='$size')
</template>

<script>
export default {
  name: 'VImg',
  props: {
    src: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: null
    },
    start: {
      type: Boolean,
      default: false
    },
    end: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    $size() {
      return this.size ? `height:${this.size}px; width: ${this.size}px;` : null
    },
    $justify() {
      if (this.start) return 'justify-content: flex-start;'
      else if (this.end) return 'justify-content: flex-end;'
      else return 'justify-content: center;'
    }
  }
}
</script>

<style scoped lang="postcss">
.image-container {
  @apply flex;
  @apply flex-row;
  @apply flex-no-wrap;
  @apply justify-center;
  @apply items-center;
  @apply content-center;
  @apply my-4;
}

img {
  transition: all ease 0.3s;
  opacity: 1;

  &.js {
    display: none;
  }

  &[lazy='loading'] {
    opacity: 1;
    filter: blur(15px);
    display: block;
  }
  &[lazy='loaded'] {
    opacity: 1;
    display: block;
  }
  &[lazy='error'] {
    opacity: 1;
    filter: blur(15px);
  }
}
</style>
