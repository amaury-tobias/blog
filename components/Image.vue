<template lang="pug">
.image-container(:style='$justify')
  img.image.js(v-lazy='src' :style='$size')
  noscript
    img.image(:src='src' :style='$size')
</template>

<script>
export default {
  name: 'VImg',
  props: {
    src: {
      type: String,
      default: ''
    },
    aspect: {
      type: String,
      default: null
    },
    size: {
      type: Number,
      default: 100
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
      // eslint-disable-next-line no-eval
      const width = eval(`${this.size} * ${this.aspect}`)
      if (this.aspect) return `height:${this.size}px; width: ${width}px;`
      else return `height:${this.size}px; width: ${this.size}px;`
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
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 2rem 0;
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
