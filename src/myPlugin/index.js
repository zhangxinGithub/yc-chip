import cropper from './cropper/index.js';
const components = [
	cropper
]
const install = function(Vue, opts = {}) {
	components.forEach(component => {
	    Vue.component(component.name, component);
    });
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
 
export default {
	install,
	cropper
}