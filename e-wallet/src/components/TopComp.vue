<template>
  <main id="home">
      <header class="top">
        <h1>{{title}}</h1>
        <p class="card-type">{{subTitle}}</p>
      </header>
  </main>
</template>

<script>
export default {
    props: {
        title:{
            type: String,
            required: true
        },
        subTitle: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
main {
  display: block;
}
.top {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  text-transform: uppercase;
}
.top h1,
.top p {
  text-align: center;
  margin: 0;
}
.top h1 {
  -webkit-box-flex: 2;
  -ms-flex: 2;
  flex: 2;
  line-height: 2rem;
  font-size: 2rem;
  padding: 1.5rem 0;
}
h1,
h2,
h3 {
  font-family: Source Sans Pro, sans-serif;
}

h1 {
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}

.top p {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  font-size: 0.8rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.4);
  padding: 0.25rem;
}

p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
</style>