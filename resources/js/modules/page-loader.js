import CONFIG from '../config'
import axios from 'axios/dist/axios.min.js'

export class PageLoader {

    constructor() {

        const _get = AWEMA.utils.object.get

        this._parser = new DOMParser()
        this._loader = axios.create({
            headers: {
                'Content-Type': 'text/html'
            },
            timeout: _get(AWEMA._config, 'spa.timeout'),
            onDownloadProgress: this.onProgress.bind(this)
        })

        this._tick = 100 // fake interval tick

        let loading = _get(AWEMA._config, 'spa.loading')
        this._loading = loading || CONFIG.timeout // fake loading time

        return this
    }


    load(href) {

        this._insertProgressBar()

        return this._loader.get(href)
            .then( res => {
                this._html = res.data
                this._doc = this._getDoc()
                this._replaceContentOrRedirect(href)
                this._updateMeta()
                this._deleteProgressBar()
                delete this._html
                delete this._doc
            })
            .catch( err => {
                this._deleteProgressBar()
                throw err
            })
    }


    onProgress(event) {
        if ( event.total < event.loaded ) return
        let percent = (event.loaded / event.total).toFixed(2)
        this._updateProgressBar(percent)
    }


    fakeProgress() {
        let now = new Date().getTime()
        let percent = (now - this._started) / this._loading
        this._updateProgressBar(percent)
    }

    _getDoc() {

        try {
            return this._html && this._parser.parseFromString(this._html, 'text/html')
        } catch(e) {
            return false
        }
    }


    _insertProgressBar() {
        let progress = document.createElement('DIV')
        progress.className = 'awema-spa-progress'
        progress.style.transform = 'scaleX(0)'

        let first = document.body.firstChild

        if ( first ) {
            document.body.insertBefore(progress, first)
        } else {
            document.body.appendChild(progress)
        }

        this._percent = 0
        this._progress = progress
        this._started = new Date().getTime()
        this._interval = setInterval(this.fakeProgress.bind(this), this._tick)
    }


    _deleteProgressBar() {

        clearInterval( this._interval )

        let parent = this._progress.parentElement

        // check if progress bar is not replaced with body.innerHTML
        if ( parent ) {

            // fill
            this._progress.style.transform = 'scaleX(1)'

            // remove
            setTimeout( () => {
                parent.removeChild(this._progress)
                delete this._progress
            }, this._tick)
        } else {
            delete this._progress
        }

        delete this._percent
        delete this._interval
        delete this._started
    }


    _updateProgressBar(percent) {
        if ( percent > this._percent && percent < 1 ) {
            this._percent = percent
            this._progress.style.transform = 'scaleX(' + percent + ')'
        }
    }


    _replaceContentOrRedirect(href) {

        if ( ! this._doc ) return

        let layout = document.body.getAttribute('data-awema-spa-layout')
        let nextLayout = this._doc.body.getAttribute('data-awema-spa-layout')

        if ( layout && nextLayout && (layout === nextLayout) ) {

            let container = document.body.querySelector('[data-awema-spa-container]')
            let nextContainer = this._doc.body.querySelector('[data-awema-spa-container]')

            if ( container && nextContainer) {
                // replace only container
                container.innerHTML = nextContainer.innerHTML
            } else {
                // replace whole body
                document.body.innerHTML = this._doc.body.innerHTML
            }

            container = null
            nextContainer = null
            layout = null
            nextLayout = null

        } else {

            // redirect
            window.location.href = href

            // TODO: after diffing maybe...
        }
    }


    _updateMeta() {

        if ( ! this._doc ) return

        document.title = this._doc.title

        AWEMA.utils.setMeta('description', AWEMA.utils.getMeta('description', null, this._doc) )
    }
}
