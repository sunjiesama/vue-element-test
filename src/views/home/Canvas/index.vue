<template>
  <div>
    <canvas
      id="myCanvas"
      width="200"
      height="100"
      style="border:1px solid #c3c3c3;"
    >
    </canvas>
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
  }
};
</script>

<style></style>
