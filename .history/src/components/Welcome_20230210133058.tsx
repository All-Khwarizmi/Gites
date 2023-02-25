import React from 'react'

const Welcome = () => {
  return (
    <div className=" flex w-[100%] justify-center py-5  px-5 lg:mb-10">
      <Card className="w-[100%] lg:w-[60%]">
        <Heading className="flex-column flex place-items-center justify-center p-2 text-center">
          <p> Bienvenue en Guadeloupe !</p>
        </Heading>
        <CardBody>
          <Text className="text-2xl">
            Pour des vacances au soleil, sur des plages de sable blanc ou de
            belles balades dans une verdure luxuriante : les Gîtes Mon Trésor
            vous assurent un dépaysement total. Loin des grandes structures
            touristiques, dans un jardin calme et ventilé avec piscine
            sécurisée, Catherine et Laurent, originaires de Normandie, vous
            accueillent toute l’année dans leurs gîtes situés sur la commune
            d'ANSE-BERTRAND, à 3 km des plages et de tous commerces. Nous avons
            l'énorme chance de n'avoir jamais de sargasses sur nos plages les
            plus proches. Bonne visite !
          </Text>
        </CardBody>
      </Card>
    </div>
  );
}

export default Welcome