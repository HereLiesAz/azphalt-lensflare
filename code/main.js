
export function register(runtime) {
    runtime.registerGenerator('lensflare', (canvas, params) => {
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'black'; ctx.fillRect(0, 0, canvas.width, canvas.height); ctx.globalCompositeOperation = 'screen'; ctx.beginPath(); let g = ctx.createRadialGradient(canvas.width/2, canvas.height/2, 0, canvas.width/2, canvas.height/2, 200); g.addColorStop(0, 'white'); g.addColorStop(1, 'transparent'); ctx.fillStyle = g; ctx.arc(canvas.width/2, canvas.height/2, 200, 0, Math.PI*2); ctx.fill();
    });
}
