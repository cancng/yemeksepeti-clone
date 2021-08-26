import { Skeleton, Stack } from '@chakra-ui/react';

function SkeletonLoading({ amount }: { amount: number }) {
  return (
    <Stack>
      {Array(amount)
        .fill(0)
        .map((num, i) => (
          <Skeleton key={i} height='30px' />
        ))}
    </Stack>
  );
}

export default SkeletonLoading;
