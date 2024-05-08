# @snskar125/rn-switch
Switch Component for React Native

## Usage
```javascript
import Switch from "@snskar125/rn-switch";
import { useState } from "react";
export default function App() {
  const [value, setValue] = useState(false);
  return (
    <Switch
      value={value}
      onPress={() => {
        setValue(!value);
      }}
    />
  );
}
```

## Props
| Prop                | Type     |
| ------------------- | -------- |
| value               | Boolean  |
| onPress             | Function |
| disabled            | Boolean  |
| animate             | Boolean  |
| size                | Number   |
| activeSwitchColor   | String   |
| inActiveSwitchColor | String   |
| activeTrackColor    | String   |
| inActiveTrackColor  | String   |
