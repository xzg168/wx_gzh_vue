<template>
  <div class="home">
    <nut-navbar @on-click-back="back" title="首页" :rightShow="false">
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
    <footer class="footerFixed">
      <nut-buttongroup type="menu">
        <nut-button type="light" icon="action" color="#f00">
          首页
        </nut-button>
        <nut-button type="light" icon="more" color="#f00">
          全部分类
        </nut-button>
        <nut-button type="light" icon="search" color="#f00">
          分销中心
        </nut-button>
        <nut-badge value="2" top="0.5rem" right="2rem">
          <nut-button type="light" icon="trolley" color="#f00">
            购物车
          </nut-button>
        </nut-badge>
        <nut-button type="light" icon="search" color="#f00">
          会员中心
        </nut-button>
      </nut-buttongroup>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
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
      this.contentHeight = Number(deviceHeight) - 110;
      console.log(this.contentHeight);
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
.footerFixed {
  position: fixed;
  width: 100%;
  bottom: 0;
}
.menu {
  .nut-button {
    position: relative;
    height: $btn-menu-height;
    width: 100%;
    padding: 0;
    font-size: $btn-icon-height-small;
  }
  .txt-icon {
    display: block;
    margin: 0 auto !important;
    width: $btn-menu-icon-height !important;
    height: $btn-menu-icon-height !important;
  }
  .nut-badge {
    flex: 1;
    -webkit-flex: 1;
  }
}
</style>
