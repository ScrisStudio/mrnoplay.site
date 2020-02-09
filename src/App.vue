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
        <div class="nametop">不玩家</div>
        <div>Mr Noplay</div>
      </div>
      <div class="story">你一定有过这样的经历：</div>
      <div class="story">想着我只玩5分钟</div>
      <div class="story">结果那个想法成了被浪费的下午的开端</div>
      <div class="so">
        你需要
        <span class="name-small">Mr Noplay</span>,
        <span class="slogan">让时间可控</span>。
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
    },
  },
  data() {
    return {
      lang: 'cn',
    };
  },
  mounted: () => {
    
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
    }
  }
}
</script>