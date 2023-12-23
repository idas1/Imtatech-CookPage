<template>
    <div class="modal" @click="closeModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title">{{ title }}</h3>
            <button type="button" class="close" @click="closeModal">
              <span aria-hidden="true">X</span>
            </button>
          </div>
          <div class="modal-body">
            <slot><p class="text-body">{{ body }}</p></slot>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
        return {
            title: "Alert",
            body: "Class added to cart."
        };
    },
    
    methods: {
      closeModal() {
        this.$emit("cancel");
         
      },
    },
  };
  </script>
  
  <style lang="css">
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }
  
  .modal-dialog {
    max-width: 600px;
    width: 100%;
  }
  
  .modal-content {
    background: #fff;
    border-radius: 8px;
  }
  
  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid #ddd;
  }
  
  .modal-title {
    margin: 0;
  }
  
  .modal-body {
    padding: 2rem;
  }
  .close{
    background-color: unset;
    border: none;
    font-size: 25px;
    color: var(--color-mainpPage);
    cursor: pointer;

  }
  .text-body{
    text-align: center;
    color: var(--color-mainpPage);
    font-size: 22px;
  }
  </style>
  