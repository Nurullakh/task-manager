<template>
  <button class="button" :class="{ button_fluid: fluid }" @click="onClick">
    <!-- @slot Текст для компонента кнопки без иконки -->
    <slot>Текст на кнопке</slot>
  </button>
</template>

<script>
export default {
  name: "VButton",
  props: {
    fluid: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>

<style lang="scss">
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-weight: 700;
  font-size: 16px;
  line-height: 25px;
  text-align: center;
  text-transform: uppercase;
  border: none;
  color: $white;
  cursor: pointer;
  outline: none;
  border: 1px solid transparent;
  border-radius: 51px;
  background: $dark-blue;
  padding: 20px 30px 19px;
  &:hover {
    background: $pumpkin;
  }
  &_fluid {
    width: 100%;
  }
  @media (max-width: 540px) {
    width: 100%;
  }
}
</style>
