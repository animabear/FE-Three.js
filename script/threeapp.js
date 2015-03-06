/**
 * Threejs app base class
 */
var ThreejsApp = function(config) {
    this.renderer = null;
    this.scene = null;
    this.camera = null;
    this.config = {
        zPos: 3 // 照相机位置
    }
};

ThreejsApp.prototype = {
    init: function() {
        this.initRender();
        this.initScene();
        this.initCamera();
        this.initLight();
        this.init3dObject();
        this.initMouseEvt();
        this.render();
    },

    initRender: function() {
        var renderer = this.renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
    },

    initScene: function() {
        this.scene = new THREE.Scene();
    },

    initCamera: function() {
        var camera = this.camera = new THREE.PerspectiveCamera( 45, 
            window.innerWidth / window.innerHeight, 
            1, 
            4000 );
        camera.position.set( 0, 0, this.config.zPos );
    },

    initLight: function() {
        var light = new THREE.DirectionalLight( 0xffffff, 1.5);
        light.position.set(0, 0, 1);
        this.scene.add( light );
    },

    init3dObject: function() {

    },

    initMouseEvt: function() {
        var self = this;
        var dom = self.renderer.domElement;

        dom.addEventListener( 'mousemove', function(e) { 
            self.onDocumentMouseMove(e); 
        }, false );

        dom.addEventListener( 'mousedown', function(e) { 
            self.onDocumentMouseDown(e); 
        }, false );

        dom.addEventListener( 'mouseup', function(e) { 
            self.onDocumentMouseUp(e); 
        }, false );
    
        dom.addEventListener( 'mousewheel', function(e) {
            var delta = e.wheelDelta / 120;
            self.onDocumentMouseWheel(e, delta);
        }, false );

        dom.addEventListener( 'DOMMouseScroll', function(e) {
            var delta = -(e.detail || 0) / 3;
            self.onDocumentMouseWheel(e, delta);
        }, false );
    },

    render: function() {
        var self = this;
        self.update();
        self.renderer.render(self.scene, self.camera);
        requestAnimationFrame(function() {
            self.render();
        });
    },

    update: function() {
        // cube.rotation.x -= 0.01;
        // cube.rotation.y += 0.01;
    },

    onDocumentMouseMove: function(e, delta) {
        e.preventDefault();
    },

    onDocumentMouseDown: function(e, delta) {
        e.preventDefault();
    },

    onDocumentMouseUp: function(e, delta) {
        e.preventDefault();
    },

    onDocumentMouseWheel: function(e, delta) {
        e.preventDefault();
        this.handleMouseScroll && this.handleMouseScroll(delta);
    }
};