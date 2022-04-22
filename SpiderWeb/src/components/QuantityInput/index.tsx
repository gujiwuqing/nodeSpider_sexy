import React, { useRef, useState } from "react";
import { NumberInput, NumberInputHandlers, ActionIcon } from "@mantine/core";
import { Plus, Minus } from "tabler-icons-react";
import useThemeConfig from "../../hooks/useThemeConfig";

interface QuantityInputProps {
  min?: number;
  max?: number;
}

const QuantityInput = ({ min = 1, max = 500 }: QuantityInputProps) => {
  const { classes } = useThemeConfig();
  const handlers = useRef<NumberInputHandlers>();
  const [value, setValue] = useState(1);

  return (
    <div className={classes.wrapper}>
      <ActionIcon<"button">
        size={24}
        variant="transparent"
        onClick={() => handlers?.current?.decrement()}
        disabled={value === min}
        className={classes.control}
        onMouseDown={(event) => event.preventDefault()}
      >
        <Minus size={14} />
      </ActionIcon>

      <NumberInput
        variant="unstyled"
        min={min}
        max={max}
        handlersRef={handlers}
        value={value}
        onChange={(value) => setValue((value as number))}
        classNames={{ input: classes.input }}
      />

      <ActionIcon<"button">
        size={24}
        variant="transparent"
        onClick={() => handlers?.current?.increment()}
        disabled={value === max}
        className={classes.control}
        onMouseDown={(event) => event.preventDefault()}
      >
        <Plus size={14} />
      </ActionIcon>
    </div>
  );
};

export default React.memo(QuantityInput);
