<template>
  <div class="test">
    {{ text }}
    <input maxlength="10"/>
    <stars></stars>
  </div>
</template>
<script>
  import stars from '@/components/common/stars'

    export default({
      name: 'moduleTest',
      data(){
        return {

        }
      },
      created(){
      },
      computed:{
        text(){
          return this.$route.fullPath
        }
      },
      components:{

      }
    })
</script>
<style>

</style>
