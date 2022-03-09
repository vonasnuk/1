<template>
  <div class="base-select">
    <div class="title">
      {{title}}
    </div>
    <div class="select-button" :class="{'disabled' : disabled, 'rotate-arrow' : showItems}" @click="openItems">
      <div class="select-title">
        {{selectItem}}
      </div>
    </div>
    <transition>
      <div class="select-body" v-if="showItems">
        <div class="select-items">
          <div class="item" v-for="item in options" @click="selectedItem(item.name)">
            {{item.name}}
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "BaseSelect",
  data() {
    return {
      selectItem: 'Text',
      showItems: false,
    }
  },
  props:{
    title: {
      required: true,
      type: String,
      default: '',
    },
    disabled: {
      required: false,
      type: Boolean,
      default: false
    },
    options: {
      required: false,
      type: Array,
      default: () => [
        {name: 'text 1'},
        {name: 'text 2'},
        {name: 'text 3'},
        {name: 'text 4'},
      ]
    }
  },
  methods:{
    openItems(){
      if (!this.disabled){
        this.showItems = !this.showItems
      }
    },
    selectedItem(val){
      this.selectItem = val
      this.showItems = false
    }
  }
}
</script>

<style lang="scss" scoped>
.base-select{
  position: relative;
  max-width: 262px;
  margin-top: 10px;
  .v-enter-active, .v-leave-active {
    transition: opacity 0.5s ease;
  }
  .v-enter-from, .v-leave-to {
    opacity: 0;
  }
  .title{
    margin-bottom: 6px;
  }
  .select-button{
    width: 265px;
    height: 32px;
    display: flex;
    align-items: center;
    cursor: pointer;
    background: #FFFFFF;
    border: 1px solid #ABB2BF;
    box-sizing: border-box;
    border-radius: 2px;
    .select-title{
      padding-left: 10px;
    }
    &:before{
      position: absolute;
      content: '';
      background: url("../assets/arrow.svg");
      height: 7px;
      width: 10px;
      cursor: pointer;
      right: 20px;
      z-index: 1;
      transform: rotate(180deg);
    }
  }
  .rotate-arrow{
    &:before{
      transform: rotate(360deg);
    }
  }
  .select-button.disabled{
    .select-title{
      color: #ABB2BF;
    }
  }
  .select-body{
    background: #FFFFFF;
    box-shadow: 0px 6px 15px rgba(0, 44, 92, 0.1);
    border-radius: 2px;
    position: absolute;
    width: 101%;
    z-index: 10;
    .select-items{
      position: relative;
      z-index: 9;
      max-height: 200px;
      overflow-y: scroll;
      .item{
        min-height: 28px;
        display: flex;
        align-items: center;
        padding: 0 10px;
        cursor: pointer;
        &:hover{
          background-color: #F2F3F6;
        }
      }
    }
  }
}

</style>