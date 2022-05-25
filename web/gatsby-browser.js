import { Provider } from "./src/context/store";
import React from "react";
import "./src/styles/fonts.scss";
import "./src/styles/base.scss";
import "./src/styles/typography.scss";
import "./src/styles/layout.scss";
import "./src/styles/animations.scss";

export const wrapRootElement = ({ element }) => <Provider>{element}</Provider>;
