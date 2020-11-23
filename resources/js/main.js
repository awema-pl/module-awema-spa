import { name, version } from '../../package.json'
import { Spa } from './modules/spa'

const awemaPlugin = {

    name, version,

    install(AWEMA) {
        AWEMA.Spa = new Spa() 
    }
}

if (window && ('AWEMA' in window)) {
    AWEMA.use(awemaPlugin)
} else {
    let s = '__awema_plugins_stack__'
    window[s] = window[s] || []
    window[s].push(awemaPlugin)
}