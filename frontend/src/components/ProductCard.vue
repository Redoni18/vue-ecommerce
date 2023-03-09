<template>
  <div class="item">

        <img class="img-responsive" :src="!product.imageUrl.includes('http') ? 'https://www.bootdey.com/image/200x200/5F9EA0/000000' : product.imageUrl" alt="">

        <div class="item-dtls">

        <h5><a class="item-name" href="#">sfksjdfjsdlkfjslkjdflkjsfkdj</a></h5>

        <span class="price lblue">{{product.productPrice}}&euro;</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            required: true
        }
    }

}
</script>

<style scoped>


.bg-lblue {
  background-color: #32c8de !important;
}
.bg-blue {
  background-color: #609cec !important;
}

/* Button classes */
.btn {
    border-radius: 2px;
	position: relative;
}


.item {
	position: relative;
	max-width: 360px;
	margin: 15px auto;
	padding: 5px;
	text-align: center;
	border-radius: 4px;
	overflow: hidden;
	border:2px solid #eee;
}
.item img {
	width: 100%;
	max-width: 360px;
	margin: 0 auto;
	border: 1px solid #eee;
	border-radius: 3px;
    height: 200px;
}

.item  .item-dtls h5 {
	margin-top: 13px;
	margin-bottom: 10px;
}

.item  .item-dtls .price {
	display: block;
	margin-bottom: 13px;
	font-size: 15px;
}

.item-name {
    text-decoration: none;
    color: #666666;
    margin-top: 10px;

    max-width: 300px;
    overflow: hidden;
    white-space: nowrap; /* Don't forget this one */
    text-overflow: ellipsis;
}

.item {
	-webkit-transition: all 0.15s ease-in;
	-moz-transition: all 0.15s ease-in;
	-ms-transition: all 0.15s ease-in;
	-o-transition: all 0.15s ease-in;
	transition: all 0.15s ease-in;
}
.item a.btn:hover{
	background:#fff;
	color:#777;
}                         

</style>