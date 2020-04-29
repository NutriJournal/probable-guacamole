import InlineSVG from 'svg-inline-react';


const svgSource = `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.62 5.65C9.62 6.28526 10.1347 6.8 10.77 6.8C11.4053 6.8 11.92 6.28526 11.92 5.65C11.92 5.01474 11.4053 4.5 10.77 4.5C10.1347 4.5 9.62 5.01474 9.62 5.65ZM9.16 15.54V16H12.84V15.54H11.92V8.64V8.18H10.08H9.16V8.64H10.08V15.54H9.16ZM11 20.5C16.2467 20.5 20.5 16.2467 20.5 11C20.5 5.75329 16.2467 1.5 11 1.5C5.75329 1.5 1.5 5.75329 1.5 11C1.5 16.2467 5.75329 20.5 11 20.5ZM11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22Z" fill="#007AFF"/>
</svg>`

const InfoSVG = () => <InlineSVG src={svgSource} />

export default InfoSVG;