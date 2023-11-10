(()=>{
	class Wave extends HTMLElement {
		static get observedAttributes() {
			return ['colour'];
		}
		constructor(){
			super()
			this.attachShadow({mode: 'open'});
			this.render();
		}
	
		render(){
			const colour = this.hasAttribute('colour')?
				this.getAttribute('colour'):
				'#000000';
			this.shadowRoot.innerHTML = html`
<svg
	style="margin: 0; padding: 0; margin-bottom: -12px; width: 100%"
	viewBox="0 0 1440 54"
	version="1.1"
	width="1440"
	height="54"
	xmlns="http://www.w3.org/2000/svg"
	xmlns:svg="http://www.w3.org/2000/svg">
	<path
		fill="#0099ff"
		fill-opacity="1"
		d="m 0,0 48,6.08264 c 48,6.08265 144,18.24794 240,19.25537 96,1.08348 192,-9.18099 288,-8.09752 96,1.00744 192,13.17273 288,19.25538 96,6.08264 192,6.08264 288,0 96,-6.08265 192,-18.24794 240,-24.33058 l 48,-6.08265 V 54.7438 h -48 c -48,0 -144,0 -240,0 -96,0 -192,0 -288,0 -96,0 -192,0 -288,0 -96,0 -192,0 -288,0 -96,0 -192,0 -240,0 H 0 Z"
		style="stroke-width:0.435985;fill:${colour}" />
</svg>`;
		}
	}

	window.customElements.define('svg-wave', Wave);
	// Technically does nothing, but triggers lit-plugin for vscode to treat template literal string as html code.
	const html=(strArr, ...args)=>strArr.reduce((str,next,i)=>str+args[i-1]+next);
})();