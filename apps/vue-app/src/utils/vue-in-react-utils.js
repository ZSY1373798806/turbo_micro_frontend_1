import Vue from "vue";

export default (compName, targetEl, attrs) => {
	new Vue({
		router: null,
		store: null,
		render: (h) => h(compName, attrs),
		computed: {},
	}).$mount(targetEl);
};
