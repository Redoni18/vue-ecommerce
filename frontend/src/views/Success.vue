<template>
  <section class="mail-seccess section">
	<div class="container">
		<div class="row">
			<div class="col-lg-6 offset-lg-3 col-12">
				<!-- Error Inner -->
				<div class="success-inner">
					<h1><i class="fa-regular fa-circle-check"></i><span>Payment Completed Successfully!</span></h1>
					<p>Your product will be ready for delivery right after the order is verified!</p>
					<a href="#" class="btn btn-lg redirect-button">Go Home</a>
				</div>
				<!--/ End Error Inner -->
			</div>
		</div>
	</div>
</section>
</template>

<script>
import {getPendingOrders, removePendingOrder} from '@/eCommerce-sdk/pendingOrders.js'
import {insertOrder} from '@/eCommerce-sdk/orders.js'
export default {
    data() {
        return {
            lastPendingOrder: null
        }
    },
    async mounted() {
        const response = await getPendingOrders()
        if(response.data.length > 1) {
            this.lastPendingOrder = response.data[response.data.length - 1]
            console.log(this.lastPendingOrder)
        } else {
            this.lastPendingOrder = response.data[0]
        }
        
        this.saveOrder()
    },
    methods: {
        async saveOrder() {
            await insertOrder(this.lastPendingOrder)

            this.deletePendingOrder()
        },
        async deletePendingOrder() {
            console.log(this.lastPendingOrder._id)
            await removePendingOrder(this.lastPendingOrder._id)
        }
    }

}
</script>

<style scoped>

.mail-seccess {
    text-align: center;
	background: #fff;
	border-top: 1px solid #eee;
    height: 100%;
    padding: 5%;
}
.mail-seccess .success-inner {
	display: inline-block;
}
.mail-seccess .success-inner h1 {
	font-size: 100px;
	text-shadow: 3px 5px 2px #3333;
	color: crimson;
	font-weight: 700;
}
.mail-seccess .success-inner h1 span {
	display: block;
	font-size: 25px;
	color: #333;
	font-weight: 600;
	text-shadow: none;
	margin-top: 20px;
}
.mail-seccess .success-inner p {
	padding: 20px 15px;
}
.mail-seccess .success-inner .btn{
	color:#fff;
}

.redirect-button{
    color: white;
    background: crimson;
}
</style>