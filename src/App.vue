<i18n src="./assets/lang.json"></i18n>
<template>
  <div id="app" class="container">
    <div id="leftpart">
      <div id="leftimgs">
        <img class="leftimg" src="@/assets/surface1.jpg" width="100%" v-if="ss_display == 1" />
        <img class="leftimg" src="@/assets/surface2.jpg" width="100%" v-if="ss_display == 2" />
        <img class="leftimg" src="@/assets/surface3.jpg" width="100%" v-if="ss_display == 3" />
        <img class="leftimg" src="@/assets/surface4.jpg" width="100%" v-if="ss_display == 4" />
      </div>
    </div>
    <div id="rightpart">
      <div id="right">
        <div class="name">
          <div class="nametop" v-if="lang == 'cn'">不玩家</div>
          <div>Mr Noplay</div>
        </div>
        <div class="story" v-if="!display456">{{ $t("story.1") }}</div>
        <div class="story" v-if="!display456">{{ $t("story.2") }}</div>
        <div class="story" v-if="!display456">{{ $t("story.3") }}</div>
        <div class="story" v-if="display456">{{ $t("story.4") }}</div>
        <div class="story" v-if="display456">{{ $t("story.5") }}</div>
        <div class="so" v-if="display456">
          {{ $t('youneed') }}
          <span class="name-small">Mr Noplay</span>,
          <span class="slogan">{{ $t('incontrol') }}</span>
        </div>
        <div class="link">
          <button class="btn new on-btn btn-light linkchild" @click="win">
            <div class="largebtn-innertext windows"></div>
          </button>
          <button class="btn new on-btn btn-light linkchild" @click="mac">
            <div class="largebtn-innertext mac"></div>
          </button>
          <button class="btn new on-btn btn-light linkchild" @click="web">
            <div class="largebtn-innertext web"></div>
          </button>
        </div>
        <div class="lang">
          <div class="langchilds">
            <button class="langchild" @click="cn">中文</button>&nbsp;
            <button class="langchild" @click="en">English</button>
          </div>
        </div>
        <div class="author">
          <div class="authorname authorchild">Tianze Ds Qiu</div>
          <button class="langchild authorchild" @click="mysite">
            <div class="authoricon web-grey"></div>
          </button>
          <button class="langchild authorchild" @click="mygithub">
            <div class="authoricon github-grey"></div>
          </button>
        </div>
      </div>
    </div>
    <div>
      <div id="preload-01"></div>
      <div id="preload-02"></div>
      <div id="preload-03"></div>
      <div id="preload-04"></div>
      <div id="preload-05"></div>
    </div>
  </div>
  <!-- 
        qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890`-=[]\;',./~_+{}|:"<>?·-=【】、；‘，。/～——+「」｜：“《》？不玩家你一定有过这样的经历想着我只玩分钟结果那个想法成了被浪费的下午的开端
你需要让时间可控中文下载足够好效率工具专心工作但没保证因度娱乐使计划破产
  -->
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import "./assets/css.css";
export default {
  name: "App",
  components: {
    //HelloWorld
  },
  watch: {
    async lang(val) {
      this.$i18n.locale = val;
      localStorage.setItem("lang", val);
    }
  },
  data() {
    return {
      lang: "",
      display456: true,
      ss_display: 1
    };
  },
  mounted: function() {
    if (
      localStorage.getItem("lang") == "cn" ||
      localStorage.getItem("lang") == "en"
    ) {
      this.lang = localStorage.getItem("lang");
    } else {
      this.lang = "cn";
    }
    setInterval(this.display456change, 5000);
    setInterval(this.ss_displaychange, 5000);
  },
  methods: {
    mac() {
      window.open("https://github.com/scris/mrnoplay/releases/", "_blank");
    },
    win() {
      window.open("https://github.com/scris/mrnoplay/releases/", "_blank");
    },
    web() {
      window.open("https://webmrnoplay.scris.top/", "_blank");
    },
    cn() {
      this.lang = "cn";
    },
    en() {
      this.lang = "en";
    },
    mysite() {
      window.open("https://ds.scris.top", "_blank");
    },
    mygithub() {
      window.open("https://github.com/scris/", "_blank");
    },
    display456change() {
      this.display456 = !this.display456;
    },
    ss_displaychange() {
      if (this.ss_display == 4) this.ss_display = 1;
      else this.ss_display++;
    }
  }
};
</script>