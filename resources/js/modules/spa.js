import { isSpaTarget, isKeyPressed } from './helpers'
import { PageLoader } from './page-loader'


export class Spa {

    constructor() {

        this.pageLoader = new PageLoader()

        this._current = location.pathname
        this.setLinksClasses()

        // add listeners
        document.addEventListener('click', this.routeNavigation.bind(this), false)
        window.addEventListener('popstate', this.historyNavigation.bind(this), false)
    }


    /**
     * Click handler - checks a click on document to match an interanl link
     * to navigate like SPA
     * 
     * @param  {HTMLClickEvent} event - click event
     * 
     * @return {undefined}
     */
    routeNavigation(event) {

        let link = event.target

        link = link.tagName === 'A' ? link : link.closest('a')

        if ( ! ( link &&  isSpaTarget(link) && ! isKeyPressed(event) ) ) {
            return
        }

        event.preventDefault()

        // do nothing on current page
        if ( this._current === link.pathname ) {
            return
        }
        
        window.history.pushState(null, document.title, link.href)
        AWEMA._vueRouter && AWEMA._vueRouter.replace({path: link.pathname})

        this.pageLoader.load(link.href)
            .then( () => {
                this._current = location.pathname
                this.setLinksClasses()
                AWEMA.emit('core:popstate', this._current)
            })
            .catch( this.showError )
    }


    historyNavigation(event) {

        let loc = window.location

        if ( loc.pathname !== this._current ) {
            this._current = loc.pathname
            this.pageLoader.load(loc.origin + loc.pathname)
                .then( () => this.setLinksClasses() )
                .catch( this.showError )
        }
    }

    showError(error) {
        if ( error.message ) {
            AWEMA.notify({ status: 'error', message: error.message })
        }
    }

    setLinksClasses() {

        let links = document.querySelectorAll('a')

        for( let i = 0; i < links.length; i++ ) {

            let link = links[i]

            if ( ! isSpaTarget(link) ) continue

            link.classList.remove('is-active')

            if ( link.pathname === this._current ) {
                link.classList.add('is-active')
            }
        }
    }
}