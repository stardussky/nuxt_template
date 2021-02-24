import detectDevice from './detectDevice'
import mobileInnerHeight from './mobileInnerHeight'

export default (context, inject) => {
    inject('detectDevice', detectDevice)
    inject('innerHeight', mobileInnerHeight)
}
