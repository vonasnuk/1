<template>
  <div class="container">
    <div class="left-block">
      <BaseSelect
          :title="'Text'"
          :disabled="true"
      />
      <BaseSelect
          :title="'Text'"
      />
      <BaseSelect
          :title="'Text'"
      />
      <BaseSelect
          :title="'Text'"
      />
    </div>
    <div class="right-block">
      <BaseTooltip
        :buttonTitle="'Right'"
        :position="'right'"
        :tooltipText="'Text text text text text text text text text'"
      />
      <BaseTooltip
          :buttonTitle="'Bottom'"
          :position="'bottom'"
          :tooltipText="'Text text text text text text text text text'"
      />
    </div>

  </div>
</template>

<script>
import BaseSelect from "@/components/BaseSelect";
import BaseTooltip from "@/components/BaseTooltip";

  export default {
    data() {
      return {

      }
    },
    components:{
      BaseSelect,
      BaseTooltip,
    }
  }
</script>

<style lang="scss" scoped>
.container{
  display: flex;
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
  .left-block{
    width: 50%;
  }
  .right-block{
    width: 50%;
    padding-top: 50px;
  }
}
</style>