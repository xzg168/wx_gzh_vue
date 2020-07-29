<template>
  <div class="home">
    <nut-navbar @on-click-back="back" title="全部分类" :rightShow="false">
      <a slot="center" @click="search">编辑</a>
    </nut-navbar>
    <div class="content">
      <nut-tab
        @tab-switch="tabSwitch"
        position-nav="left"
        :wrapper-height="contentHeight"
        :is-scroll="true"
      >
        <nut-tab-panel
          v-for="(value, index) in editableTabs"
          v-bind:key="index"
          :tab-title="value.tabTitle"
          :icon-url="value.tabUrl"
          v-html="value.content"
        >
        </nut-tab-panel>
      </nut-tab>
    </div>
    <nut-tabbar @tab-switch="tabSwitch3" :tabbar-list="tabList3" :bottom="true">
    </nut-tabbar>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      tabList3: [
        {
          tabTitle: "主页",
          curr: false,
          icon:
            "http://img13.360buyimg.com/uba/jfs/t1/29316/38/1115/3203/5c0f3d61E35d0c7da/9e557f2cb5c9dab6.jpg",
          activeIcon:
            "http://img20.360buyimg.com/uba/jfs/t1/9996/36/8646/4833/5c0f3d61E7c1b7e0f/c98ad61124172e93.jpg",
          href: "/"
        },
        {
          tabTitle: "全部分类",
          curr: true,
          icon:
            "http://img12.360buyimg.com/uba/jfs/t1/25443/23/1062/4600/5c0f3d61E2e9f1360/c9b3421fe18614e2.jpg",
          activeIcon:
            "http://img20.360buyimg.com/uba/jfs/t1/19241/12/1048/8309/5c0f3d61E17ed5a56/c3af0964cade47f8.jpg",
          href: "allCategories"
        },
        {
          tabTitle: "分销中心",
          curr: false,
          icon:
            "http://img13.360buyimg.com/uba/jfs/t1/10361/35/4713/4643/5c0f3d62E437a3c94/273fd0fb90798f03.jpg",
          activeIcon:
            "http://img14.360buyimg.com/uba/jfs/t1/26604/35/1073/7896/5c0f3d61Eb9f5f184/5f01c938abe4216d.jpg",
          href: "distribution"
        },
        {
          tabTitle: "购物车",
          curr: false,
          num: 2,
          icon:
            "http://img11.360buyimg.com/uba/jfs/t1/14848/18/1066/3723/5c0f41bdE9f2a38fe/e6ed6768717297fb.jpg",
          activeIcon:
            "http://img30.360buyimg.com/uba/jfs/t1/17538/16/1070/6214/5c0f41bdE4bc9a1db/74cf978e5015454b.jpg",
          href: "cart"
        },
        {
          tabTitle: "会员中心",
          curr: false,
          icon:
            "http://img20.360buyimg.com/uba/jfs/t1/20004/20/1045/3620/5c0f3d61Eaaec1670/9e59db63983b7b9f.jpg",
          activeIcon:
            "http://img14.360buyimg.com/uba/jfs/t1/23967/14/1072/6714/5c0f3d61E0ad8991e/8f741953f6e38f15.jpg",
          href: "about"
        }
      ],
      positionNavCurr: "top",
      editableTabs: [
        {
          tabTitle: "衣物",
          tabUrl:
            "http://img13.360buyimg.com/uba/jfs/t27280/289/2061314663/2392/872e32ff/5bf76318Ndc80c1d8.jpg",
          content: "<p>衣物内容</p>"
        },
        {
          tabTitle: "日用品",
          tabUrl:
            "http://img13.360buyimg.com/uba/jfs/t30331/209/562746340/2190/6619973d/5bf763aaN6ff02099.jpg",
          content: "<p>日用品内容</p>"
        },
        {
          tabTitle: "器材",
          tabUrl:
            "http://img20.360buyimg.com/uba/jfs/t30346/262/553689202/2257/5dfa3983/5bf76407N72deabf4.jpg",
          content: "<p>运动器材内容</p>"
        },
        {
          tabTitle: "电影票",
          tabUrl:
            "http://img10.360buyimg.com/uba/jfs/t26779/215/2118525153/2413/470d1613/5bf767b2N075957b7.jpg",
          content: "<p>电影票内容</p>"
        },
        {
          tabTitle: "电影票",
          tabUrl:
            "http://img10.360buyimg.com/uba/jfs/t26779/215/2118525153/2413/470d1613/5bf767b2N075957b7.jpg",
          content: "<p>电影票内容</p>"
        },
        {
          tabTitle: "电影票",
          tabUrl:
            "http://img10.360buyimg.com/uba/jfs/t26779/215/2118525153/2413/470d1613/5bf767b2N075957b7.jpg",
          content: "<p>电影票内容</p>"
        },
        {
          tabTitle: "电影票",
          tabUrl:
            "http://img10.360buyimg.com/uba/jfs/t26779/215/2118525153/2413/470d1613/5bf767b2N075957b7.jpg",
          content: "<p>电影票内容</p>"
        },
        {
          tabTitle: "电影票",
          tabUrl:
            "http://img10.360buyimg.com/uba/jfs/t26779/215/2118525153/2413/470d1613/5bf767b2N075957b7.jpg",
          content: "<p>电影票内容</p>"
        },
        {
          tabTitle: "电影票",
          tabUrl:
            "http://img10.360buyimg.com/uba/jfs/t26779/215/2118525153/2413/470d1613/5bf767b2N075957b7.jpg",
          content: "<p>电影票内容</p>"
        },
        {
          tabTitle: "电影票",
          tabUrl:
            "http://img10.360buyimg.com/uba/jfs/t26779/215/2118525153/2413/470d1613/5bf767b2N075957b7.jpg",
          content: "<p>电影票内容</p>"
        },
        {
          tabTitle: "电影票",
          tabUrl:
            "http://img10.360buyimg.com/uba/jfs/t26779/215/2118525153/2413/470d1613/5bf767b2N075957b7.jpg",
          content: "<p>电影票内容</p>"
        }
      ],
      contentHeight: 0
    };
  },
  components: {},
  mounted() {
    this.iFrameHeight();
    window.onresize = () => {
      this.iFrameHeight();
    };
  },
  methods: {
    iFrameHeight() {
      const deviceHeight = document.body.clientHeight;
      console.log(document.body.clientHeight);
      this.contentHeight = Number(deviceHeight) - 108;
      console.log(this.contentHeight);
    },
    tabSwitch3(value, index) {
      console.log(index);
    },
    tabSwitch(index, event) {
      console.log(index + "--" + event);
    },
    back() {
      alert("header头部， 点击返回");
    },
    search() {
      alert("header头部， 点击title");
    },
    more() {
      alert("header头部， 点击更多");
    }
  }
};
</script>
<style lang="scss">
.home .nut-tab {
  padding: 0;
}
</style>
