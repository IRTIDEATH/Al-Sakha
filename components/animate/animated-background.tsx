"use client";
import { AnimatePresence, motion, type Transition } from "motion/react";
import {
  Children,
  cloneElement,
  memo,
  type ReactElement,
  type ReactNode,
  useCallback,
  useId,
  useState,
} from "react";
import { cn } from "@/lib/utils";

type AnimatedBackgroundItemProps = {
  child: ReactElement<{
    "data-id": string;
    className?: string;
    children?: ReactNode;
    "data-checked"?: string;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onClick?: () => void;
  }>;
  isActive: boolean;
  layoutId: string;
  containerClassName?: string;
  transition?: Transition;
  hasDefault: boolean;
  enableHover: boolean;
  onActivate: (id: string) => void;
  onDeactivate: () => void;
};

const AnimatedBackgroundItem = memo(function AnimatedBackgroundItem({
  child,
  isActive,
  layoutId,
  containerClassName,
  transition,
  hasDefault,
  enableHover,
  onActivate,
  onDeactivate,
}: AnimatedBackgroundItemProps) {
  const id = child.props["data-id"];

  const interactionProps = enableHover
    ? {
        onMouseEnter: () => onActivate(id),
        onMouseLeave: () => onDeactivate(),
      }
    : {
        onClick: () => onActivate(id),
      };

  return cloneElement(
    child,
    {
      className: cn("relative inline-flex", child.props.className),
      "data-checked": isActive ? "true" : "false",
      ...interactionProps,
    },
    <>
      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            layoutId={layoutId}
            className={cn(
              "pointer-events-none absolute inset-0",
              containerClassName,
            )}
            transition={transition}
            initial={{ opacity: hasDefault ? 1 : 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
      <div className="z-10">{child.props.children}</div>
    </>,
  );
});

export type AnimatedBackgroundProps = {
  children:
    | ReactElement<{ "data-id": string }>[]
    | ReactElement<{ "data-id": string }>;
  defaultValue?: string;
  onValueChangeAction?: (newActiveId: string | null) => void;
  className?: string;
  transition?: Transition;
  enableHover?: boolean;
};

export function AnimatedBackground({
  children,
  defaultValue,
  onValueChangeAction,
  className,
  transition,
  enableHover = false,
}: AnimatedBackgroundProps) {
  const [activeId, setActiveId] = useState<string | null>(defaultValue ?? null);
  const uniqueId = useId();

  const handleActivate = useCallback(
    (id: string) => {
      setActiveId(id);
      onValueChangeAction?.(id);
    },
    [onValueChangeAction],
  );

  const handleDeactivate = useCallback(() => {
    setActiveId(null);
    onValueChangeAction?.(null);
  }, [onValueChangeAction]);

  return Children.map(children, (child, index) => {
    const id = child.props["data-id"];
    return (
      <AnimatedBackgroundItem
        key={index}
        child={child}
        isActive={activeId === id}
        layoutId={`background-${uniqueId}`}
        containerClassName={className}
        transition={transition}
        hasDefault={defaultValue !== undefined}
        enableHover={enableHover}
        onActivate={handleActivate}
        onDeactivate={handleDeactivate}
      />
    );
  });
}
