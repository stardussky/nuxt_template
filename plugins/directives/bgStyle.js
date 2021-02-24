export default function (Vue, options) {
    Vue.directive('bg', function (el, binding) {
        el.style.background = `url('${binding.value}') no-repeat center / cover`
    })
}
