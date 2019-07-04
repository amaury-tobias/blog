<template lang="pug">
.column.is-4-tablet
  n-link(:to='`/noticias/${postInfo.slug}`')
    .card
      .card-image
        lazy-image(:imageURL='postInfo.image' classes='is-3by2')
      .card-content.has-text-centered
        div
          h3.subtitle.is-uppercase.has-text-weight-bold {{ postInfo.title }}
        .content.has-text-centered
          p {{ postInfo.description }}
</template>

<script>
export default {
  props: { postInfo: { type: Object, required: true } }
}
</script>
