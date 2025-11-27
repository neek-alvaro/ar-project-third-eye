// @ts-nocheck
"use client";

import Script from "next/script";

export default function ARScene() {
  return (
    <>
      {/* A-Frame */}
      <Script
        src="https://aframe.io/releases/1.6.0/aframe.min.js"
        strategy="beforeInteractive"
      />

      <Script
        src="https://unpkg.com/aframe-look-at-component@1.0.0/dist/aframe-look-at-component.min.js"
        strategy="beforeInteractive"
      />

      {/* AR.js */}
      <Script
        src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js"
        strategy="beforeInteractive"
      />

      <a-scene
        vr-mode-ui="enabled: false"
        arjs="sourceType: webcam; videoTexture: true; debugUIEnabled: false;"
      >
        {/* <a-entity
          gltf-model="./assets/magnemite/scene.gltf"
          rotation="0 180 0"
          scale="0.15 0.15 0.15"
          gps-entity-place="latitude: 10.353806; longitude: 123.9560562;"
          animation-mixer
        /> */}

        {/* <a-text
          value="NThis content will always face you."
          look-at="[gps-camera]"
          scale="120 120 120"
          gps-entity-place="latitude: 10.353806; longitude: 123.9560562;"
        ></a-text> */}

        <a-entity
          gltf-model="/assets/magnemite/scene.gltf"
          rotation="0 180 0"
          scale="0.05 0.05 0.05"
          look-at="#camera"
          gps-entity-place="latitude: 10.353806; longitude: 123.9560562; altitude: 8"
          animation-mixer
        ></a-entity>

        {/* <a-camera gps-camera rotation-reader></a-camera> */}
      </a-scene>
    </>
  );
}
