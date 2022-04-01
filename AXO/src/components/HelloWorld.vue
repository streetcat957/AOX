<template>
  <div class="block">
    <span class="demonstration">工具v.0.0.1</span>
    <el-cascader
      v-model="value"
      :options="options"
      :props="{ expandTrigger: 'hover' }"
      @change="handleChange"></el-cascader>
      <span class="demonstration">街道：</span>
      <el-tag v-show="loading" v-model="township" >{{township}}</el-tag>
      <el-input v-model="kiss.keywords" placeholder="请输入内容" @keyup.enter.native='enter'></el-input>
  </div>
</template>
<script>
// 杭州市、湖州市、嘉兴市、金华市、丽水市、宁波市、衢州市、绍兴市、台州市、温州市、舟山市
// 河北省、山西省、辽宁省、吉林省、黑龙江省、江苏省、浙江省、安徽省、福建省、江西省、山东省、河南省、湖北省、湖南省、广东省、海南省、四川省、贵州省、云南省、陕西省、甘肃省、青海省
  export default {
    data() {
      return {
        loading:false,
        township:'',
        kiss:{
          key:'fea6f28be13746dbb0e746c0215df605',
          keywords:'',
          city:'',
          // 按照层级展示子POI数据
          children:'',
          extensions:'all'
        },
        value:[],
        options:[{
          value:'浙江',
          label:'浙江',
          children:[
            {
            value:'杭州市',
            label:'杭州市',
            },{
            value:'湖州市',
            label:'湖州市',
            },{
            value:'嘉兴市',
            label:'嘉兴市',
            },{
            value:'金华市',
            label:'金华市',
            },{
            value:'丽水市',
            label:'丽水市',
            },{
            value:'宁波市',
            label:'宁波市',
            },{
            value:'衢州市',
            label:'衢州市',
            },{
            value:'绍兴市',
            label:'绍兴市',
            },{
            value:'台州市',
            label:'台州市',
            },{
            value:'温州市',
            label:'温州市',
            },{
            value:'舟山市',
            label:'舟山市',
            },
          ]},
          {value:'河北',
          label:'河北',
          children:[
            {},
            {},
          ]},
          {value:'山西',
          label:'山西',
          children:[]},
          {value:'河北',
          label:'河北',
          children:[]},
          {value:'辽宁',
          label:'辽宁',
          children:[]},
          {value:'黑龙江',
          label:'黑龙江',
          children:[]},
          {value:'江苏',
          label:'江苏',
          children:[]},
          {value:'安徽',
          label:'安徽',
          children:[]},
          {value:'福建',
          label:'福建',
          children:[]},
          {value:'江西',
          label:'江西',
          children:[]},
          {value:'湖北',
          label:'湖北',
          children:[]},
          {value:'湖南',
          label:'湖南',
          children:[]},
          {value:'广东',
          label:'广东',
          children:[]},
          {value:'海南',
          label:'海南',
          children:[]},
          {value:'四川',
          label:'四川',
          children:[]},
          {value:'贵州',
          label:'贵州',
          children:[]},
          {value:'云南',
          label:'云南',
          children:[]},
          {value:'陕西',
          label:'陕西',
          children:[]},
          {value:'甘肃',
          label:'甘肃',
          children:[]},
          {value:'青海',
          label:'青海',
          children:[]},
        ]
      }
    },
    methods: {
      handleChange(value) {
        this.kiss.city = value[1]
      },
      enter(){
        // console.log(this.kiss)
        console.log(this.$store)
        this.$store.dispatch('search/start',this.kiss).then(()=>{
          // console.log(this.$store.state.search.location)
          const locat = this.$store.state.search
          this.$store.dispatch('search/los',locat).then(()=>{
            this.loading = true
            this.township=this.$store.state.search.township
            console.log(this.$store.state.search.township,'===')
          })
        })
      }
    }
  };
</script>
