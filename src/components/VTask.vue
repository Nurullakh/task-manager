<template>
  <div
    class="task"
    :class="{ task_completed: modelCompleted }"
    @click="openModal"
  >
    <VCheckbox
      class="task__checkbox"
      v-model="modelCompleted"
      @change="onChange"
      @click.native.stop
    />
    <div class="task__details">
      <h3 class="task__title" :title="title">{{ title }}</h3>
      <p class="task__description" :title="description">{{ description }}</p>
    </div>
    <div class="task__date"><span>Due date:</span> {{ formattedDate }}</div>
    <div class="task__delete" @click.stop="onRemove" />
    <EditTask
      :show="isModalOpen"
      :title="title"
      :description="description"
      :dueDate="dueDate"
      @close="closeModal"
      @edit="editTask"
    />
  </div>
</template>
<script>
import VCheckbox from "./VCheckbox.vue";
const EditTask = () => import("./EditTask");

export default {
  components: { VCheckbox, EditTask },
  name: "VTask",
  props: {
    taskId: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      required: true,
    },
    dueDate: {
      type: [String, Date],
      required: true,
    },
  },
  data() {
    return {
      modelCompleted: this.completed,
      isModalOpen: false,
    };
  },
  computed: {
    formattedDate() {
      const formattedDate = new Date(this.dueDate)
        .toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })
        .replace(/\//g, " ");
      return formattedDate;
    },
  },
  methods: {
    onRemove() {
      this.$emit("remove", this.taskId);
    },
    onChange(isChecked) {
      this.$emit("completed", this.taskId, isChecked);
    },
    editTask(task) {
      const updatedTask = {
        id: this.taskId,
        completed: this.completed,
        ...task,
      };
      this.$emit("edit", updatedTask);
      this.closeModal();
    },
    closeModal() {
      this.isModalOpen = false;
    },
    openModal() {
      this.isModalOpen = true;
    },
  },
};
</script>
<style lang="scss" scoped>
.task {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #2a364d;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #ff752933;
  }
  &_completed {
    .task__title,
    .task__description {
      text-decoration: line-through;
    }
  }

  &__checkbox {
    margin-right: 10px;
  }

  &__details {
    flex-grow: 1;
    overflow: hidden;
    text-wrap: nowrap;
  }

  &__title {
    font-size: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__description {
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__date {
    margin-left: 20px;
    flex-shrink: 0;
    font-size: 21px;
    color: gray;
  }

  &__delete {
    margin-left: 20px;
    cursor: pointer;

    &::before {
      content: "";
      flex-shrink: 0;
      width: 30px;
      height: 30px;
      background-image: url("~@/assets/images/icons/delete.svg");
      background-repeat: no-repeat;
      background-position: 50%;
      background-size: 30px;
      display: inline-block;
      vertical-align: top;
    }
  }

  @media (max-width: 540px) {
    &__date span {
      display: none;
    }
  }
}
</style>
