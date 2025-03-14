import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;
/*
 *Component is deprecated. Find new in redisigned folder
 *@deprecated
 */
export const VStack = (props: VStackProps) => {
    const { align = 'start' } = props;
    return <Flex direction="column" {...props} align={align} />;
};
