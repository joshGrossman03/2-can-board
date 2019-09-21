<template>
    <header class="header">
         <img src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.imgur.com%2FLEB5cg0.png"  width="400" height="80">
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>

img{
    width: auto;
    height: auto;
    max-height:40px;
    position: center;
    vertical-align: center;
    padding-bottom:5px;

}
.header{
    background: whitesmoke;
    color:#fff;
    text-align: center;
    padding: 10px;
    height: 50px;
}
.header a {
    color: #fff;
    padding-right: 5px;
}
</style>