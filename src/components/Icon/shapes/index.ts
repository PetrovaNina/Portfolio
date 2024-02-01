/* eslint-disable camelcase */
import { telegram } from "./social/telegram";
import { email } from "./social/email";
import { github } from "./social/github";
import { linkedin } from "./social/linkedin";
import { arrow } from "./arrow";
import { notFound } from "./notFound";



export interface IconShape {
  viewBox?: string | undefined;
  shape: JSX.Element;
}

const shapes: { [key: string]: IconShape } = {
  ...arrow,
  ...telegram,
  ...email,
  ...github,
  ...linkedin,
  notFound,
};

export default shapes;