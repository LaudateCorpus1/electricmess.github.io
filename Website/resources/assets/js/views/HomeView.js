import App from '../App';
import debounce from 'lodash.debounce';
import $ from 'jquery';
import 'jquery-validation';
import 'waypoints/lib/jquery.waypoints.min.js';

export default class HomeView {
    /**
     * Creates an instance of HomeView.
     *
     * @param {App} app
     * @memberof HomeView
     */
    constructor(app) {
        this.app = app;
    }

    //----------------------------------------------------------------------
    // Lifecycle
    //----------------------------------------------------------------------

    init() {
        this.addListeners();


        // var waypoint = new Waypoint({
        //     element: document.getElementById('headerWaypoint'),
        //     handler: function(direction) {
        //         var bannerVideoOverlay = document.getElementById('bannerVideoOverlay');
        //         var bannerLogoH = document.getElementById('bannerLogoH');
        //         if (direction == 'down') {
        //             bannerVideoOverlay.classList.add('active');
        //             bannerLogoH.classList.add('active');
        //         } else if (direction == 'up') {
        //             bannerVideoOverlay.classList.remove('active');
        //             bannerLogoH.classList.remove('active');
        //         }
        //     }
        // });
    }

    //----------------------------------------------------------------------
    // Events
    //----------------------------------------------------------------------

    addListeners() {

    }

    //----------------------------------------------------------------------
    // Event Handlers
    //----------------------------------------------------------------------


}
