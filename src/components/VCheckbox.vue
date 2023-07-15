<template>
  <label class="checkbox">
    <input
      type="checkbox"
      class="checkbox__input"
      :value="value"
      :checked="checked"
      @change="onChange"
    />
  </label>
</template>

<script>
export default {
  name: "VCheckbox",
  model: {
    prop: "checked",
    event: "change",
  },
  props: {
    /**
     * Атрибут value для чекбокса
     */
    value: [String, Number],
    /**
     * v-model
     */
    checked: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onChange(event) {
      this.$emit("change", event.target.checked, this.value);
    },
  },
};
</script>

<style lang="scss">
.checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;
  &__input {
    width: 21.5px;
    height: 21.5px;
    display: inline-block;
    border: 2px solid #e9ebec;
    background-color: $white;
    border-radius: 4px;
    cursor: pointer;
    vertical-align: top;
    outline: none;
    flex-shrink: 0;
    &:checked {
      background-image: url("~@/assets/images/icons/tick.svg");
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: 11px;
    }
  }
}
</style>
