<template>
  <div id="app" class="task-manager">
    <div class="task-manager__wrapper">
      <header class="task-manager__header">
        <h1 class="task-manager__title">Task manager</h1>
        <VButton @click="openModal">Add task</VButton>
        <CreateTask :show="isModalOpen" @close="closeModal" @add="addTask" />
      </header>
      <div class="task-manager__content">
        <div v-if="tasks.length" class="task-manager__items">
          <VTask
            v-for="task in tasks"
            :key="task.id"
            :taskId="task.id"
            :dueDate="task.dueDate"
            :completed="task.completed"
            :title="task.title"
            :description="task.description"
            @remove="deleteTask"
            @completed="updateTaskCompletion"
            @edit="editTask"
          />
        </div>
        <div v-else class="task-manager__empty">List is empty</div>
      </div>
      <footer class="task-manager__footer">
        <div class="task-manager__count">
          <span class="task-manager__completed">{{ completedTaskCount }}</span>
          / {{ tasks.length }}
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
import VTask from "./components/VTask.vue";
import VButton from "./components/VButton.vue";
const CreateTask = () => import("./components/CreateTask");

export default {
  components: { CreateTask, VButton, VTask },
  name: "App",
  data() {
    return {
      tasks: [],
      isModalOpen: false,
    };
  },
  computed: {
    completedTaskCount() {
      return this.tasks.filter((task) => task.completed).length;
    },
  },
  mounted() {
    this.fetchTasksFromLocalStorage();
  },
  methods: {
    fetchTasksFromLocalStorage() {
      try {
        const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        this.tasks = storedTasks;
      } catch (error) {
        console.error("Error fetching tasks from localStorage:", error);
      }
    },
    saveTasksToLocalStorage() {
      try {
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
      } catch (error) {
        console.error("Error saving tasks to localStorage:", error);
      }
    },
    addTask(newTask) {
      this.tasks.push(newTask);
      this.saveTasksToLocalStorage();
      this.closeModal();
    },
    deleteTask(taskId) {
      this.tasks = this.tasks.filter((task) => task.id !== taskId);
      this.saveTasksToLocalStorage();
    },
    editTask(task) {
      const editingTaskIndex = this.tasks.findIndex(
        (item) => item.id === task.id
      );
      if (editingTaskIndex !== -1) {
        this.$set(this.tasks, editingTaskIndex, { ...task });
        this.saveTasksToLocalStorage();
      }
    },
    updateTaskCompletion(id, val) {
      const taskToUpdate = this.tasks.find((task) => task.id === id);
      if (taskToUpdate) {
        taskToUpdate.completed = val;
        this.saveTasksToLocalStorage();
      }
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
<style lang="scss">
.task-manager {
  height: 100vh;
  padding: 20px;
  display: flex;
  justify-content: center;

  &__wrapper {
    display: flex;
    flex-direction: column;
    min-width: 730px;
    max-width: 50%;
    width: 100%;
    height: 100%;
    padding: 30px 20px 0;
    background: $white;
    border-radius: 20px;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
  }

  &__content {
    flex-grow: 1;
    overflow-y: auto;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      width: 8px;
      background-color: transparent;
    }

    /* ползунок скроллбара */
    &::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.05);
      border-radius: 100px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: rgba(26, 22, 22, 0.05);
    }
  }

  &__title {
    font-size: 46px;
    font-weight: 700;
    color: $dark-blue;
  }

  &__empty {
    color: $pumpkin;
    font-size: 26px;
  }

  &__footer {
    display: flex;
    justify-content: center;
    padding: 30px 0;
  }

  &__count {
    font-size: 26px;
  }

  &__completed {
    color: $pumpkin;
  }

  @media (max-width: 1024px) {
    padding: 0;

    &__wrapper {
      min-width: auto;
      max-width: none;
      width: 100%;
      border-radius: 0;
    }
  }

  @media (max-width: 540px) {
    &__header {
      display: block;
    }

    &__title {
      margin-bottom: 30px;
    }
  }
}
</style>
