import { FC } from "react"
import {
  Button,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons"

const Connected: FC = () => {
  return (
    <VStack spacing={20}>
      <Container>
        <VStack spacing={8}>
          <Heading
            color="white"
            as="h1"
            size="2xl"
            noOfLines={2}
            textAlign="center"
          >
            Welcome Otteerr Loveeer.
          </Heading>

          <Text color="bodyText" fontSize="xl" textAlign="center">
            Each otterrr is randomly generated and can be staked to receive
            <Text as="b"> $OTTY</Text> Use your <Text as="b"> $OTTY</Text> to
            upgrade your otterrr and receive perks within the community!
          </Text>
        </VStack>
      </Container>

      <HStack spacing={10}>
        <Image src="avatar1_.png" alt="" />
        <Image src="avatar2_.png" alt="" />
        <Image src="avatar3_.png" alt="" />
        <Image src="avatar4_.png" alt="" />
        <Image src="avatar5_.png" alt="" />
      </HStack>

      <Button bgColor="accent" color="white" maxW="380px">
        <HStack>
          <Text>mint otteeer</Text>
          <ArrowForwardIcon />
        </HStack>
      </Button>
    </VStack>
  )
}

export default Connected