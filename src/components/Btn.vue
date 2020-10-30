<template>
  <a class="btn">
    <div class="btn-inner">
      <p>icon</p>
      <p>Popular</p>
    </div>
  </a>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.btn {
  text-decoration: none;
  display: block;
  outline: none;
  margin-bottom: 0.7rem;
  border-radius: 2rem;
}
.btn-inner:hover {
  border: 1px solid #37474f;
  border-radius: 2rem;
}

.btn-inner {
  width: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1;
  opacity: 1;
  color: #37474f;
  text-decoration: none;
  cursor: pointer;
  transition: all 100ms cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
}
</style>
