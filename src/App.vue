<i18n src="./assets/lang.json"></i18n>
<template>
  <div id="app" class="container">
    <div id="main">
      <div class="digitalboard border">
        <div class="juniordigitalboard on">
          <div class="digitaltop">{{ $t("iwillplay") }}</div>
          <div class="digitalfather">
            <span class="digital">5</span>
            <span class="digital digitalnote">:00</span>
          </div>
        </div>
      </div>
      <br />
      <button class="btn new on largebtn btn-light">
        <div class="largebtn-innertext">{{ $t("start") }}</div>
      </button>
      <div class="titlepart">
        <div class="title new left">{{ $t("mrnoplay") }}</div>
        <div class="titlebtns">
          <button class="new about"></button>
          <button class="new settings"></button>
          <button class="new exit"></button>
        </div>
      </div>
    </div>
    <div id="right">
      <div class="name">
        <div class="nametop" v-if="lang == 'cn'">不玩家</div>
        <div>Mr Noplay</div>
      </div>
      <div class="story">{{ $t("story.1") }}</div>
      <div class="story">{{ $t("story.2") }}</div>
      <div class="story">{{ $t("story.3") }}</div>
      <div class="so">
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
  <!-- 
        qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890`-=[]\;',./~_+{}|:"<>?·-=【】、；‘，。/～——+「」｜：“《》？不玩家你一定有过这样的经历想着我只玩分钟结果那个想法成了被浪费的下午的开端
你需要让时间可控中文下载
  -->
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import './assets/css.css'
export default {
  name: 'App',
  components: {
    //HelloWorld
  },
  watch: {
    async lang (val) {
      this.$i18n.locale = val;
      localStorage.setItem("lang", val);
    },
  },
  data() {
    return {
      lang: '',
    };
  },
  mounted: function() {
    if(localStorage.getItem("lang") == 'cn' || localStorage.getItem("lang") == 'en') {
      this.lang = localStorage.getItem("lang");
    } else {
      this.lang = 'cn';
    }
  },
  methods: {
    web() {
      window.open("https://github.com/scris/mrnoplay/releases/", "_blank"); 
    },
    win() {
      window.open("https://github.com/scris/mrnoplay/releases/", "_blank"); 
    },
    mac() {
      window.open("https://webmrnoplay.scris.top/", "_blank"); 
    },
    cn() {
      this.lang = 'cn';
    },
    en() {
      this.lang = 'en';
    },
    mysite() {
      window.open("https://ds.scris.top", "_blank"); 
    },
    mygithub() {
      window.open("https://github.com/scris/", "_blank"); 
    }
  }
}
</script>