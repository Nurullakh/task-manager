<template>
  <VModal :show="show" title="Edit task" ref="edit" @close="close">
    <form @submit.prevent="onSubmit" class="edit-task">
      <div class="edit-task__row">
        <VInput
          placeholder="Title"
          v-model="$v.field.title.$model"
          :error="$v.field.title.$error"
        />
        <div v-if="$v.field.title.$error" class="edit-task__message-error">
          Field is required
        </div>
      </div>
      <div class="edit-task__row">
        <TextArea
          placeholder="Description"
          v-model="$v.field.description.$model"
          :error="$v.field.description.$error"
        />
        <div
          v-if="$v.field.description.$error"
          class="edit-task__message-error"
        >
          Field is required
        </div>
      </div>
      <div class="edit-task__row">
        <Datepicker
          :input-class="['input', { input_error: $v.field.dueDate.$error }]"
          placeholder="Select Date"
          v-model="$v.field.dueDate.$model"
        ></Datepicker>
        <div v-if="$v.field.dueDate.$error" class="edit-task__message-error">
          Field is required
        </div>
      </div>
      <VButton theme="secondary" fluid type="submit">Edit</VButton>
    </form>
  </VModal>
</template>
<script>
import VModal from "@/components/VModal.vue";
import VInput from "@/components/VInput.vue";
import TextArea from "@/components/TextArea.vue";
import VButton from "@/components/VButton.vue";
import Datepicker from "vuejs-datepicker";

import { required } from "vuelidate/lib/validators";

export default {
  components: {
    VModal,
    VInput,
    TextArea,
    VButton,
    Datepicker,
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    dueDate: {
      type: [String, Date],
      required: true,
    },
  },
  mounted() {
    this.$nextTick(() => {
      document.body.appendChild(this.$refs.edit?.$el);
    });
  },
  destroyed() {
    this.$refs.edit?.$el.remove();
  },
  data() {
    return {
      field: {
        title: this.title,
        description: this.description,
        dueDate: this.dueDate,
      },
    };
  },
  validations: {
    field: {
      title: { required },
      description: { required },
      dueDate: { required },
    },
  },
  methods: {
    onSubmit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.$emit("edit", this.field);
      }
    },
    close() {
      this.$emit("close");
    },
  },
};
</script>
<style lang="scss">
.edit-task {
  &__row {
    margin-bottom: 20px;
  }
  &__message-error {
    margin-top: 3px;
    font-size: 15px;
    line-height: 20px;
    text-align: left;
    color: $system-error;
  }
}
</style>
