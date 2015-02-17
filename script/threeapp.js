/**
 * Threejs app base class
 */
var ThreejsApp = function() {
    this.renderer = null;
    this.scene = null;
    this.camera = null;
};

ThreejsApp.prototype = {
    init: function() {
        var self = this;
        self.initRender();
        self.initScene();
        self.initCamera();
        self.initLight();
        self.init3dObject();
        self.render();
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
        camera.position.set( 0, 0, 3 );
    },

    initLight: function() {
        var light = new THREE.DirectionalLight( 0xffffff, 1.5);
        light.position.set(0, 0, 1);
        this.scene.add( light );
    },

    init3dObject: function() {

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
    }
};