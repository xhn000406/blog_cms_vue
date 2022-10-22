<template>
  <div>
    <div id="home_info">
      <div class="author">
        <img :src="userDetailsData.avatar" alt="" />
      </div>

      <div class="title">
        <div>{{ userDetailsData.nickname }}</div>
        <div>{{ userDetailsData.introduction }}</div>
      </div>
      <div class="articleBox">
        <template v-for="(item, index) in userCountDetailsData" :key="item.key">
          <template v-if="index < 3">
            <div class="artileCount">
              <span class="count">{{ item.name }}</span>
              <span class="title">{{ item.value }}</span>
            </div>
          </template>
        </template>
      </div>
      <div class="linkClass">
        <a href="https://github.com/xhn000406" title="gitHub">git</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { getHomePageData, getUserInfoData } from '../../../../request/auth'
import { localUtil } from '../../../../utils/localUtil'

const userDetailsData = ref([])
const userCountDetailsData = ref([])
const defaultAvatar = ref()

const article = ref([
  {
    count: '5',
    title: '文章数'
  },
  {
    count: '5',
    title: '文章数'
  },
  {
    count: '5',
    title: '文章数'
  }
])

const iid = localUtil.setLocal('id')
onMounted(async () => {
  await initData()
  console.log(userCountDetailsData.value)
})

const initData = async () => {
  const {
    data: { result: res }
  } = await getUserInfoData(iid)
  userDetailsData.value = res[0]

  if (userDetailsData.value.avatar == '') {
    defaultAvatar.value =
      'https://avatars.githubusercontent.com/u/103575415?v=4'
  }

  const { data: result } = await getHomePageData()
  userCountDetailsData.value = result
}
</script>

<style lang="less" scoped>
#home_info {
  width: 300px;
  height: 300px;
  margin-left: 10px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.author img {
  width: 140px;
  height: 140px;
  background-color: pink;
  border-radius: 50%;
}
.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: #606266;
  font-size: 14px;
  margin-top: 8px;
}
.artileCount {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100px;
  margin-bottom: 30px;
  .count {
    margin-bottom: 4px;
    font-size: 20px;
  }
}
.title :first-child {
  margin-bottom: 10px;
}
.articleBox {
  padding-top: 20px;
  width: 90%;
  height: 80px;
  display: flex;
  border-bottom: 1px inset #303133;
}
.artileCount:last-child::after {
  content: '';
  display: none;
}
.artileCount::after {
  position: absolute;
  top: 10px;
  right: 0;
  content: '';
  width: 1px;
  height: 30px;
  background: #303133;
}
.linkClass {
  margin: 10px 0px 10px 0px;
}
</style>
