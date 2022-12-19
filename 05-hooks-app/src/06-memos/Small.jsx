import { memo } from "react";

export const Small = memo(({counter}) => {
    console.log('Redibuixat');
    return (
      <small>{ counter }</small>
    )
})