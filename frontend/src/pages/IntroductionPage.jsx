import { Text } from "grommet";
import { CenteredContainer, CenterBox } from "styles/styles";
import styled from "styled-components";


const StyledText = styled(Text)`
  margin: 10px;
`
 
const IntroductionPage = () => {

  return (
    <CenteredContainer>
      <CenterBox >
        <StyledText size="24px"> 
        Tervetuloa Keijon Nopeisiin, herkullisten ja pikaruokareseptien kotiisi! 
        </StyledText>

        <StyledText  >
        Me Keijon Nopeilla uskomme, että terveellisten ja maukkaiden aterioiden nauttiminen ei vaadi tunteja keittiössä.
        Siksi olemme koonneet kokoelman nopeita ja helppoja reseptejä, jotka sopivat täydellisesti kiireisille henkilöille ja perheille.
        Verkkosivustomme on omistettu ruoanlaittoprosessin yksinkertaistamiseksi varmistaen samalla, että jokainen ruokalaji on täynnä makua ja tyytyväisyyttä.
        Olitpa kokenut kotikokki tai vasta aloittamassa kulinaarista matkaasi, Keijon Nopeet tarjoaa sinulle alustan, jossa voit tutkia, luoda ja jakaa suussa sulavia reseptejä helposti.
        </StyledText>

        <StyledText>
        Mutta Keijon Nopeet on enemmän kuin pelkkä reseptivarasto – se on yhteisö ruokaharrastajista, jotka jakavat intohimo hyvään ruokaan ja kulinaarisiin kokeiluihin. 
        </StyledText>

        <StyledText>
        Liity kasvavaan yhteisöömme, luo tili ja ala lisätä suosikkireseptejäsi jaettavaksi muiden kanssa.
        Etsitpä sitten nopeaa arki-illallisideaa, suunnittelet erityistä ateriaa läheisillesi tai etsit vain kulinaarista inspiraatiota, 
        täältä löydät reseptisi. 
        </StyledText>
        
        <StyledText>
        Valmistaudu herkulliselle matkalle Keijon Nopeiden kanssa – jossa nopeat reseptit kohtaavat hyvän maun!
        </StyledText>

      </CenterBox>
    </CenteredContainer >
  )
}

export default IntroductionPage