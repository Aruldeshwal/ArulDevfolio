import { Camera, Mesh, Plane, Program, Renderer, Texture, Transform } from 'ogl';
import { useEffect, useRef } from 'react';
import "../../index.css"

// --- OGL and Utility Types ---
type GL = Renderer['gl'];

// --- Utility Functions (Truncated for brevity, functions remain the same) ---

function debounce<T extends (...args: any[]) => void>(func: T, wait: number) {
    let timeout: number;
    return function (this: any, ...args: Parameters<T>) {
        window.clearTimeout(timeout);
        timeout = window.setTimeout(() => func.apply(this, args), wait);
    };
}
function lerp(p1: number, p2: number, t: number): number { return p1 + (p2 - p1) * t; }
function autoBind(instance: any): void { 
    const proto = Object.getPrototypeOf(instance);
    Object.getOwnPropertyNames(proto).forEach(key => {
        if (key !== 'constructor' && typeof instance[key] === 'function') {
            instance[key] = instance[key].bind(instance);
        }
    });
}
function getFontSize(font: string): number { const match = font.match(/(\d+)px/); return match ? parseInt(match[1], 10) : 30; }

function createTextTexture(
  gl: GL, text: string, font: string = 'bold 30px monospace', color: string = 'black', isIcon: boolean = false
): { texture: Texture; width: number; height: number } {
  // ... (implementation remains the same)
  const canvas = document.createElement('canvas'); const context = canvas.getContext('2d'); if (!context) throw new Error('Could not get 2d context');
  const iconFontSize = 100; const fontToUse = isIcon ? `${iconFontSize}px sans-serif` : font; context.font = fontToUse;
  const metrics = context.measureText(text); const textWidth = Math.ceil(metrics.width); const fontSize = getFontSize(fontToUse); const textHeight = Math.ceil(fontSize * 1.2);
  canvas.width = isIcon ? iconFontSize * 1.5 : textWidth + 20; canvas.height = isIcon ? iconFontSize * 1.5 : textHeight + 20;
  context.font = fontToUse; context.fillStyle = color; context.textBaseline = 'middle'; context.textAlign = 'center';
  context.clearRect(0, 0, canvas.width, canvas.height); context.fillText(text, canvas.width / 2, canvas.height / 2);
  const texture = new Texture(gl, { generateMipmaps: false }); texture.image = canvas; return { texture, width: canvas.width, height: canvas.height };
}

// New Utility Function for Loading Textures from URLs
export function createImageTexture(
    gl: GL, 
    url: string
): Promise<{ texture: Texture; width: number; height: number }> {
    return new Promise((resolve) => {
        const img = new Image();
        img.crossOrigin = 'anonymous'; // Essential for external images/CORS in WebGL
        
        img.onload = () => {
            const texture = new Texture(gl, { generateMipmaps: false });
            texture.image = img;
            resolve({ texture, width: img.naturalWidth, height: img.naturalHeight });
        };
        
        img.onerror = (e) => {
            console.error(`Failed to load image texture from URL: ${url}`, e);
            // Fallback: create a red placeholder texture
            const { texture: fallbackTexture, width, height } = createTextTexture(
                gl, 'ERR', 'bold 100px sans-serif', 'red', true
            );
            resolve({ texture: fallbackTexture, width, height });
        };

        img.src = url;
    });
}


// --- Title Class (Updated Font Default) ---
interface TitleProps { gl: GL; plane: Mesh; renderer: Renderer; text: string; textColor?: string; font?: string; }
class Title {
  gl: GL; plane: Mesh; renderer: Renderer; text: string; textColor: string; font: string; mesh!: Mesh;
  constructor({ gl, plane, renderer, text, textColor = '#ffffff', font = '800 40px Figtree' }: TitleProps) { autoBind(this); this.gl = gl; this.plane = plane; this.renderer = renderer; this.text = text; this.textColor = textColor; this.font = font; this.createMesh(); }
  createMesh() {
    const { texture, width, height } = createTextTexture(this.gl, this.text, this.font, this.textColor, false);
    const geometry = new Plane(this.gl);
    const program = new Program(this.gl, { vertex: `attribute vec3 position; attribute vec2 uv; uniform mat4 modelViewMatrix; uniform mat4 projectionMatrix; varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`, fragment: `precision highp float; uniform sampler2D tMap; varying vec2 vUv; void main() { vec4 color = texture2D(tMap, vUv); if (color.a < 0.1) discard; gl_FragColor = color; }`, uniforms: { tMap: { value: texture } }, transparent: true });
    this.mesh = new Mesh(this.gl, { geometry, program });
    const aspect = width / height; const textHeightScaled = this.plane.scale.y * 0.15; const textWidthScaled = textHeightScaled * aspect; this.mesh.scale.set(textWidthScaled, textHeightScaled, 1);
    this.mesh.position.y = -this.plane.scale.y * 0.5 - textHeightScaled * 0.5 - 0.05; this.mesh.setParent(this.plane);
  }
}


// --- Interfaces & Media Class ---
interface ScreenSize { width: number; height: number; }
interface Viewport { width: number; height: number; }
interface MediaProps {
  geometry: Plane; gl: GL; iconCode: string; iconColor: string; index: number; length: number;
  renderer: Renderer; scene: Transform; screen: ScreenSize; text: string; viewport: Viewport;
  bend: number; textColor: string; borderRadius?: number; font?: string;
}

class Media {
  extra: number = 0; geometry: Plane; gl: GL; iconCode: string; iconColor: string; index: number;
  length: number; renderer: Renderer; scene: Transform; screen: ScreenSize; text: string;
  viewport: Viewport; bend: number; textColor: string; borderRadius: number; font?: string;
  program!: Program; plane!: Mesh; title!: Title; scale!: number; padding!: number; width!: number;
  widthTotal!: number; x!: number; speed: number = 0; isBefore: boolean = false; isAfter: boolean = false;

  constructor(props: MediaProps) {
    autoBind(this);
    this.geometry = props.geometry; this.gl = props.gl; this.iconCode = props.iconCode;
    this.iconColor = props.iconColor; this.index = props.index; this.length = props.length;
    this.renderer = props.renderer; this.scene = props.scene; this.screen = props.screen;
    this.text = props.text; this.viewport = props.viewport; this.bend = props.bend;
    this.textColor = props.textColor; this.font = props.font; 
    this.borderRadius = props.borderRadius ?? 0;

    this.createShader(); this.createMesh(); this.createTitle(); this.onResize();
  }

  createShader() {
    const placeholderTexture = new Texture(this.gl, { generateMipmaps: true });
    this.program = new Program(this.gl, {
      vertex: `attribute vec3 position; attribute vec2 uv; uniform mat4 modelViewMatrix; uniform mat4 projectionMatrix; varying vec2 vUv; void main() { vUv = uv; vec3 p = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); }`,
      fragment: `precision highp float; uniform vec2 uImageSizes; uniform vec2 uPlaneSizes; uniform sampler2D tMap; uniform float uBorderRadius; varying vec2 vUv; float roundedBoxSDF(vec2 p, vec2 b, float r) { vec2 d = abs(p) - b; return length(max(d, vec2(0.0))) + min(max(d.x, d.y), 0.0) - r; } void main() { vec2 ratio = vec2( min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0), min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0) ); vec2 uv = vec2( vUv.x * ratio.x + (1.0 - ratio.x) * 0.5, vUv.y * ratio.y + (1.0 - ratio.y) * 0.5 ); vec4 color = texture2D(tMap, uv); float d = roundedBoxSDF(vUv - 0.5, vec2(0.5 - uBorderRadius), uBorderRadius); float alpha = 1.0 - smoothstep(-0.002, 0.002, d); gl_FragColor = vec4(color.rgb, color.a * alpha); }`,
      uniforms: { tMap: { value: placeholderTexture }, uPlaneSizes: { value: [0, 0] }, uImageSizes: { value: [200, 200] }, uBorderRadius: { value: this.borderRadius } }, transparent: true
    });
    
    const loadImage = async () => {
    // iconCode now represents the image URL/path
    const url = this.iconCode; 
    
    const { texture: loadedTexture, width, height } = await createImageTexture(this.gl, url);
    
    // Update uniforms once the texture is ready
    this.program.uniforms.tMap.value = loadedTexture; 
    this.program.uniforms.uImageSizes.value = [width, height];
  };
  loadImage();
  }
  
  createMesh() { this.plane = new Mesh(this.gl, { geometry: this.geometry, program: this.program }); this.plane.setParent(this.scene); }
  createTitle() { this.title = new Title({ gl: this.gl, plane: this.plane, renderer: this.renderer, text: this.text, textColor: this.textColor, font: this.font }); }
  update(scroll: { current: number; last: number }, direction: 'right' | 'left') { /* ... (update logic remains the same) */ this.plane.position.x = this.x - scroll.current - this.extra; const x = this.plane.position.x; const H = this.viewport.width / 2; if (this.bend === 0) { this.plane.position.y = 0; this.plane.rotation.z = 0; } else { const B_abs = Math.abs(this.bend); const R = (H * H + B_abs * B_abs) / (2 * B_abs); const effectiveX = Math.min(Math.abs(x), H); const arc = R - Math.sqrt(R * R - effectiveX * effectiveX); if (this.bend > 0) { this.plane.position.y = -arc; this.plane.rotation.z = -Math.sign(x) * Math.asin(effectiveX / R); } else { this.plane.position.y = arc; this.plane.rotation.z = Math.sign(x) * Math.asin(effectiveX / R); } } this.speed = scroll.current - scroll.last; const planeOffset = this.plane.scale.x / 2; const viewportOffset = this.viewport.width / 2; this.isBefore = this.plane.position.x + planeOffset < -viewportOffset; this.isAfter = this.plane.position.x - planeOffset > viewportOffset; if (direction === 'right' && this.isBefore) { this.extra -= this.widthTotal; this.isBefore = this.isAfter = false; } if (direction === 'left' && this.isAfter) { this.extra += this.widthTotal; this.isBefore = this.isAfter = false; } }
  onResize({ screen, viewport }: { screen?: ScreenSize; viewport?: Viewport } = {}) { /* ... (resize logic remains the same) */ if (screen) this.screen = screen; if (viewport) { this.viewport = viewport; if (this.plane.program.uniforms.uViewportSizes) { (this.plane.program.uniforms as any).uViewportSizes.value = [this.viewport.width, this.viewport.height]; } } this.scale = this.screen.height / 1500; this.plane.scale.y = (this.viewport.height * (900 * this.scale)) / this.screen.height; this.plane.scale.x = (this.viewport.width * (700 * this.scale)) / this.screen.width; this.plane.program.uniforms.uPlaneSizes.value = [this.plane.scale.x, this.plane.scale.y]; this.padding = 2; this.width = this.plane.scale.x + this.padding; this.widthTotal = this.width * this.length; this.x = this.width * this.index; }
}


// --- App Class ---
// Assuming external data uses 'url' but is cast to ItemConfig internally for consistency
interface ItemConfig { iconCode: string; iconColor: string; text: string; key?: string; url?: string; } 
interface AppConfig { items?: ItemConfig[]; bend?: number; textColor?: string; borderRadius?: number; font?: string; scrollSpeed?: number; scrollEase?: number; }

class App {
  container: HTMLElement; scrollSpeed: number; scroll: { ease: number; current: number; target: number; last: number; position?: number; };
  onCheckDebounce: (...args: any[]) => void; renderer!: Renderer; gl!: GL; camera!: Camera; scene!: Transform; planeGeometry!: Plane;
  medias: Media[] = []; mediasImages: ItemConfig[] = [];
  screen!: { width: number; height: number }; viewport!: { width: number; height: number }; raf: number = 0;
  boundOnResize!: () => void; boundOnWheel!: (e: Event) => void; boundOnTouchDown!: (e: MouseEvent | TouchEvent) => void; boundOnTouchMove!: (e: MouseEvent | TouchEvent) => void; boundOnTouchUp!: () => void;
  isDown: boolean = false; start: number = 0;

  constructor(container: HTMLElement, { items, bend = 1, textColor = '#ffffff', borderRadius = 0, font = '800 36px Figtree', scrollSpeed = 2, scrollEase = 0.05 }: AppConfig) {
    document.documentElement.classList.remove('no-js'); autoBind(this);
    this.container = container; this.scrollSpeed = scrollSpeed; this.scroll = { ease: scrollEase, current: 0, target: 0, last: 0 };
    this.onCheckDebounce = debounce(this.onCheck, 200);
    this.createRenderer(); this.createCamera(); this.createScene(); this.onResize();
    this.createGeometry(); 
    this.createMedias(items, bend, textColor, borderRadius, font);
    this.update(); this.addEventListeners();
  }

  createRenderer() { this.renderer = new Renderer({ alpha: true, antialias: true, dpr: Math.min(window.devicePixelRatio || 1, 2) }); this.gl = this.renderer.gl; this.gl.clearColor(0, 0, 0, 0); this.container.appendChild(this.renderer.gl.canvas as HTMLCanvasElement); }
  createCamera() { this.camera = new Camera(this.gl); this.camera.fov = 45; this.camera.position.z = 20; }
  createScene() { this.scene = new Transform(); }
  createGeometry() { this.planeGeometry = new Plane(this.gl, { heightSegments: 50, widthSegments: 100 }); }

  createMedias(items: ItemConfig[] | undefined, bend: number = 1, textColor: string = '#ffffff', borderRadius: number = 0, font: string = '800 36px Figtree') {
    // Default items changed to use sample image paths
    const defaultItems: ItemConfig[] = [
      { iconCode: 'assets/html.png', iconColor: '#E34F26', text: 'HTML' },
      { iconCode: 'assets/css.png', iconColor: '#1572B6', text: 'CSS' },
      { iconCode: 'assets/javascript.png', iconColor: '#F7DF1E', text: 'JavaScript' },
      { iconCode: 'assets/typescript.png', iconColor: '#3178C6', text: 'TypeScript' },
      { iconCode: 'assets/tailwind.png', iconColor: '#06B6D4', text: 'Tailwind' },
      { iconCode: 'assets/react.png', iconColor: '#61DAFB', text: 'React' },
      { iconCode: 'assets/next.png', iconColor: '#111111', text: 'Next.js'},
    ];

    const galleryItems = items && items.length ? items : defaultItems;
    
    // Ensures that 'url' from external data is correctly mapped to 'iconCode' internally
    const uniqueItems = galleryItems.map((item, index) => ({ 
      ...item, 
      iconCode: item.url || item.iconCode, // Prioritize 'url' if available, otherwise use existing 'iconCode'
      key: `${item.url || item.iconCode}-${index}` 
  }));
    const duplicatedItems = uniqueItems.map((item, index) => ({ ...item, key: `${item.iconCode}-clone-${index}` }));

    this.mediasImages = uniqueItems.concat(duplicatedItems);

    this.medias = this.mediasImages.map((data, index) => {
      return new Media({
        geometry: this.planeGeometry, gl: this.gl, iconCode: data.iconCode, iconColor: data.iconColor, 
        index, length: this.mediasImages.length, renderer: this.renderer, scene: this.scene, 
        screen: this.screen, text: data.text, viewport: this.viewport, bend, textColor, borderRadius, font
      });
    });
  }

  onTouchDown(e: MouseEvent | TouchEvent) { /* ... */ this.isDown = true; this.scroll.position = this.scroll.current; this.start = 'touches' in e ? e.touches[0].clientX : e.clientX; }
  onTouchMove(e: MouseEvent | TouchEvent) { /* ... */ if (!this.isDown) return; const x = 'touches' in e ? e.touches[0].clientX : e.clientX; const distance = (this.start - x) * (this.scrollSpeed * 0.025); this.scroll.target = (this.scroll.position ?? 0) + distance; }
  onTouchUp() { /* ... */ this.isDown = false; this.onCheck(); }
  onWheel(e: Event) { /* ... */ const wheelEvent = e as WheelEvent; const delta = wheelEvent.deltaY || (wheelEvent as any).wheelDelta || (wheelEvent as any).detail; this.scroll.target += (delta > 0 ? this.scrollSpeed : -this.scrollSpeed) * 0.2; this.onCheckDebounce(); }
  onCheck() { /* ... */ if (!this.medias || !this.medias[0]) return; const width = this.medias[0].width; const itemIndex = Math.round(Math.abs(this.scroll.target) / width); const item = width * itemIndex; this.scroll.target = this.scroll.target < 0 ? -item : item; }
  onResize() { /* ... */ this.screen = { width: this.container.clientWidth, height: this.container.clientHeight }; this.renderer.setSize(this.screen.width, this.screen.height); this.camera.perspective({ aspect: this.screen.width / this.screen.height }); const fov = (this.camera.fov * Math.PI) / 180; const height = 2 * Math.tan(fov / 2) * this.camera.position.z; const width = height * this.camera.aspect; this.viewport = { width, height }; if (this.medias) { this.medias.forEach(media => media.onResize({ screen: this.screen, viewport: this.viewport })); } }
  update() { /* ... */ this.scroll.current = lerp(this.scroll.current, this.scroll.target, this.scroll.ease); const direction = this.scroll.current > this.scroll.last ? 'right' : 'left'; if (this.medias) { this.medias.forEach(media => media.update(this.scroll, direction)); } this.renderer.render({ scene: this.scene, camera: this.camera }); this.scroll.last = this.scroll.current; this.raf = window.requestAnimationFrame(this.update.bind(this)); }
  destroy() { /* ... */ window.cancelAnimationFrame(this.raf); window.removeEventListener('resize', this.boundOnResize); window.removeEventListener('mousewheel', this.boundOnWheel); window.removeEventListener('wheel', this.boundOnWheel); window.removeEventListener('mousedown', this.boundOnTouchDown); window.removeEventListener('mousemove', this.boundOnTouchMove); window.removeEventListener('mouseup', this.boundOnTouchUp); window.removeEventListener('touchstart', this.boundOnTouchDown); window.removeEventListener('touchmove', this.boundOnTouchMove); window.removeEventListener('touchend', this.boundOnTouchUp); if (this.renderer && this.renderer.gl && this.renderer.gl.canvas.parentNode) { this.renderer.gl.canvas.parentNode.removeChild(this.renderer.gl.canvas as HTMLCanvasElement); } }
  addEventListeners() { /* ... */ this.boundOnResize = this.onResize; this.boundOnWheel = this.onWheel; this.boundOnTouchDown = this.onTouchDown; this.boundOnTouchMove = this.onTouchMove; this.boundOnTouchUp = this.onTouchUp; window.addEventListener('resize', this.boundOnResize); window.addEventListener('mousewheel', this.boundOnWheel); window.addEventListener('wheel', this.boundOnWheel); window.addEventListener('mousedown', this.boundOnTouchDown); window.addEventListener('mousemove', this.boundOnTouchMove); window.addEventListener('mouseup', this.boundOnTouchUp); window.addEventListener('touchstart', this.boundOnTouchDown); window.addEventListener('touchmove', this.boundOnTouchMove); window.addEventListener('touchend', this.boundOnTouchUp); }
}


// --- CircularGalleryProps and Component (Updated Font Default) ---
interface CircularGalleryProps { items?: ItemConfig[]; bend?: number; textColor?: string; borderRadius?: number; font?: string; scrollSpeed?: number; scrollEase?: number; }

export default function CircularGallery({
  items, bend = 3, textColor = '#ffffff', borderRadius = 0.05, 
  // UPDATED FONT: Use 800 weight and 36px size for better visual presence
  font = '800 36px Figtree', 
  scrollSpeed = 2, scrollEase = 0.05
}: CircularGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    containerRef.current.style.width = '100%'; containerRef.current.style.height = '100%';
    
    const app = new App(containerRef.current, { items, bend, textColor, borderRadius, font, scrollSpeed, scrollEase });

    return () => { app.destroy(); };
  }, [items, bend, textColor, borderRadius, font, scrollSpeed, scrollEase]);

  return <div className="circular-gallery" ref={containerRef} />;
}