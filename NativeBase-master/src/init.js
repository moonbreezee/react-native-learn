import { Theme } from "native-base-shoutem-theme";
// 组件的基本结构配置
import getThemeStyle from "./theme/components";

// 设置默认的主题，样式配置
export default function setDefaultThemeStyle() {
  const theme = getThemeStyle();
  Theme.setDefaultThemeStyle(theme);
}
