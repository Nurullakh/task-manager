<template>
  <VModal :show="show" title="Create task" @close="close">
    <form @submit.prevent="onSubmit" class="create-task">
      <div class="create-task__row">
        <VInput
          placeholder="Title"
          v-model="$v.field.title.$model"
          :error="$v.field.title.$error"
        />
        <div v-if="$v.field.title.$error" class="create-task__message-error">
          Field is required
        </div>
      </div>
      <div class="create-task__row">
        <TextArea
          placeholder="Description"
          v-model="$v.field.description.$model"
          :error="$v.field.description.$error"
        />
        <div
          v-if="$v.field.description.$error"
          class="create-task__message-error"
        >
          Field is required
        </div>
      </div>
      <div class="create-task__row">
        <Datepicker
          :input-class="['input', { input_error: $v.field.dueDate.$error }]"
          placeholder="Select Date"
          v-model="$v.field.dueDate.$model"
        ></Datepicker>
        <div v-if="$v.field.dueDate.$error" class="create-task__message-error">
          Field is required
        </div>
      </div>
      <VButton theme="secondary" fluid type="submit">Create</VButton>
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
  },
  data() {
    return {
      field: {
        id: null,
        title: "",
        description: "",
        dueDate: null,
        completed: false,
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
        this.field.id = Date.now();

        this.$emit("add", this.field);

        this.$v.$reset();
        this.clearForm();
      }
    },
    clearForm() {
      this.field = {
        id: null,
        title: "",
        description: "",
        dueDate: null,
        completed: false,
      };
    },
    close() {
      this.$emit("close");
    },
  },
};
</script>
<style lang="scss">
.create-task {
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
