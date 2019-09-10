<template>
  <div>
    <span class="name">按省份选择:</span>
    <mSelect
      :list="provinceList"
      clas="province"
      title="省份"
      :value="province"
      :show="showProvince"
      :noClick="provinceNotClick"
      @change="changeProvinceShow"
    />
    <mSelect :list="cityList" clas="city" title="城市" :value="city" :show="showCity" @change="changeCityShow" 
      :noClick="cityNotClick"/>
    <span>直接搜索:</span>
    <el-autocomplete
      v-model="state"
      :fetch-suggestions="querySearchAsync"
      placeholder="请输入内容"
      @select="handleSelect"
    ></el-autocomplete>
  </div>
</template>
<script>
import mSelect from "@/components/changeCity/select.vue";
import api from "@/api"
export default {
  components: {
    mSelect
  },
  data() {
    return {
      provinceList: [
        "河北省",
        "山西省",
        "辽宁省",
        "吉林省",
        "黑龙江省",
        "江苏省",
        "浙江省",
        "安徽省",
        "福建省",
        "江西省",
        "山东省",
        "台湾省",
        "河南省",
        "湖北省",
        "湖南省",
        "广东省",
        "海南省",
        "四川省",
        "贵州省",
        "云南省",
        "陕西省",
        "甘肃省",
        "青海省",
        "北京",
        "天津",
        "上海",
        "重庆"
      ],
      cityList: [
        "广州市",
        "韶关市",
        "深圳市",
        "珠海市",
        "汕头市",
        "佛山市",
        "江门市",
        "湛江市",
        "茂名市",
        "肇庆市",
        "惠州市",
        "梅州市",
        "汕尾市",
        "河源市",
        "阳江市",
        "清远市",
        "东莞市",
        "中山市",
        "潮州市",
        "揭阳市",
        "云浮市",
        "乐昌市",
        "南雄市",
        "台山市",
        "开平市",
        "鹤山市",
        "恩平市",
        "廉江市",
        "雷州市",
        "吴川市",
        "高州市",
        "化州市",
        "信宜市",
        "四会市",
        "兴宁市",
        "陆丰市",
        "阳春市",
        "英德市",
        "连州市",
        "普宁市",
        "罗定市"
      ],
      showProvince: false,
      showCity: false,
      state: "",
      searchList: [],
      province: "省份",
      city: "城市",
      cityNotClick: true,
      provinceNotClick: false
    };
  },
  methods: {
    changeProvinceShow(flag) {
      // console.log(flag);
      if (flag.status) {
        this.showCity = false;
      }
      if(flag.value){
          this.province = flag.value;
          this.cityList = this.provinceList.filter((item) => {
            return item.name == flag.value;
          })[0].cityInfoList;
          this.cityNotClick = false;
      }
      this.showProvince = flag.status;
    },
    changeCityShow(flag) {
      // console.log(flag);
      if (flag.status) {
        this.showProvince = false;
      }
      if(flag.value){
          this.city = flag.value;
          this.$store.dispatch("setCity", {city: flag.value});
          this.$router.push("/index");
      }
      this.showCity = flag.status;
    },
    handleSelect() {

    },
      querySearchAsync(queryString, cb) {
        var searchList = this.searchList;
        var results = queryString ? searchList.filter(this.createStateFilter(queryString)) : searchList;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      createStateFilter(queryString) {
        return (state) => {
          return (state.value.indexOf(queryString) === 0);
        };
      },
    loadAll() {
        return [
        {value: "广州市"},
        {value: "韶关市"},
        {value: "深圳市"},
        {value: "珠海市"},
        {value: "汕头市"},
        {value: "佛山市"},
        {value: "江门市"},
        {value: "湛江市"},
        {value: "茂名市"},
        {value: "肇庆市"},
        {value: "惠州市"},
        {value: "梅州市"},
        {value: "汕尾市"},
        {value: "河源市"},
        {value: "阳江市"},
        {value: "清远市"},
        {value: "东莞市"},
        {value: "中山市"},
        {value: "潮州市"},
        {value: "揭阳市"},
        {value: "云浮市"},
        {value: "乐昌市"},
        {value: "南雄市"},
        {value: "台山市"},
        {value: "开平市"},
        {value: "鹤山市"},
        {value: "恩平市"},
        {value: "廉江市"},
        {value: "雷州市"},
        {value: "吴川市"},
        {value: "高州市"},
        {value: "化州市"},
        {value: "信宜市"},
        {value: "四会市"},
        {value: "兴宁市"},
        {value: "陆丰市"},
        {value: "阳春市"},
        {value: "英德市"},
        {value: "连州市"},
        {value: "普宁市"},
        {value: "罗定市"}
      ]
    }
  },
  created() {
    api.getProvinceList().then((res) => {
      this.provinceList = res.data.data.map((item) => {
        item.name = item.provinceName;
        return item;
      })

      // console.log(this.provinceList);
    })
  },
  mounted: function() {
      this.searchList = this.loadAll();
  }
};
</script>
<style scoped>
</style>