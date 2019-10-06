//----------------------------------------------------------------------
// Dependencies
//----------------------------------------------------------------------

import HomeView from './views/HomeView';

const ViewNames = {
    None: '',
    Home: 'home'
};

/**
 *
 *
 * @export
 * @class App
 */
export default class App {
    //----------------------------------------------------------------------
    // Accessors
    //----------------------------------------------------------------------

    //----------------------------------------------------------------------
    // Init
    //----------------------------------------------------------------------

    /**
     * Creates an instance of App.
     * @param {any} viewName
     * @memberof App
     */
    constructor(viewName , currentLang) {
        this._viewName = viewName;
        this._currentLang = currentLang;
        this._viewInstance = null;

        this.init();

        this.addListeners();
    }

    //----------------------------------------------------------------------
    // Lifecycle
    //----------------------------------------------------------------------

    init() {
        // Init current view based on 'data-view' string in html <body> tag
        this._viewInstance;

        switch (this._viewName) {
            case ViewNames.None:
                this._viewInstance = null;
                break;

            case ViewNames.Home:
                this._viewInstance = new HomeView(this);
                break;

            default:
                if (process.env.NODE_ENV === 'development') {
                    console.warn('[App] Invalid view name received:', this._viewName);
                }
                break;
        }

        if (this._viewInstance) {
            this._viewInstance.init();
        }

        //this.isMobile = this.isJs.desktop();
    }

    //----------------------------------------------------------------------
    // Events
    //----------------------------------------------------------------------

    addListeners() {
        const openCardHandler = document.querySelector('.js-openCard');
        const closeCardHandler = document.querySelector('.js-closeCard');

        openCardHandler.addEventListener('click', this.openCard.bind(this));
        closeCardHandler.addEventListener('click', this.closeCard.bind(this));
    }

    //----------------------------------------------------------------------
    // Handler events
    //----------------------------------------------------------------------
    closeCard(){
        const pogoCard = document.querySelector('.pogo__wrapper');
        pogoCard.classList.remove('active');
    }

    openCard(){
        const pogoCard = document.querySelector('.pogo__wrapper');
        pogoCard.classList.add('active');
    }
}
