<template>
  <textarea
    class="textarea"
    :class="[
      {
        textarea_error: error,
      },
    ]"
    :value="modelValue"
    :placeholder="placeholder"
    @input="onInput"
    @blur="onBlur"
  ></textarea>
</template>

<script>
export default {
  model: {
    prop: "modelValue",
    event: "input",
  },
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    error: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: null,
    },
  },
  methods: {
    onInput(e) {
      this.$emit("input", e.target.value);
    },
    onBlur(e) {
      this.$emit("blur", e);
    },
  },
};
</script>

<style lang="scss">
.textarea {
  width: 100%;
  height: 150px;
  min-height: 150px;
  font-size: 20px;
  line-height: 25px;
  padding: 18px 22px;
  border: 1px solid transparent;
  background-color: $field;
  border-radius: 15px;
  outline: none;
  appearance: none;
  resize: none;
  &::placeholder {
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    color: $placeholder;
  }
  &_error {
    border: 1px solid $system-error;
    color: $system-error;
  }
}
</style>
