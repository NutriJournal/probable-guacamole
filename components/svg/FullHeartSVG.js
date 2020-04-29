import InlineSVG from "svg-inline-react";

const svgSource = `<svg
  width="22"
  height="20"
  viewBox="0 0 22 20"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M10.63 19.64C30.6745 6.33413 17.466 -4.43868 10.63 2.85809C3.79405 -4.43868 -9.41447 6.33413 10.63 19.64Z"
    fill="#B10505"
  />
</svg>`

const FullHeartSVG = () => <InlineSVG src={svgSource} />;

export default FullHeartSVG;
