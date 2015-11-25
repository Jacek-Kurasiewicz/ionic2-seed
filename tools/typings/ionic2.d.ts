/**
 * Typings for "ionic-framework": "^2.0.0-alpha.36"
 */


////<reference path="../node_modules/angular2/angular2.d.ts"/>
  
declare module 'ionic/ionic' {
    export = ionic2;
}

// import {Component, Injectable, PipeTransform, NgControl, QueryList, ElementRef, 
//     NgZone, Compiler, AppViewManager, DynamicComponentLoader, Renderer,
//     TemplateRef, ViewContainerRef} from 'angular2/angular2';

declare module ionic2 {

    // Source code:
    // components.d.ts
/*    
    export * from 'ionic/components/app/app';
    export * from 'ionic/components/app/id';
    export * from 'ionic/components/action-sheet/action-sheet';
    export * from 'ionic/components/blur/blur';
    export * from 'ionic/components/button/button';
    export * from 'ionic/components/checkbox/checkbox';
    export * from 'ionic/components/content/content';
    export * from 'ionic/components/icon/icon';
    export * from 'ionic/components/item/item';
    export * from 'ionic/components/item/item-group';
    export * from 'ionic/components/item/item-sliding';
    export * from 'ionic/components/menu/menu';
    export * from 'ionic/components/menu/menu-types';
    export * from 'ionic/components/menu/menu-toggle';
    export * from 'ionic/components/menu/menu-close';
    export * from 'ionic/components/text-input/text-input';
    export * from 'ionic/components/text-input/label';
    export * from 'ionic/components/list/list';
    // export * from 'ionic/components/show-hide-when/show-hide-when';
    // export * from 'ionic/components/modal/modal';
    export * from 'ionic/components/nav/nav';
    export * from 'ionic/components/nav/nav-controller';
    export * from 'ionic/components/nav/view-controller';
    export * from 'ionic/components/nav/nav-push';
    // export * from 'ionic/components/nav/nav-router';
    export * from 'ionic/components/navbar/navbar';
    export * from 'ionic/components/overlay/overlay';
    export * from 'ionic/components/popup/popup';
    export * from 'ionic/components/slides/slides';
    export * from 'ionic/components/radio/radio';
    export * from 'ionic/components/scroll/scroll';
    export * from 'ionic/components/scroll/pull-to-refresh';
    export * from 'ionic/components/searchbar/searchbar';
    export * from 'ionic/components/segment/segment';
    export * from 'ionic/components/switch/switch';
    export * from 'ionic/components/tabs/tabs';
    export * from 'ionic/components/tabs/tab';
    export * from 'ionic/components/tap-click/tap-click';
    export * from 'ionic/components/toolbar/toolbar';
 */
    
    // Source code:
    // util/dom.d.ts
    
    export const raf: any;
    export const rafCancel: any;
    export function rafPromise(): any;
    export function rafFrames(framesToWait: any, callback: any): void;
    export let CSS: {};
    export function transitionEnd(el: Element): any;
    export function animationStart(el: Element, animationName: any): any;
    export function animationEnd(el: Element, animationName: any): any;
    export function ready(callback: any): any;
    export function windowLoad(callback: any): any;
    export function pointerCoord(ev: any): {
        x: number;
        y: number;
    };
    export function hasPointerMoved(threshold: any, startCoord: any, endCoord: any): boolean;
    export function isActive(ele: any): boolean;
    export function hasFocus(ele: any): boolean;
    export function isTextInput(ele: any): boolean;
    export function hasFocusedTextInput(): boolean;
    export function closest(ele: any, selector: any, checkSelf: any): any;
    export function removeElement(ele: any): void;
    /**
    * Get the element offsetWidth and offsetHeight. Values are cached
    * to reduce DOM reads. Cache is cleared on a window resize.
    * @param {TODO} ele  TODO
    */
    export function getDimensions(ion: any, ele: any): any;
    export function windowDimensions(): any;
    export function flushDimensionCache(): void;
    /**
    * returns the closest, non-statically positioned parentOffset of a given element
    * @param element
    */
    export function parentOffsetEl(element: any): any;
    /**
    * Get the current coordinates of the element, relative to the offset parent.
    * Read-only equivalent of [jQuery's position function](http://api.jquery.com/position/).
    * @param {element} element The element to get the position of.
    * @returns {object} Returns an object containing the properties top, left, width and height.
    */
    export function position(element: any): {
        width: any;
        height: any;
        top: number;
        left: number;
    };
    /**
    * Get the current coordinates of the element, relative to the document.
    * Read-only equivalent of [jQuery's offset function](http://api.jquery.com/offset/).
    * @param {element} element The element to get the offset of.
    * @returns {object} Returns an object containing the properties top, left, width and height.
    */
    export function offset(element: any): {
        width: any;
        height: any;
        top: any;
        left: any;
    };
    
    // Source code:
    // util/click-block.d.ts
    
    export let ClickBlock: (shouldShow: any, expire: any) => void;
    
    // Source code:
    // animations/scroll-to.d.ts
    
    export class ScrollTo {
        constructor(ele: any, x: any, y: any, duration: any);
        start(x: any, y: any, duration: any, tolerance: any): any;
        stop(): void;
        dispose(): void;
    }
    
    // Source code:
    // components/app/app.d.ts
    
    /**
    * Component registry service.  For more information on registering
    * components see the [IdRef API reference](../id/IdRef/).
    */
    export class IonicApp {
        constructor(config: any);
        /**
        * Sets the document title.
        * @param {string} val  Value to set the document title to.
        */
        setTitle(val: any): void;
        /**
        * Sets if the app is currently enabled or not, meaning if it's
        * available to accept new user commands. For example, this is set to `false`
        * while views transition, a modal slides up, an action-sheet
        * slides up, etc. After the transition completes it is set back to `true`.
        * @param {bool} isEnabled
        * @param {bool} fallback  When `isEnabled` is set to `false`, this argument
        * is used to set the maximum number of milliseconds that app will wait until
        * it will automatically enable the app again. It's basically a fallback incase
        * something goes wrong during a transition and the app wasn't re-enabled correctly.
        */
        setEnabled(isEnabled: any, fallback?: number): void;
        /**
        * Boolean if the app is actively enabled or not.
        * @return {bool}
        */
        isEnabled(): boolean;
        setTransitioning(isTransitioning: any, fallback?: number): void;
        /**
        * Boolean if the app is actively transitioning or not.
        * @return {bool}
        */
        isTransitioning(): boolean;
        /**
        * Register a known component with a key, for easy lookups later.
        * @param {TODO} id  The id to use to register the component
        * @param {TODO} component  The component to register
        */
        register(id: any, component: any): void;
        /**
        * Unregister a known component with a key.
        * @param {TODO} id  The id to use to unregister
        */
        unregister(id: any): void;
        /**
        * Get a registered component with the given type (returns the first)
        * @param {Object} cls the type to search for
        * @return the matching component, or undefined if none was found
        */
        getRegisteredComponent(cls: any): any;
        /**
        * Get the component for the given key.
        * @param {TODO} key  TODO
        * @return {TODO} TODO
        */
        getComponent(id: any): any;
    }
    
    // Source code:
    // util/util.d.ts
    
    export function noop(): void;
    /**
    * Given a min and max, restrict the given number
    * to the range.
    * @param min the minimum
    * @param n the value
    * @param max the maximum
    */
    export function clamp(min: any, n: any, max: any): number;
    /**
    * Extend the destination with an arbitrary number of other objects.
    * @param dst the destination
    * @param ... the param objects
    */
    export function extend(dst: any): any;
    /**
    * Do a deep extend (merge).
    * @param dst the destination
    * @param ... the param objects
    */
    export function merge(dst: any): any;
    export function debounce(func: any, wait: any, immediate: any): () => any;
    /**
    * Apply default arguments if they don't exist in
    * the first object.
    * @param the destination to apply defaults to.
    */
    export function defaults(dest: any): any;
    export const isBoolean: (val: any) => boolean;
    export const isString: (val: any) => boolean;
    export const isNumber: (val: any) => boolean;
    export const isFunction: (val: any) => boolean;
    export const isDefined: (val: any) => boolean;
    export const isUndefined: (val: any) => boolean;
    export const isBlank: (val: any) => boolean;
    export const isObject: (val: any) => boolean;
    export const isArray: (arg: any) => arg is any[];
    export const isTrueProperty: (val: any) => boolean;
    /**
    * Convert a string in the format thisIsAString to a slug format this-is-a-string
    */
    export function pascalCaseToDashCase(str?: string): string;
    export function nextUid(): number;
    /**
    * A simple logger class.
    */
    export class Log {
        static log(...args: any[]): void;
        static info(...args: any[]): void;
        static warn(...args: any[]): void;
        static error(...args: any[]): void;
    }
    export const array: {
        find(arr: any, cb: any): any;
        remove(arr: any, itemOrIndex: any): boolean;
    };
    /**
    * Grab the query string param value for the given key.
    * @param key the key to look for
    */
    export function getQuerystring(url: any, key: any): any;
    /**
    * Throttle the given fun, only allowing it to be
    * called at most every `wait` ms.
    */
    export function throttle(func: any, wait: any, options: any): () => any;
    
    // Source code:
    // platform/platform.d.ts
    
    /**
    * TODO
    */
    export class Platform {
        constructor(platforms?: any[]);
        /**
        * @param {string} platformName
        * @returns {bool} returns true/false based on platform you place
        * @description
        * Depending on the platform name, isPlatform will return true or flase
        *
        * ```
        * import {Platform} 'ionic/ionic';
        * export MyClass {
        *    constructor(platform: Platform){
        *      this.platform = platform;
        *      if(this.platform.is('ios'){
        *        // what ever you need to do for
        *        // if the platfomr is ios
        *      }
        *    }
        * }
        * ```
        */
        is(platformName: any): boolean;
        /**
        * @returns {array} the array of platforms
        * @description
        * Depending on what device you are on, `platforms` can return multiple values.
        * Each possible value is a hierarchy of platforms. For example, on an iPhone,
        * it would return mobile, ios, and iphone.
        *
        * ```
        * import {Platform} 'ionic/ionic';
        * export MyClass {
        *    constructor(platform: Platform){
        *      this.platform = platform;
        *      console.log(this.platform.platforms());
        *      // This will return an array of all the availble platforms
        *      // From if your on mobile, to mobile os, and device name
        *    }
        * }
        * ```
        */
        platforms(): any;
        /**
        * @param {string} optional platformName
        * @returns {object} An object with various platform info
        * - `{object=} `cordova`
        * - `{object=}` `platformOS` {str: "9.1", num: 9.1, major: 9, minor: 1}
        * - `{object=} `deviceName` Returns the name of the device
        * - `{object=}` `device platform` R
        * @description
        * Returns an object conta
        *
        * ```
        * import {Platform} 'ionic/ionic';
        * export MyClass {
        *    constructor(platform: Platform){
        *      this.platform = platform;
        *      console.log(this.platform.versions());
        *      // or pass in a platform name
        *      console.log(this.platform.versions('ios'));
        *    }
        * }
        * ```
        *
        */
        versions(platformName: any): any;
        version(): any;
        /**
        * @returns {promise}
        * @description
        * Returns a promise when the platform is ready and native functionality can be called
        *
        * ```
        * import {Platform} 'ionic/ionic';
        * export MyClass {
        *    constructor(platform: Platform){
        *      this.platform = platform;
        *      this.platform.ready().then(() => {
        *        console.log('Platform ready');
        *        // The platform is now ready, execute any native code you want
        *       });
        *    }
        * }
        * ```
        */
        ready(): any;
        /**
        * @private
        * TODO
        * @param {TODO} config  TODO
        * @returns {TODO} TODO
        */
        prepareReady(config: any): void;
        on(): void;
        onHardwareBackButton(): void;
        registerBackButtonAction(): void;
        exitApp(): void;
        fullScreen(): void;
        showStatusBar(): void;
        url(val: any): any;
        query(key: any): any;
        userAgent(val: any): any;
        navigatorPlatform(val: any): any;
        width(): any;
        height(): any;
        isPortrait(): boolean;
        isLandscape(): boolean;
        windowResize(): void;
        onResize(cb: any): void;
        /**
        * TODO
        * @param {TODO} platformConfig  TODO
        */
        static register(platformConfig: any): void;
        static registry(): {};
        /**
        * TODO
        * @param {TODO} platformName  TODO
        * @returns {string} TODO
        */
        static get(platformName: any): any;
        static setDefault(platformName: any): void;
        /**
        * TODO
        * @param {TODO} queryValue  TODO
        * @returns {boolean} TODO
        */
        testQuery(queryValue: any, queryTestValue: any): boolean;
        /**
        * TODO
        * @param {TODO} userAgentExpression  TODO
        * @returns {boolean} TODO
        */
        testUserAgent(userAgentExpression: any): boolean;
        /**
        * TODO
        * @param {TODO} userAgentExpression  TODO
        * @returns {Object} TODO
        */
        matchUserAgentVersion(userAgentExpression: any): {
            major: any;
            minor: any;
        };
        /**
        * TODO
        * @param {TODO} queryValue  TODO
        * @param {TODO} userAgentExpression  TODO
        * @returns {boolean} TODO
        */
        isPlatform(queryTestValue: any, userAgentExpression: any): boolean;
        /**
        * TODO
        * @param {TODO} config  TODO
        */
        load(platformOverride: any): void;
        /**
        * TODO
        * @param {TODO} platformName  TODO
        * @returns {TODO} TODO
        */
        matchPlatform(platformName: any): any;
    }
    
    // Source code:
    // config/config.d.ts
    
    /**
    * Config lets you change multiple or a single value in an apps mode configuration. Things such as tab placement, icon changes, and view animations can be set here.
    *
    * ```ts
    * @App({
    *   template: `<ion-nav [root]="root"></ion-nav>`
    *   config: {
    *     backButtonText: 'Go Back',
    *     iconMode: 'ios',
    *     modalEnter: 'modal-slide-in',
    *     modalLeave: 'modal-slide-out',
    *     tabbarPlacement: 'bottom',
    *     pageTransition: 'ios',
    *   }
    * })
    * ```
    *
    * Config can be overwritting at multiple levels, allowing deeper configuration. Taking the example from earlier, we can override any setting we want based on a platform.
    * ```ts
    * @App({
    *   template: `<ion-nav [root]="root"></ion-nav>`
    *   config: {
    *     tabbarPlacement: 'bottom',
    *     platforms: {
    *      ios: {
    *        tabbarPlacement: 'top',
    *      }
    *     }
    *   }
    * })
    * ```
    *
    * We could also configure these values at a component level. Take `tabbarPlacement`, we can configure this as a property on our `ion-tabs`.
    *
    * ```html
    * <ion-tabs tabbar-placement="top">
    *    <ion-tab tab-title="Dash" tab-icon="pulse" [root]="tabRoot"></ion-tab>
    *  </ion-tabs>
    * ```
    *
    * The property will override anything else set in the apps.
    *
    * The last way we could configure is through URL query strings. This is useful for testing while in the browser.
    * Simply add `?ionic<PROPERTYNAME>=<value>` to the url.
    *
    * ```
    * http://localhost:8100/?ionicTabbarPlacement=bottom
    * ```
    **/
    export class Config {
        constructor(config: any);
        /**
        * For setting and getting multiple config values
        */
        /**
        * @private
        * @name settings()
        * @description
        */
        settings(): any;
        /**
        * For setting a single config values
        */
        /**
        * @private
        * @name set()
        * @description
        */
        set(): Config;
        /**
        * For getting a single config values
        */
        /**
        * @private
        * @name get()
        * @description
        */
        get(key: any): any;
        /**
        * @private
        */
        setPlatform(platform: any): void;
        static setModeConfig(mode: any, config: any): void;
        static getModeConfig(mode: any): any;
    }
    
    // Source code:
    // animations/animation.d.ts
    
    /**
    Animation Steps/Process
    -----------------------
    1) Construct animation (doesn't start)
    2) Client play()'s animation, returns promise
    3) Add before classes to elements
    4) Remove before classes from elements
    5) Elements staged in "from" effect w/ inline styles
    6) Call onReady()
    7) Wait for RENDER_DELAY milliseconds (give browser time to render)
    8) Call onPlay()
    8) Run from/to animation on elements
    9) Animations finish async
    10) Set inline styles w/ the "to" effects on elements
    11) Add after classes to elements
    12) Remove after classes from elements
    13) Call onFinish()
    14) Resolve play()'s promise
    **/
    export class Animation {
        constructor(ele: any, opts?: {});
        reset(): void;
        elements(ele: any): Animation;
        addElement(ele: any): void;
        parent(parentAnimation: any): Animation;
        add(childAnimations: any): Animation;
        duration(value: any): any;
        clearDuration(): void;
        easing(name: any, opts: any): any;
        playbackRate(value: any): any;
        reverse(): any;
        forward(): any;
        from(property: any, value: any): Animation;
        to(property: any, value: any): Animation;
        fromTo(property: any, from: any, to: any): Animation;
        fadeIn(): Animation;
        fadeOut(): Animation;
        before: {
            addClass: (className: any) => Animation;
            removeClass: (className: any) => Animation;
            setStyles: (styles: any) => Animation;
        };
        after: {
            addClass: (className: any) => Animation;
            removeClass: (className: any) => Animation;
        };
        play(done: any): any;
        stage(): void;
        _onPlay(): void;
        _onFinish(): void;
        pause(): void;
        progressStart(): void;
        progress(value: any): void;
        /**
        * Get the current time of the first animation
        * in the list. To get a specific time of an animation, call
        * subAnimationInstance.getCurrentTime()
        */
        getCurrentTime(): any;
        progressEnd(shouldComplete: any, rate?: number): any;
        onReady(fn: any, clear: any): Animation;
        onPlay(fn: any, clear: any): Animation;
        onFinish(fn: any, clear: any): Animation;
        clone(): any;
        dispose(removeElement: any): void;
        static create(element: any, name: any): any;
        static register(name: any, AnimationClass: any): void;
    }
    
    // Source code:
    // util/form.d.ts
    
    /**
    * The Input component is used to focus text input elements.
    *
    * @usage
    * ```html
    * <ion-input>
    *   <ion-label>Name</ion-label>
    *   <input value="Name" type="text">
    * </ion-input>
    * ```
    */
    export class Form {
        constructor();
        register(input: any): void;
        deregister(input: any): void;
        focusCtrl(document: any): void;
        focusOut(): void;
        setAsFocused(input: any): void;
        /**
        * Focuses the next input element, if it exists.
        */
        focusNext(currentInput: any): any;
    }
    
    // Source code:
    // util/keyboard.d.ts
    
    export class Keyboard {
        constructor(config: Config, form: Form, zone: NgZone);
        isOpen(): boolean;
        onClose(callback: any): any;
        close(): void;
        focusOutline(setting: any, document: any): void;
    }
    
    // Source code:
    // components/icon/icon.d.ts
    
    export class Icon {
        private elementRef;
        private renderer;
        constructor(elementRef: ElementRef, config: Config, renderer: Renderer);
        /**
        * @private
        */
        onInit(): void;
        /**
        * @private
        */
        isActive: boolean;
        /**
        * @private
        */
        update(): void;
    }
    
    // Source code:
    // components/action-sheet/action-sheet.d.ts
    
    export class ActionSheet {
        constructor(ctrl: OverlayController, config: Config);
        /**
        * Create and open a new Action Sheet. This is the
        * public API, and most often you will only use ActionSheet.open()
        *
        * @param {Object} [opts={}]  TODO
        * @return {Promise} Promise that resolves when the action sheet is open.
        */
        open(opts?: {}): any;
        /**
        * TODO
        * @returns {TODO} TODO
        */
        get(handle: any): any;
    }
    
    // Source code:
    // components/button/button.d.ts
    
    /**
    * TODO
    */
    export class Button {
        constructor(config: Config, elementRef: ElementRef, renderer: Renderer, type: string);
    }
    
    // Source code:
    // components/popup/popup.d.ts
    
    /**
    * The Ionic Popup service allows the creation of popup windows that require the user to respond in order to continue.
    *
    * The popup service has support for more flexible versions of the built in `alert()`, `prompt()`, and `confirm()` functions that users are used to, in addition to allowing popups with completely custom content and look.
    *
    * @usage
    * ```ts
    * class myApp {
    *
    *   constructor(popup: Popup) {
    *     this.popup = popup;
    *   }
    *
    *   doAlert() {
    *     this.popup.alert({
    *       title: "New Friend!",
    *       template: "Your friend, Obi wan Kenobi, just accepted your friend request!",
    *       cssClass: 'my-alert'
    *     }).then(() => {
    *       console.log('Alert closed');
    *     });
    *   }
    *
    *   doPrompt() {
    *     this.popup.prompt({
    *       title: "New Album",
    *       template: "Enter a name for this new album you're so keen on adding",
    *       inputPlaceholder: "Title",
    *       okText: "Save",
    *       okType: "secondary"
    *     }).then((name) => {
    *       console.log('Name entered:', name);
    *     }, () => {
    *       console.error('Prompt closed');
    *     });
    *   }
    *
    *   doConfirm() {
    *     this.popup.confirm({
    *       title: "Use this lightsaber?",
    *       subTitle: "You can't exchange lightsabers",
    *       template: "Do you agree to use this lightsaber to do good across the intergalactic galaxy?",
    *       cancelText: "Disagree",
    *       okText: "Agree"
    *     }).then((result, ev) => {
    *       console.log('Confirmed!', result);
    *     }, () => {
    *       console.error('Not confirmed!');
    *     });
    *   }
    * }
    * ```
    */
    export class Popup {
        constructor(ctrl: OverlayController, config: Config);
        /**
        * TODO
        * @param {TODO} opts  TODO
        * @returns {object} A promise
        */
        open(opts: any): any;
        /**
        * Show a simple alert popup with a message and one button
        * that the user can tap to close the popup.
        *
        * @param {object} opts The options for showing the alert, of the form:
        *
        * ```
        * {
        *   title: '', // String. The title of the popup.
        *   cssClass: '', // String (optional). The custom CSS class name.
        *   subTitle: '', // String (optional). The sub-title of the popup.
        *   template: '', // String (optional). The html template to place in the popup body.
        *   templateUrl: '', // String (optional). The URL of an html template to place in the popup body.
        *   okText: '', // String (default: 'OK'). The text of the OK button.
        *   okType: '', // String (default: ''). The type of the OK button.
        * }
        * ```
        *
        * @returns {object} A promise which is resolved when the popup is closed.
        */
        alert(opts?: {}): any;
        /**
        * Show a simple confirm popup with a message, Cancel and OK button.
        *
        * Resolves the promise with true if the user presses the OK button, and false if the user presses the Cancel button.
        *
        * @param {object} opts The options for showing the confirm, of the form:
        *
        * ```
        * {
        *   title: '', // String. The title of the popup.
        *   cssClass: '', // String (optional). The custom CSS class name.
        *   subTitle: '', // String (optional). The sub-title of the popup.
        *   template: '', // String (optional). The html template to place in the popup body.
        *   templateUrl: '', // String (optional). The URL of an html template to place in the popup body.
        *   cancelText: '', // String (default: 'Cancel'). The text of the Cancel button.
        *   cancelType: '', // String (default: ''). The type of the Cancel button.
        *   okText: '', // String (default: 'OK'). The text of the OK button.
        *   okType: '', // String (default: ''). The type of the OK button.
        * }
        * ```
        *
        * @returns {object} A promise which is resolved when the popup is closed.
        */
        confirm(opts?: {}): any;
        /**
        * Show a simple prompt popup with a message, input, Cancel and OK button.
        *
        * Resolves the promise with the value of the input if the user presses OK, and with undefined if the user presses Cancel.
        *
        * @param {object} opts The options for showing the prompt, of the form:
        *
        * ```
        * {
        *   title: '', // String. The title of the popup.
        *   cssClass: '', // String (optional). The custom CSS class name.
        *   subTitle: '', // String (optional). The sub-title of the popup.
        *   template: '', // String (optional). The html template to place in the popup body.
        *   templateUrl: '', // String (optional). The URL of an html template to place in the popup body.
        *   inputType: // String (default: 'text'). The type of input to use.
        *   inputPlaceholder: // String (default: ''). A placeholder to use for the input.
        *   cancelText: '', // String (default: 'Cancel'). The text of the Cancel button.
        *   cancelType: '', // String (default: ''). The type of the Cancel button.
        *   okText: '', // String (default: 'OK'). The text of the OK button.
        *   okType: '', // String (default: ''). The type of the OK button.
        * }
        * ```
        *
        * @returns {object} A promise which is resolved when the popup is closed.
        */
        prompt(opts?: {}): any;
        /**
        * TODO
        * @param {TODO} handle  TODO
        * @returns {TODO} TODO
        */
        get(handle: any): any;
    }
    
    // Source code:
    // util/events.d.ts
    
    /**
    * Events is a pub/sub style event system for sending and responding to application-level
    * events across your app.
    */
    export class Events {
        constructor();
        /**
        * Subscribe to an event topic. Events that get posted to that topic
        * will trigger the provided handler.
        *
        * @param topic the topic to subscribe to
        * @param handler the event handler
        */
        subscribe(topic: any, ...handlers: any[]): void;
        /**
        * Unsubscribe from the given topic. Your handler will
        * no longer receive events published to this topic.
        *
        * @param topic the topic to unsubscribe from
        * @param handler the event handler
        *
        * @return true if a handler was removed
        */
        unsubscribe(topic: any, handler: any): boolean;
        /**
        * Publish an event to the given topic.
        *
        * @param topic the topic to publish to
        * @param eventData the data to send as the event
        */
        publish(topic: any, ...args: any[]): any[];
    }
    
    // Source code:
    // components/nav/nav-registry.d.ts
    
    /**
    * @private
    * Map of possible pages that can be navigated to using an Ionic NavController
    */
    export class NavRegistry {
        constructor(pages?: any[]);
        get(pageName: any): any;
        set(page: any): void;
    }
    
    // Source code:
    // translation/translate.d.ts
    
    /**
    * Provide multi-language and i18n support in your app. Translate works by
    * mapping full strings to language translated ones. That means that you don't need
    * to provide strings for your default language, just new languages.
    *
    * @usage
    * ```js
    * Translate.translations({
    *   'de': {
    *     'Welcome to MyApp': 'Willkommen auf'
    *   }
    * })
    *
    * Changing the default language:
    *
    * Translate.setLanguage('de');
    * ```
    *
    * Usage in a template:
    *
    * ```js
    * <span>{{ 'Welcome to MyApp' | translate }}
    * ```
    */
    export class Translate {
        constructor();
        translations(lang: any, map: any): void;
        setLanguage(lang: any): void;
        getTranslations(lang: any): any;
        translate(key: any, lang: any): any;
        _getTranslation(map: any, key: any): any;
    }
    
    // Source code:
    // util/feature-detect.d.ts
    
    export class FeatureDetect {
        run(window: any, document: any): void;
        has(featureName: any): boolean;
        static add(name: any, fn: any): void;
    }
    
    // Source code:
    // components/tap-click/activator.d.ts
    
    export class Activator {
        constructor(app: any, config: any);
        downAction(ev: any, activatableEle: any, pointerX: any, pointerY: any, callback: any): boolean;
        upAction(): void;
        clearState(): void;
        deactivate(): void;
        disableActivated(ev: any): boolean;
    }
    
    // Source code:
    // components/tap-click/ripple.d.ts
    
    export class RippleActivator extends Activator {
        constructor(app: any, config: any);
        downAction(ev: any, activatableEle: any, pointerX: any, pointerY: any, callback: any): boolean;
        createRipple(activatableEle: any, pointerX: any, pointerY: any, clientRect: any): void;
        upAction(): void;
        next(): void;
        clearState(): void;
    }
    
    // Source code:
    // components/tap-click/tap-click.d.ts
    
    /**
    * @private
    */
    export function initTapClick(windowInstance: any, documentInstance: any, appInstance: any, config: any): void;
    /**
    * @private
    */
    export function isActivatable(ele: any): boolean;
    
    // Source code:
    // config/bootstrap.d.ts
    
    export function ionicProviders(args?: {}): any[];
    
    // Source code:
    // components/overlay/overlay.d.ts
    
    /**
    * @private
    */
    export class OverlayAnchor {
        constructor(overlayCtrl: OverlayController, elementRef: ElementRef, loader: DynamicComponentLoader);
        append(componentType: any): any;
    }
    
    // Source code:
    // gestures/slide-edge-gesture.d.ts
    
    export class SlideEdgeGesture extends SlideGesture {
        constructor(element: Element, opts?: Object);
        canStart(ev?: any): boolean;
        getContainerDimensions(): {
            left: number;
            top: number;
            width: any;
            height: any;
        };
        _checkEdge(edge: any, pos: any): boolean;
    }
    
    // Source code:
    // components/menu/menu.d.ts
    
    /**
    * _For basic Menu usage, see the [Menu section](../../../../components/#menus)
    * of the Component docs._
    *
    * Menu is a side-menu navigation that can be dragged out or toggled to show.
    *
    * In order to use Menu, you must specify a [reference](https://angular.io/docs/ts/latest/guide/user-input.html#local-variables)
    * to the content element that Menu should listen on for drag events, using the
    * `content` property:
    * ```html
    * <ion-menu [content]="contentRef">
    *   <ion-content>
    *     <ion-list>
    *     ...
    *     </ion-list>
    *   </ion-content>
    * </ion-menu>
    *
    * <ion-nav #content-ref [root]="rootPage"></ion-nav>
    * ```
    *
    * By default, Menus are on the left, but this can be overriden with the `side`
    * property:
    * ```html
    * <ion-menu [content]="contentRef" side="right"></ion-menu>
    * ```
    *
    * Menu supports two display styles: overlay, and reveal. Overlay
    * is the traditional Android drawer style, and Reveal is the traditional iOS
    * style. By default, Menu will adjust to the correct style for the platform,
    * but this can be overriden using the `type` property:
    * ```html
    * <ion-menu [content]="contentRef" type="overlay"></ion-menu>
    * ```
    */
    export class Menu extends Ion {
        constructor(app: IonicApp, elementRef: ElementRef, config: Config, platform: Platform, keyboard: Keyboard);
        /**
        * @private
        */
        onInit(): void;
        /**
        * @private
        */
        _initGesture(): void;
        /**
        * @private
        */
        _initType(type: any): void;
        _getType(): any;
        /**
        * Sets the state of the Menu to open or not.
        * @param {boolean} isOpen  If the Menu is open or not.
        * @return {Promise} TODO
        */
        setOpen(shouldOpen: any): any;
        /**
        * @private
        */
        setProgressStart(): void;
        /**
        * @private
        */
        setProgess(value: any): void;
        /**
        * @private
        */
        setProgressEnd(shouldComplete: any): void;
        /**
        * @private
        */
        _before(): void;
        /**
        * @private
        */
        _after(isOpen: any): void;
        /**
        * @private
        */
        _prevent(): void;
        /**
        * @private
        */
        _isPrevented(): boolean;
        /**
        * TODO
        * @return {TODO} TODO
        */
        open(): any;
        /**
        * TODO
        * @return {TODO} TODO
        */
        close(): any;
        /**
        * TODO
        * @return {TODO} TODO
        */
        toggle(): any;
        /**
        * @private
        */
        enable(shouldEnable: any): void;
        /**
        * @private
        */
        getMenuElement(): any;
        /**
        * @private
        */
        getContentElement(): any;
        /**
        * @private
        */
        getBackdropElement(): any;
        static register(name: any, cls: any): void;
        /**
        * @private
        */
        onDestroy(): void;
    }
    
    // Source code:
    // transitions/transition.d.ts
    
    export class Transition {
        static create(navCtrl: any, opts?: {}): any;
        static register(name: any, TransitionClass: any): void;
    }
    
    // Source code:
    // components/nav/swipe-back.d.ts
    
    export class SwipeBackGesture extends SlideEdgeGesture {
        constructor(element: Element, opts: Object, navCtrl: any);
        onSlideStart(): void;
        onSlide(slide?: any, ev?: any): void;
        onSlideEnd(slide?: any, ev?: any): void;
    }
    
    // Source code:
    // components/nav/nav-controller.d.ts
    
    /**
    * _For examples on the basic usage of NavController, check out the [Navigation section](../../../../components/#navigation)
    * of the Component docs._
    *
    * NavController is the base class for navigation controller components like
    * [`Nav`](../Nav/) and [`Tab`](../../Tabs/Tab/). You use navigation controllers
    * to navigate to [pages](#creating_pages) in your app. At a basic level, a
    * navigation controller is an array of pages representing a particular history
    * (of a Tab for example). This array can be manipulated to navigate throughout
    * an app by pushing and popping pages or inserting and removing them at
    * arbitrary locations in history.
    *
    * The current page is the last one in the array, or the top of the stack if we
    * think of it that way.  [Pushing](#push) a new page onto the top of the
    * navigation stack causes the new page to be animated in, while [popping](#pop)
    * the current page will navigate to the previous page in the stack.
    *
    * Unless you are using a directive like [NavPush](../NavPush/), or need a
    * specific NavController, most times you will inject and use a reference to the
    * nearest NavController to manipulate the navigation stack.
    *
    * <h3 id="injecting_nav_controller">Injecting NavController</h3>
    * Injecting NavController will always get you an instance of the nearest
    * NavController, regardless of whether it is a Tab or a Nav.
    *
    * Behind the scenes, when Ionic instantiates a new NavController, it creates an
    * injector with NavController bound to that instance (usually either a Nav or
    * Tab) and adds the injector to its own providers.  For more information on
    * providers and dependency injection, see [Providers and DI]().
    *
    * ```ts
    * // class NavController
    * this.providers = Injector.resolve([
    *   provide(NavController, {useValue: this})
    * ]);
    * ```
    *
    * Instead, you can inject NavController and know that it is the correct
    * navigation controller for most situations (for more advanced situations, see
    * [Menu](../../Menu/Menu/) and [Tab](../../Tab/Tab/)).
    *
    * ```ts
    *  class MyComponent {
    *    constructor(nav: NavController) {
    *      this.nav = nav;
    *    }
    *  }
    * ```
    *
    * <h2 id="creating_pages">Page creation</h2>
    * _For more information on the `@Page` decorator see the [@Page API
    * reference](../../../config/Page/)._
    *
    * Pages are created when they are added to the navigation stack.  For methods
    * like [push()](#push), the NavController takes any component class that is
    * decorated with @Page as its first argument.  The NavController then
    * [compiles]() that component, adds it to the DOM in a similar fashion to
    * Angular's [DynamicComponentLoader](https://angular.io/docs/js/latest/api/core/DynamicComponentLoader-interface.html),
    * and animates it into view.
    *
    * By default, pages are cached and left in the DOM if they are navigated away
    * from but still in the navigation stack (the exiting page on a `push()` for
    * example).  They are destroyed when removed from the navigation stack (on
    * [pop()](#pop) or [setRoot()](#setRoot)).
    *
    *
    * <h2 id="Lifecycle">Lifecycle events</h2>
    * Lifecycle events are fired during various stages of navigation.  They can be
    * defined in any `@Page` decorated component class.
    *
    * ```ts
    * @Page({
    *   template: 'Hello World'
    * })
    * class HelloWorld {
    *   onPageLoaded() {
    *     console.log("I'm alive!");
    *   }
    * }
    * ```
    *
    * - `onPageLoaded` - Runs when the page has loaded. This event only happens once per page being created and added to the DOM. If a page leaves but is cached, then this event will not fire again on a subsequent viewing. The `onPageLoaded` event is good place to put your setup code for the page.
    * - `onPageWillEnter` - Runs when the page is about to enter and become the active page.
    * - `onPageDidEnter` - Runs when the page has fully entered and is now the active page. This event will fire, whether it was the first load or a cached page.
    * - `onPageWillLeave` - Runs when the page is about to leave and no longer be the active page.
    * - `onPageDidLeave` - Runs when the page has finished leaving and is no longer the active page.
    * - `onPageWillUnload` - Runs when the page is about to be destroyed and have its elements removed.
    * - `onPageDidUnload` - Runs after the page has been destroyed and its elements have been removed.
    *
    */
    export class NavController extends Ion {
        constructor(parentnavCtrl: NavController, app: IonicApp, config: Config, elementRef: ElementRef, compiler: Compiler, loader: DynamicComponentLoader, viewManager: AppViewManager, zone: NgZone, renderer: Renderer);
        /**
        * TODO
        * @param {TODO} componentType  TODO
        * @param {TODO} [params={}]  TODO
        * @param {TODO} [opts={}]  TODO
        * @returns {Promise} TODO
        */
        push(componentType: any, params?: {}, opts?: {}): any;
        /**
        * TODO
        * @param {TODO} [opts={}]  TODO
        * @returns {Promise} TODO
        */
        pop(opts?: {}): any;
        /**
        * @private
        * Pop to a specific view in the history stack
        *
        * @param view {ViewController} to pop to
        * @param opts {object} pop options
        */
        popTo(viewCtrl: any, opts?: {}): any;
        /**
        * Pop to the root view.
        * @param opts extra animation options
        */
        popToRoot(opts?: {}): any;
        /**
        * Inserts a view into the nav stack at the specified index.
        * @param {TODO} componentType  TODO
        * @param {TODO} index TODO
        * @returns {Promise} TODO
        */
        insert(componentType: any, index: any, params?: {}, opts?: {}): any;
        /**
        * Removes a view from the nav stack at the specified index.
        * @param {TODO} index TODO
        * @returns {Promise} TODO
        */
        remove(index: any, opts?: {}): any;
        /**
        * Set the view stack to reflect the given component classes.
        * @param {TODO} components  TODO
        * @param {TODO} [opts={}]  TODO
        * @returns {Promise} TODO
        */
        setViews(components: any, opts?: {}): any;
        /**
        * TODO
        * @param {TODO} componentType  TODO
        * @param {TODO} [params={}]  TODO
        * @param {TODO} [opts={}]  TODO
        * @returns {Promise} TODO
        */
        setRoot(componentType: any, params?: {}, opts?: {}): any;
        /**
        * TODO
        * @param {TODO} enteringView  TODO
        * @param {TODO} leavingView  TODO
        * @param {TODO} opts  TODO
        * @param {Function} done  TODO
        * @returns {any} TODO
        */
        _transition(enteringView: any, leavingView: any, opts: any, done: any): any;
        /**
        * @private
        */
        _stage(viewCtrl: any, done: any): any;
        loadPage(viewCtrl: any, navbarContainerRef: any, done: any): void;
        _setZIndex(enteringInstance: any, leavingInstance: any, direction: any): void;
        /**
        * @private
        * TODO
        */
        swipeBackStart(): void;
        /**
        * @private
        * TODO
        * @param {TODO} progress  TODO
        */
        swipeBackProgress(value: any): void;
        /**
        * @private
        * @param {TODO} completeSwipeBack  Should the swipe back complete or not.
        * @param {number} rate  How fast it closes
        */
        swipeBackEnd(completeSwipeBack: any, rate: any): void;
        /**
        * @private
        * TODO
        */
        _sbComplete(): void;
        /**
        * TODO
        * @param {TODO} val  TODO
        * @returns {TODO} TODO
        */
        isSwipeBackEnabled(val: any): any;
        /**
        * If it's possible to use swipe back or not. If it's not possible
        * to go back, or swipe back is not enable then this will return false.
        * If it is possible to go back, and swipe back is enabled, then this
        * will return true.
        * @returns {boolean}
        */
        canSwipeBack(): any;
        /**
        * Returns `true` if there's a valid previous view that we can pop back to.
        * Otherwise returns false.
        * @returns {boolean}
        */
        canGoBack(): any;
        /**
        * @private
        */
        _transComplete(): void;
        _cleanup(activeView: any): void;
        /**
        * TODO
        * @param {TODO} nbContainer  TODO
        * @returns {TODO} TODO
        */
        navbarViewContainer(nbContainer: any): any;
        /**
        * TODO
        * @returns {TODO} TODO
        */
        anchorElementRef(): any;
        /**
        * @private
        * TODO
        * @param {TODO} view  TODO
        * @returns {TODO} TODO
        */
        _add(view: any): void;
        _incrementId(view: any): void;
        /**
        * @private
        * TODO
        * @param {TODO} viewOrIndex  TODO
        * @returns {TODO} TODO
        */
        _remove(viewOrIndex: any): void;
        /**
        * TODO
        * @returns {TODO} TODO
        */
        getActive(): any;
        /**
        * TODO
        * @param {TODO} index  TODO
        * @returns {TODO} TODO
        */
        getByIndex(index: any): any;
        /**
        * TODO
        * @param {TODO} view  TODO
        * @returns {TODO} TODO
        */
        getPrevious(view: any): any;
        /**
        * TODO
        * @returns {TODO} TODO
        */
        getStagedEnteringView(): any;
        /**
        * TODO
        * @returns {TODO} TODO
        */
        getStagedLeavingView(): any;
        /**
        * First view in this nav controller's stack. This would
        * not return an view which is about to be destroyed.
        * @returns {TODO} TODO
        */
        first(): any;
        /**
        * Last view in this nav controller's stack. This would
        * not return an view which is about to be destroyed.
        * @returns {TODO} TODO
        */
        last(): any;
        /**
        * TODO
        * @param {TODO} view  TODO
        * @returns {TODO} TODO
        */
        indexOf(view: any): any;
        /**
        * Number of sibling views in the nav controller. This does
        * not include views which are about to be destroyed.
        * @returns {TODO} TODO
        */
        length(): number;
        /**
        * TODO
        * @returns {TODO} TODO
        */
        instances(): any[];
        /**
        * TODO
        * @param {TODO} view  TODO
        * @returns {TODO} TODO
        */
        isActive(view: any): boolean;
        /**
        * TODO
        * @param {TODO} view  TODO
        * @returns {TODO} TODO
        */
        isStagedEntering(view: any): boolean;
        /**
        * TODO
        * @param {TODO} router  TODO
        */
        registerRouter(router: any): void;
    }
    /**
    * TODO
    */
    export class NavParams {
        /**
        * TODO
        * @param {TODO} data  TODO
        */
        constructor(data: any);
        /**
        * TODO
        * @param {TODO} param  TODO
        */
        get(param: any): any;
    }
    
    // Source code:
    // components/nav/view-controller.d.ts
    
    /**
    * TODO
    */
    export class ViewController {
        constructor(navCtrl: any, componentType: any, params?: {});
        /**
        * TODO
        * @returns {boolean} TODO
        */
        enableBack(): boolean;
        setInstance(instance: any): void;
        index: any;
        isRoot(): boolean;
        addDestroy(destroyFn: any): void;
        destroy(): void;
        setNavbarTemplateRef(templateRef: any): void;
        getNavbarTemplateRef(): any;
        getNavbarViewRef(): any;
        setNavbarViewRef(viewContainerRef: any): void;
        setPageRef(elementRef: any): void;
        pageRef(): any;
        setContentRef(elementRef: any): void;
        contentRef(): any;
        setContent(directive: any): void;
        getContent(): any;
        setNavbar(directive: any): void;
        getNavbar(): any;
        hasNavbar(): boolean;
        navbarRef(): any;
        titleRef(): any;
        navbarItemRefs(): any;
        backBtnRef(): any;
        backBtnTextRef(): any;
        navbarBgRef(): any;
        hideBackButton(shouldHide: any): void;
        /**
        * The view has loaded. This event only happens once per view being
        * created. If a view leaves but is cached, then this will not
        * fire again on a subsequent viewing. This method is a good place
        * to put your setup code for the view; however, it is not the
        * recommended method to use when a view becomes active.
        */
        loaded(): void;
        /**
        * The view is about to enter and become the active view.
        */
        willEnter(): void;
        /**
        * The view has fully entered and is now the active view. This
        * will fire, whether it was the first load or loaded from the cache.
        */
        didEnter(): void;
        /**
        * The view has is about to leave and no longer be the active view.
        */
        willLeave(): void;
        /**
        * The view has finished leaving and is no longer the active view. This
        * will fire, whether it is cached or unloaded.
        */
        didLeave(): void;
        /**
        * The view is about to be destroyed and have its elements removed.
        */
        willUnload(): void;
        /**
        * The view has been destroyed and its elements have been removed.
        */
        didUnload(): void;
        domCache(isActiveView: any, isPreviousView: any): void;
    }
    
    // Source code:
    // components/toolbar/toolbar.d.ts
    
    /**
    * TODO
    */
    export class ToolbarBase extends Ion {
        constructor(elementRef: ElementRef, config: Config);
        /**
        * @private
        */
        setTitleCmp(titleCmp: any): void;
        /**
        * @private
        */
        getTitleText(): any;
        /**
        * @private
        */
        getTitleRef(): any;
        /**
        * @private
        * A toolbar items include the left and right side `ion-nav-items`,
        * and every `menu-toggle`. It does not include the `ion-title`.
        * @returns {TODO} Array of this toolbar's item ElementRefs.
        */
        getItemRefs(): any;
        /**
        * @private
        */
        addItemRef(itemElementRef: any): void;
    }
    /**
    * TODO
    */
    export class Toolbar extends ToolbarBase {
        constructor(elementRef: ElementRef, config: Config);
    }
    export class ToolbarTitle extends Ion {
        constructor(elementRef: ElementRef, toolbar: Toolbar, navbar: Navbar);
        getTitleText(): any;
    }
    /**
    * @private
    */
    export class ToolbarItem extends Ion {
        constructor(elementRef: ElementRef, toolbar: Toolbar, navbar: Navbar);
    }
    
    // Source code:
    // components/navbar/navbar.d.ts
    
    export class Navbar extends ToolbarBase {
        constructor(app: IonicApp, viewCtrl: ViewController, elementRef: ElementRef, config: Config, renderer: Renderer);
        /**
        * @private
        */
        onInit(): void;
        /**
        * @private
        */
        getBackButtonRef(): any;
        /**
        * @private
        */
        setBackButtonRef(backButtonElementRef: any): void;
        /**
        * @private
        */
        getBackButtonTextRef(): any;
        /**
        * @private
        */
        setBackButtonTextRef(backButtonTextElementRef: any): void;
        /**
        * @private
        */
        setBackgroundRef(backgrouneElementRef: any): void;
        /**
        * @private
        */
        getBackgroundRef(): any;
        /**
        * @private
        */
        didEnter(): void;
        /**
        * @private
        */
        setHidden(isHidden: any): void;
    }
    /**
    * @private
    * Used to find and register headers in a view, and this directive's
    * content will be moved up to the common navbar location, and created
    * using the same context as the view's content area.
    */
    export class NavbarTemplate {
        constructor(viewContainerRef: ViewContainerRef, templateRef: TemplateRef, viewCtrl: ViewController);
    }
    
    // Source code:
    // components/menu/menu-toggle.d.ts
    
    /**
    * TODO
    */
    export class MenuToggle extends Ion {
        constructor(app: IonicApp, elementRef: ElementRef, viewCtrl: ViewController, navbar: Navbar);
        /**
        * TODO
        * @param {TODO} event  TODO
        */
        toggle(): void;
        isHidden: boolean;
    }
    
    // Source code:
    // components/menu/menu-close.d.ts
    
    /**
    * TODO
    */
    export class MenuClose extends Ion {
        constructor(app: IonicApp, elementRef: ElementRef);
        close(): void;
    }
    
    // Source code:
    // components/blur/blur.d.ts
    
    export class Blur {
        private elementRef;
        private renderer;
        constructor(elementRef: ElementRef, renderer: Renderer);
    }
    
    // Source code:
    // components/content/content.d.ts
    
    /**
    * The Content component provides an easy to use content area that can be configured to use Ionic's custom Scroll View, or the built in overflow scrolling of the browser.
    *
    * While we recommend using the custom Scroll features in Ionic in most cases, sometimes (for performance reasons) only the browser's native overflow scrolling will suffice, and so we've made it easy to toggle between the Ionic scroll implementation and overflow scrolling.
    *
    * You can implement pull-to-refresh with the [Refresher](../../scroll/Refresher) component.
    *
    * @usage
    * ```html
    * <ion-content>
    *   Add your content here!
    * </ion-content>
    * ```
    *
    */
    export class Content extends Ion {
        private _zone;
        /**
        * @param {ElementRef} elementRef  A reference to the component's DOM element.
        * @param {Config} config  The config object to change content's default settings.
        */
        constructor(elementRef: ElementRef, config: Config, keyboard: Keyboard, viewCtrl: ViewController, _zone: NgZone);
        /**
        * @private
        */
        onInit(): void;
        /**
        * Adds the specified scroll handler to the content' scroll element.
        * @param {Function} handler  The scroll event handler.
        * @returns {Function} A function that removes the scroll handler.
        */
        addScrollEventListener(handler: any): () => void;
        onScrollEnd(callback: any): void;
        /**
        * Adds the specified touchmove handler to the content's scroll element.
        * @param {Function} handler  The touchmove handler.
        * @returns {Function} A function that removes the touchmove handler.
        */
        addTouchMoveListener(handler: any): () => void;
        /**
        * Scroll to the specified position.
        * @param {TODO} x  The x-value to scroll to.
        * @param {TODO} y  The y-value to scroll to.
        * @param {Number} duration  Duration of the scroll animation.
        * @param {TODO} tolerance  TODO
        * @returns {TODO} TODO
        */
        scrollTo(x: any, y: any, duration: any, tolerance: any): any;
        scrollToTop(): any;
        /**
        * @private
        * Returns the content and scroll elements' dimensions.
        * @returns {Object} dimensions  The content and scroll elements' dimensions
        * {Number} dimensions.contentHeight  content offsetHeight
        * {Number} dimensions.contentTop  content offsetTop
        * {Number} dimensions.contentBottom  content offsetTop+offsetHeight
        * {Number} dimensions.contentWidth  content offsetWidth
        * {Number} dimensions.contentLeft  content offsetLeft
        * {Number} dimensions.contentRight  content offsetLeft + offsetWidth
        * {Number} dimensions.scrollHeight  scroll scrollHeight
        * {Number} dimensions.scrollTop  scroll scrollTop
        * {Number} dimensions.scrollBottom  scroll scrollTop + scrollHeight
        * {Number} dimensions.scrollWidth  scroll scrollWidth
        * {Number} dimensions.scrollLeft  scroll scrollLeft
        * {Number} dimensions.scrollRight  scroll scrollLeft + scrollWidth
        */
        getDimensions(): {
            contentHeight: any;
            contentTop: any;
            contentBottom: any;
            contentWidth: any;
            contentLeft: any;
            contentRight: any;
            scrollHeight: any;
            scrollTop: any;
            scrollBottom: any;
            scrollWidth: any;
            scrollLeft: any;
            scrollRight: any;
        };
        /**
        * @private
        * Adds padding to the bottom of the scroll element when the keyboard is open
        * so content below the keyboard can be scrolled into view.
        */
        addScrollPadding(newScrollPadding: any): void;
    }
    
    // Source code:
    // gestures/gesture.d.ts
    
    /**
    * A gesture recognizer class.
    *
    * TODO(mlynch): Re-enable the DOM event simulation that was causing issues (or verify hammer does this already, it might);
    */
    export class Gesture {
        constructor(element: any, opts?: {});
        options(opts?: {}): void;
        on(type: any, cb: any): void;
        off(type: any, cb: any): void;
        listen(): void;
        unlisten(): void;
        destroy(): void;
    }
    
    // Source code:
    // components/scroll/scroll.d.ts
    
    /**
    * Scroll is a non-flexboxed scroll area that can scroll horizontally or
    * vertically.
    */
    export class Scroll extends Ion {
        constructor(elementRef: ElementRef, Config: Config);
        /**
        * @private
        */
        onInit(): void;
        /**
        * Add a scroll event handler to the scroll element if it exists.
        * @param {Function} handler  The scroll handler to add to the scroll element.
        * @returns {?Function} a function to remove the specified handler, otherwise
        * undefined if the scroll element doesn't exist.
        */
        addScrollEventListener(handler: any): () => void;
    }
    
    // Source code:
    // components/scroll/pull-to-refresh.d.ts
    
    /**
    * Allows you to add pull-to-refresh to an Content component.
    *
    * Place it as the first child of your Content or Scroll element.
    *
    * When refreshing is complete, call `refresher.complete()` from your controller.
    *
    *  @usage
    *  ```ts
    *  <ion-refresher (starting)="doStarting()" (refresh)="doRefresh($event, refresher)" (pulling)="doPulling($event, amt)">
    *
    *
    *  doRefresh(refresher) {
    *    console.log('Refreshing!', refresher);
    *
    *    setTimeout(() => {
    *      console.log('Pull to refresh complete!', refresher);
    *      refresher.complete();
    *    })
    *  }
    *
    *  doStarting() {
    *    console.log('Pull started!');
    *  }
    *
    *  doPulling(amt) {
    *    console.log('You have pulled', amt);
    *  }
    *  ```
    */
    export class Refresher {
        /**
        * TODO
        * @param {Content} content  TODO
        * @param {ElementRef} elementRef  TODO
        */
        constructor(content: Content, element: ElementRef);
        onInit(): void;
        /**
        * Initialize touch and scroll event listeners.
        */
        initEvents(): void;
        onDehydrate(): void;
        /**
        * TODO
        * @param {TODO} val  TODO
        */
        overscroll(val: any): void;
        /**
        * TODO
        * @param {TODO} target  TODO
        * @param {TODO} newScrollTop  TODO
        */
        nativescroll(target: any, newScrollTop: any): void;
        /**
        * TODO
        * @param {TODO} enabled  TODO
        */
        setScrollLock(enabled: any): void;
        /**
        * TODO
        */
        activate(): void;
        /**
        * TODO
        */
        deactivate(): void;
        start(): void;
        /**
        * TODO
        */
        show(): void;
        /**
        * TODO
        */
        hide(): void;
        /**
        * TODO
        */
        tail(): void;
        /**
        * TODO
        */
        complete(): void;
        /**
        * TODO
        * @param {TODO} Y  TODO
        * @param {TODO} duration  TODO
        * @param {Function} callback  TODO
        */
        scrollTo(Y: any, duration: any, callback: any): void;
        /**
        * @private
        * TODO
        * @param {Event} e  TODO
        */
        _handleTouchMove(e: any): void;
        /**
        * @private
        * TODO
        * @param {Event} e  TODO
        */
        _handleTouchEnd(e: any): void;
        /**
        * @private
        * TODO
        * @param {Event} e  TODO
        */
        _handleScroll(e: any): void;
    }
    
    // Source code:
    // components/slides/swiper-widget.d.ts
    
    export function Swiper(container: any, params: any): any;
    
    // Source code:
    // components/slides/slides.d.ts
    
    /**
    * Slides is a slide box implementation based on Swiper.js
    *
    * Swiper.js:
    * The most modern mobile touch slider and framework with hardware accelerated transitions
    *
    * http://www.idangero.us/swiper/
    *
    * Copyright 2015, Vladimir Kharlampidi
    * The iDangero.us
    * http://www.idangero.us/
    *
    * Licensed under MIT
    *
    */
    export class Slides extends Ion {
        /**
        * TODO
        * @param {ElementRef} elementRef  TODO
        */
        constructor(elementRef: ElementRef, config: Config);
        onInit(): void;
        onTap(swiper: any, e: any): void;
        onClick(swiper: any, e: any): void;
        onDoubleTap(swiper: any, e: any): void;
        onLazyImageLoad(swiper: any, slide: any, img: any): void;
        onLazyImageReady(swiper: any, slide: any, img: any): void;
        initZoom(): void;
        resetZoom(): void;
        toggleZoom(swiper: any, e: any): void;
        onTransitionStart(swiper: any): void;
        onTransitionEnd(swiper: any): void;
        onTouchStart(e: any): void;
        onTouchMove(e: any): boolean;
        onTouchEnd(e: any): void;
        /**
        * Update the underlying slider implementation. Call this if you've added or removed
        * child slides.
        */
        update(): void;
        next(): void;
        prev(): void;
        getIndex(): any;
        getNumSlides(): any;
        isAtEnd(): any;
        isAtBeginning(): any;
        getSliderWidget(): any;
    }
    /**
    * TODO
    */
    export class Slide {
        /**
        * TODO
        * @param {Slides} slides  The containing slidebox.
        * @param {ElementRef} elementRef  TODO
        */
        constructor(elementRef: ElementRef, slides: Slides);
    }
    export class SlideLazy {
        constructor(elementRef: ElementRef);
    }
    
    // Source code:
    // components/app/id.d.ts
    
    /**
    * IdRef is an easy way to identify unique components in an app and access them
    * no matter where in the UI heirarchy you are. For example, this makes toggling
    * a global side menu feasible from any place in the application.
    *
    * See the [Menu section](http://localhost:4000/docs/v2/components/#menus) of
    * the Component docs for an example of how Menus rely on ID's.
    *
    * To give any component an ID, simply set its `id` property:
    * ```html
    * <ion-checkbox id="myCheckbox"></ion-checkbox>
    * ```
    *
    * To get a reference to the registered component, inject the [IonicApp](../app/IonicApp/)
    * service:
    * ```ts
    * constructor(app: IonicApp) {
    *   var checkbox = app.getComponent("myCheckbox");
    *   if (checkbox.checked) console.log('checkbox is checked');
    * }
    * ```
    *
    * *NOTE:* It is not recommended to use ID's across Pages, as there is often no
    * guarantee that the registered component has not been destroyed if its Page
    * has been navigated away from.
    */
    export class IdRef {
        private app;
        private elementRef;
        private appViewManager;
        constructor(app: IonicApp, elementRef: ElementRef, appViewManager: AppViewManager);
        /**
        * @private
        */
        onInit(): void;
        /**
        * @private
        */
        onDestroy(): void;
    }
    export class Attr {
        private renderer;
        private elementRef;
        constructor(renderer: Renderer, elementRef: ElementRef);
        /**
        * @private
        */
        onInit(): void;
    }
    
    // Source code:
    // components/tabs/tabs.d.ts
    
    /**
    * _For basic Tabs usage, see the [Tabs section](../../../../components/#tabs)
    * of the Component docs._
    *
    * The Tabs component is a container with a TabBar and any number of
    * individual Tab components. On iOS, the TabBar is placed on the bottom of
    * the screen, while on Android it is at the top.
    *
    * See the [Tab API reference](../Tab/) for more details on individual Tab components.
    *
    * The TabBar is automatically created for you using the
    * [properties you set on each Tab](../Tab/#tab_properties).
    *
    * To override the platform specific TabBar placement, use the
    * `tabbar-placement` property:
    *
    * ```html
    * <ion-tabs tabbar-placement="top">
    *   <ion-tab [root]="tabRoot"></ion-tab>
    * </ion-tabs>
    * ```
    *
    * To change the location of the icons in the TabBar, use the `tabbar-icons`
    * property:
    * ```html
    * <ion-tabs tabbar-icons="bottom">
    *   <ion-tab [root]="tabRoot"></ion-tab>
    * </ion-tabs>
    * ```
    *
    * You can select tabs programatically by injecting Tabs into any child
    * component, and using the [select()](#select) method:
    * ```ts
    * @Page({
    *   template: `<button (click)="goToTabTwo()">Go to Tab2</button>`
    * })
    * class TabOne {
    *   constructor(tabs: Tabs){
    *     this.tabs = tabs;
    *   }
    *
    *   goToTabTwo() {
    *     this.tabs.select(this.tabs.tabs[1]);
    *   }
    * }
    * ```
    * The [tabs](#tabs) property is an array of all child [Tab](../Tab/) components
    * of that Tabs component.
    *
    */
    export class Tabs extends Ion {
        private platform;
        /**
        * Hi, I'm "Tabs". I'm really just another Page, with a few special features.
        * "Tabs" can be a sibling to other pages that can be navigated to, which those
        * sibling pages may or may not have their own tab bars (doesn't matter). The fact
        * that "Tabs" can happen to have children "Tab" classes, and each "Tab" can have
        * children pages with their own "ViewController" instance, as nothing to do with the
        * point that "Tabs" is itself is just a page with its own instance of ViewController.
        */
        constructor(app: IonicApp, config: Config, elementRef: ElementRef, viewCtrl: ViewController, platform: Platform);
        /**
        * @private
        */
        onInit(): void;
        /**
        * @private
        */
        add(tab: any): boolean;
        /**
        * TODO
        * @param {Tab} tab  TODO
        * @returns {TODO} TODO
        */
        select(tabOrIndex: any): any;
        /**
        * TODO
        * @param {TODO} index  TODO
        * @returns {TODO} TODO
        */
        getByIndex(index: any): any;
        getSelected(): any;
        getIndex(tab: any): any;
        /**
        * @private
        * "Touch" the active tab, going back to the root view of the tab
        * or optionally letting the tab handle the event
        */
        touchActive(tab: any): any;
    }
    
    // Source code:
    // components/tabs/tab.d.ts
    
    /**
    * _For basic Tabs usage, see the [Tabs section](../../../../components/#tabs)
    * of the Component docs._
    *
    * Tab components are basic navigation controllers used with Tabs.  Much like
    * Nav, they are a subclass of NavController and can be used to navigate
    * to pages in and manipulate the navigation stack of a particular tab.
    *
    * For more information on using navigation controllers like Tab or [Nav](../../nav/Nav/),
    * take a look at the [NavController API reference](../NavController/).
    *
    * See the [Tabs API reference](../Tabs/) for more details on configuring Tabs
    * and the TabBar.
    *
    * Like Nav, you must set a root page to be loaded initially for each Tab with
    * the 'root' property:
    * ```
    * @App({
    *   template: `<ion-tabs>
    *                <ion-tab [root]="tabOneRoot"></ion-tab>
    *                <ion-tab [root]="tabTwoRoot"></ion-tab>
    *              <ion-tabs>`
    * })
    * class MyApp {
    *   constructor(){
    *     this.tabOneRoot = GettingStartedPage;
    *     this.tabTwoRoot = GettingStartedPage;
    *   }
    * }
    * ```
    * <h3 id="tab_properties">Tab Properties</h3>
    * The Tabs component automatically creates the TabBar from the properties you
    * set on each Tab.
    *
    * To change the title and icon, use the `tab-title` and `tab-icon`
    * inputs:
    * ```html
    * <ion-tabs>
    * 	 <ion-tab tab-title="Home" tab-icon="home" [root]="tabOneRoot"></ion-tab>
    * 	 <ion-tab tab-title="Login" tab-icon="star" [root]="tabTwoRoot"></ion-tab>
    * <ion-tabs>
    * ```
    */
    export class Tab extends NavController {
        constructor(tabs: Tabs, app: IonicApp, config: Config, elementRef: ElementRef, compiler: Compiler, loader: DynamicComponentLoader, viewManager: AppViewManager, zone: NgZone, renderer: Renderer);
        /**
        * @private
        */
        onInit(): void;
        /**
        * @private
        */
        load(opts: any, done: any): void;
        /**
        * @private
        */
        loadPage(viewCtrl: any, navbarContainerRef: any, done: any): void;
        setSelected(isSelected: any): void;
        /**
        * @private
        */
        hideNavbars(shouldHideNavbars: any): void;
        index: any;
    }
    
    // Source code:
    // components/list/virtual.d.ts
    
    export class ListVirtualScroll {
        constructor(list: any);
        resize(): void;
        _handleVirtualScroll(event: any): void;
        cellAtIndex(index: any): void;
    }
    
    // Source code:
    // components/item/item-sliding-gesture.d.ts
    
    export class ItemSlidingGesture extends DragGesture {
        constructor(list: List, listEle: any);
        onDragStart(ev?: any): void;
        onDrag(ev?: any): void;
        onDragEnd(ev?: any): void;
        closeOpened(doNotCloseEle: any): boolean;
        open(itemContainerEle: any, openAmount: any, isFinal: any): void;
        getOpenAmount(itemContainerEle: any): any;
        get(itemContainerEle: any): any;
        set(itemContainerEle: any, key: any, value: any): void;
        enableScroll(shouldEnable: any): void;
        unlisten(): void;
    }
    
    // Source code:
    // components/list/list.d.ts
    
    /**
    * The List is a widely used interface element in almost any mobile app, and can include
    * content ranging from basic text all the way to buttons, toggles, icons, and thumbnails.
    *
    * Both the list, which contains items, and the list items themselves can be any HTML
    * element.
    *
    * Using the List and Item components make it easy to support various
    * interaction modes such as swipe to edit, drag to reorder, and removing items.
    *
    */
    export class List extends Ion {
        private zone;
        constructor(elementRef: ElementRef, config: Config, zone: NgZone);
        /**
        * @private
        */
        onInit(): void;
        /**
        * @private
        */
        onDestroy(): void;
        /**
        * @private
        */
        _initVirtualScrolling(): void;
        /**
        * @private
        */
        setItemTemplate(item: any): void;
        enableSlidingItems(shouldEnable: any): void;
        closeSlidingItems(): void;
        /**
        * @private
        */
        afterViewInit(): void;
    }
    export class ListHeader {
    }
    
    // Source code:
    // components/item/item.d.ts
    
    /**
    * Creates a list-item that can easily be swiped, deleted, reordered, edited, and more.
    *
    * There are three common ways to use an item:
    * - Use `<ion-item>` for something that is only non-clickable text.
    * - Use `<button ion-item>` for something that can be clicked/tapped. Typically this element will also have a `(click)` handler.
    * - Use `<a ion-item>` for when the item needs to contain a `href`.
    *
    * By default, `<button ion-item>` and `<a ion-item>` will receive a right arrow icon on iOS to signal that tapping the item will reveal more information.
    * To hide this icon, add the `detail-none` attribute to the item (eg: `<button ion-item detail-none>`). To add the icon when it is not displayed by default,
    * add the `detail-push` attribute (eg: `<ion-item detail-push>`).
    *
    * To break an item up into multiple columns, add multiple `<ion-item-content>` components inside of the item. By default,
    * this component will automatically be added inside of an `<ion-item>`, giving it a single column.
    *
    *
    * @usage
    * ```html
    *
    * <ion-list>
    *
    *   // default item
    *   <ion-item>
    *     {{item.title}}
    *   </ion-item>
    *
    *   // multiple item-content containers
    *   <ion-item>
    *     <ion-item-content>First Column</ion-item-content>
    *     <ion-item-content>Second Column</ion-item-content>
    *     <ion-item-content>Third Column</ion-item-content>
    *   </ion-item>
    *
    * </ion-list>
    *
    *  ```
    */
    export class Item {
    }
    
    // Source code:
    // components/item/item-group.d.ts
    
    /**
    * TODO
    */
    export class ItemGroup {
        /**
        * TODO
        * @param {ElementRef} elementRef  TODO
        */
        constructor(elementRef: ElementRef);
    }
    /**
    * TODO
    */
    export class ItemGroupTitle {
        private elementRef;
        private zone;
        private content;
        /**
        * TODO
        * @param {ElementRef} elementRef  TODO
        */
        constructor(elementRef: ElementRef, zone: NgZone, config: Config, content: Content);
    }
    
    // Source code:
    // components/item/item-sliding.d.ts
    
    /**
    * @description
    * Creates a list-item that can easily be swiped,
    * deleted, reordered, edited, and more.
    *
    * @usage
    * ```html
    * <ion-list>
    *   <ion-item-sliding *ng-for="#item of items">
    *     <ion-item (click)="itemTapped(item)">
    *       {{item.title}}
    *     </ion-item>
    *     <ion-item-options>
    *       <button (click)="favorite(item)">Favorite</button>
    *       <button (click)="share(item)">Share</button>
    *     </ion-item-options>
    *   </ion-item>
    * </ion-list>
    * ```
    */
    export class ItemSliding {
        private list;
        constructor(list: List, elementRef: ElementRef);
        close(): void;
    }
    
    // Source code:
    // components/checkbox/checkbox.d.ts
    
    /**
    * The checkbox is no different than the HTML checkbox input, except it's styled differently
    *
    * See the [Angular 2 Docs](https://angular.io/docs/js/latest/api/core/Form-interface.html) for more info on forms and input.
    *
    * @usage
    * ```html
    * <ion-checkbox checked="true" value="isChecked" ng-control="htmlCtrl">
    *   HTML5
    * </ion-checkbox>
    * ```
    */
    export class Checkbox {
        constructor(form: Form, ngControl: NgControl, elementRef: ElementRef);
        onInit(): void;
        /**
        * Toggle the checked state of the checkbox. Calls onChange to pass the
        * updated checked state to the model (Control).
        */
        toggle(): void;
        /**
        * @private
        * Click event handler to toggle the checkbox checked state.
        * @param {MouseEvent} ev  The click event.
        */
        click(ev: any): void;
        /**
        * @private
        * Angular2 Forms API method called by the model (Control) on change to update
        * the checked value.
        * https://github.com/angular/angular/blob/master/modules/angular2/src/forms/directives/shared.ts#L34
        */
        writeValue(value: any): void;
        /**
        * @private
        * Angular2 Forms API method called by the view (NgControl) to register the
        * onChange event handler that updates the model (Control).
        * https://github.com/angular/angular/blob/master/modules/angular2/src/forms/directives/shared.ts#L27
        * @param {Function} fn  the onChange event handler.
        */
        registerOnChange(fn: any): void;
        /**
        * @private
        * Angular2 Forms API method called by the the view (NgControl) to register
        * the onTouched event handler that marks model (Control) as touched.
        * @param {Function} fn  onTouched event handler.
        */
        registerOnTouched(fn: any): void;
        /**
        * @private
        */
        onDestroy(): void;
    }
    
    // Source code:
    // components/switch/switch.d.ts
    
    /**
    * A switch technically is the same thing as an HTML checkbox input, except it looks different and is easier to use on a touch device. Ionic prefers to wrap the checkbox input with the <label> in order to make the entire toggle easy to tap or drag.
    *
    * Toggles can also have colors assigned to them, by adding the `toggle-assertive` attribute to assign the assertive color.
    *
    * See the [Angular 2 Docs](https://angular.io/docs/js/latest/api/forms/) for more info on forms and input.
    *
    * @usage
    * ```html
    * // Create a single switch
    *  <ion-switch checked="true">
    *    Pineapple
    *  </ion-switch>
    *
    * // Create a list of switches:
    *  <ion-list>
    *
    *    <ion-switch checked="true">
    *      Apple
    *    </ion-switch>
    *
    *     <ion-switch checked="false">
    *       Banana
    *     </ion-switch>
    *
    *     <ion-switch disabled="true">
    *       Cherry
    *     </ion-switch>
    *
    *  </ion-list>
    * ```
    *
    */
    export class Switch {
        private ngControl;
        constructor(form: Form, elementRef: ElementRef, config: Config, ngControl: NgControl);
        /**
        * @private
        */
        onInit(): void;
        /**
        * Set checked state of this switch.
        * @param {boolean} value  Boolean to set this switch's checked state to.
        */
        check(value: any): void;
        /**
        * Toggle the checked state of this switch.
        */
        toggle(ev: any): void;
        /**
        * @private
        */
        writeValue(value: any): void;
        /**
        * @private
        */
        pointerDown(ev: any): void;
        /**
        * @private
        */
        pointerUp(ev: any): void;
        /**
        * @private
        */
        registerOnChange(fn: any): void;
        /**
        * @private
        */
        registerOnTouched(fn: any): void;
        /**
        * @private
        */
        onDestroy(): void;
        /**
        * @private
        */
        isDisabled(ev: any): boolean;
    }
    
    // Source code:
    // components/text-input/label.d.ts
    
    export class Label {
        constructor(config: Config, container: TextInput);
        /**
        * @private
        */
        pointerStart(ev: any): void;
        /**
        * @private
        */
        pointerEnd(ev: any): void;
    }
    
    // Source code:
    // components/text-input/text-input.d.ts
    
    /**
    * TODO
    */
    export class TextInput {
        constructor(form: Form, elementRef: ElementRef, config: Config, renderer: Renderer, app: IonicApp, platform: Platform, scrollView: Content);
        /**
        * @private
        */
        registerInput(textInputElement: any): void;
        /**
        * @private
        */
        registerLabel(label: any): void;
        /**
        * @private
        */
        onInit(): void;
        /**
        * @private
        */
        pointerStart(ev: any): void;
        /**
        * @private
        */
        pointerEnd(ev: any): void;
        /**
        * @private
        */
        initFocus(): void;
        /**
        * @private
        * @param {TODO} inputOffsetTop  TODO
        * @param {TODO} inputOffsetHeight  TODO
        * @param {TODO} scrollViewDimensions  TODO
        * @param {TODO} keyboardHeight  TODO
        * @returns {TODO} TODO
        */
        static getScollData(inputOffsetTop: any, inputOffsetHeight: any, scrollViewDimensions: any, keyboardHeight: any, plaformHeight: any): {
            scrollAmount: number;
            scrollTo: number;
            scrollPadding: number;
            inputSafeY: number;
        };
        /**
        * @private
        */
        focusChange(hasFocus: any): void;
        /**
        * @private
        */
        hasValue(inputValue: any): void;
        /**
        * @private
        */
        setFocus(): void;
        /**
        * @private
        */
        regMove(): void;
        /**
        * @private
        */
        deregMove(): void;
        /**
        * @private
        */
        hasFocus: any;
        /**
        * @private
        */
        onDestroy(): void;
    }
    /**
    * @private
    */
    export class TextInputElement {
        constructor(type: string, elementRef: ElementRef, renderer: Renderer, wrapper: TextInput);
        onKeyup(ev: any): void;
        onInit(): void;
        labelledBy(val: any): void;
        setFocus(): void;
        relocate(shouldRelocate: any, inputRelativeY: any): void;
        hideFocus(shouldHideFocus: any): void;
        hasFocus: boolean;
        getNativeElement(): any;
    }
    
    // Source code:
    // components/segment/segment.d.ts
    
    /**
    * @description
    * A Segment is a group of buttons, sometimes known as Segmented Controls, that allow the user to interact with a compact group of a number of controls.
    *
    * Segments provide functionality similar to tabs, selecting one will unselect all others. You should use a tab bar instead of a segmented control when you want to let the user move back and forth between distinct pages in your app.
    *
    * @usage
    * ```html
    * <ion-segment [(ng-model)]="relationship" danger>
    *   <ion-segment-button value="friends">
    *     Friends
    *   </ion-segment-button>
    *   <ion-segment-button value="enemies">
    *     Enemies
    *   </ion-segment-button>
    * </ion-segment>
    *
    *
    * <form [ng-form-model]="myForm">
    *   <ion-segment ng-control="mapStyle" danger>
    *     <ion-segment-button value="standard">
    *       Standard
    *     </ion-segment-button>
    *     <ion-segment-button value="hybrid">
    *       Hybrid
    *     </ion-segment-button>
    *     <ion-segment-button value="sat">
    *       Satellite
    *     </ion-segment-button>
    *   </ion-segment>
    * </form>
    * ```
    */
    export class Segment extends Ion {
        /**
        * @private
        */
        buttons: Array<SegmentButton>;
        constructor(ngControl: NgControl, elementRef: ElementRef, config: Config);
        /**
        * @private
        */
        writeValue(value: any): void;
        /**
        * @private
        */
        registerOnChange(fn: any): void;
        /**
        * @private
        */
        registerOnTouched(fn: any): void;
        /**
        * @private
        * Called by child SegmentButtons to bind themselves to
        * the Segment.
        * @param {SegmentButton} segmentButton  The child SegmentButton to register.
        */
        register(segmentButton: any): void;
        /**
        * @private
        * Select the button with the given value.
        * @param {string} value  Value of the button to select.
        */
        selectFromValue(value: any): void;
        /**
        * @private
        * Indicate a button should be selected.
        * @param {SegmentButton} segmentButton  The button to select.
        */
        selected(segmentButton: any): void;
    }
    export class SegmentButton {
        constructor(segment: Segment, elementRef: ElementRef, renderer: Renderer);
        /**
        * @private
        */
        onInit(): void;
        /**
        * @private
        */
        click(event: any): void;
    }
    
    // Source code:
    // components/radio/radio.d.ts
    
    /**
    * A radio group is a group of radio components.
    *
    * Selecting a radio button in the group unselects all others in the group.
    *
    * New radios can be registered dynamically.
    *
    * See the [Angular 2 Docs](https://angular.io/docs/js/latest/api/forms/) for more info on forms and input.
    *
    * @usage
    * ```html
    * <ion-radio-group ng-control="clientside">
    *
    *   <ion-header>
    *     Clientside
    *   </ion-header>
    *
    *   <ion-radio value="ember">
    *     Ember
    *   </ion-radio>
    *
    *   <ion-radio value="angular1">
    *     Angular 1
    *   </ion-radio>
    *
    *   <ion-radio value="angular2" checked="true">
    *     Angular 2
    *   </ion-radio>
    *
    *   <ion-radio value="react">
    *     React
    *   </ion-radio>
    *
    * </ion-radio-group>
    * ```
    */
    export class RadioGroup extends Ion {
        private headerQuery;
        radios: Array<RadioButton>;
        constructor(elementRef: ElementRef, config: Config, ngControl: NgControl, headerQuery: QueryList<ListHeader>);
        /**
        * @private
        */
        onInit(): void;
        /**
        * @private
        * Register the specified radio button with the radio group.
        * @param {RadioButton} radio  The radio button to register.
        */
        registerRadio(radio: any): void;
        /**
        * @private
        * Update which radio button in the group is checked, unchecking all others.
        * @param {RadioButton} checkedRadio  The radio button to check.
        */
        update(checkedRadio: any): void;
        /**
        * @private
        * Angular2 Forms API method called by the model (Control) on change to update
        * the checked value.
        * https://github.com/angular/angular/blob/master/modules/angular2/src/forms/directives/shared.ts#L34
        */
        writeValue(value: any): void;
        /**
        * @private
        * Angular2 Forms API method called by the view (NgControl) to register the
        * onChange event handler that updates the model (Control).
        * https://github.com/angular/angular/blob/master/modules/angular2/src/forms/directives/shared.ts#L27
        * @param {Function} fn  the onChange event handler.
        */
        registerOnChange(fn: any): void;
        /**
        * @private
        * Angular2 Forms API method called by the the view (NgControl) to register
        * the onTouched event handler that marks the model (Control) as touched.
        * @param {Function} fn  onTouched event handler.
        */
        registerOnTouched(fn: any): void;
    }
    /**
    * @description
    * A single radio component.
    *
    * See the [Angular 2 Docs](https://angular.io/docs/js/latest/api/forms/) for more info on forms and input.
    *
    * @usage
    * ```html
    * <ion-radio value="isChecked" checked="true">
    *   Radio Label
    * </ion-radio>
    * ```
    *
    */
    export class RadioButton extends Ion {
        constructor(group: RadioGroup, elementRef: ElementRef, config: Config);
        /**
        * @private
        */
        onInit(): void;
        /**
        * @private
        */
        click(ev: any): void;
        /**
        * Update the checked state of this radio button.
        * TODO: Call this toggle? Since unchecks as well
        */
        check(): void;
    }
    
    // Source code:
    // components/searchbar/searchbar.d.ts
    
    /**
    * @description
    * The Search Bar service adds an input field which can be used to search or filter items.
    *
    * @usage
    * ```html
    * <ion-searchbar ng-control="searchQuery"></ion-searchbar>
    * ```
    */
    export class SearchBar extends Ion {
        /**
        * @private
        */
        query: string;
        constructor(elementRef: ElementRef, config: Config, ngControl: NgControl, renderer: Renderer);
        /**
        * @private
        */
        afterViewInit(): void;
        /**
        * @private
        * Much like ngModel, this is called from our valueAccessor for the attached
        * ControlDirective to update the value internally.
        */
        writeValue(value: any): void;
        /**
        * @private
        */
        registerOnChange(fn: any): void;
        /**
        * @private
        */
        registerOnTouched(fn: any): void;
        /**
        * @private
        */
        inputChanged(event: any): void;
        /**
        * @private
        */
        inputFocused(): void;
        /**
        * @private
        */
        inputBlurred(): void;
        clearInput(event: any): void;
    }
    
    // Source code:
    // components/nav/nav.d.ts
    
    /**
    * _For a quick walkthrough of navigation in Ionic, check out the
    * [Navigation section](../../../../components/#navigation) of the Component
    * docs._
    *
    * Nav is a basic navigation controller component.  As a subclass of NavController
    * you use it to navigate to pages in your app and manipulate the navigation stack.
    * Nav automatically animates transitions between pages for you.
    *
    * For more information on using navigation controllers like Nav or [Tab](../../Tabs/Tab/),
    * take a look at the [NavController API reference](../NavController/).
    *
    * You must set a root page (where page is any [@Page](../../config/Page/)
    * component) to be loaded initially by any Nav you create, using
    * the 'root' property:
    *
    * ```ts
    * @App({
    *   template: `<ion-nav [root]="rootPage"></ion-nav>`
    * })
    * class MyApp {
    *   constructor(){
    *     this.rootPage = GettingStartedPage;
    *   }
    * }
    * ```
    *
    * <h2 id="back_navigation">Back navigation</h2>
    * If a [page](../NavController/#creating_pages) you navigate to has a [NavBar](../NavBar/),
    * Nav will automatically add a back button to it if there is a page
    * before the one you are navigating to in the navigation stack.
    *
    * Additionally, specifying the `swipe-back-enabled` property will allow you to
    * swipe to go back:
    * ```html
    * <ion-nav swipe-back-enabled="false" [root]="rootPage"></ion-nav>
    * ```
    *
    * Here is a diagram of how Nav animates smoothly between pages:
    *
    * <div class="highlight less-margin">
    *   <pre>
    *                           +-------+
    *                           |  App  |
    *                           +---+---+
    *                           &lt;ion-app&gt;
    *                               |
    *                  +------------+-------------+
    *                  |   Ionic Nav Controller   |
    *                  +------------+-------------+
    *                           &lt;ion-nav&gt;
    *                               |
    *                               |
    *             Page 3  +--------------------+                     LoginPage
    *           Page 2  +--------------------+ |
    *         Page 1  +--------------------+ | |              +--------------------+
    *                 | | Header           |&lt;-----------------|       Login        |
    *                 +--------------------+ | |              +--------------------+
    *                 | | |                | | |              | Username:          |
    *                 | | |                | | |              | Password:          |
    *                 | | |  Page 3 is     | | |              |                    |
    *                 | | |  only content  | | |              |                    |
    *                 | | |                |&lt;-----------------|                    |
    *                 | | |                | | |              |                    |
    *                 | | |                | | |              |                    |
    *                 | +------------------|-+ |              |                    |
    *                 | | Footer           |-|-+              |                    |
    *                 | +------------------|-+                |                    |
    *                 +--------------------+                  +--------------------+
    *
    *           +--------------------+    +--------------------+    +--------------------+
    *           | Header             |    | Content            |    | Content            |
    *           +--------------------+    |                    |    |                    |
    *           | Content            |    |                    |    |                    |
    *           |                    |    |                    |    |                    |
    *           |                    |    |                    |    |                    |
    *           |                    |    |                    |    |                    |
    *           |                    |    |                    |    |                    |
    *           |                    |    |                    |    |                    |
    *           |                    |    |                    |    |                    |
    *           |                    |    |                    |    |                    |
    *           |                    |    +--------------------+    |                    |
    *           |                    |    | Footer             |    |                    |
    *           +--------------------+    +--------------------+    +--------------------+
    *
    *   </pre>
    * </div>
    *
    */
    export class Nav extends NavController {
        constructor(hostNavCtrl: NavController, viewCtrl: ViewController, app: IonicApp, config: Config, elementRef: ElementRef, compiler: Compiler, loader: DynamicComponentLoader, viewManager: AppViewManager, zone: NgZone, renderer: Renderer);
        /**
        * @private
        */
        onInit(): void;
    }
    
    // Source code:
    // components/nav/nav-push.d.ts
    
    /**
    * Directive for declaratively linking to a new page instead of using
    * [NavController.push()](../NavController/#push). Similar to ui-router's `ui-sref`.
    *
    * Basic usage:
    * ```html
    * <button [nav-push]="pushPage"></button>
    * ```
    * To specify parameters you can use array syntax or the `nav-params` property:
    * ```html
    * <button [nav-push]="pushPage" [nav-params]="params"></button>
    * ```
    * Where `pushPage` and `params` are specified in your component, and `pushPage`
    * contains a reference to a [@Page component](../../../config/Page/):
    *
    * ```ts
    * @Page({
    *   template: `<button [nav-push]="pushPage" [nav-params]="params"></button>`
    * })
    * class MyPage {
    *   constructor(){
    *     this.pushPage = LoginPage;
    *     this.params = { id: 42 };
    *   }
    * }
    * ```
    *
    * ### Alternate syntax
    * You can also use syntax similar to Angular2's router, passing an array to
    * NavPush:
    * ```html
    * <button [nav-push]="[pushPage, params]"></button>
    * ```
    */
    export class NavPush {
        /**
        * TODO
        * @param {NavController} nav  TODO
        */
        constructor(nav: NavController, registry: NavRegistry);
        onClick(): void;
    }
    /**
    * TODO
    */
    export class NavPop {
        /**
        * TODO
        * @param {NavController} nav  TODO
        */
        constructor(nav: NavController);
        onClick(): void;
    }
    
    // Source code:
    // config/directives.d.ts
    
    /**
    * The core Ionic directives as well as Angular's CORE_DIRECTIVES and
    * FORM_DIRECTIVES.  Automatically available in every [@Page](../Page/) template.
    */
    export const IONIC_DIRECTIVES: any[];
    
    // Source code:
    // config/decorators.d.ts
    
    /**
    * _For more information on how pages are created, see the [NavController API
    * reference](../../components/nav/NavController/#creating_pages)._
    *
    * The Page decorator indicates that the decorated class is an Ionic
    * navigation component, meaning it can be navigated to using a NavController.
    *
    * Pages have all [IONIC_DIRECTIVES](../IONIC_DIRECTIVES/), which include
    * all Ionic components and directives, as well as Angular's [CORE_DIRECTIVES](https://angular.io/docs/js/latest/api/core/CORE_DIRECTIVES-const.html)
    * and [FORM_DIRECTIVES](https://angular.io/docs/js/latest/api/core/FORM_DIRECTIVES-const.html),
    * already provided to them, so you only need to supply custom components and
    * directives to your pages:
    *
    * ```ts
    * @Page({
    *   template: `
    *     <ion-checkbox my-custom-dir>
    *     </ion-checkbox>`
    *   directives: [MyCustomDirective]
    * })
    * class MyPage {}
    * ```
    * Here [Checkbox](../../../components/checkbox/Checkbox/) will load because
    * it is in IONIC_DIRECTIVES, so there is no need to add it to the `directives`
    * array.
    *
    * For custom components that use Ionic components, you will need to include
    * IONIC_DIRECTIVES in the `directives` array:
    *
    * ```ts
    * @Component({
    *   selector: 'my-component'
    *   template: `<div class="my-style">
    *   						  <ion-checkbox></ion-checkbox>
    *   						</div>`,
    *   directives: [IONIC_DIRECTIVES]
    * })
    * class MyCustomCheckbox {}
    *```
    * Alternatively, you could:
    * ```ts
    * ```
    * along with any other components and add them individually:
    * ```
    * @Component({
    *   ...
    *   directives: [Checkbox, Icon]
    * })
    * ```
    * However, using IONIC_DIRECTIVES will always *Just Work* with no
    * performance overhead, so there is really no reason to not always use it.
    *
    * Pages have their content automatically wrapped in `<ion-view>`, so although
    * you may see these tags if you inspect your markup, you don't need to include
    * them in your templates.
    */
    export function Page(config?: {}): (cls: any) => any;
    /**
    * @private
    */
    export function ConfigComponent(config: any): (cls: any) => any;
    /**
    * TODO
    */
    export function App(args?: {}): (cls: any) => any;
    
    // Source code:
    // platform/storage/storage.d.ts
    
    /**
    * Storage is an easy way to store key/value pairs and other complicated
    * data in a way that uses a variety of storage engines underneath.
    *
    * For most cases, we recommend the SqlStorage system as it will store
    * data in a file in the app's sandbox. LocalStorage should ONLY be used
    * for temporary data as it may be "cleaned up" by the operation system
    * during low disk space situations.
    */
    export class Storage {
        constructor(strategyCls: StorageEngine, options: any);
        get(key: any): any;
        getJson(key: any): any;
        set(key: any, value: any): any;
        remove(key: any): any;
        query(query: any, params: any): any;
    }
    export class StorageEngine {
        get(key: any, value: any): void;
        set(key: any, value: any): void;
        remove(key: any): void;
        query(query: any, params: any): void;
    }
    
    // Source code:
    // platform/storage/local-storage.d.ts
    
    /**
    * The LocalStorage storage engine uses the browser's local storage system for
    * storing key/value pairs.
    *
    * Note: LocalStorage should ONLY be used for temporary data that you can afford to lose.
    * Given disk space constraints on a mobile device, local storage might be "cleaned up"
    * by the operating system (iOS).
    *
    * For guaranteed, long-term storage, use the SqlStorage engine which stores data in a file.
    */
    export class LocalStorage extends StorageEngine {
        constructor();
        get(key: any): any;
        set(key: any, value: any): any;
        remove(key: any): any;
    }
    
    // Source code:
    // platform/storage/sql.d.ts
    
    /**
    * SqlStorage uses SQLite or WebSQL (development only!) to store data in a
    * persistent SQL store on the filesystem.
    *
    * This is the preferred storage engine, as data will be stored in appropriate
    * app storage, unlike Local Storage which is treated differently by the OS.
    *
    * For convenience, the engine supports key/value storage for simple get/set and blob
    * storage. The full SQL engine is exposed underneath through the `query` method.
    *
    * @usage
    ```js
    * let storage = new Storage(SqlStorage, options);
    * storage.set('name', 'Max');
    * storage.get('name').then((name) => {
    * });
    *
    * // Sql storage also exposes the full engine underneath
    * storage.query('insert into projects(name, data) values('Cool Project', 'blah')');'
    * storage.query('select * from projects').then((resp) => {})
    * ```
    *
    * The `SqlStorage` service supports these options:
    * {
    *   name: the name of the database (__ionicstorage by default)
    *   backupFlag: // where to store the file, default is BACKUP_LOCAL which DOES NOT store to iCloud. Other options: BACKUP_LIBRARY, BACKUP_DOCUMENTS
    *   existingDatabase: whether to load this as an existing database (default is false)
    * }
    *
    */
    export class SqlStorage extends StorageEngine {
        static BACKUP_LOCAL: number;
        static BACKUP_LIBRARY: number;
        static BACKUP_DOCUMENTS: number;
        constructor(options: any);
        _getBackupLocation(dbFlag: any): number;
        _tryInit(): void;
        /**
        * Perform an arbitrary SQL operation on the database. Use this method
        * to have full control over the underlying database through SQL operations
        * like SELECT, INSERT, and UPDATE.
        *
        * @param {string} query the query to run
        * @param {array} params the additional params to use for query placeholders
        * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
        */
        query(query: any, ...params: any[]): any;
        /**
        * Get the value in the database identified by the given key.
        * @param {string} key the key
        * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
        */
        get(key: any): any;
        /**
        * Set the value in the database for the given key. Existing values will be overwritten.
        * @param {string} key the key
        * @param {string} value The value (as a string)
        * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
        */
        set(key: any, value: any): any;
        /**
        * Remove the value in the database for the given key.
        * @param {string} key the key
        * @param {string} value The value (as a string)
        * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
        */
        remove(key: any): any;
    }
    
    // Source code:
    // platform/storage.d.ts
    
    // export * from './storage/storage';
    // export * from './storage/local-storage';
    // export * from './storage/sql';
    
    // Source code:
    // translation/translate_pipe.d.ts
    
    /**
    * The Translate pipe makes it easy to translate strings.
    *
    * @usage
    * Translate using the current language or language set through Translate.setLanguage
    * {{ 'Please enter your location' | translate }}
    *
    * Translate using a specific language
    * {{ 'Please enter your location' | translate:"de" }}
    */
    export class TranslatePipe implements PipeTransform {
        constructor(translate: Translate);
        transform(value: any, args: any): any;
        supports(obj: any): boolean;
    }
    
    // Source code:
    // ionic.d.ts
    /*   
    export * from './config/bootstrap';
    export * from './config/config';
    // export * from './config/modes';
    export * from './config/decorators';
    export * from './config/directives';
    export * from './components';
    export * from './platform/platform';
    // export * from './platform/registry';
    export * from './platform/storage';
    export * from './util/click-block';
    export * from './util/events';
    export * from './animations/animation';
    // export * from './animations/builtins';
    export * from './transitions/transition';
    // export * from './transitions/ios-transition';
    // export * from './transitions/md-transition';
    export * from './translation/translate';
    export * from './translation/translate_pipe';
    */
    
    // Source code:
    // util.d.ts
    
    export const dom: any;
    /* export * from 'ionic/util/util'; */
    
    // Source code:
    // gestures/drag-gesture.d.ts
    
    export class DragGesture extends Gesture {
        constructor(element: any, opts?: {});
        listen(): void;
        onDrag(): void;
        onDragStart(): void;
        onDragEnd(): void;
    }
    
    // Source code:
    // gestures/hammer.d.ts
    
    /**
    * Simple way to create an manager with a default set of recognizers.
    * @param {HTMLElement} element
    * @param {Object} [options]
    * @constructor
    */
    function Hammer(element: any, options: any): any;
    //export { Hammer };
    
    // Source code:
    // gestures/slide-gesture.d.ts
    
    export class SlideGesture extends DragGesture {
        constructor(element: any, opts?: {});
        getSlideBoundaries(slide: any, ev: any): {
            min: number;
            max: any;
        };
        getElementStartPos(slide: any, ev: any): number;
        canStart(): boolean;
        onDragStart(ev?: any): boolean;
        onDrag(ev?: any): void;
        onDragEnd(ev?: any): void;
        onSlideBeforeStart(): void;
        onSlideStart(): void;
        onSlide(): void;
        onSlideEnd(): void;
    }
    
    // Source code:
    // components/menu/menu-types.d.ts
    
    /**
    * Menu Type
    * Base class which is extended by the various types. Each
    * type will provide their own animations for open and close
    * and registers itself with Menu.
    */
    export class MenuType {
        constructor();
        setOpen(shouldOpen: any): any;
        setProgressStart(isOpen: any): void;
        setProgess(value: any): void;
        setProgressEnd(shouldComplete: any): any;
        onDestroy(): void;
    }
    
    // Source code:
    // config/test/config.spec.d.ts
    
    export function run(): void;
    
    // Source code:
    // platform/test/platform.spec.d.ts
    
    export function run(): void;

}