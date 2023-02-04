import React from 'react'

const CarousselCard = () => {
  return (
    <div className="grid  grid-flow-row justify-center gap-4 md:grid-flow-col ">
      <Card maxW="lg" m={3}>
        <Stack mt="6" spacing="3">
          <Heading textAlign={"center"} size="md">
            Gîte Palmier
          </Heading>
        </Stack>
        <CardBody>
          <Carousel slides={slidesPalmier} />
        </CardBody>
        <Flex align="center" justify="center">
          <CardFooter>
            <Button variant="solid" colorScheme="blue">
              Détail
            </Button>
          </CardFooter>
        </Flex>
      </Card>
      <Card maxW="lg" m={3}>
        <Stack mt="6" spacing="3">
          <Heading textAlign={"center"} size="md">
            Gîte Ananas
          </Heading>
        </Stack>
        <CardBody>
          <Carousel slides={slidesAnanas} />
        </CardBody>
        <Flex align="center" justify="center">
          <CardFooter>
            <Button variant="solid" colorScheme="blue">
              Détail
            </Button>
          </CardFooter>
        </Flex>
      </Card>
      <Card maxW="lg" m={3}>
        <Stack mt="6" spacing="3">
          <Heading textAlign={"center"} size="md">
            Gîte Kawan
          </Heading>
        </Stack>
        <CardBody>
          <Carousel slides={slidesKawan} />
        </CardBody>
        <Flex align="center" justify="center">
          <CardFooter>
            <Button variant="solid" colorScheme="blue">
              Détail
            </Button>
          </CardFooter>
        </Flex>
      </Card>
    </div>
  );
}

export default CarousselCard