<template>
  <div class="base-tooltip-container">
    <BaseTooltip
        :buttonTitle="'Bottom'"
        :position="'bottom'"
        :tooltipText="'Text text text text text text text text text'"
    />
    <BaseTooltip
        :buttonTitle="'Top'"
        :position="'top'"
        :tooltipText="'Text text text text text text text text text'"
    />
    <BaseTooltip
        :buttonTitle="'Left'"
        :position="'left'"
        :tooltipText="'Text text text text text text text text text'"
    />
    <BaseTooltip
        :buttonTitle="'Right'"
        :position="'right'"
        :tooltipText="'Text text text text text text text text text'"
    />
  </div>
</template>

<script>
import BaseTooltip from "@/components/BaseTooltip";

export default {
  name: "showBaseTooltip",
  components: {
    BaseTooltip
  }
}
</script>

<style scoped lang="scss">
.base-tooltip-container{
  margin-top: 61px;
  display: flex;
}
</style>