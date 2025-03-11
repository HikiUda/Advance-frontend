import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;
/*
 *Component is deprecated. Find new in redisigned folder
 *@deprecated
 */
export const HStack = (props: HStackProps) => <Flex direction="row" {...props} />;
