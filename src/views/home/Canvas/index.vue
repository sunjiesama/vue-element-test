<template>
  <div>
    <canvas
      id="myCanvas"
      width="200"
      height="100"
      style="border:1px solid #c3c3c3;"
    >
    </canvas>
    <div id="Box"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    let c = document.getElementById("myCanvas");
    let ctx = c.getContext("2d");
    /* ctx.fillStyle = "#FF5000";
    ctx.fillRect(10, 10, 150, 75); */
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();

    var winWidth =
      document.body.clientWidth || document.documentElement.clientWidth;
    let box = document.getElementById("Box");
    box.style.width = winWidth * 0.8 + "px";
    box.style.height = winWidth * 0.5 + "px";
  }
};
</script>

<style>
#Box {
  background: rgb(151, 197, 241);
}
</style>
