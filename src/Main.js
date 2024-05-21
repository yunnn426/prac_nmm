import React, { useEffect, useRef } from "react";
import * as THREE from 'three';
import { OrbitControls } from 'three-stdlib';   // 마우스 따라 이동

function Main() {
    // render cube
  const mountRef = useRef(null);

  useEffect(() => {
    // 씬(Scene), 카메라(Camera), 렌더러(Renderer) 생성
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // OrbitControls 생성
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // 감속 효과 활성화
    controls.dampingFactor = 0.25; // 감속 정도 설정
    controls.enableZoom = true; // 줌 활성화

    // 큐브 생성
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0xFFF1AA });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // 카메라 위치 설정
    camera.position.z = 5;

    // 애니메이션 루프
    const animate = () => {
      requestAnimationFrame(animate);
    // 자동 회전
    //   cube.rotation.x += 0.01;
    //   cube.rotation.y += 0.01;
      controls.update(); // 애니메이션 루프에서 controls 업데이트
      renderer.render(scene, camera);
    };
    animate();

    // 윈도우 리사이즈 핸들러
    const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener('resize', handleResize);

    // 클린업 함수
    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    return (
        <div ref={mountRef}></div>
    );
}

export default Main;