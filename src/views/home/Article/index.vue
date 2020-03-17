<template>
  <transition name="el-fade-in-linear">
    <div class="box" v-if="show">
      <br />
      <br />
      <br />
      <br />
      <h1 style="font-size: 40px;">如果那一天可以到来</h1>
      <br />
      <br />
      <br />
      <br />
      <p>我不记得了，</p>
      <p>那一天，是怎样的一天。</p>
      <p>我只是依稀觉得，</p>
      <p>那必会是最美好的一天。</p>
      <p>//</p>
      <p>那是岁月长河中的某一天，却是生命旅途中的那一天。</p>
      <p>那是无数时光编织出的一天，是无数机遇交织的一天。</p>
      <p>那一天，许多熟悉或陌生的事将会发生；</p>
      <p>那一天，一个相识或邂逅的人将会出现；</p>
      <p>那一天，我与我的故事，必将重新开始......</p>
      <p>//</p>
      <p>也许，这只是一个梦，</p>
      <p>一个美好的梦，一个似曾相识的梦。</p>
      <p>毕竟，我总是从中醒来，</p>
      <p>在温暖的午后，在阳光洒落的时候。</p>
      <p>但是，我依旧相信，</p>
      <p>这缥缈的故事，这美好的一切。</p>
      <p>//</p>
      <p>如果说，那一天可以到来，</p>
      <p>那我必定会向上苍请愿，</p>
      <p>请让这一切，</p>
      <p>都显得此般真实，显得此般珍贵。</p>
      <p>因为，</p>
      <p>这一切，</p>
      <p>都是充斥着泪水与希望的美丽的梦。</p>
      <p>-请将过去与未来，致给现在的自已</p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      show: false
    };
  },
  created() {
    setTimeout(() => {
      this.show = true;
    }, 500);
  }
};
</script>
<style lang="stylus" scoped>
.box {
 box-sizing: border-box;
  width: 100%;
  background: #ffffff;
  padding-left: 100px;
  left: 0px;
  top: 0px;
  margin: auto;
}
</style>
