<template>
  <div class="main-container">
    <div class="page-title" v-if="$route.name !== 'Home'">
      Test Task
    </div>
    <div id="app" :class="{'border' : $route.name !== 'Home'}">
      <div class="nav">
        <router-link
            class="first-link link"
            to="/base-select"
        >
          Component: BaseSelect
        </router-link>
        <router-link
            class="link"
            to="/base-tooltip"
        >
          Component: BaseTooltip
        </router-link>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        routeName: '',
      }
    }
  }
</script>

<style lang="scss" scoped>
.main-container{
  .border{
    padding: 32px 42px;
    margin: 0 100px;
    background: #FFFFFF;
    border: 1px solid #F2F3F6;
    box-sizing: border-box;
    box-shadow: 0px 2px 6px rgba(0, 44, 92, 0.1);
    border-radius: 2px;
    .nav{
      margin-top: 0;
    }
  }
  .page-title{
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    color: #252629;
    margin: 52px 100px 15px 100px;
  }
  .nav{
    width: 100%;
    display: flex;
    margin-top: 30px;
    .first-link{
      margin-left: 30px;
      margin-right: 34%;
    }
    .link{
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 21px;
      color: #ABB2BF;
      text-decoration: none;
    }
    .router-link-active{
      color: #4468D6;
    }
  }
}
</style>
