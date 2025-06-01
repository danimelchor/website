import {
  COLOR_TO_LIGHT_BG,
  COLOR_TO_RING_COLOR,
  COLOR_TO_TEXT_COLOR,
} from "apps/colors";
import classNames from "classnames";

function Badge({ text, color }: { text: string; color: string }) {
  return (
    <span
      className={classNames(
        "inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset mt-4",
        COLOR_TO_RING_COLOR[color],
        COLOR_TO_TEXT_COLOR[color],
        COLOR_TO_LIGHT_BG[color],
      )}
    >
      {text}
    </span>
  );
}

export default Badge;
