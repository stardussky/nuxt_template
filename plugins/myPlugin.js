export default (context, inject) => {
    inject('sayName', (name) => {
        console.log(`Hello ~ ${name}`)
    })
}
