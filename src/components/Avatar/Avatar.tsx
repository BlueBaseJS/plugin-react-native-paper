import { Avatar } from 'react-native-paper';
import { Avatarprops} from '@bluebase/components';
import React from "react";

const AvatarComponent = (props) => {

  if (props.type === "Icon")
    return <Avatar.Icon {...props} />

  if (props.type === "Text")
    return <Avatar.Image {...props} />


  return <Avatar.Image {...props} />
}

export { AvatarComponent as Avatar };