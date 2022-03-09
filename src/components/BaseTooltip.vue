<template>
  <div class="button-container">
    <div class="button">
      {{buttonTitle}}
      <span class="tooltip"
        :class="{'top': position === 'top', 'bottom':position === 'bottom', 'right':position === 'right', 'left':position === 'left'}"
      >
        <span class="tooltip-text">Text text text text text text text text text</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseTooltip",
  data() {
    return {
    }
  },
  props:{
    buttonTitle: {
      required: true,
      type: String,
      default: 'Button',
    },
    position: {
      required: true,
      type: String,
      default: '',
    },
    tooltipText: {
      required: true,
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
$blue: #4468D6;

.button-container{
  .button{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 88px;
    height: 32px;
    color: $blue;
    border: 1px solid $blue;
    box-sizing: border-box;
    border-radius: 2px;
    margin-top: 40px;
    cursor: pointer;
    margin-right: 13px;
    .tooltip{
      visibility: hidden;
      width: 148px;
      text-align: center;
      padding: 5px 0;
      position: absolute;
      z-index: 1;
      border: 1px solid #F2F3F6;
      box-sizing: border-box;
      box-shadow: 0px 6px 15px rgba(0, 44, 92, 0.1);
      border-radius: 2px;
      background-color: white;
      color: black;
      transition: .55s visibility;
      .tooltip-text{
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 14px;
      }
      &:after{
        content: " ";
        position: absolute;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: white transparent transparent transparent;
      }
    }
    .tooltip.top{
      bottom: 125%;
      &:after{
        top: 100%;
        left: 50%;
      }
    }
    .tooltip.bottom{
      top: 125%;
      &:after{
        bottom: 100%;
        left: 50%;
        transform: rotate(180deg);
      }
    }
    .tooltip.left{
      right: 115%;
      &:after{
        top: 34%;
        left: 104%;
        transform: rotate(-90deg);
      }
    }
    .tooltip.right{
      left: 115%;
      &:after{
        top: 20%;
        transform: rotate(90deg);
        right: 100%;
      }
    }
    &:hover .tooltip{
      visibility: visible;
    }
  }
}


</style>