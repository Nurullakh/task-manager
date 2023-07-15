<template>
  <input
    :class="[
      'input',
      {
        input_error: error,
      },
    ]"
    ref="input"
    :value="isModelValueActive ? modelValue : val"
    :placeholder="placeholder"
    @input="onInput"
    @focus="onFocus"
  />
</template>

<script>
export default {
  name: "VInput",
  model: {
    prop: "modelValue",
    event: "input",
  },
  props: {
    modelValue: {
      type: [String, Number],
      default: undefined,
    },
    /**
     * Значение поля ввода
     */
    value: {
      type: [String, Number],
      default: "",
    },
    /**
     * Placeholder для поля ввода
     */
    placeholder: {
      type: String,
      default: null,
    },
    error: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    this.isModelValueActive = this.modelValue !== undefined;
  },
  data() {
    return {
      val: this.value,
    };
  },
  methods: {
    onInput(e) {
      this.val = e.target.value;
      this.$emit("input", e.target.value);
    },
    onFocus(e) {
      this.$emit("focus", e.target.value);
    },
  },
};
</script>
