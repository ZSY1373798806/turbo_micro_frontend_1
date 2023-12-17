import Vue from "vue";

const mountComponentMain = (compName, targetEl, attrs) => {
	new Vue({
		router: null,
		store: null,
		render: (h) => h(compName, attrs),
		computed: {},
	}).$mount(targetEl);
};

export default {
	mountComponentMain,
};
