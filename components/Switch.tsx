"use client";

type SwitchProps = {
  leftLabel?: string;
  rightLabel?: string;
  checked?: boolean;
  onChange?: () => void;
  size?: "sm" | "md";
};

export const Switch = ({
  leftLabel,
  rightLabel,
  checked,
  onChange,
  size = "md",
}: SwitchProps) => {
  const isSm = size === "sm";
  const track = isSm ? "w-[36px] h-[22px]" : "w-[50px] h-7";
  const thumb = isSm ? "w-[18px] h-[18px]" : "w-6 h-6";
  const translate = isSm ? "translate-x-[14px]" : "translate-x-[22px]";
  const labelText = isSm ? "text-sm font-medium" : "font-medium";

  return (
    <div className="flex justify-between">
      <div className="flex items-center">
        <input id="toggle" type="checkbox" className="hidden" />
        <label htmlFor="toggle" className="flex items-center cursor-pointer">
          {leftLabel && (
            <div
              className={`mr-[10px] ${labelText} ${checked ? "opacity-100" : "opacity-60"}`}
              onClick={onChange}
            >
              {leftLabel}
            </div>
          )}
          <div className="relative" onClick={onChange}>
            <div
              className={`block ${track} rounded-full transition duration-200 ease-in-out text-forest-900 bg-color-bg-medium`}
            />
            <div
              className={`dot absolute left-0.5 top-0.5 ${thumb} rounded-full transition duration-200 ease-in-out text-color-text-primary ${checked ? `transform ${translate} bg-[#CDD8D3]` : "bg-color-ui-hover"}`}
            />
          </div>
          {rightLabel && (
            <div
              className={`ml-[10px] ${labelText} ${checked ? "opacity-100" : "opacity-60"}`}
              onClick={onChange}
            >
              {rightLabel}
            </div>
          )}
        </label>
      </div>
    </div>
  );
};
