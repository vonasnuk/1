<template>
  <div class="base-select-container">
    <BaseSelect
        :title="'Text'"
        :options="list"
    />
  </div>
</template>

<script>
import axios from "axios";
import BaseSelect from "@/components/BaseSelect";

export default {
  name: "showBaseSelect",
  components: {BaseSelect},
  data() {
    return {
      list: null,
    }
  },
  mounted() {
    axios.get('https://60de1565878c890017fa2d5f.mockapi.io/api/v1/users')
    .then((response) => {
      this.list = response.data
    })
    .catch((err) => {
      console.error(err)
    })
  }
}
</script>

<style lang="scss" scoped>
.base-select-container{
  margin-top: 61px;
}
</style>