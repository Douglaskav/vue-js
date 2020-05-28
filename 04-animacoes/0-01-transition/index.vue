<template>
  <div>
    <button @click="ativo = true">Abrir Modal</button>
    <transition appear name="modal" :duration="500">
      <div v-show="ativo" class="modal" @click="closeModal">
        <div class="modal-container">
          <a href @click.prevent="ativo = false" class="fechar-modal">X</a>
          <h2>Titulo Modal</h2>
          <hr />
          <p>Esse é o modal.</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ativo: true
    };
  },

  methods: {
    closeModal({ currentTarget, target }) {
      if (currentTarget == target) this.ativo = false;
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.modal::before {
  content: "";
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
}

.modal {
  display: flex;
  flex-direction: column;
  margin: 30px auto;
  width: 600px;
}

.modal-container {
  position: relative;
  background: #ffffff;
  z-index: 1;
  padding: 50px;
}

.fechar-modal {
  color: #000;
  top: -10px;
  right: -10px;
  width: 40px;
  height: 40px;
  font-size: 1em;
  cursor: pointer;
  background: #fff;
  font-weight: bold;
  text-align: center;
  border-radius: 50%;
  position: absolute;
  text-decoration: none;
  border: 2px solid #000;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1), 0px 4px 10px rgba(0, 0, 0, 0.2);
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-to .modal-container {
  animation: moveEnter 0.5s;
}

.modal-leave-to .modal-container {
  animation: moveLeave 0.5s;
}

@keyframes moveEnter {
  from {
    transform: translate3d(-200px, 0, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes moveLeave {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(200px, 0, 0);
  }
}
</style>