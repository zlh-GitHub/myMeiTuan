<template>
  <div class="slide">
      <el-carousel :interval="5000" arrow="always" height="240px">
        <el-carousel-item v-for="(item, index) in imgList" :key="item.alt">
          <router-link :to="{name: 'blank', params: {id: index}}"><img :src="item.src" :alt="item.alt"></router-link>
        </el-carousel-item>
      </el-carousel>
  </div>
</template>
    </div>
</template>
<script>
export default {
    data() {
        return {
            imgList: [
                {
                    src: "http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg",
                    alt: "美团"
                },{
                    src: "http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg",
                    alt: "美食"
                },{
                    src: "http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg",
                    alt: "外卖"
                },{
                    src: "http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg",
                    alt: "电影"
                },{
                    src: "https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png",
                    alt: "排队"
                }
            ]
        }
    }
};
</script>
<style scoped>
</style>