<template>
    <div class="shopcar">
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/MSite">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/Search">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
			<router-link class="mui-tab-item" to="/Order">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">订单</span>
			</router-link>
			<router-link class="mui-tab-item" to="/Profile">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">个人</span>
			</router-link>
		</nav>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>

</style>
