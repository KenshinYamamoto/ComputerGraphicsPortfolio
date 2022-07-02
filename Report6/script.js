window.addEventListener('DOMContentLoaded', init);

function init(){
    const width = 800;
    const height = 600;
    let horseSize = 2;
    var greensofa = [[0,100,0],[205,133,63],[139,69,19],[0,100,0]];
    var bluesofa = [[30,144,255],[205,133,63],[139,69,19],[30,144,255]];
    var pinksofa = [[238,130,238],[205,133,63],[139,69,19],[238,130,238]];
    var orangesofa = [[248,180,0],[205,133,63],[139,69,19],[248,180,0]];
    var crownColor = [[255,255,255],[0,255,0],[255,215,0],[255,0,0],[255,215,0],[0,0,0],[255,215,0],[255,255,0],[0,0,255],[255,0,255],[255,215,0]]
    var a = 1;

    var renderer = new THREE.WebGLRenderer();
    document.body.appendChild(renderer.domElement);
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    renderer.setClearColor(0x98fb98);

    var scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height);
    camera.position.set(0,10,45);
    const controls = new THREE.OrbitControls(camera, document.body);
    
    // Lightをシーンに追加
    var directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(0,20,30);
    directionalLight.shadowMapWidth = 2048;
    directionalLight.shadowMapHeight = 2048;
    directionalLight.castShadow = true;
    directionalLight.shadow.camera.left = -30;
    directionalLight.shadow.camera.right = 30;
    directionalLight.shadow.camera.top = 30;
    directionalLight.shadow.camera.buttom = -30;
    scene.add(directionalLight);

    // ポイントライト
    var pointLight1 = new THREE.PointLight(0xffffff,0.5,50,1.0);
    pointLight1.castShadow = true;
    pointLight1.position.set(0,8.5,0);
    scene.add(pointLight1);

    var pointLight2 = new THREE.PointLight(0xffffff,0.5,50,1.0);
    pointLight2.castShadow = true;
    pointLight2.position.set(0,8.5,-20);
    scene.add(pointLight2);

    var pointLight3 = new THREE.PointLight(0xffffff,0.5,50,1.0);
    pointLight3.castShadow = true;
    pointLight3.position.set(10,8.5,-10);
    scene.add(pointLight3);

    var pointLight4 = new THREE.PointLight(0xffffff,0.5,50,1.0);
    pointLight4.castShadow = true;
    pointLight4.position.set(-10,8.5,-10);
    scene.add(pointLight4);

    // 環境光を追加
    var ambient = new THREE.AmbientLight(0x333333);
    scene.add(ambient);

    const horseOutsideGroup = new THREE.Group();
    const horseInsideGroup = new THREE.Group();
    const handrailOutsideGroup = new THREE.Group();
    const handrailInsideGroup = new THREE.Group();
    const sofaGroup = new THREE.Group();
    horseOutsideGroup.position.set(0,0,-10);
    horseInsideGroup.position.set(0,0,-10);
    handrailOutsideGroup.position.set(0,0,-10);
    handrailInsideGroup.position.set(0,2,-10);
    sofaGroup.position.set(0,0,-10);
    
    //*************************************************************************************************************************************
    // 馬
    var horseLoader = new THREE.OBJLoader();
    horseLoader.load('horse.obj', function (horse1) {
        horse1.traverse(function (child) {
            child.receiveShadow = true;
            child.castShadow = true;
        });
        horse1.position.set(0,0.5,12);
        horse1.rotation.y = Math.PI/2;
        horse1.scale.set(horseSize,horseSize,horseSize);
        horseOutsideGroup.add(horse1);
    });
    // 手すり
    var handrailGeometry = new THREE.CylinderGeometry(0.2,0.2,10,32);
    var handrailMaterial = new THREE.MeshPhongMaterial({color:0xffff00});
    var handrail = new THREE.Mesh(handrailGeometry,handrailMaterial);
    handrail.receiveShadow = true;
    handrail.castShadow = true;
    handrail.position.set(1.5,4,12);
    handrailOutsideGroup.add(handrail);

    horseLoader.load('horse.obj', function (horse2) {
        horse2.traverse(function (child) {
            child.receiveShadow = true;
            child.castShadow = true;
        });
        horse2.position.set(12,-0.5,0);
        horse2.rotation.y = Math.PI;
        horse2.scale.set(horseSize,horseSize,horseSize);
        horseOutsideGroup.add(horse2);
    });
    // 手すり
    var handrail = new THREE.Mesh(handrailGeometry,handrailMaterial);
    handrail.receiveShadow = true;
    handrail.castShadow = true;
    handrail.position.set(12,4,-1.5);
    handrailOutsideGroup.add(handrail);

    horseLoader.load('horse.obj', function (horse3) {
        horse3.traverse(function (child) {
            child.receiveShadow = true;
            child.castShadow = true;
        });
        horse3.position.set(0,0,-12);
        horse3.rotation.y = -Math.PI/2;
        horse3.scale.set(horseSize,horseSize,horseSize);
        horseOutsideGroup.add(horse3);
    });
    // 手すり
    var handrail = new THREE.Mesh(handrailGeometry,handrailMaterial);
    handrail.receiveShadow = true;
    handrail.castShadow = true;
    handrail.position.set(-1.5,4,-12);
    handrailOutsideGroup.add(handrail);

    horseLoader.load('horse.obj', function (horse4) {
        horse4.traverse(function (child) {
            child.receiveShadow = true;
            child.castShadow = true;
        });
        horse4.position.set(-12,-0.3,0);
        horse4.scale.set(horseSize,horseSize,horseSize);
        horseOutsideGroup.add(horse4);
    });
    // 手すり
    var handrail = new THREE.Mesh(handrailGeometry,handrailMaterial);
    handrail.receiveShadow = true;
    handrail.castShadow = true;
    handrail.position.set(-12,4,1.5);
    handrailOutsideGroup.add(handrail);
    //*************************************************************************************************************************************

    // 馬
    var horseLoader = new THREE.OBJLoader();
    horseLoader.load('horse.obj', function (horse5) {
        horse5.traverse(function (child) {
            child.receiveShadow = true;
            child.castShadow = true;
        });
        console.log(horse5.children[0].material.color.r);
        horse5.position.set(5,2,5);
        horse5.rotation.y = 3*Math.PI/4;
        horse5.scale.set(horseSize,horseSize,horseSize);
        horseInsideGroup.add(horse5);
    });
    // 手すり
    var handrailGeometry = new THREE.CylinderGeometry(0.2,0.2,10,32);
    var handrailMaterial = new THREE.MeshPhongMaterial({color:0xffff00});
    var handrail = new THREE.Mesh(handrailGeometry,handrailMaterial);
    handrail.receiveShadow = true;
    handrail.castShadow = true;
    handrail.position.set(6,4,4);
    handrailOutsideGroup.add(handrail);

    // 馬
    var horseLoader = new THREE.OBJLoader();
    horseLoader.load('horse.obj', function (horse6) {
        horse6.traverse(function (child) {
            child.receiveShadow = true;
            child.castShadow = true;
        });
        horse6.position.set(5,2,-5);
        horse6.rotation.y = -3*Math.PI/4;
        horse6.scale.set(horseSize,horseSize,horseSize);
        horseInsideGroup.add(horse6);
    });
    // 手すり
    var handrailGeometry = new THREE.CylinderGeometry(0.2,0.2,10,32);
    var handrailMaterial = new THREE.MeshPhongMaterial({color:0xffff00});
    var handrail = new THREE.Mesh(handrailGeometry,handrailMaterial);
    handrail.receiveShadow = true;
    handrail.castShadow = true;
    handrail.position.set(4,4,-6);
    handrailOutsideGroup.add(handrail);

    // 馬
    var horseLoader = new THREE.OBJLoader();
    horseLoader.load('horse.obj', function (horse7) {
        horse7.traverse(function (child) {
            child.receiveShadow = true;
            child.castShadow = true;
        });
        horse7.position.set(-5,2,-5);
        horse7.rotation.y = -Math.PI/4;
        horse7.scale.set(horseSize,horseSize,horseSize);
        horseInsideGroup.add(horse7);
    });
    // 手すり
    var handrailGeometry = new THREE.CylinderGeometry(0.2,0.2,10,32);
    var handrailMaterial = new THREE.MeshPhongMaterial({color:0xffff00});
    var handrail = new THREE.Mesh(handrailGeometry,handrailMaterial);
    handrail.receiveShadow = true;
    handrail.castShadow = true;
    handrail.position.set(-6,4,-4);
    handrailOutsideGroup.add(handrail);

    // 馬
    var horseLoader = new THREE.OBJLoader();
    horseLoader.load('horse.obj', function (horse8) {
        horse8.traverse(function (child) {
            child.receiveShadow = true;
            child.castShadow = true;
        });
        horse8.position.set(-5,2,5);
        horse8.rotation.y = Math.PI/4;
        horse8.scale.set(horseSize,horseSize,horseSize);
        horseInsideGroup.add(horse8);
    });
    // 手すり
    var handrailGeometry = new THREE.CylinderGeometry(0.2,0.2,10,32);
    var handrailMaterial = new THREE.MeshPhongMaterial({color:0xffff00});
    var handrail = new THREE.Mesh(handrailGeometry,handrailMaterial);
    handrail.receiveShadow = true;
    handrail.castShadow = true;
    handrail.position.set(-4,4,6);
    handrailOutsideGroup.add(handrail);

    //***************************************************************************************************************

    // ソファ
    var sofaLoader = new THREE.OBJLoader();
    sofaLoader.load('sofa2.obj', function (sofa1) {
        sofa1.traverse(function (child) {
            child.receiveShadow = true;
            child.castShadow = true;
        });
        for(var i = 0;i < 4;i++){
            sofa1.children[i].material.color.r = decisionColor(greensofa[i][0]);
            sofa1.children[i].material.color.g = decisionColor(greensofa[i][1]);
            sofa1.children[i].material.color.b = decisionColor(greensofa[i][2]);
        }
        sofa1.position.set(-8,-0.5,8);
        sofa1.scale.set(0.02,0.04,0.04);
        sofa1.rotation.y = Math.PI/4;
        sofaGroup.add(sofa1);
    });
    // 手すり
    var handrailGeometry = new THREE.CylinderGeometry(0.2,0.2,10,32);
    var handrailMaterial = new THREE.MeshPhongMaterial({color:0xffff00});
    var handrail = new THREE.Mesh(handrailGeometry,handrailMaterial);
    handrail.receiveShadow = true;
    handrail.castShadow = true;
    handrail.position.set(-8.6,4,7.5);
    handrailOutsideGroup.add(handrail);

    // ソファ
    var sofaLoader = new THREE.OBJLoader();
    sofaLoader.load('sofa2.obj', function (sofa2) {
        sofa2.traverse(function (child) {
            child.receiveShadow = true;
            child.castShadow = true;
        });
        for(var i = 0;i < 4;i++){
            sofa2.children[i].material.color.r = decisionColor(bluesofa[i][0]);
            sofa2.children[i].material.color.g = decisionColor(bluesofa[i][1]);
            sofa2.children[i].material.color.b = decisionColor(bluesofa[i][2]);
        }
        sofa2.position.set(8,-0.5,8);
        sofa2.scale.set(0.02,0.04,0.04);
        sofa2.rotation.y = 3*Math.PI/4;
        sofaGroup.add(sofa2);
    });
    // 手すり
    var handrailGeometry = new THREE.CylinderGeometry(0.2,0.2,10,32);
    var handrailMaterial = new THREE.MeshPhongMaterial({color:0xffff00});
    var handrail = new THREE.Mesh(handrailGeometry,handrailMaterial);
    handrail.receiveShadow = true;
    handrail.castShadow = true;
    handrail.position.set(7.5,4,8.6);
    handrailOutsideGroup.add(handrail);

    // ソファ
    var sofaLoader = new THREE.OBJLoader();
    sofaLoader.load('sofa2.obj', function (sofa3) {
        sofa3.traverse(function (child) {
            child.receiveShadow = true;
            child.castShadow = true;
        });
        for(var i = 0;i < 4;i++){
            sofa3.children[i].material.color.r = decisionColor(pinksofa[i][0]);
            sofa3.children[i].material.color.g = decisionColor(pinksofa[i][1]);
            sofa3.children[i].material.color.b = decisionColor(pinksofa[i][2]);
        }
        sofa3.position.set(8,-0.5,-8);
        sofa3.scale.set(0.02,0.04,0.04);
        sofa3.rotation.y = -3*Math.PI/4;
        sofaGroup.add(sofa3);
    });
    // 手すり
    var handrailGeometry = new THREE.CylinderGeometry(0.2,0.2,10,32);
    var handrailMaterial = new THREE.MeshPhongMaterial({color:0xffff00});
    var handrail = new THREE.Mesh(handrailGeometry,handrailMaterial);
    handrail.receiveShadow = true;
    handrail.castShadow = true;
    handrail.position.set(8.6,4,-7.5);
    handrailOutsideGroup.add(handrail);

    // ソファ
    var sofaLoader = new THREE.OBJLoader();
    sofaLoader.load('sofa2.obj', function (sofa4) {
        sofa4.traverse(function (child) {
            child.receiveShadow = true;
            child.castShadow = true;
        });
        for(var i = 0;i < 4;i++){
            sofa4.children[i].material.color.r = decisionColor(orangesofa[i][0]);
            sofa4.children[i].material.color.g = decisionColor(orangesofa[i][1]);
            sofa4.children[i].material.color.b = decisionColor(orangesofa[i][2]);
        }
        sofa4.position.set(-8,-0.5,-8);
        sofa4.scale.set(0.02,0.04,0.04);
        sofa4.rotation.y = -Math.PI/4;
        sofaGroup.add(sofa4);
    });
    // 手すり
    var handrailGeometry = new THREE.CylinderGeometry(0.2,0.2,10,32);
    var handrailMaterial = new THREE.MeshPhongMaterial({color:0xffff00});
    var handrail = new THREE.Mesh(handrailGeometry,handrailMaterial);
    handrail.receiveShadow = true;
    handrail.castShadow = true;
    handrail.position.set(-7.5,4,-8.6);
    handrailOutsideGroup.add(handrail);


    // 土台
    var merryFoundationGeometry = new THREE.CylinderGeometry(15,15,1,32);
    var merryFoundationMaterial = new THREE.MeshPhongMaterial({color:0x808080});
    var merryFoundation = new THREE.Mesh(merryFoundationGeometry,merryFoundationMaterial);
    merryFoundation.receiveShadow = true;
    merryFoundation.position.set(0,-1,-10);
    scene.add(merryFoundation);

    // 真ん中の柱
    var merryPillarGeometry = new THREE.CylinderGeometry(5,5,10,6);
    var merryPillarMaterial = new THREE.MeshStandardMaterial({color:0xfffacd});
    var merryPillar = new THREE.Mesh(merryPillarGeometry,merryPillarMaterial);
    merryPillar.castShadow = true;
    merryPillar.receiveShadow = true;
    merryPillar.position.set(0,4,-10);
    scene.add(merryPillar);

    scene.add(horseOutsideGroup);
    scene.add(handrailOutsideGroup);
    scene.add(horseInsideGroup);
    scene.add(handrailInsideGroup);
    scene.add(sofaGroup);
    update();

    //****************************************************************************************************************

    // 屋根
    var roofGeometry = new THREE.CylinderGeometry(15,16,3,32);
    var roofMaterial = new THREE.MeshPhongMaterial({color:0xff8000});
    var roof = new THREE.Mesh(roofGeometry,roofMaterial);
    roof.castShadow = true;
    roof.receiveShadow = true;
    roof.position.set(0,10.5,-10);
    scene.add(roof);

    // 三角の屋根
    var triangleRoofGeometry = new THREE.ConeGeometry(15,5,32);
    var triangleRoofMaterial = new THREE.MeshPhongMaterial({color:0x00ffff});
    var triangleRoof = new THREE.Mesh(triangleRoofGeometry,triangleRoofMaterial);
    triangleRoof.receiveShadow = true;
    triangleRoof.castShadow = true;
    triangleRoof.position.set(0,14.5,-10);
    scene.add(triangleRoof);

    // 王冠
    var crownLoader = new THREE.OBJLoader();
    crownLoader.load('crown.obj', function (crown) {
        crown.traverse(function (child) {
            child.receiveShadow = true;
            child.castShadow = true;
        });
        for(var i = 0;i < crownColor.length;i++){
            crown.children[i].material.color.r = decisionColor(crownColor[i][0]);
            crown.children[i].material.color.g = decisionColor(crownColor[i][1]);
            crown.children[i].material.color.b = decisionColor(crownColor[i][2]);
        }
        crown.position.set(0,17.5,-10);
        crown.scale.set(0.01,0.01,0.01);
        scene.add(crown);
    });

    /*
    *アニメーション
    */
    function update(){
        renderer.render(scene, camera);
        horseOutsideGroup.rotation.y += 0.005;
        handrailOutsideGroup.rotation.y += 0.005;
        horseInsideGroup.rotation.y += 0.005;
        handrailInsideGroup.rotation.y += 0.005;
        sofaGroup.rotation.y += 0.005;

        if(horseOutsideGroup.position.y <= 0){
            a *= -1;
        } else if(horseOutsideGroup.position.y >= 2){
            a *= -1;
        }

        switch(a){
            case 1:
                horseOutsideGroup.position.y -= 0.01;
            break;
            case -1:
                horseOutsideGroup.position.y += 0.01;
            break;
        }

        switch(a){
            case -1:
                horseInsideGroup.position.y -= 0.01;
            break;
            case 1:
                horseInsideGroup.position.y += 0.01;
            break;
        }

        requestAnimationFrame(update);
    }
}

function decisionColor(color){
    return color/255;
}
