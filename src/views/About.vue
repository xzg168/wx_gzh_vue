<template>
  <div class="about">
    <nut-progress percentage="30"></nut-progress>
    <nut-leftslip ref="demo1">
      <div slot="slip-main" class="slip-main">向左滑动我</div>
      <div slot="slipbtns" class="slipbtns">
        <a href="javascript:;" @click="delSlipItem">删除</a
        ><a href="javascript:;" class="favorite">收藏</a>
      </div>
    </nut-leftslip>
  </div>
</template>
