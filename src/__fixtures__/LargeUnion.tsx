import * as React from "react";

interface LargeUnionProps {
  /**
   * HTML attribute type.
   */
  as: keyof JSX.IntrinsicElements;
}

/**
 * This is a component to test large union types.
 */
const LargeUnion: React.SFC<LargeUnionProps> = props => {
  const Tag = props.as;
  return <Tag>Lorem Ipsum</Tag>;
};

export default LargeUnion;
