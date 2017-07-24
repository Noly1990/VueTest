Vue.component("todo-item", {
	template: '\
    <li>\{{ title }}\<button @click="$emit(\'remove\')">delete</button>\
    </li>\
  ',
	props: ['title']
});

Vue.component("yj-img", {
	template: '\
    <img v-bind:src="address" alt="try img cpnt" title="img title">\
    </img>\
  ',
	props: ['address']
});

new Vue({
	el: '#todoList',
	data: {
		newText: '',
		address: 'img/111.png',
		todos: ['aaa', 'bbb', 'ccc']
	},
	methods: {
		addNewItem: function() {
			this.todos.push(this.newText);
			this.newText = '';
		},
		removeItem: function(index) {
			this.todos.splice(index, 1);
			console.log(this.todos);
		}
	}
});

new Vue({
	el: "#eltest",
	data: {
		vdata: 22
	},
	template: "<li @click='todoSth'>{{vdata}}</li>",
	methods: {
		todoSth: function() {
            this.vdata++;
			this.$http.get('./111.txt').then(function(res) {
				console.log(res.body);
			}, function(error) {
				console.log(error.type);
			});
		}
	}
});

//test vue-resource 功能

// Vue.http.options.headers = { "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V", "Accept": "application/json", "Content-type": "application/x-www-form-urlencoded" };
// Vue.http.post("https://andruxnet-random-famous-quotes.p.mashape.com/cat=", { "fname": "Yan", "lname": "Jun" }, { emulateJSON: true }).then(
//     function(res) {
//         console.log('success');
//         console.log(res.body);
//     },
//     function() {
//         console.log('error');
//     });

//import myCpnt from './myCpnt.vue'

//test vue-router
const aaa = {
	template: '<p>I am aaa component</p>'
};
const bbb = {
	template: '<div>I am bbb component</div>'
};

const routes = [{
	path: '/aaa',
	component: aaa

}, {
	path: '/bbb',
	component: bbb
}];

const router = new VueRouter({
	routes
});

const routertest = new Vue({
	router
}).$mount("#routertest");