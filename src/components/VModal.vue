<template>
  <transition
    :duration="{ enter: 400, leave: 400 }"
    enter-class="fade-in-down-enter"
    enter-active-class="fade-in-down-enter-active"
    enter-to-class="fade-in-down-enter-to"
    leave-class="custom-fade-out-down-leave"
    leave-active-class="custom-fade-out-down-leave-active"
    leave-to-class="custom-fade-out-down-leave-to"
  >
    <div class="modal-overlay" v-if="show" @click="onOverlayClick">
      <div class="modal">
        <div class="modal__head">
          <h4 class="modal__title">{{ title }}</h4>
          <div class="modal__close" @click="close"></div>
        </div>
        <div class="modal__body">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    /**
     * Текст для заголовка окна
     */
    title: {
      type: String,
      default: "Title",
    },
  },
  methods: {
    close() {
      /**
       * Вызывается при закрытии окна
       */
      this.$emit("close");
    },
    onOverlayClick(e) {
      const isOverlay = e.target.classList.contains("modal-overlay");
      if (isOverlay) this.close();
    },
  },
};
</script>
<style lang="scss">
.modal {
  width: 100%;
  max-width: 750px;
  margin: auto;
  padding: 28px 30px;
  background: $white;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  box-sizing: border-box;

  &__head {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  &__close {
    width: 21px;
    height: 21px;
    margin-left: 11px;
    flex-shrink: 0;
    background-image: url("@/assets/images/icons/close.svg");
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 21px;
    cursor: pointer;
    position: relative;
    top: 2px;

    &:hover {
      background-image: url("@/assets/images/icons/close.svg");
      transition: background-image 0.2s ease-out;
    }
  }

  &__title {
    font-weight: 500;
    font-size: 22px;
    line-height: 24px;
  }

  &__body {
    margin-top: 12px;
  }

  @media (max-width: 800px) {
    padding: 19px 15px 24px;
  }
}

.modal-overlay {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  opacity: 1;
  box-sizing: border-box;
  overflow-y: scroll;
  z-index: 999;
  margin-right: -20px;
  padding-right: 20px;
  will-change: transform, opacity;
  /* Оставляем 100vh, на случай, если не сработает -webkit-fill-available */
  min-height: 100vh;
  min-height: -webkit-fill-available;
  background-color: rgba(255, 255, 255, 0.88);

  @media (max-width: 900px) {
    padding-top: 8px;
  }

  @media (max-width: 800px) {
    margin: initial;
    /* Стиль для того чтобы прибивать модалки к низу на мобильном разрешении */
    margin-top: auto;
  }
}

/* Кастомная анимация появления */
@keyframes customFadeInUp {
  from {
    transform: translateY(70px);
  }

  to {
    transform: translateY(0);
  }
}

/* Кастомная анимация исчезновения */
@keyframes customFadeOutDown {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(70px);
  }
}

.custom-fade-out-down-leave-active {
  transition: opacity 0.4s;
  .modal {
    animation: 0.3s customFadeInUp;
  }
}

.custom-fade-out-down-leave-active {
  opacity: 0;
  .modal {
    animation: 0.3s customFadeOutDown;
  }
}

.fade-in-down-enter-active {
  animation: 0.15s fadeIn;
  .modal {
    animation: 0.4s fadeInDown;
    @media (max-width: 800px) {
      animation: 0.4s bounceInUp;
    }
  }
}
</style>
