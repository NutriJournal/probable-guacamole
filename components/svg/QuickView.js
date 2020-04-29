import InlineSVG from 'svg-inline-react';

const svgSource = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="15" height="15" fill="white" stroke="#D9D9D9"/>
<path d="M7.64844 3.78125H8.35156C8.41406 3.78125 8.44531 3.8125 8.44531 3.875V12.125C8.44531 12.1875 8.41406 12.2188 8.35156 12.2188H7.64844C7.58594 12.2188 7.55469 12.1875 7.55469 12.125V3.875C7.55469 3.8125 7.58594 3.78125 7.64844 3.78125Z" fill="#595959"/>
<path d="M4.0625 7.55469H11.9375C12 7.55469 12.0312 7.58594 12.0312 7.64844V8.35156C12.0312 8.41406 12 8.44531 11.9375 8.44531H4.0625C4 8.44531 3.96875 8.41406 3.96875 8.35156V7.64844C3.96875 7.58594 4 7.55469 4.0625 7.55469Z" fill="#595959"/>
</svg>`

const QuickViewSVG = () => <InlineSVG src={svgSource} />
export default QuickViewSVG;
