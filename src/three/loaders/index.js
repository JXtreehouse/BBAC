
import * as Three from 'three';
// import './MTLLoader';
// import './OBJLoader';

//外部资源加载器
var jsonLoader = new Three.ObjectLoader();

// var objLoader = new THREE.ObjectLoader()
// var mtlLoader = new THREE.OBJMTLLoader()
// var materialLoader = new THREE.MaterialLoader()
// var fontLoader = new FontLoader()

/**
 * 加载JSON格式模型
 * @param {array} [.json model] 
 * @param {function} [callback function] 
 */
var loadJson = function (arr, callback) {
    arr.forEach(function(item){
        jsonLoader.load(
            // 资源链接
            item,
            // 资源加载完成后的回调函数
            function ( obj) {
                //添加点击事件
                callback && callback(obj)
            }
        );
  })
}
/*
  加载.mtl资源
  @param {array} [3dMaxs model]
  @param {function} [callback function]
  @return {void}
*/
/*function loadOBJ (arr, callback) {
    arr.map(function(item){
        mtlLoader.load( item + '.mtl', function( materials ) {
            materials.preload();
            objLoader.setMaterials( materials );
            objLoader.load(
                // 资源链接
                item + '.obj',
                // 资源加载完成后的回调函数
                function ( obj) {
                    scene.add( obj );
                    callback && callback(obj)
                }
            );
        });
    })
}*/
export {
  jsonLoader,
  // objLoader,
  // mtlLoader,
  loadJson,
  // loadOBJ
}
